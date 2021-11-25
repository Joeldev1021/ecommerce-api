const cretaeProduct = (req, res) => {
  res.send("create product");
};

const getProduct = (req, res) => {
  res.send("get product");
};

const editeProduct = (req, res) => {
  res.send("edite product");
};

const deleteProduct = (req, res) => {
  res.send("delete product");
};

module.exports = { cretaeProduct, getProduct, editeProduct, deleteProduct };
