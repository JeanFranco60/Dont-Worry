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
                  className="md:basis-1/2 lg:basis-1/3 p-2"
                >
                  <Card className="h-full border rounded-lg shadow-lg">
                    <img
                      src={`${import.meta.env.VITE_IMG_PATH}${product.pic}`}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <CardContent className="p-4">
                      <h3 className="text-lg font-bold">{product.name}</h3>
                      <p className="text-sm text-gray-600">${product.price}</p>
                      <Button variant="outline" className="w-full mt-4">
                        Ver Detalles
                      </Button>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        )}
      </div>
    </section>
  );
}

export default FeaturedCarousel;
