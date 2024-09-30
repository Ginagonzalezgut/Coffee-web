import React from "react";

function Hero({ text, className }) {
  return (
    <>
      <div className={`hero__background ${className}`}></div>

      <h1 className="hero__title">{text}</h1>
    </>
  );
}

export default Hero;
