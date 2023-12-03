import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/soundsage-logo.png";

const SoundSageIcon = () => {
  return (
    <Link to="/">
      <img
        src={logo}
        alt="Home"
        style={{ width: "40px", height: "40px", cursor: "pointer" }}
      />
    </Link>
  );
};

export default SoundSageIcon;
