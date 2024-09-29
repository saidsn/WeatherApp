import React from "react";
import "./HeaderBottom.scss";
import CustomButton from "../custombutton";

const HeaderBottom = () => {
  return (
    <div className="button__area">
      <span>°C</span>
      <CustomButton />
      <span>°F</span>
    </div>
  );
};

export default HeaderBottom;
