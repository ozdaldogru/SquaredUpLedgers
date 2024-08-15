import React from "react";
import { Link } from "react-router-dom";
import LinkedIn from "../images/linkedin.png";
import "../style/Footer.css";


function Footer() {
  return (

          <div className="footer-link-items">
            <div>
            <p className="website-rights">Squared Up Ledgers &copy; All Rights Reserved. </p>
            </div>
            <div>
            <Link to="https://www.linkedin.com/company/squared-up-ledgers/" target={"_blank"}>
            <img src={LinkedIn} alt="LinkedIn icon" />
            </Link>
            </div>

          </div>
     

  );
}

export default Footer;
