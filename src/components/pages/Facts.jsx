import React from "react";
import "../../../src/scss/components/Facts.scss";

function Facts() {
  return (
    <div className="facts">
      <div className="facts__container">
        <div className="facts__grid">
          <div className="facts__box">
            <span className="facts__number">6</span>
            <span className="facts__name">Categorías</span>
          </div>
          <div className="facts__box">
            <span className="facts__number">180+</span>
            <span className="facts__name">Restaurantes</span>
          </div>
          <div className="facts__box">
            <span className="facts__number">2K+</span>
            <span className="facts__name">Reseñas</span>
          </div>
          <div className="facts__box">
            <span className="facts__number">3K+</span>
            <span className="facts__name">Usuarios</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Facts;
