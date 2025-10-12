import scss from "./contactPage.module.scss";
const ContactPage = () => {
  return (
    <div className={scss.container}>
      <div className="container">
        <div className={scss.mainContainer}>
          <div className={scss.contact}>
            <h3>Contact</h3>
            <input type="text" placeholder="Email or mobile phone number" />
            <div className={scss.check}>
              <input type="checkbox" />
              <p> Email me with news and offers</p>
            </div>
          </div>
          <div className={scss.contactProduct}></div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
