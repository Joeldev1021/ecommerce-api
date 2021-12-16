const User = require("../models/user");

const getUser = (req, res) => {
  res.send("user");
};

const createUser = (req, res, next) => {
  const { name, email, password, role } = req.body;
  const user = new User({ name, email, password, role });
  console.log(user);
  res.send("create hola");
};

const editeUser = (req, res) => {
  res.send("edite user");
};

const updateUser = (req, res) => {
  res.send("update user");
};

const deleteUser = (req, res) => {
  res.send("delete user");
};

module.exports = { getUser, createUser, editeUser, updateUser, deleteUser };
