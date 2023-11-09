import { Link } from "react-router-dom";
import "../../css/HeroSection.css";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext/AuthContext";

const HeroSection = () => {
    const{user}=useContext(AuthContext)

    return (
        <div className="container_wrapper">
            <div className="inner_wrapper">
                <div className="text_btn">
                    <div className="text">
                        <p>
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Nesciunt architecto sapiente in laudantium
                            libero distinctio deleniti dignissimos numquam,
                            maxime ad voluptatibus adipisci veniam non eos quia,
                            eaque velit. Quisquam, atque.
                        </p>
                    </div>

                    <div
                        className="btn"
                        style={{ justifyContent: user && "center" }}
                    >
                        <Link to="/request">
                            <button className="request_btn">Request Now</button>
                        </Link>
                        {!user && (
                            <Link to="/signup">
                                <button className="create_account">
                                    Create account
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
