const controllerProduct = require('../controllers/controllerProduct');
const routerProduct = require('express').Router();
const authentication = require('../middlewares/authentication');
const authorization = require('../middlewares/authorization')


routerProduct.get('/products',controllerProduct.getProduct);
routerProduct.post('/products',authentication,controllerProduct.addProduct);
routerProduct.delete('/products/:id',authentication,authorization,controllerProduct.deleteProduct);
routerProduct.put('/products/:id',authentication,authorization,controllerProduct.editProduct)

module.exports = routerProduct
