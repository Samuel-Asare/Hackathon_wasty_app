import "../../css/CompleteedRequest.css";
import celebration from "../../assets/Request_Images/Celebration.svg";

const CompletedRequest = () => {
  return (
    <div className="completedRequest_wrapper">
      <div className="inner_wrapper">
        <div className="header">
          <svg
            width="46"
            height="46"
            fill="#249b03"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.136 2.25c-5.484-.073-9.96 4.403-9.886 9.887.073 5.259 4.355 9.54 9.614 9.614 5.484.075 9.96-4.402 9.885-9.885-.072-5.26-4.354-9.542-9.613-9.615Zm-.787 9.023 2.416-2.766a.75.75 0 0 1 1.13.988l-2.416 2.765a.749.749 0 1 1-1.13-.987ZM9.527 15.53a.75.75 0 0 1-1.06 0l-2.248-2.25a.75.75 0 0 1 1.062-1.06l2.25 2.25a.75.75 0 0 1-.004 1.06Zm8.288-6.037-5.245 6a.75.75 0 0 1-.54.257h-.024a.75.75 0 0 1-.531-.22l-2.247-2.25a.75.75 0 0 1 1.061-1.06l1.397 1.398a.375.375 0 0 0 .547-.018l4.453-5.094a.75.75 0 0 1 1.13.988h-.001Z"></path>
          </svg>
          <div className="text">
            <h6>Thank You</h6>
            <h6>Your request has been recieved</h6>
          </div>
        </div>
        <main>
          <img src={celebration} alt="celebration illustrator" />
        </main>
      </div>
    </div>
  );
};

export default CompletedRequest;
