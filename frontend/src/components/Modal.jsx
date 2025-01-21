import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/shoppingCartReducer";
import { toast } from "sonner";

export function ProductModal({ product, isOpen, onClose }) {
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addProduct({ ...product, qty: 1 })); // Agregar con cantidad predeterminada de 1
    toast(`${product.name} añadido al carrito`);
    onClose(); // Cierra el modal
  };

  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-full sm:max-w-md md:max-w-2xl lg:max-w-3xl w-full p-4 md:p-6 ">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold text-center">
            {product.name}
          </DialogTitle>
          <DialogDescription className="text-center text-sm md:text-lg mt-2 text-gray-600">
            <strong>Precio: ${product.price.toFixed(2)}</strong>
          </DialogDescription>
        </DialogHeader>

        {/* Contenido principal con desplazamiento */}
        <div
          className="flex flex-col md:flex-row gap-6 py-4 overflow-auto"
          style={{ maxHeight: "calc(80vh - 100px)" }}
        >
          {/* Imagen destacada del producto */}
          <div className="flex-1 max-w-md mx-auto md:mx-0 md:max-w-none">
            <img
              src={`${import.meta.env.VITE_IMG_PATH}${product.pic}`}
              alt={product.name}
              className="w-full h-auto object-contain rounded-lg shadow-md"
              style={{ maxHeight: "400px" }}
            />
          </div>

          {/* Detalles y acciones */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Descripción del producto */}
            <p className="text-sm md:text-base text-gray-700 mb-6">
              {product.description ||
                "Este producto no tiene una descripción detallada."}
            </p>

            <DialogFooter className="flex flex-col sm:flex-row gap-4 border-border">
              <Button
                variant="primary"
                className="w-full sm:w-auto focus:outline-none"
                onClick={onClose}
              >
                Cerrar
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => handleAddToCart(product)}
              >
                Agregar al carrito
              </Button>
              <Button
                variant="secondary"
                className="w-full sm:w-auto"
                onClick={onClose}
              >
                Seguir explorando
              </Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductModal;
