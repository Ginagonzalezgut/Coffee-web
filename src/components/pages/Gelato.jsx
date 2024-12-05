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
  function renderLogos() {
    return gelatos.map((gelato) => {
      return (
        <a href={`#shop-${gelato.id_shop}`}>
          <img
            className="logos__breweries"
            src={`/logos/${gelato.logo_url}`}
            alt={gelato.name}
          />
        </a>
      );
    });
  }
  return (
    <>
      <Hero
        text={"Los mejores lugares para disfrutar gelato artesanal cerca de ti"}
        className="hero__gelato"
      />
      <div className="logos">
        <div className="logos__title">Conoce Las Mejores Gelaterias</div>
        <div className="logos__info">
          <div className="logos__list">{renderLogos()}</div>
        </div>
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
