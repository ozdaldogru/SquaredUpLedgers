import React from "react";
import Carousel from "../../src/components/Carousel";
import { services } from "../../src/components/CarouselData";
import "../style/Home.css";
import CPB from "../images/cpb.png"
import ContactUs from "../images/contactus.png"
import QBO from "../images/qbo.png"
import PersonalTouch from "../images/personaltouch.svg"
import { NavLink } from "react-router-dom";

function Home() {
  // The Outlet component will conditionally swap between the different pages according to the URL
    return (
      <>
  
      <div className="App">
        <Carousel images={services} />
      </div>
      <div className="home">
        
          <div className="home1">
          <h2>Bookkeeping Services with a Personal Touch</h2>
          <p>We will get your books squared away, your tax returns filed, and provide the proper training and problem solving so you can grow your business.</p>
            <div className="image">
            <img src={PersonalTouch} height="480" width="480" alt="Kyle stands couple feet from the wall that has lots of full loaded with books" />
            </div>

        </div>

        <div className="home2">
        <h2>A Streamlined Approach for a Paperless Bookkeeping System</h2>
          <p>We offer a full-service bookkeeping solution to building your business. </p>
          <p>Our service is capable of providing real-time reports for real time financial decision making.</p>
          <h3>This is how it works:</h3>
          <p>Easy - Send us your information </p> <p></p>
          <p> Your receipts are digitized in one place—searchable and readable.</p>
          <p>Organized - We extract your information and create the  bookkeeping transaction and attach the receipt ---- 
            Each transaction has the source document attached. No need to stress over missing information.</p> 
          <p>Compliant - We reconcile, review and report your information ---- Payroll, HST tracking and source document 
            scrutiny provided including Trust tracking with Lean Law </p>
          <p>Mobile - On the go ---- Use your smartphone. Access reports and/or receipts anytime, anywhere. </p>
        </div>


        <div className="home3">
          <h2>Fully Certified</h2>
          <p>Squared Up Ledgers has over 10 years experience working with small business. I am a QBO certified pro advisor and a designated professional bookkeeper (CPB).</p>
            <div className="image">
              <img src={CPB} height="320" width="480" alt="CPB Certification" />
              <img src={QBO} height="160" width="120" alt="CPB Certification" />
            </div>
        </div>


        <div className="home4">
        <h2>Need Help With Your Accounting?</h2>
        <p>We are here to help you with everything from monthly reporting, to bookkeeping, personal income taxes, and QuickBooks problem solving.</p>
        <p>Let us help you get your business in order.</p>

           <div className="image">

           <NavLink exact to="/contact" className="nav-logo">
            <span className="icon">
            <img src={ContactUs} height="240" width="240" alt="Contact Us Logo" />   
            </span>
          </NavLink>

          </div>
        </div>

      </div>

     
      </>

    );

}

export default Home;
