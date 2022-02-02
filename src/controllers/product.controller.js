class ProductController {
    async cretaeProduct (req, res) {
        res.send("create product");
    };

    async getProduct (req, res) {
        res.send("get product");
    };

    async editeProduct (req, res) {
        res.send("edite product");
    };

    async deleteProduct (req, res) {
        res.send("delete product");
    }
}

module.exports = new ProductController();
