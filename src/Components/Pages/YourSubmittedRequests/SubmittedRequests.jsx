import "../../../css/SubmittedRequest.css";

const SubmittedRequests = () => {
  return (
    <div className="submitted_wrapper">
      <div className="inner_wrapper">
        <div className="header">
          <h4>Your recent request</h4>
        </div>
        <div className="details">
          <div className="data">
            <h6>Name:</h6>
            <p>Sam</p>
          </div>
          <div className="data">
            <h6>Location:</h6>
            <p>Accra</p>
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
        </div>
      </div>
    </div>
  );
};

export default SubmittedRequests;
