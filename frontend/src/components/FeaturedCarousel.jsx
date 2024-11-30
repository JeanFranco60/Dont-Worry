import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "../components/ProductCard";
import Toast from "../components/ui/toast";

function FeaturedCarousel({ products, loading }) {
  const [favorites, setFavorites] = React.useState({});
  const [toastMessage, setToastMessage] = React.useState("");

  const toggleFavorite = (productId) => {
    setFavorites((prev) => ({
      ...prev,
      [productId]: !prev[productId],
    }));
    setToastMessage(productId);
  };

  return (
    <section className="py-5" id="featured">
      <div className="container mx-auto px-4">
        <h2 className="text-center mb-5 text-2xl font-bold">Destacados</h2>

        {loading ? (
          <p className="text-center">Cargando...</p>
        ) : (
          <Carousel opts={{ align: "start" }} className="w-full ">
            <CarouselContent className="">
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="flex-shrink-0 w-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-2"
                >
                  {/* Usamos el nuevo componente ProductCard */}
                  <ProductCard
                    product={product}
                    favorites={favorites}
                    toggleFavorite={toggleFavorite}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:block" />
            <CarouselNext className="hidden md:block" />
          </Carousel>
        )}
      </div>

      <Toast
        productId={toastMessage}
        products={products}
        favorites={favorites}
      />
    </section>
  );
}

export default FeaturedCarousel;
