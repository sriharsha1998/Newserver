const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize");

const Cart = sequelize.define(
  "Cart", // table name from pg
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "product",
        key: "id",
      },
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "cart",
    schema: "rectify",
    timestamps: false, // This will add createdAt and updatedAt fields
  }
);

module.exports = Cart;
