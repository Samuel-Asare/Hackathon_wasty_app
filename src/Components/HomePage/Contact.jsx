import "../../css/Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const Contact = () => {
  const form = useRef();
  const [emailMessage, setEmailMessage] = useState("");
  const [emailField, setEmailField] = useState("");
  const [messageField, setMessageField] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k17zfie",
        "template_agcuwd7",
        form.current,
        "zc4C15jZ_8GwSsoK1"
      )
      .then(
        (result) => {
          result;
          setEmailMessage("Email Sent Successfully");

          setEmailField("");
          setMessageField("");
        },
        (error) => {
          error.text;
          setEmailMessage("Something Went Wrong");
        }
      );
  };

  setTimeout(() => {
    setEmailMessage("");
  }, 2000);

  return (
    <div className="contact_wrapper">
      <div className="inner_wrapper">
        <div className="header">
          <h4>Contact Us</h4>
        </div>
        <div className="input_field">
          <form ref={form} onSubmit={sendEmail}>
            <div className="input">
              <input
                type="email"
                name="user_email"
                placeholder="Your Feedback Email"
                value={emailField}
                onChange={(e) => setEmailField(e.target.value)}
              />
              <input
                type="text"
                name="message"
                placeholder="Send Us Your Concerns"
                value={messageField}
                onChange={(e) => setMessageField(e.target.value)}
              />

              <div className="btn_wrapper">
                <button>Submit</button>
              </div>
            </div>
          </form>
          <p style={{ color: "white" }}>{emailMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
