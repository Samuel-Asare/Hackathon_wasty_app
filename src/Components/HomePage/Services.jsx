import "../../css/Services.css";
import arrow from "../../assets/Home_Page/arrow_vector.svg";
import waste_icon from "../../assets/Home_Page/Service/waste.png";
import respnse_icon from "../../assets/Home_Page/Service/response.png";
import infor_icon from "../../assets/Home_Page/Service/info.png";

const Services = () => {
  return (
    <div className="services_wrapper">
      <div className="header">
        <div className="text_wrapper">
          <h4>wasty. comes with amazing features like:</h4>
        </div>
      </div>

      <img src={arrow} alt="arrow vector" className="arrow_vector" />

      <div className="card_content">
        <div className="card card_1">
          <div className="logo">
            <img src={waste_icon} alt="waste recycle icon" />
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
          <div className="logo">
            <img src={respnse_icon} alt="quick response icon" />
          </div>
          <div className="text">
            <h6>Quick Response.</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quia
              nisi delectus quos nobis ratione, ut placeat eius?
            </p>
          </div>
        </div>

        <div className="card card_3">
          <div className="logo">
            <img src={infor_icon} alt="information icon" />
          </div>
          <div className="text">
            <h6>Education Resources.</h6>
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
