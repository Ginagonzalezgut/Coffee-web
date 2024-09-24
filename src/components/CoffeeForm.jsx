import React, { useState } from "react";
import "../scss/components/CoffeeForm.scss";

function CoffeeForm({ shops, countries }) {
  const [coffee, setCoffee] = useState({
    name: "",
    altitude_min: "",
    altitude_max: "",
    provider: "",
    note: "",
    country: "",
    shop: "",
    photo_url: "",
  });

  const shopElements = shops.map((shop) => {
    return (
      <option key={shop.id_shop} value={shop.id_shop}>
        {shop.name}
      </option>
    );
  });
  const countriesElements = countries.map((country) => {
    return (
      <option value={country.id_country} key={country.id_country}>
        {country.name}
      </option>
    );
  });

  const handleName = (event) => {
    setCoffee({
      ...coffee,
      name: event.target.value,
    });
  };
  const handleAltitudeMax = (event) => {
    setCoffee({
      ...coffee,
      altitude_max: event.target.value,
    });
  };
  const handleAltitudeMin = (event) => {
    setCoffee({
      ...coffee,
      altitude_min: event.target.value,
    });
  };
  const handleProvider = (event) => {
    setCoffee({
      ...coffee,
      provider: event.target.value,
    });
  };
  const handleNote = (event) => {
    setCoffee({
      ...coffee,
      note: event.target.value,
    });
  };
  const handlePhoto = (event) => {
    setCoffee({
      ...coffee,
      photo_url: event.target.value,
    });
  };
  const handleCountry = (event) => {
    setCoffee({
      ...coffee,
      country: event.target.value,
    });
  };
  const handleShop = (event) => {
    setCoffee({
      ...coffee,
      shop: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("http://localhost:5001/coffee", {
      method: "POST",
      body: JSON.stringify(coffee),
      headers: {
        "Content-type": "application/json",
      },
    });
  };
  return (
    <>
      <div className="coffeeForm">
        <div className="coffeeForm__left"></div>
        <div className="coffeeForm__right">
          <form className="coffeeForm__form" onSubmit={handleSubmit}>
            <legend className="coffeeForm__tittle">
              ¿Quieres agregar un nuevo café?
            </legend>

            <label className="coffeeForm__label" htmlFor="name">
              Nombre del café:
            </label>
            <input
              className="coffeeForm__input"
              type="text"
              name=""
              id="name"
              value={coffee.name}
              onChange={handleName}
            />

            <label className="coffeeForm__label" htmlFor="altitude_max">
              Altura Máx:
            </label>
            <input
              className="coffeeForm__input"
              type="number"
              name="altitude_max"
              id="altitude_max"
              value={coffee.altitude_max}
              onChange={handleAltitudeMax}
            />

            <label className="coffeeForm__label" htmlFor="altitude_min">
              Altura Min:
            </label>
            <input
              className="coffeeForm__input"
              type="number"
              name=""
              id="altitude_min"
              value={coffee.altitude_min}
              onChange={handleAltitudeMin}
            />

            <label className="coffeeForm__label" htmlFor="provider">
              Productor:
            </label>
            <input
              className="coffeeForm__input"
              type="text"
              name=""
              id="provider"
              value={coffee.provider}
              onChange={handleProvider}
            />

            <label className="coffeeForm__label" htmlFor="note">
              Nota de Cata:
            </label>
            <input
              className="coffeeForm__input"
              type="text"
              name=""
              id="note"
              value={coffee.note}
              onChange={handleNote}
            />

            <label className="coffeeForm__label" htmlFor="photo_url">
              Foto del café
            </label>
            <input
              className="coffeeForm__input"
              type="text"
              name=""
              id="photo_url"
              value={coffee.photo_url}
              onChange={handlePhoto}
            />

            <label className="coffeeForm__label" htmlFor="shop">
              Escoge la tienda
            </label>
            <select
              className="coffeeForm__input"
              name="shop"
              id="shop"
              value={coffee.shop}
              onChange={handleShop}
            >
              {shopElements}
            </select>

            <label className="coffeeForm__label" htmlFor="country">
              Origen
            </label>
            <select
              className="coffeeForm__input"
              name="country"
              id="country"
              value={coffee.country}
              onChange={handleCountry}
            >
              {countriesElements}
            </select>

            <input
              className="coffeeForm__submit"
              type="submit"
              value="Guarda tu café"
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default CoffeeForm;
