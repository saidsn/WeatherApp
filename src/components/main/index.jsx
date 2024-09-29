import React from "react";
import "./main.scss";
import TabMenu from "../tabmenu";
import CustomInput from "../custominput";
import WeatherContainer from "../weather-container";
import CityContainer from "../city-container";

const Main = () => {
  return (
    <div className="main__centered">
      <TabMenu />
      <CustomInput />
      <WeatherContainer />
      <CityContainer />
    </div>
  ); 
};

export default Main;
