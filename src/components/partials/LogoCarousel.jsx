function LogoCarousel({ renderLogos }) {
  return (
    <div className="logos__carousel">
      <div className="logos__carousel__scrollable">
        <div className="logos__carousel__list">{renderLogos()}</div>
      </div>
      <div className="logos__carousel__nav">
        <button className="logos__carousel__nav__control">
          <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button className="logos__carousel__nav__control">
          <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </div>
  );
}

export default LogoCarousel;
