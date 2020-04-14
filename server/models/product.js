'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sequelize = sequelize.Sequelize;
  const Model = Sequelize.Model;

  class Product extends Model {

  }
  Product.init({
    name: DataTypes.STRING,
    image_url: DataTypes.STRING,
    price: DataTypes.INTEGER,
    stock: DataTypes.INTEGER,
    category: DataTypes.STRING,
    description: DataTypes.STRING,
    AdminId: DataTypes.INTEGER,
    createdAt : new Date(),
    updatedAt : new Date()
  },{sequelize})

  Product.associate = function(models) {
    // associations can be defined here
    Product.belongsTo(models.Admin)
  };
  return Product;
};