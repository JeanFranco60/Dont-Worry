module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Products", [
      {
        name: "Collar A",
        price: 50.0,
        category: "metal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Collar B",
        price: 30.0,
        category: "cuero",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
