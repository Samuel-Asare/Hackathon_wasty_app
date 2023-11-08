import { Link } from "react-router-dom";
import "../../css/Review_Page.css";
import { useFormData } from "../../Context/RequestContext";
import axios from "axios";

const MainReviewPage = () => {
  const { formData } = useFormData();

  const handleSendRequest = async () => {
    const requestData = {
      username: formData.username,
      location: formData.location,
      landmark: formData.landmark,
      telephone: formData.telephone,
      date: formData.date,
      wasteType: formData.wasteType,
      numberOfBins: formData.numberOfBins,
      serviceOption: formData.serviceOption,
    };

    try {
      await axios.post(
        "https://hackathon-waste-api.onrender.com/api/v1/waste-request/add",
        requestData,
        {
          headers: {
            token:
              "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
          },
        }
      );
    } catch (error) {
      console.log(error);
    }
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
            <p>{formData.username}</p>
          </div>
          <div className="data">
            <h6>Location:</h6>
            <p>{formData.location}</p>
          </div>
          <div className="data">
            <h6>Landmark:</h6>
            <p>{formData.landmark}</p>
          </div>
          <div className="data">
            <h6>Date and Time:</h6>
            <p>{formData.date}</p>
          </div>
          <div className="data">
            <h6>Telephone:</h6>
            <p>{formData.telephone}</p>
          </div>
          <div className="data">
            <h6>Waste Type:</h6>
            <p>{formData.wasteType}</p>
          </div>
          <div className="data">
            <h6>Number Of Bins:</h6>
            <p>{formData.numberOfBins}</p>
          </div>
          <div className="data">
            <h6>Service Option:</h6>
            <p>{formData.serviceOption}</p>
          </div>

          <div className="btn_request">
            <button className="back_btn btn">Back</button>

            <Link to="/completed">
              <button className="reg_btn btn" onClick={handleSendRequest}>
                Request Service
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainReviewPage;
