import "../../../css/Login.css";
import { Link, useNavigate } from "react-router-dom";
import SignupIllustrator from "../../../assets/Auth_Images/signupLogin_Image.svg";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Context/AuthContext/AuthContext";
import axios from "axios";

const Login = () => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const { dispatch } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      dispatch({ type: "LOGIN_START" });
      const res = await axios.post(
        " https://hackathon-waste-api.onrender.com/api/v1/auth/login",
        {
          email,
          password,
          appType: "app1",
        }
      );
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      res.data && navigate("/");
    } catch (error) {
      dispatch({ type: "LOGIN_FAILURE" });
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };
  return (
    <div className="login_wrapper">
      <div className="inputs_feild_container">
        <h5 className="headerLine_text">Access your account</h5>
        <div className="inputs_content">
          <form onSubmit={handleLogin}>
            <fieldset className="form_fieldset">
              <div className="input">
                <label htmlFor="full_name">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="input">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Your Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </fieldset>

            <button type="submit" className="submit_btn">
              Login
            </button>
          </form>
          {error && <span style={{ color: "red" }}>{error}</span>}

          <div className="alternative_step">
            <p>Did you forget your password?</p>
            <Link to="/forgot-password">Reset Password</Link>
          </div>

          {/* login Btn */}

          <Link className="signup_btn" to="/signup">
            Sign Up
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
