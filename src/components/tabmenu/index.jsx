import React, { useState } from "react";
import "./TabMenu.scss";

const TabMenu = () => {
    
  const [tab, setTab] = useState("today");

  const handleTab = (tabName) => {
    setTab(tabName);
  };

  return (
    <div className="tab-menu">
      <button
        className={tab === "today" ? "active" : ""}
        onClick={() => handleTab("today")}
      >
        Today
      </button>
      <button
        className={tab === "tomorrow" ? "active" : ""}
        onClick={() => handleTab("tomorrow")}
      >
        Tomorrow
      </button>
    </div>
  );
};

export default TabMenu;
