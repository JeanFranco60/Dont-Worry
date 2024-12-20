import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export function ProductModal({ product, addToCart, isOpen, onClose }) {
  if (!product) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-full sm:max-w-md md:max-w-2xl lg:max-w-3xl w-full p-4 md:p-6  bg-custom-light">
        <DialogHeader>
          <DialogTitle className="text-lg md:text-2xl font-bold">
            {product.name}
          </DialogTitle>
          <DialogDescription className="text-sm md:text-lg text-bold">
            <strong>Precio: ${product.price.toFixed(2)}</strong>
          </DialogDescription>
        </DialogHeader>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 py-4">
          {/* Imagen del producto */}
          <div className="flex-1">
            <img
              src={`${import.meta.env.VITE_IMG_PATH}${product.pic}`}
              alt={product.name}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          {/* Descripción y botones */}
          <div className="flex-1 flex flex-col justify-between">
            <p className="text-sm md:text-base mb-4">
              {product.description || "Sin descripción."}
            </p>

            <DialogFooter className="flex flex-col sm:flex-row gap-4 border-border">
              <Button
                variant="primary"
                className="w-full sm:w-auto border border-gray-300 hover:border-gray-400 focus:outline-none"
                onClick={onClose}
              >
                Cerrar
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto"
                onClick={() => addToCart(product.id)}
              >
                Agregar al carrito
              </Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductModal;
