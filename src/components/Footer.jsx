import React from "react";
import { Link } from "react-router-dom";
import { LinkedIn } from "@material-ui/icons";
import "../style/Footer.css";


function Footer() {
  return (

          <div className="footer-link-items">
            <div>
            <p className="website-rights">Squared Up Ledgers &copy; All Rights Reserved. </p>
            </div>
            <div>
            <h1 ><Link to="https://www.linkedin.com/company/squared-up-ledgers/" target={"_blank"} ><LinkedIn/> LinkedIn</Link></h1>
            </div>

          </div>
     

  );
}

export default Footer;
