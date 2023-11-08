import PropTypes from "prop-types";
import "../../../css/NotFound.css";

const NotFound = (props) => {
  const { errorMessage } = props;
  return (
    <div className="not_found_wrapper">
      <div className="inner_wrapper">
        <svg
          width="46"
          height="46"
          fill="none"
          stroke="#249b03"
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#249b03"
            stroke="none"
            d="M8.625 12a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
          ></path>
          <path
            fill="#249b03"
            stroke="none"
            d="M12 13.5c2.13 0 3.92 1.384 4.487 3.273a.376.376 0 0 1-.369.477H7.883a.375.375 0 0 1-.367-.477c.562-1.889 2.353-3.273 4.485-3.273Z"
          ></path>
          <path
            fill="#249b03"
            stroke="none"
            d="M15.375 12a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z"
          ></path>
          <path d="M12 21.75c5.385 0 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25 2.25 6.615 2.25 12s4.365 9.75 9.75 9.75Z"></path>
        </svg>
        <h4>404 Not Found</h4>
        <p>{errorMessage}</p>
      </div>
    </div>
  );
};

NotFound.propTypes = {
  errorMessage: PropTypes.string.isRequired, // You can change 'string' to the appropriate data type if needed
};

export default NotFound;
