import React, { useState, useEffect } from "react";

const Toast = ({ productId, products, favorites }) => {
  const [visible, setVisible] = useState(false);
  const product = products.find((p) => p.id === productId);
  const action = favorites[productId] ? "añadido a" : "eliminado de";

  useEffect(() => {
    if (productId) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), 3000);
      return () => clearTimeout(timer);
    }
  }, [productId]);

  if (!visible || !product) return null;

  return (
    <div className="fixed top-5 right-5 bg-black text-white py-3 px-4 rounded-md shadow-lg text-sm">
      <div className="flex items-center justify-between">
        <span>
          El producto <strong>{product.name}</strong> fue {action} favoritos.
        </span>
        <button
          onClick={() => setVisible(false)}
          className="text-white font-bold ml-3 hover:text-gray-400"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
