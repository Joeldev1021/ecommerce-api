const ProductoSchema = require("../models/product");

class ProductController {
    async createProduct (req, res) {
        try {
            const productFind = await ProductoSchema.findOne({ name: req.body.name });
            if (productFind) return res.json({ message: "Product already exists" });
            const product = new ProductoSchema(req.body);
            const productSave = await product.save();
            res.json(`${productSave.name} created`);
        } catch (error) {
            res.json({ message: error });
        }
    };

    async getProductById (req, res) {
        try {
            const product = await ProductoSchema.findById(req.params.id);
            if (!product) return res.json({ message: "Product not found" });
            res.json(product);
        } catch (error) {
            res.json({ message: error });
        }
    }

    async getAllProduct (req, res) {
        try {
            const product = await ProductoSchema.find();
            res.json(product);
        } catch (error) {
            res.json({ message: error });
        }
    };

    async updateProduct (req, res) {
        try {
            const product = await ProductoSchema.findByIdAndUpdate(req.params.id, req.body);
            if (!product) return res.json({ message: "Product not found" });
            res.json(`${product.name} updated`);
        } catch (error) {
            res.json({ message: error });
        }
    };

    async deleteProduct (req, res) {
        try {
            const product = await ProductoSchema.findByIdAndDelete(req.params.id);
            if (!product) return res.json({ message: "Product not found" });
            res.json(`${product.name} deleted`);
        } catch (error) {
            res.json({ message: error });
        }
    }
}

module.exports = new ProductController();
