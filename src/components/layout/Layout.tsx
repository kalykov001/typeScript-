import { useState } from "react";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import scss from "./layout.module.scss"
import { WiMoonAltWaningCrescent6 } from "react-icons/wi";
import { WiMoonAltWaningGibbous2 } from "react-icons/wi";
import { FaMoon } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";

type ChildrenProps = {
    children: React.ReactNode;
}
const Layout = ({children }: ChildrenProps) => {
    const [isBlack , setIsBlack] = useState(false)
    return (
        <div   style={{
                background: !isBlack ? "white" : "black",
                color: !isBlack ? "black" : "white",
                border: !isBlack ? "1px solid black" : "1px solid",
                transition: "0.6s",
              }}  className={scss.container}>
              <span className={scss.moonSun} onClick={() => setIsBlack(!isBlack)}>
                        {
                            !isBlack ? <FaRegMoon/> : <FaMoon/>
                        } 
                       </span>
            <Header/>
            <main className={scss.mainContainer}>{children}</main>
            <Footer />
        </div>
    );
};

export default Layout;