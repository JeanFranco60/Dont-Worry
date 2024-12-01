import { Heart } from "lucide-react";
import { Button } from "react-bootstrap";

function ProductCard({ product, favorites = {}, toggleFavorite }) {
  // Validar que product tenga un id válido y favorites esté definido
  const isFavorite = Boolean(favorites?.[product?.id]);

  // Si product no está definido, no renderizar nada
  if (!product) {
    console.error("El objeto 'product' no está definido.");
    return null;
  }

  return (
    <div className="mb-6">
      <div className="relative">
        <img
          src={`${import.meta.env.VITE_IMG_PATH}${product.pic}`}
          alt={product.name}
          className="w-full object-cover"
        />
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-3 right-3 p-0 focus:outline-none bg-transparent"
          onClick={() => toggleFavorite(product.id)} // Usar la función pasada como prop
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`w-7 h-7 transition-colors duration-300 ${
              isFavorite
                ? "fill-red-500 text-red-500"
                : "fill-none text-gray-400 hover:fill-gray-400 hover:text-gray-400"
            }`}
          />
        </Button>
      </div>
      <div className="pt-1">
        {/* Título del producto */}
        <h3 className="m-0 text-sm font-semibold text-gray-800 truncate">
          {product.name}
        </h3>
        {/* Precio del producto */}
        <p className="text-lg font-bold text-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
