import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useContext, useEffect, useReducer } from "react";
import { auth } from "../constants/register";
import { GoogleAuthProvider } from "firebase/auth/web-extension";
interface IState {
  user: IUser | null;
}
interface IUser {
  displayName: string | null;
  photoURL: string  | null;
  email: string | null;
  role?: "admin" | "user";
}
const initialState: IState = {
  user: null,
};
const reducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
const authContext = createContext<any>();
export const useAuthContext = () => useContext(authContext);
const AuthContext = ({ children }) => {
  const googlePrivider = new GoogleAuthProvider();
  const [state, dispatch] = useReducer(reducer, initialState);
  const createAccount = async (email, password, name, avatar) => {
    let { user } = await createUserWithEmailAndPassword(auth, email, password);
    await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: avatar,
    });
  };
  useEffect(() => {
    const sub = onAuthStateChanged(auth, async (firebaseUser) => {
      dispatch({
        type: "USER",
        payload: firebaseUser,
      });
    });
    return () => sub();
  }, []);
  const logOut = async () => {
    await signOut(auth);
  };

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };
  const createAccountWithGoogle = async () => {
    await signInWithPopup(auth, googlePrivider);
  };
  const values = {
    createAccount,
    user: state.user,
    logOut,
    createAccountWithGoogle,
    login,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContext;
