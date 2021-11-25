const createCategory = (req, res) => {
  res.send("create category");
};

const getCategory = (req, res) => {
  res.send("get category");
};

const editeCategory = (req, res) => {
  res.send("edite category");
};

const deleteCategory = (req, res) => {
  res.send("delete category");
};

module.exports = { createCategory, getCategory, editeCategory, deleteCategory };
