import React from "react";
import { useEffect, useState } from "react";
import API from "../../services/api";
import ShopItem from "../partials/ShopItem";
import Hero from "../partials/Hero";

function Gelato() {
  const [gelatos, setGelatos] = useState([]);

  useEffect(() => {
    API.getGelato().then((data) => {
      setGelatos(data.results);
    });
  }, []);
  function gelatoList() {
    return gelatos.map((gelato) => {
      return <ShopItem key={gelato.name} shop={gelato} />;
    });
  }
  return (
    <>
      <Hero
        text={"Los mejores lugares para disfrutar gelato artesanal cerca de ti"}
        className="hero__background__gelato"
      />
      <div className="coffee__list">{gelatoList()}</div>
    </>
  );
}

export default Gelato;
