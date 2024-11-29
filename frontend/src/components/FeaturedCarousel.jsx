import * as React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import Toast from "../components/ui/toast";

function FeaturedCarousel({ products, loading }) {
  const [favorites, setFavorites] = React.useState({});
  const [toastMessage, setToastMessage] = React.useState("");

  const toggleFavorite = (productId, productName) => {
    setFavorites((prev) => {
      const newFavorites = {
        ...prev,
        [productId]: !prev[productId],
      };

      setToastMessage(
        newFavorites[productId]
          ? `El producto ${productName} fue añadido a favoritos.`
          : `El producto ${productName} fue eliminado de favoritos.`
      );

      return newFavorites;
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
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="flex">
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="md:basis-1/2 lg:basis-1/3 bg-white"
                >
                  <Card className="flex flex-col overflow-hidden group shadow-none border-none">
                    <CardHeader className="p-0">
                      <div className="relative mb-2 overflow-hidden rounded-t-lg">
                        <img
                          src={`${import.meta.env.VITE_IMG_PATH}${product.pic}`}
                          alt={product.name}
                          className="object-cover w-full h-full transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                        <Button
                          size="icon"
                          variant="ghost"
                          className="absolute top-4 right-4 hover:bg-white/90 bg-white/80"
                          onClick={() =>
                            toggleFavorite(product.id, product.name)
                          }
                        >
                          <Heart
                            className={`w-6 h-6 transition-all duration-300 ${
                              favorites[product.id]
                                ? "fill-black text-black"
                                : "fill-none text-gray-400"
                            }`}
                          />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="p-3">
                      <CardTitle>{product.name}</CardTitle>
                      <CardDescription className="text-xs text-gray-600">
                        {product.category}
                      </CardDescription>
                      <p className="text-xs text-gray-600 line-clamp-2 mt-2">
                        {product.description}
                      </p>
                    </CardContent>
                    <CardFooter className="p-3 pt-0 mt-auto flex justify-between items-center">
                      <span className="text-lg font-bold">
                        ${product.price}
                      </span>
                      <Button
                        variant="outline"
                        className="flex items-center gap-2 text-sm"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Agregar
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:block" />
            <CarouselNext className="hidden md:block" />
          </Carousel>
        )}
      </div>

      <Toast message={toastMessage} />
    </section>
  );
}

export default FeaturedCarousel;
