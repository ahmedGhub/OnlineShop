const Product = require('../models/product');



exports.getShop = (req, res, next) => {
    let products = Product.fetchAll(prods => {
        res.render("shop", { pageTitle: "Shop2", prods: prods });

    });
};