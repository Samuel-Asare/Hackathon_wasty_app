import { Link } from "react-router-dom";
import "../../css/Request_Page.css";

const RequestPage = () => {
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
              name="name"
              id="name"
              placeholder="Enter Your Name"
              required
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
            />
          </div>
          {/* date */}
          <div className="input">
            <label htmlFor="datetime">Date and Time:</label>
            <input type="datetime-local" name="datetime" id="datetime" />
          </div>
          {/* telephone */}
          <div className="input">
            <label htmlFor="telephone">Telephone:</label>
            <input
              type="tel"
              name="telephone"
              id="telephone"
              placeholder="Enter Your Tel Number (Numbers Only)"
            />
          </div>
          {/* waste types */}
          <div className="input">
            <label htmlFor="wasteType">Select Waste Types:</label>
            <select name="wasteType" id="wasteType" required>
              <option value="" selected disabled="true">
                Select
              </option>
              <option value="Household  Waste">Household Waste</option>
              <option value="Recyclables">
                Recyclables(Paper, Plastics, etc)
              </option>
              <option value="Hazardous (chemicals, batteries, etc)">
                Hazardous (chemicals, batteries, etc)
              </option>
              <option value="Organic Waste">Organic Waste</option>
            </select>
          </div>
          {/* number of bins */}
          <div className="input">
            <label htmlFor="numOfBin">Number Of Bins:</label>
            <select name="numOfBin" id="numOfBin" required>
              <option value="" selected disabled="true">
                Select
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="more">More</option>
            </select>
          </div>
          {/* service option */}
          <div className="input">
            <label htmlFor="seviceOption">Service Option:</label>
            <select name="seviceOption" id="seviceOption" required>
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
