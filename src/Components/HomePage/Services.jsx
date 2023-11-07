import "../../css/Services.css";
import arrow from "../../assets/Home_Page/arrow_vector.svg";

const Services = () => {
  return (
    <div className="services_wrapper">
      <div className="header">
        <div className="text_wrapper">
          <h4>wasty. comes with amaing features like:</h4>
        </div>
      </div>

      <img src={arrow} alt="arrow vector" className="arrow_vector" />

      <div className="card_content">
        <div className="card card_1">
          <div className="logo" style={{ backgroundColor: "indigo" }}>
            logo
          </div>
          <div className="text">
            <h6>Waste Collection Request.</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia
              nisi delectus quos nobis ratione, ut placeat eius?
            </p>
          </div>
        </div>

        <div className="card card_2">
          <div className="logo" style={{ backgroundColor: "yellow" }}>
            logo
          </div>
          <div className="text">
            <h6>Waste Collection Request.</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia
              nisi delectus quos nobis ratione, ut placeat eius?
            </p>
          </div>
        </div>

        <div className="card card_3">
          <div className="logo" style={{ backgroundColor: "blue" }}>
            logo
          </div>
          <div className="text">
            <h6>Waste Collection Request.</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia
              nisi delectus quos nobis ratione, ut placeat eius?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
