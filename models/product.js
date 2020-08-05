const fs = require('fs');
const path = require('path');
const rootdir = require('../util/path');
const { PassThrough } = require('stream');




module.exports = class Product {
    constructor(title) {
        this.title = title;
    }
    save() {
        const p = path.join(rootdir, 'data', 'products.json');
        let products = [];
        // no need to require JSON it already a utility in vanilla node.js
        // reading the file in the path p to the filecontent variable
        fs.readFile(p, (err, filecontent) => {

            // if not empty 
            if (!err) {
                console.log("you should not be here, this is your first product ");

                products = JSON.parse(filecontent);

            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (errr) => { console.log(errr) });
        });


    }

    static fetchAll(cb) {
        const p = path.join(rootdir, 'data', 'products.json');
        fs.readFile(p, (err, filecontent) => {
            let products = [];
            // if not empty 
            if (!err) {
                products = JSON.parse(filecontent);
                cb(products);

            }
            cb(products);
        });
    }
}