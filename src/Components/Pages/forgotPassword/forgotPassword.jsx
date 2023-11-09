import "../../../css/ForgetPassword.css";

import { useState } from "react";

import axios from "axios";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const [error, setError] = useState("");
    const [msg, setMsg] = useState("");
    const [email, setEmail] = useState();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post(
                "https://hackathon-waste-api.onrender.com/api/v1/auth/password-reset",
                { email }
            );
            console.log(res.data);
            setMsg(res.data.message);
        } catch (error) {
            console.log(error);
            if (
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setError(error.response.data.message);
                setMsg("");
            }
        }
    };

    return (
        <div className="forget_password_wrapper ">
            <div className="inner_wrapper">
                <div className="header_text">
                    <h1>Forgot Password</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email for password reset"
                        className="input"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <div className="alternative_links">
                        <Link to="/signup">Sign Up</Link>
                        <Link to="/login">Log In</Link>
                    </div>

                    <button type="submit" className="btn_submit">
                        Submit
                    </button>
                    {error && <span style={{ color: "red" }}>{error}</span>}
                    {msg && <span style={{ color: "red" }}>{msg}</span>}
                </form>
            </div>
        </div>
    );
};

export default ForgotPassword;
