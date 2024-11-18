const { Product } = require("../models");

module.exports = async () => {
  const productList = [
    {
      id: 1,
      name: "Collar de Cuero Trenzado",
      price: 79.99,
      category: "cuero",
      material: "cuero",
    },
    {
      id: 2,
      name: "Cadena de Plata Fina",
      price: 129.99,
      category: "metal",
      material: "plata",
    },
    {
      id: 3,
      name: "Colgante de Ónix Negro",
      price: 89.99,
      category: "piedra",
      material: "ónix",
    },
    {
      id: 4,
      name: "Collar de Acero Inoxidable",
      price: 69.99,
      category: "metal",
      material: "acero",
    },
    {
      id: 5,
      name: "Gargantilla de Cuero",
      price: 59.99,
      category: "cuero",
      material: "cuero",
    },
    {
      id: 6,
      name: "Collar con Dije de Madera",
      price: 49.99,
      category: "madera",
      material: "madera",
    },
    {
      id: 7,
      name: "Cadena de Oro de 18k",
      price: 299.99,
      category: "metal",
      material: "oro",
    },
    {
      id: 8,
      name: "Collar de Perlas para Hombre",
      price: 159.99,
      category: "piedra",
      material: "perla",
    },
  ];

  await Product.bulkCreate(productList);
  console.log("Product seeder has been ran.");
};
