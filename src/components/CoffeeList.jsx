import React from "react";
import "../scss/components/CoffeeList.scss";

function CoffeeList({ coffees }) {
  const coffeeItems = coffees.map((coffee) => {
    return (
      <div className="coffee__item" key={coffee.id_coffee}>
        <img
          className="coffee__image"
          src={coffee.photo_url}
          alt={coffee.name}
        />
        <div className="coffee__footer">
          <h1 className="coffee__description coffee__name"> {coffee.name}</h1>
          <h2 className="coffee__description">{coffee.shop}</h2>
          <h2 className="coffee__description__country">{coffee.country}</h2>
        </div>
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
      <div className="coffee__items__wrapper">
        <div className="coffee__items">{coffeeItems}</div>
      </div>
    </>
  );
}

export default CoffeeList;
