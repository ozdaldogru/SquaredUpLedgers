import React from "react";
import Kyle from "../images/kyle2.png"
import "../style/About.css";

function About() {

  return (
    <>
    <div className="about">

    <div className="kyle">
      <img className="kyle" src={Kyle} height="720" width="640" alt="Kyle stands couple feet from the wall that has lots of full loaded with books" />
    </div>


    <div className="paragraph">
    <div className="sub-paragraph">
      <p>
      I am a degreed accountant and a Certified Professional Bookkeeper who is the owner of a full cycle bookkeeping and tax for online businesses called Squared Up Ledgers. 
      </p>
      <br />
      <p>
      This business started in April of 2013 and has grown to provide support for varied industries in the professional services realm.       
      </p>
      </div>
      <br />

      <div className="sub-paragraph">
      <p>
      My background includes having worked as a staff accountant, senior auditor, commercial pilot, and flight service specialist. 

      </p>
      <br />

      <p>
      We are looking for clients who want to get organized, get compliant and use their financial information for business decision making.
      </p>
      </div>
      <br />

      <div className="sub-paragraph">
      <p>
      Throughout my career I have qualified for different roles that have demanded my technical and leadership capabilities. 
      </p>
      <br />
      <p>
      Over the past 10 years I have developed my financial analysis skills and assessment of small businesses through audit experience and study while enrolled in the chartered accountant school of business program in western Canada.
      
      </p>
      </div>
      <br />

      <div className="sub-paragraph">
      <p>
      Throughout this I have maintained an interest in different business sectors and have grown this business to include the following team:
      </p>
      </div>
      <div className="about-list">
          <p>* Payroll compliance professional (PCP),</p>
          <p>* Certified Professional Bookkeepers (CPB),</p>
          <p>* MBA in finance</p>
          <p>* ACCA finalist (CPA UK equivalent) </p>
        </div>
    
    </div>
    </div>


      
  </>

  )
}

export default About;
