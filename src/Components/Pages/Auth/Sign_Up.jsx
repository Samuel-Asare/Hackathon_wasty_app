import "../../../css/Signup.css";
import { Link, useNavigate } from "react-router-dom";
import SignupIllustrator from "../../../assets/Auth_Images/signupLogin_Image.svg";
import { useState } from "react";
import axios from "axios"

const SignUp = () => {
  const [username,setUsername]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [confirmPassword,setConfirmPassword]=useState("")
  const [error, setError] = useState("");
  const [msg, setMsg] = useState("");
  


  const handleRegistration = async (e) => {
    e.preventDefault();

    try {
      if(password !== confirmPassword){
        alert("Passwords do not match")
        return;
      }
      const res = await axios.post(
        "https://hackathon-waste-api.onrender.com/api/v1/auth/register",
        {
          username,
          email,
          password,
          appType:"app1"
        }
      );
      setMsg(res.data.message);
      console.log(res);
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
      console.log(error)
    }
  };
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
          <form onSubmit={handleRegistration}>
            <fieldset className="form_fieldset">
              <div className="input">
                <label htmlFor="full_name">Full Name:</label>
                <input
                  type="text"
                  name="full_name"
                  id="full_name"
                  placeholder="Your Name"
                  onChange={(e)=>setUsername(e.target.value)}
                />
              </div>
              <div className="input">
                <label htmlFor="full_name">Email:</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your Email"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>

              <div className="input">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  name="password"
                  // id="password"
                  placeholder="Your Password"
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </div>

              <div className="input">
                <label htmlFor="password">Confirm Password:</label>
                <input
                  type="password"
                  name="password"
                  // id="password"
                  placeholder="Confirm your Password"
                  onChange={(e)=>setConfirmPassword(e.target.value)}
                />
              </div>
            </fieldset>

            <button type="submit" className="submit_btn">
              Sign Up
            </button>
          </form>
          {error && <span style={{ color: "red" }}>{error}</span>}
          {msg && <span style={{ color: "red" }}>{msg}</span>}

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
