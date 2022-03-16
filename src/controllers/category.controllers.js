const Category = require("../models/category");

class CategoryController {
    async createCategory (req, res) {
        const { name } = req.body;
        try {
            const categoryFind = await Category.findOne({ name });
            if (categoryFind) return res.json({ message: "Category already exists" });
            const category = new Category(req.body);
            const categorySave = await category.save();
            res.json(`${categorySave.name} created`);
        } catch (error) {
            res.json({ message: error });
        }
    };

    async getAllCategory (req, res) {
        const { limit = 10, from = 0 } = req.query;
        const query = { state: true };
        try {
            const [count, categories] = await Promise.all([
                Category.countDocuments(query),
                Category.find(query).skip(Number(from)).limit(Number(limit))
            ]);

            return res.json({ count, categories });
        } catch (error) {
            res.json({ message: error });
        }
    };

    async getCategoryById (req, res) {
        try {
            const category = await Category.findById(req.params.id);
            if (!category) return res.json({ message: "Category not found" });
            res.json(category);
        } catch (error) {
            res.json({ message: error });
        }
    };

    async updateCategory (req, res) {
        console.log("update");
        try {
            const categroyUpdate = await Category.findByIdAndUpdate(req.params.id, req.body);
            if (!categroyUpdate) return res.json({ message: "Category not found" });
            res.json(`${categroyUpdate.name} updated`);
        } catch (error) {
            res.json({ message: error });
        }
    };

    async deleteCategory (req, res) {
        try {
            const categoryDelete = await Category.findByIdAndDelete(req.params.id);
            if (!categoryDelete) return res.json({ message: "Category not found" });
            res.json(`${categoryDelete.name} deleted`);
        } catch (error) {
            res.json({ message: error });
        }
    };
}

module.exports = new CategoryController();
