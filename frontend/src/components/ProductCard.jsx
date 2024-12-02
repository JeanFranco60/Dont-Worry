import { Heart } from "lucide-react";
import { Button } from "react-bootstrap";
import { CirclePlus } from "lucide-react";

function ProductCard({
  product,
  favorites = {},
  toggleFavorite,
  addToCrt,
  openProductModal,
}) {
  const isFavorite = Boolean(favorites?.[product?.id]);

  if (!product) {
    console.error("El objeto 'product' no está definido.");
    return null;
  }

  return (
    <div className="mb-6 relative group">
      <div className="relative">
        <img
          src={`${import.meta.env.VITE_IMG_PATH}${product.pic}`}
          alt={product.name}
          className="w-full object-cover"
        />

        <button
          onClick={() => addToCart(product.id)}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-4 w-10 h-10 "
        >
          <CirclePlus className="active:scale-110 h-6 w-6" color="#808080" />
        </button>

        <Button
          size="icon"
          variant="ghost"
          className="absolute top-3 right-3 p-0 focus:outline-none bg-transparent"
          onClick={() => {
            toggleFavorite(product.id);
            openProductModal(product); // Abrir el modal
          }}
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart
            className={`w-7 h-7 transition-colors duration-300 ${
              isFavorite
                ? "fill-red-500 text-red-500"
                : "fill-none text-gray-400 "
            }`}
          />
        </Button>
      </div>
      <div className="pt-2">
        <h3 className="m-0 text-sm font-semibold text-gray-800 truncate">
          {product.name}
        </h3>
        <p className="text-lg font-semibold text-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default ProductCard;
