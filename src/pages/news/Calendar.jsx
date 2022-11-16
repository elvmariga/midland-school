import React from 'react'

export const Calendar = () => {
  return (
    <div>
      <div  style = {{ paddingTop:"10rem"}} className="events">
      <iframe 
        title="calender"
        src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Africa%2FNairobi&src=ZW4ua2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%233F51B5" 
        style={{ margin:"30px 20%",border:"solid 1px #777"}} 
        width="800" 
        height="500" 
        frameborder="0" 
        scrolling="no"
        >

        </iframe>

      </div>
    </div>
  );
}

