const Product = require('../models/product');

let products = Product.fetchAll();

exports.getShop = (req, res, next) => {
    console.log("in the right place");

    console.log("the products are: ", products);
    res.render("shop", { pageTitle: "Shop2", prods: products });
};