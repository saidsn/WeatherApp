import React from "react";
import "./CityContainer.scss";
import City from "../city";

const CityContainer = () => {
  return (
    <div className="city-container">
      <City />
      <City />
      <City />
      <City />
      <City />
    </div>
  );
};

export default CityContainer;
