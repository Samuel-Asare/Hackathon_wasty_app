import { Link } from "react-router-dom";
import "../../css/Request_Page.css";

// import { useFormData } from "../../Context/RequestContext";
import { useUserInput } from "../../Context/RequestContext";
import { useState } from "react";

const RequestPage = () => {
  // const { formData, dispatch } = useFormData();
  const { state, dispatch } = useUserInput();

  // telephone......................................

  const [valid, setValid] = useState(true);

  const handleUsername = (e) => {
    dispatch({ type: "USERNAME", payload: e.target.value });
  };

  const handleLocation = (e) => {
    dispatch({ type: "LOCATION", payload: e.target.value });
  };

  const handleLandmark = (e) => {
    dispatch({ type: "LANDMARK", payload: e.target.value });
  };

  const handleDateTime = (e) => {
    dispatch({ type: "DATE_TIME", payload: e.target.value });
  };

  const handleTelephone = (e) => {
    const inputValue = e.target.value;

    // Define the regex pattern for a 10-digit number starting with 0
    const regexPattern = /^0\d{9}$/;

    // Test if the input value matches the pattern
    const isValid = regexPattern.test(inputValue);
    setValid(isValid);

    dispatch({ type: "PHONE", payload: e.target.value });
  };

  const handleWasteType = (e) => {
    // Dispatch an action to update the name
    dispatch({ type: "WASTE_TYPE", payload: e.target.value });
  };

  const handleNumberOfBins = (e) => {
    // Dispatch an action to update the name
    dispatch({ type: "NUMBER_OF_BINS", payload: e.target.value });
  };

  const handleServiceOptions = (e) => {
    // Dispatch an action to update the name
    dispatch({ type: "SERVICE_OPTION", payload: e.target.value });
  };

  return (
    <div className="request_wrapper">
      <div className="inner_wrapper">
        <div className="header">
          <h4>Information</h4>
        </div>

        <form className="input_field">
          {/* name */}
          <div className="input">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              name="username"
              id="name"
              placeholder="Enter Your Name"
              required
              value={state.username}
              onChange={handleUsername}
            />
          </div>
          {/* location */}
          <div className="input">
            <label htmlFor="location">Location:</label>
            <input
              type="text"
              name="location"
              id="location"
              placeholder="Enter Your Location"
              required
              value={state.location}
              onChange={handleLocation}
            />
          </div>
          {/* landmark */}
          <div className="input">
            <label htmlFor="landmark">Landmark:</label>
            <input
              type="text"
              name="landmark"
              id="landmark"
              placeholder="Enter Your Landmark"
              required
              value={state.landmark}
              onChange={handleLandmark}
            />
          </div>
          {/* date */}
          <div className="input">
            <label htmlFor="datetime">Date and Time:</label>
            <input
              type="datetime-local"
              name="date"
              id="datetime"
              value={state.dateTime}
              onChange={handleDateTime}
            />
          </div>
          {/* telephone */}
          <div className="input">
            <label htmlFor="telephone">Telephone:</label>
            <input
              type="tel"
              name="telephone"
              id="telephone"
              pattern="^0\\d{9}$"
              placeholder="Enter Your Tel Number (Numbers Only)"
              value={state.telephone}
              onChange={handleTelephone}
            />
          </div>
          <p
            style={{
              color: !valid && "red",
              fontSize: "0.9rem",
              textAlign: "center",
            }}
          >
            {valid ? "" : "Enter a valid 10-digit phone number starting with 0"}
          </p>
          {/* waste types */}
          <div className="input">
            <label htmlFor="wasteType">Select Waste Types:</label>
            <select
              name="wasteType"
              id="wasteType"
              required
              value={state.wasteType}
              onChange={handleWasteType}
            >
              <option value="" selected disabled="true">
                Select
              </option>
              <option value="Household  Waste">Household Waste</option>
              <option value="Recyclables">
                Recyclables(Paper, Plastics, etc)
              </option>
              <option value="Hazardous ">
                Hazardous (chemicals, batteries, etc)
              </option>
              <option value="Organic Waste">Organic Waste</option>
            </select>
          </div>
          {/* number of bins */}
          <div className="input">
            <label htmlFor="numOfBin">Number Of Bins:</label>
            <select
              name="numberOfBins"
              id="numOfBin"
              required
              value={state.numberOfBins}
              onChange={handleNumberOfBins}
            >
              <option value="" selected disabled="true">
                Select
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          {/* service option */}
          <div className="input">
            <label htmlFor="seviceOption">Service Option:</label>
            <select
              name="serviceOption"
              id="seviceOption"
              required
              value={state.serviceOption}
              onChange={handleServiceOptions}
            >
              <option value="" selected disabled="true">
                Select
              </option>
              <option value="One-Time-picker">One-Time-Picker</option>
              <option value="Regular Picker">Regular Picker</option>
            </select>
          </div>
          <div className="btn_next">
            <Link to="/review">
              <button className="next_btn">Next</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestPage;
