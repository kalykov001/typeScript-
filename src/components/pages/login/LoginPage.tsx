import { useState } from "react";
import scss from "./login.module.scss";
import { FaEye } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { useAuthContext } from "../../../context/AuthContext";
import { Link } from "react-router-dom";
const LoginPage = () => {
  const { login } = useAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isActiveEye, setIsActiveEye] = useState(false);
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.loginInp}>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="text"
              placeholder="Email"
            />
            <div className={scss.positions}>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={isActiveEye ? "text" : "password"}
                placeholder="Password"
              />
              <span
                onClick={() => setIsActiveEye(!isActiveEye)}
                className={scss.eye}
              >
                {!isActiveEye ? <FaEye /> : <IoMdEyeOff />}
              </span>
            </div>
            <button onClick={() => login(email, password)}>Log in</button>
            <p>
              Если нет аккаунт <Link to="/register">Регистрация</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
