import React,{useState, useEffect} from "react";
import './style/style.css';
import axios from "axios";
import {Carousel} from '3d-react-carousal';
import { ExpandedEvent } from "../expanded-event/ExpandedEvent";

export const Events = () => {

  const [events, setEvents] = useState([]);
  const [expandEvent, setExpandEvent] = useState(false);
  const [current, setCurrent] = useState(Number);

  // use useCallback to memoize our forceUpdate function, thus keeping it constant throughout the component lifecycle 
  const [, updateState] = React.useState();
  // creates a new object in the state.
  const forceUpdate = React.useCallback(() => updateState({}), []);
  //get the envents from server side


  useEffect(()=>{
    const getEvents = () => {
      axios
        .get("https://ondishub.co.ke/events/all")
        
        // here we expect an array of objects
        .then((response) => {
        console.log(response.data.events)

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

    },[current]
  )

  const handleEventExpand = (i,s) => {
    forceUpdate();

    setExpandEvent(s);
    setCurrent(i);
  }
  
 
  const slides =  events.map(
    ({name,description,event_banner,event_path},i)=>{
      // showing a small part of the description
      const briefDescription = description.slice(3,90);
      
      return (
        <>
          <div key={event_path}>
            <img src={event_banner} alt={name} />
            <p>{briefDescription}</p>
            <p className="seeMore">
              <span
                onClick={() => {
                  handleEventExpand(i, true);
                }}
              >
                ...see more
              </span>
            </p>
          </div>
        </>
      );
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
            {!expandEvent ?  <Carousel slides={slides} autoplay={true} interval={4000} /> : <ExpandedEvent handleEventExpand={handleEventExpand} event={events[current]} /> }

          </div>
        </div>
        {/* <a href="#">More Events</a> */}
      </div>
    </div>
  );
};

