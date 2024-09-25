import React from "react";
import "../scss/components/HomePage.scss";

function HomePage({ shops }) {
  const shopItems = shops.map((shop) => {
    return (
      <div
        style={{
          borderColor: `#${shop.color}`,
          backgroundColor: `#${shop.color}`,
        }}
        className="shops__item"
        key={shop.id_shop}
      >
        <img
          className="shops__logo"
          src={`/logos/${shop.logo_url}`}
          alt={shop.name}
        />
      </div>
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
