import React, {useState} from 'react';
import "./style/expand-style.css";

export const ExpandedEvent = ({handleEventExpand, event:{name,start_date,end_date,description,event_banner}}) => {
  const [expandEvent, setExpandEvent] = useState(false);

  const handleClick = () =>{
    setExpandEvent(false);
    // trigger fuction to hide expanded page
    handleEventExpand(null,expandEvent);

  }
    console.log()
  return (
    <div className="expanded-event-container">
      <div className="left">
        <img src={event_banner} alt={name} />
      </div>
      <div className="right">
        <div className="top">
          <div>
            <h4 className='title'>{name}</h4>
          </div>
          
            <div>
              <h4
                className="back"
                onClick={() => {
                  handleClick();
                }}
              >
                {" "}
                <i class="fa-solid fa-person-walking-arrow-loop-left"></i>  all
                events{" "}
              </h4>
            
          </div>
        </div>

        <p>{`The ${name} event begins on ${start_date} and ends on ${end_date}`}</p>
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
      </div>
    </div>
  );
}
