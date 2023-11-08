import { Link } from "react-router-dom";
import "../../css/Request_Page.css";
import { useState } from "react";


const RequestPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    location: '',
    landmark: '',
    date: '',
    telephone: '',
    wasteType: '',
    numberOfBins: '',
    serviceOption: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
              value={formData.username}
              onChange={handleInputChange}
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
              value={formData.location}
          onChange={handleInputChange}
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
              value={formData.landmark}
          onChange={handleInputChange}
            />
          </div>
          {/* date */}
          <div className="input">
            <label htmlFor="datetime">Date and Time:</label>
            <input type="datetime-local" name="date" id="datetime"value={formData.date}
          onChange={handleInputChange} />
          </div>
          {/* telephone */}
          <div className="input">
            <label htmlFor="telephone">Telephone:</label>
            <input
              type="tel"
              name="telephone"
              id="telephone"
              placeholder="Enter Your Tel Number (Numbers Only)"
              value={formData.telephone}
          onChange={handleInputChange}
            />
          </div>
          {/* waste types */}
          <div className="input">
            <label htmlFor="wasteType">Select Waste Types:</label>
            <select name="wasteType" id="wasteType" required value={formData.wasteType}
          onChange={handleInputChange}>
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
            <select name="numberOfBins" id="numOfBin" required value={formData.numberOfBins}
          onChange={handleInputChange}>
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
            <select name="serviceOption" id="seviceOption" required value={formData.serviceOption}
          onChange={handleInputChange}>
              <option value="" selected disabled="true">
                Select
              </option>
              <option value="One-Time-picker">One-Time-Picker</option>
              <option value="Regular Picker">Regular Picker</option>
            </select>
          </div>
          <div className="btn_next">
          <Link to= "/review">
              <button className="next_btn">Next</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestPage;
