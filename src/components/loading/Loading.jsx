import React from "react";
import ReactLoading from "react-loading";
import "./style/style.css"

export const Loading = ({ type, color }) => (
  <div className="load">
    <ReactLoading type={type} color={"#bd0204"} height={"5%"} width={"5%"} display={"flex"} justifyContent={"center"} alignItems={"center"} />
  </div>
);

