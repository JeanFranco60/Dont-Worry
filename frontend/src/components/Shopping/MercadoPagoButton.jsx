import React, { useEffect } from "react";
import { createPreference } from "../../../services/mercadoPagoServices";

const MercadoPagoButton = ({ items, payer }) => {
  const handlePayment = async () => {
    try {
      const preference = await createPreference(items, payer);

      const script = document.createElement("script");
      script.src = "https://sdk.mercadopago.com/js/v2";
      script.async = true;

      script.onload = () => {
        const mp = new window.MercadoPago(process.env.VITE_MP_PUBLIC_KEY, {
          locale: "es-AR",
        });

        mp.checkout({
          preference: {
            id: preference.id,
          },
          autoOpen: true,
        });
      };

      document.body.appendChild(script);
    } catch (error) {
      console.error("Error al iniciar el pago:", error.message);
    }
  };

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={handlePayment}
    >
      Pagar con MercadoPago
    </button>
  );
};

export default MercadoPagoButton;
