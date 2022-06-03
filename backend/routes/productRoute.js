const express = require("express");

const router = express.Router();

const { getProducts, newProduct } = require("../controllers/productController");

// router.route("/products").get(getProducts);
router.get("/products", getProducts);

// router.route("/product/new") / this.post(newProduct);
router.post("/product/new", newProduct);

module.exports = router;