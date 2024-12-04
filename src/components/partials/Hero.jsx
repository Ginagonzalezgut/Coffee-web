import React from "react";

function Hero({ text, className }) {
  return (
    <div className={`hero ${className}`}>
      <div className="hero__background"></div>
      <h1 className="hero__title">{text}</h1>
    </div>
  );
}

export default Hero;
