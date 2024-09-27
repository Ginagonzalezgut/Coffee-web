import React from "react";
import "../scss/components/HomePage.scss";
import ShopItem from "./ShopItem";
import { Link } from "react-router-dom";

function HomePage({ shops }) {
  const shopItems = shops.map((shop) => {
    return (
      <Link to={`/shop/${shop.id_shop}`}>
        <ShopItem shop={shop} />
      </Link>
    );
  });

  return (
    <>
      <div className="hero">
        <h1 className="hero__title"> Cafés que cuentan historias</h1>
        <h2 className="hero__subtitle">
          Descubre una colección única de cafés en grano.
        </h2>
      </div>
      <div className="shops">{shopItems}</div>
    </>
  );
}

export default HomePage;
