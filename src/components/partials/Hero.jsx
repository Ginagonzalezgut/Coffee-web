import React from "react";
import "../../scss/components/Hero.scss";

function Hero({ text, className, subtitle }) {
  return (
    <div className={`hero ${className}`}>
      <div className="hero__overlay"></div>
      <h1 className="hero__title">
        <span className="hero__subtitle">{subtitle}</span>
        {text}
      </h1>
    </div>
  );
}

export default Hero;
