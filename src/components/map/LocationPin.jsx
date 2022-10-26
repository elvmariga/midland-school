import { ImLocation2} from "react-icons/im";
import React from "react";

export const LocationPin = ({ text }) => (
  <div className="pin">
    <ImLocation2  className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)