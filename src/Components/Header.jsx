import { Link, useNavigate } from "react-router-dom";
import "../css/HeaderNav.css";
import { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext/AuthContext";

const HeaderNav = () => {
   
    const { user, dispatch } = useContext(AuthContext);
    const navigate=useNavigate()

  
        const handleLogout = () => {
          dispatch({ type: "LOGOUT" });
          navigate("/")
        };
       
   

  
  

    return (
        <div className="header_wrapper">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid container_holder">
                    <Link className="navbar-brand" to="/">
                        Wasty<span>.</span>
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarNavAltMarkup"
                    >
                        <div className="navbar-nav">
                            <Link
                                className="nav-link active"
                                aria-current="page"
                                to="/submittedrequests"
                            >
                                Your Requests
                            </Link>

                            {user ? (
                                <div className="logout_div_holder">
                                    <svg
                                        width="26"
                                        height="26"
                                        fill="none"
                                        stroke="#f5f5f5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="1.5"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="logout_icon"
                                        
                                    >
                                        <path d="M14.25 15.75v1.875a1.875 1.875 0 0 1-1.875 1.875h-7.5A1.875 1.875 0 0 1 3 17.625V6.375A1.875 1.875 0 0 1 4.875 4.5H12c1.036 0 2.25.84 2.25 1.875V8.25"></path>
                                        <path d="M17.25 15.75 21 12l-3.75-3.75"></path>
                                        <path d="M8.25 12h12"></path>
                                    </svg>
                                    <div
                                        className="logout"
                                        // style={{
                                        //     display: showLogout
                                        //         ? "block"
                                        //         : "none",
                                        // }}
                                    >
                                        <button onClick={handleLogout}>Log-out</button>
                                    </div>
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default HeaderNav;
