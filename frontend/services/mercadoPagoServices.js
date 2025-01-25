const API_URL = import.meta.env.VITE_API_URL;

export const createPreference = async (items, payer) => {
  const response = await fetch(`${API_URL}/payments/create-preference`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ items, payer }),
  });

  if (!response.ok) {
    throw new Error("Error al crear la preferencia de pago");
  }

  return await response.json();
};
