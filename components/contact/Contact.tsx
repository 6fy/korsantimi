import style from "./Contact.module.css";
const Contact = () => {
  return (
    <div className={style.container}>
      <h1>Lorem Ipsum</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.{" "}
      </p>
      <div className={style.contactContainer}>
        <div className={style.contactLeftSide}>
          <h1>Stay in the loop</h1>
          <p>
            Subscribe to receive the latest news and updates about TDA. We
            promise not to spam you!{" "}
          </p>
        </div>
        <div className={style.contactRightSide}>
          <div className={style.inputContainer}>
            <input type="text" placeholder="Enter email address" />
            <button>Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
