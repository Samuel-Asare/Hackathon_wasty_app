import "../css/HeaderNav.css";

const HeaderNav = () => {
    return (
        <div className="header_wrapper">
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid container_holder">
                    <a className="navbar-brand" href="#">
                        Wasty<span>.</span>
                    </a>
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
                            <a
                                className="nav-link active"
                                aria-current="page"
                                href="#"
                            >
                                Your Requests
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default HeaderNav;
