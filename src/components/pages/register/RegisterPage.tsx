import { Link } from "react-router-dom";
import scss from "./registerPage.module.scss";
import { useForm } from "react-hook-form";
import { useAuthContext } from "../../../context/AuthContext";
import { FaGoogle } from "react-icons/fa";
interface IDataChange {
  email: string;
  password: string;
  name: string;
  avatar: string;
}
const RegisterPage = () => {
  const { handleSubmit, register, reset } = useForm<IDataChange>();
  const { createAccount, createAccountWithGoogle } = useAuthContext();
  const dataChange = ({ name, email, password, avatar }: IDataChange) => {
    createAccount(email, password, name, avatar);
    console.log(email, password, name, avatar);

    reset();
  };
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <form onSubmit={handleSubmit(dataChange)} className={scss.register}>
            <input
              {...register("email", {
                required: "obezatelno",
              })}
              type="text"
              placeholder="Email"
            />
            <input
              {...register("password", {
                required: "obezatelno",
              })}
              type="text"
              placeholder="password"
            />
            <input
              {...register("name", {
                required: "obezatelno",
              })}
              type="text"
              placeholder="name"
            />
            <input
              {...register("avatar", {
                required: "obezatelno",
              })}
              type="text"
              placeholder="avatar"
            />
            <div className={scss.btns}>
              <button type="submit">Sign up</button>
              <button
                style={{ display: "flex", alignItems: " center", gap: "10px" }}
                onClick={() => createAccountWithGoogle()}
              >
                Log in Google <FaGoogle />
              </button>
            </div>
            <p>
              Если аккаунт уже есть <Link to="/login">Войти</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
