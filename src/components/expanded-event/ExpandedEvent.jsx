import React, {useState} from 'react';
import "./style/expand-style.css";

export const ExpandedEvent = ({handleEventExpand, event:{name,start_date,end_date,description,event_thumbnail}}) => {
  const [expandEvent, setExpandEvent] = useState(false);

  const handleClick = () =>{
    setExpandEvent(false);
    // trigger fuction to hide expanded page
    handleEventExpand(null,expandEvent);

  }
    console.log()
  return (
    <div className="expanded-event-container">
        <div className="left"><img src={event_thumbnail} alt="event"/></div>
        <div className="right">  <h4>{name}  <span onClick={()=>{handleClick()}}>back to all events >></span></h4>
      
      <p>{`The ${name} event begins on ${start_date} and ends on ${end_date}`}</p>
      <div dangerouslySetInnerHTML={{__html: description}}></div></div>
      
       


    </div>

  )
}
