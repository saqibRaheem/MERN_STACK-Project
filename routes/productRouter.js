const router = require('express').Router()
const productCtrl = require('../controllers/productsCtrl')
router.route('/products')
   .get(productCtrl.getProducts)
   .post(productCtrl.createProducts)


   router.route('/products/:id')
   .delete(productCtrl.deleteProducts)
   .put(productCtrl.updateProducts)

module.exports = router