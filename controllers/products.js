const Product = require('../models/product');


exports.getAddProducts = (req, res, next) => {
    let products = Product.fetchAll();
    res.render("add-product", { pageTitle: "Adding Product" });
};

exports.postAddProduct = (req, res, next) => {
    let prod = new Product(req.body.title);
    prod.save()

    res.redirect('/');
};

exports.get404 = (req, res, next) => {
    res.status(404).render("404", { "pageTitle": "Page Not Found " });
};