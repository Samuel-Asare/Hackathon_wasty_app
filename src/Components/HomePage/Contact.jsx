import "../../css/Contact.css";

const Contact = () => {
  return (
    <div className="contact_wrapper">
      <div className="inner_wrapper">
        <div className="header">
          <h4>Contact Us</h4>
        </div>
        <div className="input_field">
          <div className="input">
            <input
              type="text"
              name="contactUs"
              placeholder="Send Us Your Concerns"
            />
            <svg
              width="26"
              height="26"
              fill="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className="plane_svg"
            >
              <path d="m23.25.75-22.506 9 8.396 3.797L21 3 10.453 14.86l3.797 8.39 9-22.5Z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
