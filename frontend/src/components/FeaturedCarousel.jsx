import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Heart, Plus } from "lucide-react";
import Toast from "../components/ui/toast";

function FeaturedCarousel({ products, loading }) {
  const [favorites, setFavorites] = React.useState({});
  const [toastMessage, setToastMessage] = React.useState("");

  const toggleFavorite = (productId) => {
    setFavorites((prev) => {
      const updatedFavorites = { ...prev };
      updatedFavorites[productId] = !updatedFavorites[productId];
      setToastMessage(productId); // Trigger toast after changing favorite state
      return updatedFavorites;
    });
  };

  return (
    <section className="py-5" id="featured">
      <div className="container mx-auto">
        <h2 className="text-center mb-5 text-2xl font-bold">Destacados</h2>

        {loading ? (
          <p className="text-center">Cargando...</p>
        ) : (
          <Carousel
            opts={{ align: "start" }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent className="flex">
              {products.map((product) => (
                <CarouselItem key={product.id} className="p-2">
                  <div className="relative bg-transparent border border-black flex flex-col">
                    {/* Imagen del producto */}
                    <div className="relative overflow-hidden flex-1">
                      <img
                        src={`${import.meta.env.VITE_IMG_PATH}${product.pic}`}
                        alt={product.name}
                        className="object-cover w-full h-full"
                      />
                      {/* Botón de favorito */}
                      <Button
                        size="icon"
                        variant="ghost"
                        className="absolute top-2 right-2 bg-white/80 hover:bg-white/90 h-6 w-6"
                        onClick={() => toggleFavorite(product.id)}
                      >
                        <Heart
                          className={`w-2 h-2 ${
                            favorites[product.id]
                              ? "fill-black text-black"
                              : "fill-gray text-gray-400"
                          }`}
                        />
                      </Button>
                      {/* Botón "+" flotante */}
                      <Button
                        size="icon"
                        className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-white rounded-full text-black w-6 h-6 text-xs hover:bg-gray-100 hover:scale-110 transition-all"
                      >
                        <Plus />
                      </Button>
                    </div>

                    {/* Información del producto */}
                    <div className="text-center border-t border-black p-2">
                      <h3 className="text-black font-medium text-base truncate">
                        {product.name}
                      </h3>
                      <span className="text-gray-600 text-xs">
                        {product.category}
                      </span>
                      <p className="font-bold text-sm md:text-base py-0">
                        UYU {product.price}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
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
