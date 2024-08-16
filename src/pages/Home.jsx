import React from "react";
import Carousel from "../../src/components/Carousel";
import { services } from "../../src/components/CarouselData";
import "../style/Home.css";
import CPB from "../images/cpb.png"
import QBO from "../images/qbo.png"
import PersonalTouch from "../images/personaltouch.png"
import DEXT from "../images/Dext.svg"

function Home() {
  // The Outlet component will conditionally swap between the different pages according to the URL
    return (
      <>
  
      <div className="App">
        <Carousel images={services} />
      </div>
      <div className="home">        
          <div className="home1">
          <div className="image">
            <img src={PersonalTouch} height="480" width="720" alt="Kyle stands couple feet from the wall that has lots of full loaded with books" />
          </div>
          <div>
            <h2>Bookkeeping Services with a Personal Touch</h2>
            <p>We will get your books squared away, your tax returns filed, and provide the proper training and problem solving so you can grow your business.</p>
          </div>

        </div>

        <div className="home2">
          <div>
          <h2>A Streamlined Approach for a Paperless Bookkeeping System</h2>
          <p>We offer a full-service bookkeeping solution to building your business. </p>
          <p>Our service is capable of providing real-time reports for real time financial decision making.</p>
          </div>
          <div className="image">
            <img src={DEXT} height="199" width="499" alt="Hubdoc application logo" />
          </div>

        </div>


        <div className="home3">
          <div>
          <h2>Fully Certified</h2>
          <p>Squared Up Ledgers has over 10 years experience working with small business. I am a QBO certified pro advisor and a designated professional bookkeeper (CPB).</p>
          </div>
            <div className="image">
              <img src={CPB} height="320" width="480" alt="CPB Certification" />              
            </div>
            <div className="image">     
              <img src={QBO} height="160" width="120" alt="CPB Certification" />
            </div>
        </div>


        <div className="home4">
          <div>
            <h2>Need Help With Your Accounting?</h2>
            <p>We are here to help you with everything from monthly reporting, to bookkeeping, personal income taxes, and QuickBooks problem solving.</p>
            <p>Let us help you get your business in order.</p>
            <div className="btn"><a href="http://localhost:3003/contact" target="#blank"><button>Get A Quote</button></a></div>
          </div>
        </div>
      </div>

     
      </>

    );

}

export default Home;
