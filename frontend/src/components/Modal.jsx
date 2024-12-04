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
      {" "}
      {/* Controlamos el estado de apertura del modal */}
      <DialogContent className="max-w-full sm:max-w-md md:max-w-2xl lg:max-w-3xl w-full p-4 md:p-6">
        <DialogHeader>
          <DialogTitle className="text-lg md:text-2xl font-bold">
            {product.name}
          </DialogTitle>
          <DialogDescription className="text-sm md:text-lg">
            Precio: ${product.price.toFixed(2)}
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

            <DialogFooter className="flex flex-col sm:flex-row gap-4">
              <Button
                className="w-full sm:w-auto"
                onClick={() => addToCart(product.id)}
              >
                Agregar al carrito
              </Button>
              <Button
                variant="outline"
                className="w-full sm:w-auto"
                onClick={onClose}
              >
                Cerrar
              </Button>
            </DialogFooter>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default ProductModal;
