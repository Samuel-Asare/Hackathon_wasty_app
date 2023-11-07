import "../css/Footer.css";

const Footer = () => {

    const date = new Date()
    let getYear = date.getFullYear()

  return (
    <div className="footer_wrapper">
        <div className="content">
            <div className="brand_name">
                <h5>wasty.</h5>
            </div>
            <div className="footer_links">
                <div className="links">
                    <ul>
                        <li>About</li>
                        <li>Usecases</li>
                        <li>Request</li>
                        <li>Policies</li>
                    </ul>
                </div>
                <div className="copyright_text">
                    &copy;<p>{getYear} wasty. All right reseved</p>
                </div>
            </div>
            <div className="social_links">
                <div className="links">
                    <ul>
                        <li>Twitter</li>
                        <li>LinkedIn</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer