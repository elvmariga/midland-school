import React from "react";
import Event1 from "../../assests/event1.png";
// import Event2 from "../../assests/event2.png";
// import Event3 from "../../assests/event3.png";
import './style/style.css';
import axios from "axios";
import {Carousel} from '3d-react-carousal';

export const Events = () => {
//get the envents from server side
  const getEvents = () => {
    axios
      .get("https://localhost:5000/events")
      
      .then((response) => {
        console.log(response)
      })

      // here we expect an array of objects
      .catch((error) => {
        console.error(error)
      });
  };
  //calling the function
  getEvents();

  const slides = [
    <img  src={Event1}   alt="1" />,
    <img   src={Event1} alt="2" />  ,
    <img   src={Event1} alt="3" />  ,
  ];

  return (
    <div className="events-container">
      <div className="line"></div>'
      <div className="events-title">
        <h2>Events</h2>

      </div>

      <div id="slideshow" data-component="slideshow" >
        <div role="list">
          
          <div className="caroussel" >
            {/* <img className="mySlide" src={Event1} alt="" />
            <img className="mySlide" src={Event2} alt="" />
            <img className="mySlide" src={Event3} alt="" /> */}
            <Carousel slides={slides} autoplay={true} interval={3000}/>
          </div>
          <button>More Events</button>
        </div>
      </div>
    </div>
  );
};

// var myIndex = 0;
// carousel();

// function carousel() {
//   var i;
//   var x = document.getElementsByClassName("mySlides");
//   for (i = 0; i < x.length; i++) {
//     x[i].style.display = "none";
//   }
//   myIndex++;
//   if (myIndex > x.length) {
//     myIndex = 1;
//   }
//   x[myIndex - 1].style.display = "block";
//   setTimeout(carousel, 9000);
// }
