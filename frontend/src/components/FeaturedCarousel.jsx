import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard.jsx";

const PrevArrow = ({ onClick }) => (
  <button
    className="slick-prev"
    style={{
      backgroundColor: "black",
      color: "white",
      borderRadius: "50%",
      padding: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
    onClick={onClick}
  ></button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="slick-next"
    style={{
      backgroundColor: "black",
      color: "white",
      borderRadius: "50%",
      padding: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
    onClick={onClick}
  ></button>
);

function FeaturedCarousel({ products, loading, favorites, toggleFavorite }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-5" id="featured">
      <div className="container ">
        <h2 className="text-center mb-5 text-2xl font-bold">Destacados</h2>

        {loading ? (
          <p className="text-center">Cargando...</p>
        ) : (
          <Slider {...settings} className="m-3">
            {products.map((product) => (
              <div key={product.id} className="p-3">
                <ProductCard
                  product={product}
                  favorites={favorites}
                  toggleFavorite={toggleFavorite}
                />
              </div>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
}

export default FeaturedCarousel;
