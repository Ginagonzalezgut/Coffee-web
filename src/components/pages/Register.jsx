import React, { useEffect, useState } from "react";
import "../../../src/scss/components/Register.scss";
import API from "../../services/api";

function Register() {
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleName = (event) => {
    setNewUser({
      ...newUser,
      username: event.target.value,
    });
  };
  const handleEmail = (event) => {
    setNewUser({
      ...newUser,
      email: event.target.value,
    });
  };
  const handlePassword = (event) => {
    setNewUser({
      ...newUser,
      password: event.target.value,
    });
  };
  function handleSubmit(event) {
    event.preventDefault();
    API.postUser(newUser);
  }

  return (
    <>
      <div className="form">
        <h1 className="form__title"> Crea una cuenta</h1>
        <form onSubmit={handleSubmit} action="form__register">
          <p className="form__desc">
            Guarda tus restaurantes favoritos y crea reseñas que inspiren a
            otros amantes de la buena comida. ¡Tu próxima experiencia culinaria
            empieza aquí!"
          </p>
          <label className="form__label" htmlFor="username">
            Nombre
          </label>
          <input
            className="form__input"
            type="text"
            name="username"
            id="username"
            onChange={handleName}
            value={newUser.username}
          />
          <label htmlFor="email">Email</label>
          <input
            className="form__input"
            type="email"
            name="email"
            id="email"
            onChange={handleEmail}
            value={newUser.email}
          />
          <label htmlFor="password">Password</label>
          <input
            className="form__input"
            type="password"
            name="password"
            id="password"
            onChange={handlePassword}
            value={newUser.password}
          />
          <input type="submit" value="Crea una cuenta" />
          <div>Ya tienes una cuenta ?</div>
        </form>
      </div>
    </>
  );
}

export default Register;
