// ProductCard.js
import * as React from "react";
import { Button } from "@/components/ui/button";
import { Heart, Plus } from "lucide-react";

function ProductCard({ product, favorites, toggleFavorite }) {
  return (
    <div className="relative bg-transparent">
      {/* Contenedor flex para dividir imagen y texto */}
      <div className="flex flex-col h-full">
        {/* Imagen del producto (ocupa el 90%) */}
        <div className="relative overflow-hidden flex-1">
          <img
            src={`${import.meta.env.VITE_IMG_PATH}${product.pic}`}
            alt={product.name}
            className="object-cover w-full h-full"
          />
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
            className="absolute bottom-3 left-1/2 transform -translate-x-1/2 bg-black border-1  rounded-full text-white w-5 h-5 text-xs hover:bg-gray-100 hover:scale-110 transition-all"
          >
            <Plus />
          </Button>
        </div>

        {/* Información del producto (debajo de la imagen) */}
        <div className="bg-transparent text-center border border-black">
          <h3 className="text-black font-medium text-base md:text-sm lg:text-base truncate m-0">
            {product.name}
          </h3>
          <span className="text-gray-600 text-xs md:text-sm">
            {product.category}
            <p className="font-bold text-sm md:text-base m-0">
              UYU {product.price}
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
