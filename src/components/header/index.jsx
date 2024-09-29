import React from "react";
import "./Header.scss"
import CloudSunny from "../../assets/image/Group16.svg";

const Header = () => {
  return (
    <div className="header">
      <div className="header__icon">
        <img src={CloudSunny} alt="cloud" />
      </div>
      <h1 className="header__title">Hotlify</h1>
    </div>
  );
};

export default Header;
