import React from "react";
import { InlineWidget } from "react-calendly";
import "../style/Contact.css"


function Contact() {

  return (

    <div className="widget">
      <InlineWidget className="inline" url="https://calendly.com/squaredupledgers" />
    </div>


  )
  
}

export default Contact;
