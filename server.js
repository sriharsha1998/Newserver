const cors = require("cors");
const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const dotenv = require("dotenv");

// Import Sequelize configuration
const sequelize = require("./db/sequelize");

dotenv.config();
const app = express();
const port = process.env.PORT;

// Middleware
app.use(express.json());

// app.use(cors);
app.use(cors({ origin: "*" }));

// Swagger configuration
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "E-commerce API",
      version: "1.0.0",
      description: "API documentation for E-commerce application",
    },
    servers: [
      {
        url: `http://localhost:${port}`,
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Routes
const categoryRoutes = require("./routes/categories");
const productRoutes = require("./routes/products");
const cartRoutes = require("./routes/carts");

app.use("/api/category", categoryRoutes);
app.use("/api/products", productRoutes);
app.use("/api/carts", cartRoutes);

// Sync database and start server
sequelize
  .sync()
  .then(() => {
    console.log("Database synced successfully");
    // Start server
    app.listen(port, () => {
      // console.log(Server running on port ${port});
    });
  })
  .catch((err) => {
    console.error("Unable to sync database:", err);
  });
