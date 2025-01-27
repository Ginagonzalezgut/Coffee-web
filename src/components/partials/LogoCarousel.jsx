import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../scss/components/LogoCarousel.scss";

function LogoCarousel({ shops }) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  function RenderLogos(shops) {
    return shops.map((shop) => {
      return (
        <a href={`#shop-${shop.id_shop}`}>
          <img
            className="logos__carousel__item"
            src={`/logos/${shop.logo_url}`}
            alt={shop.name}
            style={{
              backgroundColor: `#${shop.color}`,
            }}
          />
        </a>
      );
    });
  }
  return (
    <div className="logos__carousel">
      <Slider {...settings}>{RenderLogos(shops)}</Slider>
    </div>
  );
}

export default LogoCarousel;
