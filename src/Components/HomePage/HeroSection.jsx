import { Link } from "react-router-dom";
import "../../css/HeroSection.css";

const HeroSection = () => {
  return (
    <div className="container_wrapper">
      <div className="inner_wrapper">
        <div className="text_btn">
          <div className="text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              architecto sapiente in laudantium libero distinctio deleniti
              dignissimos numquam, maxime ad voluptatibus adipisci veniam non
              eos quia, eaque velit. Quisquam, atque.
            </p>
          </div>

          <div className="btn">
            <Link to="/request">
              <button className="request_btn">Request Now</button>
            </Link>
            <Link to="/signup">
              <button className="create_account">Create account</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
