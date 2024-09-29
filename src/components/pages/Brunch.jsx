import React, { useEffect, useState } from "react";
import "../../scss/components/ShopItem.scss";
import API from "../../services/api";
import ShopItem from "../partials/ShopItem";

function Brunch() {
  const [brunches, setBrunches] = useState([]);

  useEffect(() => {
    API.getBrunch().then((data) => {
      setBrunches(data.results);
    });
  });
  function brunchList() {
    return brunches.map((brunch) => {
      return <ShopItem key={brunch.name} shop={brunch} />;
    });
  }
  return (
    <>
      <h1 className="coffee__title">¿Y si nos vamos de Brunch? </h1>
      <div className="coffee__list">{brunchList()}</div>
    </>
  );
}

export default Brunch;
