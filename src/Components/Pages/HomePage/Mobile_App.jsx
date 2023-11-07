import mobile_icon from "../../../assets/Home_Page/mobile_app.svg";
import "../../../css/Mobile_App.css";

const Mobile_App = () => {
  return (
    <div className="mobile_app_wrapper">
        

        <div className="image">
                <img src={mobile_icon} alt="mobile phone svg" />
        </div>

        <div className="bottom_text">
            <div className="text_wrapper">
                <h6>wasty. Comes With A Mobile App</h6>
                <p>Check it out in <span className="store">AppStore</span> and <span className="store">PlayStore</span></p>
            </div>
        </div>
    </div>
  )
}

export default Mobile_App