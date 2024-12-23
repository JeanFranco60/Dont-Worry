import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Heart, CirclePlus } from "lucide-react";
import ProductModal from "./Modal"; // Asegúrate de importar el modal

function ProductCard({ product, favorites = {}, toggleFavorite, addToCart }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(
    Boolean(favorites?.[product?.id])
  );

  if (!product) {
    console.error("El objeto 'product' no está definido.");
    return null;
  }

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    toggleFavorite(product.id);
  };

  const handleOpenModal = () => {
    setIsOpen(true); // Abre el modal cuando la imagen es tocada
  };

  const handleCloseModal = () => {
    setIsOpen(false); // Cierra el modal
  };

  return (
    <div className="mb-6 relative group">
      <div className="relative">
        {/* Imagen, al hacer clic se abre el modal */}
        <img
          src={`${import.meta.env.VITE_IMG_PATH}${product.pic}`}
          alt={product.name}
          className="w-full object-cover cursor-pointer "
          onClick={handleOpenModal}
        />

        {/* Botón de agregar al carrito, abre el modal también */}
        <button
          onClick={handleOpenModal}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-4 w-10 h-10 rounded-full transition-transform duration-200 hover:scale-110 active:scale-95"
        >
          <CirclePlus className="h-6 w-6" color="#808080" />
        </button>

        {/* Corazón para marcar como favorito */}
        <Button
          size="icon"
          variant="ghost"
          className="absolute top-3 right-3 p-0 focus:outline-none bg-transparent"
          onClick={handleToggleFavorite}
        >
          <Heart
            className={`w-7 h-7 transition-colors duration-300 ${
              isFavorite
                ? "fill-red-500 text-red-500"
                : "fill-none text-gray-400"
            }`}
          />
        </Button>
      </div>

      {/* Título y precio del producto */}
      <div className="pt-2">
        <h3 className="m-0 text-sm font-semibold text-gray-800 truncate">
          {product.name}
        </h3>
        <p className="text-lg font-semibold text-gray-900">
          ${product.price.toFixed(2)}
        </p>
      </div>

      {/* Modal de producto que se abrirá al tocar la imagen */}
      <ProductModal
        product={product}
        addToCart={addToCart}
        isOpen={isOpen} // Controlamos el estado isOpen aquí
        onClose={handleCloseModal} // Método para cerrar el modal
      />
    </div>
  );
}

export default ProductCard;
