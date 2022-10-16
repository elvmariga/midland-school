import React from "react";
import Event1 from "../../assests/event1.png";
import Event2 from "../../assests/event2.png";
import Event3 from "../../assests/event3.png";
import './style/style.css'

export const Events = () => {
  return (
    <div className="events-container">
      <div className="line"></div>'
    <div className="events-title">
      <h2>Events</h2>
    </div>
      <div id="slideshow" data-component="slideshow">
        <div role="list">
          
          {/* <div class="w3-content w3-section" style="max-width:500px">
            <img class="mySlide" src={Event1} alt="" />
            <img class="mySlide" src={Event2} alt="" />
            <img class="mySlide" src={Event3} alt="" />
          </div> */}
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
