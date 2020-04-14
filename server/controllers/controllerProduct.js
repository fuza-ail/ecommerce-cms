const { Product } = require('../models');

class controllerProduct {
  static getProduct(req, res, next) {
    Product.findAll()
      .then(products => {
        res.status(200).json(products)
      })
      .catch(err => {
        next(err)
      })
  }
  static addProduct(req, res, next) {
    Product.create({
      name: req.body.name,
      image_url: req.body.image_url,
      price: req.body.price,
      stock: req.body.stock,
      category: req.body.category,
      description: req.body.description,
      AdminId: req.user.UserId
    })
      .then(product => {
        res.status(201).json({ message: `${product.name} has been created` })
      })
      .catch(err => {
        next(err)
      })
  }
  static deleteProduct(req, res, next) {
    Product.findByPk(req.params.id)
      .then(product => {
        return Product.destroy({ where: { id: req.params.id } })
      })
      .then(product => {
        res.status(200).json({ message: 'Product successfully deleted' })
      })
      .catch(err => {
        next(err)
      })
  }

  static editProduct(req, res, next) {
    Product.findByPk(req.params.id)
      .then(product => {
        return Product.update({
          name: req.body.name,
          image_url: req.body.image_url,
          price: req.body.price,
          stock: req.body.stock,
          category: req.body.category,
          description: req.body.description,
        },{where:{id:req.params.id}})
      })
      .then(product=>{
        res.status(200).json({messag: `${product.name} has been edited`})
      })
      .catch(err=>{
        next(err)
      })
  }
}

module.exports = controllerProduct