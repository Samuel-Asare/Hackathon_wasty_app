

import { Link } from "react-router-dom";
import "../../css/Review_Page.css";

const MainReviewPage = () => {
 
  return (
    <div className="review_wrapper">
      <div className="inner_wrapper">
        <div className="header">
          <h4>Request Information</h4>
        </div>
        <div className="details">
          <div className="data">
            <h6>Name:</h6>
            <p></p>
          </div>
          <div className="data">
            <h6>Location:</h6>
            <p></p>
          </div>
          <div className="data">
            <h6>Landmark:</h6>
            <p>Market</p>
          </div>
          <div className="data">
            <h6>Date and Time:</h6>
            <p>01/03/2015 5:00pm</p>
          </div>
          <div className="data">
            <h6>Waste Type:</h6>
            <p>Plastic</p>
          </div>
          <div className="data">
            <h6>Number Of Bins:</h6>
            <p>2</p>
          </div>
          <div className="data">
            <h6>Service Option:</h6>
            <p>Regular Picker</p>
          </div>

          <div className="btn_request">
            <button className="back_btn btn">Back</button>
            <Link to="/colpleted">
              <button className="reg_btn btn">Request Service</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainReviewPage;
