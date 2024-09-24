import React from "react";
import "../scss/components/CoffeeList.scss";

function CoffeeList({ coffees }) {
  const coffeeItems = coffees.map((coffee) => {
    return (
      <div key={coffee.id_coffee}>
        <img src={coffee.photo_url} alt={coffee.name} />
        <h1> {coffee.name}</h1>
        <h2>{coffee.fk_shops}</h2>
        <h2>{coffee.fk_country}</h2>
      </div>
    );
  });

  return (
    <>
      <div className="coffee__hero">
        <h1 className="coffee__hero__title"> Cafés que cuentan historias</h1>
        <h2 className="coffee__hero__subtitle">
          Descubre una colección única de cafés en grano.
        </h2>
      </div>
      <div>{coffeeItems}</div>
    </>
  );
}

export default CoffeeList;
