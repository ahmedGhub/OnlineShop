const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

// a constant just for practice
const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    res.render("add-product", { "pageTitle": "AddingProduct" });
});

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
    products.push({ title: req.body.title, prods: products });
    console.log(products);
    res.redirect('/');
});

exports.products = products;
exports.routes = router;