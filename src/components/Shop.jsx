import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import API from "../services/api";
import "../scss/components/Shop.scss";

function Shop() {
  const [shop, setShop] = useState();
  const [coffees, setCoffees] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    API.getShop(id).then((data) => {
      setShop(data.shop);
      setCoffees(data.coffees);
    });
  }, [id]);

  console.log(coffees);

  return (
    <>
      <div className="shop">
        <img
          className="shop__image"
          src={`/logos/${shop?.logo_url}`}
          alt={shop?.name}
        />
        <div className="shop__desc">
          <h1 className="shop__tittle"> {shop?.name}</h1>
        </div>
      </div>
    </>
  );
}

export default Shop;
