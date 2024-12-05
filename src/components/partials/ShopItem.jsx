import React from "react";
import "../../scss/components/ShopItem.scss";

function ShopItem({ shop }) {
  return (
    <div className="shopItem" key={shop.id_shop} id={`shop-${shop.id_shop}`}>
      <img
        className="shopItem__cover"
        src={`/cover/${shop.cover}`}
        alt={shop.name}
      />

      <div className="shopItem__description">
        <img
          className="shopItem__logo"
          src={`/logos/${shop.logo_url}`}
          alt={shop.name}
          style={{
            backgroundColor: `#${shop.color}`,
          }}
        />
        <span className="shopItem__title">{shop.name}</span>

        <p className="shopItem__editorial">{shop.editorial}</p>

        <div className="shopItem__links">
          <a
            className="shopItem__links__google"
            href={shop.google_map_link}
            target="_blank"
          >
            <i className="fa-solid fa-location-dot"></i>
          </a>

          <a
            className="shopItem__links__instagram"
            href={`https://www.instagram.com/${shop.instagram}`}
            target="_blank"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>

          <a
            className="shopItem__links__website"
            href={shop.website}
            target="_blank"
          >
            <i className="fa-solid fa-globe"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ShopItem;
