import { useState } from 'react';
import { List } from './ServicesList.jsx';
import "../style/Services.css"


function Services() {

  
  const [isClicked, setIsClicked] = useState(false);

  const toggleFaq = (index) => {
    if (isClicked === index) {
      return setIsClicked(false);
    } else {
      setIsClicked(index);
    }
  };

  return (
    <>
    <div>
    <div className="accordion">
        {List.map((item, index) => (
          <div key={index} className="faq" onClick={() => toggleFaq(index)}>
            <div className="title">
              <h1>{item.title}</h1>
              {isClicked === index ? (
                <i className="fa-solid fa-minus"></i>
              ) : (
                <i className="fa-solid fa-plus"></i>
              )}
            </div>

            <div className={`content ${isClicked === index ? 'show' : ''}`}>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>


    </div>

    </>
  );
  
}

export default Services;
