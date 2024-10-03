import React from "react";
import logo from "../../images/logo2.png";
import { Link } from "react-router-dom";

function Logo({ className }) {
  return (
    <Link to="/">
      <img className={className} src={logo} alt="Hangoutspots" />
    </Link>
  );
}

export default Logo;
