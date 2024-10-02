import React, { useEffect, useState } from "react";
import "../../../src/scss/components/Register.scss";
import API from "../../services/api";
import { Link } from "react-router-dom";

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
    API.postUser(newUser).then(() => {
      setNewUser({
        username: "",
        email: "",
        password: "",
      });
    });
  }

  return (
    <div className="register">
      <div className="register__picture">
        <div className="register__desc">
          <h1 className="register__title">
            ¡Tu próxima experiencia culinaria empieza aquí!
          </h1>
          <p className="register__subtitle">
            Guarda tus restaurantes favoritos y crea reseñas que inspiren a
            otros amantes de la buena comida.
          </p>
        </div>
      </div>

      <div className="register__form">
        <h1 className="register__title">Comencemos</h1>
        <h2 className="register__subtitle"> Crea tu cuenta ahora</h2>
        <form onSubmit={handleSubmit} action="form__register">
          <div className="register__form__field">
            <label className="register__form__label" htmlFor="username">
              Nombre
            </label>
            <input
              className="register__form__input"
              type="text"
              name="username"
              id="username"
              onChange={handleName}
              value={newUser.username}
              placeholder="Ana María Pérez"
            />
          </div>

          <div className="register__form__field">
            <label className="register__form__label" htmlFor="email">
              Email
            </label>
            <input
              className="register__form__input"
              type="email"
              name="email"
              id="email"
              onChange={handleEmail}
              value={newUser.email}
              placeholder="anaperez@gmail.com"
            />
          </div>

          <div className="register__form__field">
            <label className="register__form__label" htmlFor="password">
              Password
            </label>
            <input
              className="register__form__input"
              type="password"
              name="password"
              id="password"
              onChange={handlePassword}
              value={newUser.password}
              placeholder="********"
            />
          </div>

          <input
            className="register__form__submit"
            type="submit"
            value="Crear una cuenta"
          />
          <Link className="register__form__link" to="/login">
            ¿Ya tienes una cuenta?
            <span className="register__form__login">Inicia Sesión</span>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
