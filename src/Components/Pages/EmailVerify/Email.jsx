import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../../css/EmailVeried.css";
import NotFound from "../404/NotFound";

const Email = () => {
  const [validUrl, setValidUrl] = useState(true);
  const [error, setError] = useState("");
  const param = useParams();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = ` https://hackathon-waste-api.onrender.com/api/v1/auth/${param.id}/verify/${param.token}`;
        await axios.get(url);

        setValidUrl(true);
      } catch (error) {
        console.log(`the error is ${error}`);
        setError(error.response.data.message);
        setValidUrl(false);
      }
    };
    verifyEmailUrl();
  }, [param]);
  return (
    <div className="email_wrapper">
      {validUrl ? (
        <div className="verified">
          <img
            src="data:image/jpeg;base64,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"
            alt="thumbs up image"
          />
          <h4>Email verified successfully</h4>
          <Link to="/login">
            <button className="login_btn">Login</button>
          </Link>
        </div>
      ) : (
        <>
          <NotFound errorMessage={error} />
        </>
      )}
    </div>
  );
};

export default Email;
