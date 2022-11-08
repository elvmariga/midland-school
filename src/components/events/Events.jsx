import React,{useState, useEffect} from "react";
import './style/style.css';
import axios from "axios";
import {Carousel} from '3d-react-carousal';

export const Events = () => {

  const [events, setEvents] = useState([]);
//get the envents from server side

useEffect(()=>{
  const getEvents = () => {
    axios
      .get("https://ondishub.co.ke/events/all")
      
      // here we expect an array of objects

      .then((response) => {
        // updating the events state
        setEvents((prev)=>([
          ...prev, ...response.data.events
        ]));
      })

      .catch((error) => {
        console.error(error)
      });
  };
 //calling the function
  getEvents();

},[])
  
 
  const slides =  events.map(
    ({name,description,event_banner,event_path})=>{
      return(
        <>
          <div key={event_path}>
            <img src={event_banner} alt={name} />
            {/* <p>{`From ${start_date} to ${end_date}`}</p> */}
            <div dangerouslySetInnerHTML={{__html: description}}></div>

          </div>
        </>
      )
      })
  ;

  return (
    <div className="events-container">
      <div className="line"></div>'
      <div className="events-title">
        <h2>Events</h2>
      </div>
      <div id="slideshow" data-component="slideshow">
        <div role="list">
          <div className="caroussel">
        
            <Carousel slides={slides} autoplay={true} interval={5000} />
          </div>
        </div>
        {/* <a href="#">More Events</a> */}
      </div>
    </div>
  );
};

