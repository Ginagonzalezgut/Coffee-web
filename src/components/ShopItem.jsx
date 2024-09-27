import React from "react";

function ShopItem({ shop }) {
  return (
    <div
      style={{
        borderColor: `#${shop?.color}`,
        backgroundColor: `#${shop?.color}`,
      }}
      className="shops__item"
      key={shop?.id_shop}
    >
      <img
        className="shops__logo"
        src={`/logos/${shop?.logo_url}`}
        alt={shop?.name}
      />
    </div>
  );
}

export default ShopItem;
