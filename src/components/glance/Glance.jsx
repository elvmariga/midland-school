import React from 'react'
import "./style/style.css"

export const Glance = () => {
  return (
    <div className="glance">
      <div className="glanceTitle">
        <h3>Midland Prep at a Glance</h3>
      </div>
      <div className="glanceStats">
        <div>
          <p className="statsNumbers">
            <b>
              <span id="value1">20</span>K+
            </b>
          </p>
          <p className="statsTitle">Enrolled Students</p>
        </div>
        <div>
          <p className="statsNumbers">
            <b>
              <span id="value2">20</span>K+
            </b>
          </p>
          <p className="statsTitle">Enrolled Students</p>
        </div>
        <div>
          <p className="statsNumbers">
            <b>
              <span id="values">20</span>K+
            </b>
          </p>
          <p className="statsTitle">Enrolled Students</p>
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
}


function animateValue(obj, start, end, duration) {
let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj = document.getElementById("values");
animateValue(obj, 0, 800, 5000);

