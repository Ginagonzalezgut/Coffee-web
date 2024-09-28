import React, { useEffect, useState } from "react";
import API from "../services/api";
import ShopItem from "./ShopItem";

function SpecialtyCoffeeShops() {
  const [coffeeShops, setCoffeeShops] = useState([]);

  useEffect(() => {
    API.getSpecialtyCoffeeShops().then((data) => {
      setCoffeeShops(data.results);
    });
  });

  function coffeeShopList() {
    return coffeeShops.map((coffeeShop) => {
      return <ShopItem key={coffeeShop.id_shop} shop={coffeeShop} />;
    });
  }

  return (
    <>
      <h1>Las mejores cafeterias de espcialidad</h1>
      <div>{coffeeShopList()}</div>
    </>
  );
}

export default SpecialtyCoffeeShops;
