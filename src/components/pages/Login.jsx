import React, { useState } from "react";
import API from "../../services/api";
import "../../scss/components/Login.scss";
import Logo from "../../images/logo2.png";

function Login() {
  const [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState();

  function handleSubmit(event) {
    event.preventDefault();

    setError("");

    API.postLogin(loginUser).then((data) => {
      if (data.status === "error") {
        setError(data.message);
      } else {
        console.log(data.token);
      }
    });
  }

  function handlePassword(event) {
    setLoginUser({
      ...loginUser,
      password: event.target.value,
    });
  }

  function handleEmail(event) {
    setLoginUser({
      ...loginUser,
      email: event.target.value,
    });
  }

  return (
    <div className="login">
      {error && <p>{error}</p>}
      <img className="login__logo" src={Logo} alt="Logo_Hangoutspots" />{" "}
      <form className="login__form " onSubmit={handleSubmit} action="">
        <h1 className="login__title">Inicia Sesión</h1>
        <p className="login__paragraph">
          Escribe tu email y contraseña para acceder a tu cuenta
        </p>
        <label className="login__label" htmlFor="email">
          Email
        </label>
        <input
          className="login__input"
          onChange={handleEmail}
          type="email"
          name="email"
          id="email"
          value={loginUser.email}
        />

        <label className="login__label" htmlFor="password">
          Password
        </label>
        <input
          className="login__input"
          onChange={handlePassword}
          type="password"
          name="password"
          id="password"
          value={loginUser.password}
        />

        <input className="login__submit" type="submit" value="Iniciar Sesión" />
      </form>
    </div>
  );
}

export default Login;
