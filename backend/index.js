const express = require("express");
const sequelize = require("./config/db");
const productRoutes = require("../routes/productRoutes");
require("dotenv").config();

const app = express();
app.use(express.json());
app.use("/api/products", productRoutes);

sequelize.sync().then(() => {
  console.log("Base de datos sincronizada.");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
);
