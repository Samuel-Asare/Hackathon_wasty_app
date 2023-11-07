import "../../../css/Signup.css";
import { Link } from "react-router-dom";
import SignupIllustrator from "../../../assets/Auth_Images/signupLogin_Image.svg";

const SignUp = () => {
  return (
    <div className="signup_wrapper">
      <div className="inputs_feild_container">
        <h5 className="headerLine_text">Create your account</h5>
        <div className="inputs_content">
          {/* google signup */}
          <div className="btn">
            <button className="google">SVG Sign up with Google</button>
          </div>
          {/* or.... */}
          <p className="divider_or">Or</p>
          {/* form field */}
          <form>
            <fieldset className="form_fieldset">
              <div className="input">
                <label htmlFor="full_name">Full Name:</label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  placeholder="Your Name"
                />
              </div>
              <div className="input">
                <label htmlFor="full_name">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                />
              </div>

              <div className="input">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                />
              </div>

              <div className="input">
                <label htmlFor="password">Confirm Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Confirm your Password"
                />
              </div>
            </fieldset>

            <button type="submit" className="submit_btn">
              Sign Up
            </button>
          </form>

          {/* login Btn */}

          <Link className="login_btn" to="/login">
            Login{" "}
          </Link>
        </div>
      </div>

      <div className="illustrator">
        <img src={SignupIllustrator} alt="Signup Illustrator" />
      </div>
    </div>
  );
};

export default SignUp;
