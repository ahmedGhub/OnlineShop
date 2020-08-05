const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');
const shopcontroller = require('../controllers/shop');

const router = express.Router();

router.get('/', shopcontroller.getShop);

module.exports = router;