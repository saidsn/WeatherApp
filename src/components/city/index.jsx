import React from "react";
import "./City.scss";
import CloudSvg from "../../assets/image/Group41.svg";

const City = () => {
  return (
    <div className="search-city">
      <h6 className="search-city__name">Ottawa</h6>
      <div className="search-city__icon">
        <img src={CloudSvg} alt="" />
      </div>
      <span>27°</span>
    </div>
  );
};

export default City;
