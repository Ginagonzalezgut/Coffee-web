import React from "react";

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
  return <div>{coffeeItems}</div>;
}

export default CoffeeList;
