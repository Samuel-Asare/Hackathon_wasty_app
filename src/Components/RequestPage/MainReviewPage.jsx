import { useNavigate } from "react-router-dom";
import "../../css/Review_Page.css";
import { useUserInput } from "../../Context/RequestContext";
import axios from "axios";
import { useState } from "react";

const MainReviewPage = () => {
  const { state, dispatch } = useUserInput();
  const navigate = useNavigate();
  const [error, setError] = useState(false);

  const handleSendRequest = async () => {
    const requestData = {
      username: state.username,
      location: state.location,
      landmark: state.landmark,
      telephone: state.telephone,
      date: state.dateTime,
      wasteType: state.wasteType,
      numberOfBins: state.numberOfBins,
      serviceOption: state.serviceOption,
    };

    try {
      const res = await axios.post(
        "https://hackathon-waste-api.onrender.com/api/v1/waste-request/add",
        requestData,
        {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
      res.data && navigate("/completed");
    } catch (error) {
      setError(true);
    }

    dispatch({ type: "RESET" });
  };

  return (
    <div className="review_wrapper">
      <div className="inner_wrapper">
        <div className="header">
          <h4>Request Information</h4>
        </div>
        <div className="details">
          <div className="data">
            <h6>Name:</h6>
            <p>{state.username}</p>
          </div>
          <div className="data">
            <h6>Location:</h6>
            <p>{state.location}</p>
          </div>
          <div className="data">
            <h6>Landmark:</h6>
            <p>{state.landmark}</p>
          </div>
          <div className="data">
            <h6>Date and Time:</h6>
            <p>{state.datee}</p>
          </div>
          <div className="data">
            <h6>Telephone:</h6>
            <p>{state.telephone}</p>
          </div>
          <div className="data">
            <h6>Waste Type:</h6>
            <p>{state.wasteType}</p>
          </div>
          <div className="data">
            <h6>Number Of Bins:</h6>
            <p>{state.numberOfBins}</p>
          </div>
          <div className="data">
            <h6>Service Option:</h6>
            <p>{state.serviceOption}</p>
          </div>
          <div className="btn_request">
            <button className="reg_btn btn" onClick={handleSendRequest}>
              Request Service
            </button>
          </div>
          {error && (
            <p
              style={{ color: "red", textAlign: "center", fontSize: "0.9rem" }}
            >
              Something Went Wrong
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainReviewPage;
