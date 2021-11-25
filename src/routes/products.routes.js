const express = require("express");
const router = express.Router();

const { cretaeProduct, deleteProduct, editeProduct, getProduct } = require("../controllers/product.controller");

router.get("/", getProduct);

router.post("/", cretaeProduct);

router.put("/", editeProduct);

router.delete("/", deleteProduct);

module.exports = router;
