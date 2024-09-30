import React from "react";
import "../../scss/components/ShopItem.scss";

function ShopItem({ shop }) {
  return (
    <div className="shopItem" key={shop.id_shop}>
      <img
        className="shopItem__logo"
        src={`/logos/${shop.logo_url}`}
        alt={shop.name}
        style={{
          backgroundColor: `#${shop.color}`,
        }}
      />

      <div className="shopItem__description">
        <span className="shopItem__title">{shop.name}</span>
        <div className="shopItem__links">
          <a
            className="shopItem__links__instagram"
            href={`https://www.instagram.com/${shop.instagram}`}
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a className="shopItem__links__website" href={shop.website}>
            <i className="fa-solid fa-globe"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShopItem;
