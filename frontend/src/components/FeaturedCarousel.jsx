import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard.jsx";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // Usando íconos de FontAwesome
import { ToastContainer, toast } from "react-toastify"; // Importando Toast

const PrevArrow = ({ onClick }) => (
  <button
    className="slick-prev"
    style={{
      backgroundColor: "white",
      color: "black",
      borderRadius: "50%",
      padding: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      left: 0,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
    }}
    onClick={onClick}
  >
    <FaArrowLeft />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="slick-next"
    style={{
      backgroundColor: "white",
      color: "black",
      borderRadius: "50%",
      padding: "10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      position: "absolute",
      right: 0,
      top: "50%",
      transform: "translateY(-50%)",
      zIndex: 1,
    }}
    onClick={onClick}
  >
    <FaArrowRight />
  </button>
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

  const handleFavoriteToggle = (productId, productName) => {
    toggleFavorite(productId, productName);
    toast.success(`${productName} añadido a favoritos`);
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
                  isFavorite={favorites[product.id]}
                  toggleFavorite={() =>
                    handleFavoriteToggle(product.id, product.name)
                  }
                />
              </div>
            ))}
          </Slider>
        )}
      </div>

      <ToastContainer
        className="custom-toast"
        bodyClassName="custom-toast-body"
        position="top-right"
        autoClose={2000}
        hideProgressBar={true}
        closeButton={true}
        theme="dark"
        icon={false}
      />
    </section>
  );
}

export default FeaturedCarousel;
