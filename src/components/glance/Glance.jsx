import React, { useState } from "react";
import "./style/style.css";
import results from "../../assests/midland_rollup_banner_revised.pdf";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
// import {Document, Page} from react-pdf;

const pdfFiles = [
  {
    name: " 2022 Results",
    path:  results,
  },
  { name: "PDF 2", path: results, },
  { name: "PDF 3", path: results, },
];

export const Glance = () => {
  const [selectedPDF, setSelectedPDF] = useState("");

  const handleChange = (e) => {

    setSelectedPDF(e.target.value);
  };

  return (
    <div className="glance-container">
      <div className="glance">
        <div className="glanceTitle">
          <h3>Midland Prep at a Glance</h3>
        </div>
        <div className="glanceStats">
          <div>
            <p className="statsNumbers">
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                  <b>
                    <span id="value1">
                      {" "}
                      {isVisible && (
                        <CountUp enableScrollSpy={true} start={0} end={30} />
                      )}
                    </span>
                    +
                  </b>
                )}
              </VisibilitySensor>
            </p>
            <p className="statsTitle">Staff Members</p>
          </div>
          <div>
            <p className="statsNumbers">
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                  <b>
                    <span id="value1">
                      {" "}
                      {isVisible && (
                        <CountUp enableScrollSpy={true} start={20} end={500} />
                      )}
                    </span>
                    +
                  </b>
                )}
              </VisibilitySensor>
            </p>
            <p className="statsTitle">Enrolled Students</p>
          </div>
          <div>
            <p className="statsNumbers">
              <VisibilitySensor partialVisibility>
                {({ isVisible }) => (
                  <b>
                    <span id="value1">
                      {" "}
                      {isVisible && (
                        <CountUp enableScrollSpy={true} start={0} end={15} />
                      )}
                    </span>
                    +
                  </b>
                )}
              </VisibilitySensor>
            </p>
            <p className="statsTitle">Courses Offered</p>
          </div>
        </div>
        {/* <hr /> */}
      </div>
      <div className="kcpe">
        <div>
          <h3 className="glanceTitle report">KCPE 2022 Results Report</h3>
          <p>
            At Midland School, we are proud that our students hardworking,
            displine and consistently achieve outstanding academic results.
          </p>
        </div>
        <div>
          <p className="results">
            <a href={results}  rel="noreferrer" target="_blank">
              {" "}
              View KCPE 2022 results
            </a>
            <div>
              {/* <select>
                <option value="" disabled selected>
                  Select a PDF
                </option>
                {pdfFiles.map((pdf, index) => (
                  <option key={index} onClick={() => handleClick(pdf.path)}>
                    {pdf.name}
                  </option>
                ))}
              </select> */}

                <label value="" disabled selected>
                  Select Year
                </label>
              <select onChange={(e) => handleChange(e)}>
                {pdfFiles.map((pdf, index) => (
                  <option  key={index} value={pdf.path}>
                    {pdf.name}
                  </option>
                ))}
              </select>
              {selectedPDF && <a href={selectedPDF} target="_blank" rel="noopener noreferrer"> View</a>}
            </div>
          </p>

          <p style={{ paddingTop: "2rem" }}>
            " Congratulations to the class of 2022 on their excellent results! "
          </p>
        </div>
      </div>
    </div>
  );
};

// function animateValue(obj, start, end, duration) {
// let startTimestamp = null;
//   const step = (timestamp) => {
//     if (!startTimestamp) startTimestamp = timestamp;
//     const progress = Math.min((timestamp - startTimestamp) / duration, 1);
//     obj.innerHTML = Math.floor(progress * (end - start) + start);
//     if (progress < 1) {
//       window.requestAnimationFrame(step);
//     }
//   };
//   window.requestAnimationFrame(step);
// }

// const obj = document.getElementById("values");
// animateValue(obj, 0, 800, 5000);
