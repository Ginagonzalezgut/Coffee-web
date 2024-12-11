function LogoCarousel({ shops }) {
  function RenderLogos(shops) {
    return shops.map((shop) => {
      return (
        <a href={`#shop-${shop.id_shop}`}>
          <img
            className="logos__carousel__item"
            src={`/logos/${shop.logo_url}`}
            alt={shop.name}
          />
        </a>
      );
    });
  }
  return (
    <div className="logos__carousel">
      <div className="logos__carousel__scrollable">
        <div className="logos__carousel__list">{RenderLogos(shops)}</div>
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
