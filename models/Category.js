const { DataTypes } = require("sequelize");
const sequelize = require("../db/sequelize.js");
const Category = sequelize.define(
  "Category",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "category",
    schema: "rectify",
    timestamps: false,
  }
);

module.exports = Category;
