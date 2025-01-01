import React from "react";
import { Link } from "react-router-dom";

const Accessories = () => {
  // Simulando un array de productos de accesorios
  const accessories = [
    {
      id: 1,
      name: "Collar de cuero",
      imageUrl: "/images/collar1.jpg",
      price: "$20",
    },
    {
      id: 2,
      name: "Pulsera de plata",
      imageUrl: "/images/pulsera1.jpg",
      price: "$15",
    },
    {
      id: 3,
      name: "Anillo de oro",
      imageUrl: "/images/anillo1.jpg",
      price: "$50",
    },
    {
      id: 4,
      name: "Reloj de acero",
      imageUrl: "/images/reloj1.jpg",
      price: "$100",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-10">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-semibold text-gray-800">Accesorios</h1>
        <p className="text-lg text-gray-600">
          Explora nuestra colección de accesorios exclusivos
        </p>
      </div>

      {/* Productos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {accessories.map((accessory) => (
          <div
            key={accessory.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={accessory.imageUrl}
              alt={accessory.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                {accessory.name}
              </h3>
              <p className="text-lg text-gray-600 mt-2">{accessory.price}</p>
              <Link
                to={`/product/${accessory.id}`}
                className="mt-4 inline-block bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
              >
                Ver producto
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;
