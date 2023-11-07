import "../../../css/Login.css";
import { Link } from "react-router-dom";
import SignupIllustrator from "../../../assets/Auth_Images/signupLogin_Image.svg";

const Login = () => {
  return (
    <div className="login_wrapper">
      <div className="inputs_feild_container">
        <h5 className="headerLine_text">Access your account</h5>
        <div className="inputs_content">
          {/* google signup */}
          <div className="btn">
            <button className="google">SVG Login up with Google</button>
          </div>
          {/* or.... */}
          <p className="divider_or">Or</p>
          {/* form field */}
          <form>
            <fieldset className="form_fieldset">
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
            </fieldset>

            <button type="submit" className="submit_btn">
              Login
            </button>
          </form>
          {/* alternative step */}
          <div className="alternative_step">
            <p>Did you forget your password?</p>
            <Link>Reset Password</Link>
          </div>

          {/* login Btn */}

          <Link className="signup_btn" to="/signup">
            {" "}
            Sign Up{" "}
          </Link>
        </div>
      </div>

      <div className="illustrator">
        <img src={SignupIllustrator} alt="Signup Illustrator" />
      </div>
    </div>
  );
};

export default Login;
