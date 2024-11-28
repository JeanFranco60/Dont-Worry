import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

function FeaturedCarousel({ products, loading }) {
  return (
    <section className="py-5" id="featured">
      <div className="container mx-auto relative overflow-hidden px-4">
        <h2 className="text-center mb-5 text-2xl font-bold">Destacados</h2>

        {loading ? (
          <p className="text-center">Cargando...</p>
        ) : (
          <Carousel
            opts={{ align: "start" }}
            className="w-full max-w-5xl mx-auto relative"
          >
            <CarouselContent className="flex">
              {products.map((product) => (
                <CarouselItem
                  key={product.id}
                  className="md:basis-1/2 lg:basis-1/3 bg-white"
                >
                  <Card className="h-full shadow-none border-none">
                    <img
                      src={`${import.meta.env.VITE_IMG_PATH}${product.pic}`}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                    <CardContent className="p-2">
                      <h3 className="text-sm font-semibold">{product.name}</h3>
                      <p className="text-xs text-gray-600">${product.price}</p>
                      <Button variant="outline" className="w-full mt-2 text-xs">
                        Ver Detalles
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-2  hidden md:block" />
            <CarouselNext className="absolute right-2  hidden md:block" />
          </Carousel>
        )}
      </div>
    </section>
  );
}

export default FeaturedCarousel;
