import React from "react";
import { useEffect, useState } from "react";
import API from "../../services/api";
import ShopItem from "../partials/ShopItem";
import Hero from "../partials/Hero";
import LogoCarousel from "../partials/LogoCarousel";

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
        className="hero__gelato"
        subtitle="Gelato"
      />
      <div className="logos">
        <LogoCarousel shops={gelatos} />
      </div>
      <div className="shops-section">
        <h1 className="shops-section__title">
          Momentos que valen la pena compartir
        </h1>
        <h2 className="shops-section__subtitle">
          Las experiencias más memorables, contadas por otros
        </h2>
        <div className="coffee__list">{gelatoList()}</div>
      </div>
    </>
  );
}

export default Gelato;
