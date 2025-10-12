import { CiSearch } from "react-icons/ci";
import scss from "./header.module.scss";
import { RiShoppingBag4Line } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { CiMenuBurger } from "react-icons/ci";
import { MdAdminPanelSettings } from "react-icons/md";
import { useAuthContext } from "../../../context/AuthContext";
import { useState } from "react";
import { LuSunMoon } from "react-icons/lu";

const Header = () => {
  const { user, logOut } = useAuthContext();
  const [isModal, setIsModal] = useState(false);
  const [isBlack, setIsBlack] = useState(false);
  console.log(isBlack);

  return (
    <header
    
      className={scss.container}
    >
      <div className="container">
        <div className={scss.mainContainer}>
          <NavLink to="/">
            <img
              className={scss.headerLogo}
              src="https://theme-spotlight-demo.myshopify.com/cdn/shop/files/logo40.png?v=1677092556&width=500"
              alt=""
            />
          </NavLink>
          <nav>
            <span className={scss.search}>
              <CiSearch />
            </span>
            <NavLink to="/cart">
              <span className={scss.shop}>
                <RiShoppingBag4Line />
              </span>
            </NavLink>
            <NavLink to="/admin">
              <span>
                <MdAdminPanelSettings />
              </span>
            </NavLink>
            <span className={scss.menuBurger}>
              <CiMenuBurger />
            </span>
            {!user && (
              <NavLink to="/register">
                <button>Log in</button>
              </NavLink>
            )}

            {user && (
              <div
                onClick={() => setIsModal(!isModal)}
                className={scss.userInfo}
              >
                <img src={user?.photoURL} alt="" />
                <div className={scss.userTitle}>
                  <p>{user?.displayName}</p>
                  <p>{user?.email}</p>
                </div>
              </div>
            )}
            {isModal && (
              <div className={scss.ModalUser}>
                <p
                  onClick={() => {
                    logOut();
                    setIsModal(false);
                  }}
                >
                  Log Out
                </p>
                <p>Delete Account</p>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
