import React, {useState} from 'react';
import "./style/expand-style.css";

export const ExpandedEvent = ({event, handleEventExpand}) => {
  const [expandEvent, setExpandEvent] = useState(false);

  const handleClick = () =>{
    
    handleEventExpand(null,expandEvent)

  }
    console.log(event)
  return (
    <div className="expanded-event-container">
        <div>ExpandedEvent</div>
        <span onClick={()=>{handleClick()}}>see less</span>
    </div>

  )
}
