import React from "react";
import { styled } from "@mui/material/styles";

import Switch from "@mui/material/Switch";

const PinkSwitch = styled(Switch)(({ theme }) => ({
  "& .MuiSwitch-switchBase.Mui-checked": {
    color: "white",
  },
  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
    backgroundColor: "#3D6E35",
  },
  "& .MuiSwitch-switchBase + .MuiSwitch-track": {
    backgroundColor: "#3D6E35",
  },
  "& .MuiSwitch-thumb ": {
    width: "15px",
    height: "15px",
  },
  "& .MuiSwitch-switchBase ": {
    right: "20px",
    top: "2px",
  },
}));

const label = { inputProps: { "aria-label": "Color switch demo" } };

const Button = () => {
  return (
    <>
      <PinkSwitch {...label} />
    </>
  );
};

export default Button;
