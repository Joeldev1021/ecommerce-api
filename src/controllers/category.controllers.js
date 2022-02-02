const Category = require("../models/category");

class CategoryController {
    async createCategory (req, res) {
        const { name } = req.body;
        try {
            const categoryFind = await Category.findOne({ name });
            console.log(categoryFind);
            if (categoryFind) return res.json({ message: "Category already exists" });
            const category = new Category({ name });
            const categorySave = await category.save();
            res.json(`${categorySave.name} created`);
        } catch (error) {
            res.json({ message: error });
        }
    };

    async getAllCategory (req, res) {
        try {
            const categories = await Category.find();
            res.json(categories);
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
        try {
            const categroyUpdate = await Category.findByIdAndUpdate(req.params.id, req.body);
            if (!categroyUpdate) return res.json({ message: "Category not found" });
            res.json(categroyUpdate);
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
