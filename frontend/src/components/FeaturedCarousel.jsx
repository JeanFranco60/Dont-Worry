import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard.jsx";

import { ToastContainer } from "react-toastify";

function FeaturedCarousel({ products, loading }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,

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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="py-5" id="featured">
      <div className="container">
        <h2 className="text-center text-2xl font-bold pb-3">Destacados</h2>

        {loading ? (
          <p className="text-center">Cargando...</p>
        ) : (
          <Slider {...settings} className="m-3">
            {products.map((product) => (
              <div
                key={product.id}
                className="p-1 flex justify-center items-center"
              >
                <div className="w-full max-w-sm ">
                  {/* Aquí el ProductCard es más grande */}
                  <ProductCard product={product} />
                </div>
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
