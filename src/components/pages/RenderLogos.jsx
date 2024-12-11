import React from "react";

function RenderLogos({ shops }) {
  return shops.map((shop) => {
    return (
      <a href={`#shop-${shop.id_shop}`}>
        <img
          className="logos__carousel__item"
          src={`/logos/${shop.logo_url}`}
          alt={shop.name}
        />
      </a>
    );
  });
}

export default RenderLogos;
