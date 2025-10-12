import scss from "./footer.module.scss";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { LiaCcMastercard } from "react-icons/lia";
import { SiAmericanexpress } from "react-icons/si";
import { FaCcPaypal } from "react-icons/fa";
import { FaCcDinersClub } from "react-icons/fa";
import { FaCcDiscover } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <img
            src="https://theme-spotlight-demo.myshopify.com/cdn/shop/files/logo-small.png?v=1677089352&width=1100"
            alt=""
          />
          <p>
            A brand that strives to inspire and push creative culture forward.
          </p>
          <p>
            {" "}
            We approach our work with the mentality that every product made is a
            learning experience to improve our craft. We are practitioners and
            purveyors of creative culture and are inspired by its various forms
            from art, design, fashion, music, film, food, and more.
          </p>
          <div className={scss.icons}>
            <span>
              <FaFacebook />
            </span>
            <span>
              <FaInstagram />
            </span>
            <span>
              <FaYoutube />
            </span>
            <span>
              <FaTiktok />
            </span>
            <span>
              <FaTwitter />
            </span>
          </div>
        </div>
        <hr />
        <div className={scss.footerBottom}>
            <div className={scss.footerLeft}>
            <p>Country/region</p>
            <button>Canada (CAD$)</button>
<p>© 2025, theme-spotlight-demo Powered by Shopify</p>
            </div>
            <div className={scss.footerRight}>
<span><FaCcVisa/></span>
<span><LiaCcMastercard/></span>
<span><SiAmericanexpress/></span>
<span><FaCcPaypal/></span>
<span><FaCcDinersClub/></span>
<span><FaCcDiscover/></span>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
