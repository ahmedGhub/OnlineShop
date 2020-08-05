const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();
const productConroller = require('../controllers/products');

// a constant just for practice


// /admin/add-product => GET
router.get('/add-product', productConroller.getAddProducts);

// /admin/add-product => POST
router.post('/add-product', productConroller.postAddProduct);


module.exports = router;