import React, { useEffect, useState } from "react";
import API from "../../services/api";
import ShopItem from "../partials/ShopItem";
import Hero from "../partials/Hero";

function Rooftops() {
  const [rooftops, setrooftops] = useState([]);

  useEffect(() => {
    API.getRooftops().then((data) => {
      setrooftops(data.results);
    });
  }, []);

  function rooftopsList() {
    return rooftops.map((rooftop) => {
      return <ShopItem key={rooftop.name} shop={rooftop} />;
    });
  }
  return (
    <>
      <Hero text="" className="hero__rooftops" />

      <div>{rooftopsList()}</div>
    </>
  );
}

export default Rooftops;
