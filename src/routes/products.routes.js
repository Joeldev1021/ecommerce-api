const { Router } = require("express");
const router = Router();

const ProductController = require("../controllers/product.controller");

router.get("/", ProductController.getAllProduct);

router.post("/", ProductController.createProduct);

router.put("/:id", ProductController.updateProduct);

router.delete("/:id", ProductController.deleteProduct);

module.exports = router;
