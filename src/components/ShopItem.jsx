import React from "react";

function ShopItem({ shop }) {
  return (
    <div
      style={{
        borderColor: `#${shop.color}`,
        backgroundColor: `#${shop.color}`,
      }}
      className="ShopItem"
      key={shop.id_shop}
    >
      <img
        className="ShopItem__logo"
        src={`/logos/${shop.logo_url}`}
        alt={shop.name}
      />
      <div>
        <a href={`https://www.instagram.com/${shop.instagram}`} target="_blank">
          <i className="fa-brands fa-instagram"></i>
        </a>
        <a href={shop.website}>
          <i className="fa-solid fa-globe"></i>
        </a>
      </div>
    </div>
  );
}

export default ShopItem;
