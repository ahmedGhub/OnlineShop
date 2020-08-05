const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const ejs = require("ejs");
const app = express();


const productController = require('./controllers/products');
const shopController = require('./controllers/shop');
app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes.routes);
app.use(shopRoutes);

app.use('/', productController.get404);

app.listen(3000);