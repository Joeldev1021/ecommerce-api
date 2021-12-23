const User = require("../models/user");

const getUser = (req, res) => {
  res.send("user");
};

const createUser = async (req, res, next) => {
  const { name, email, password, role } = req.body;
  const user = new User({ name, email, password, role });
  try {
    const userSave = await user.save();
    res.json(`${userSave.name} created`);
  } catch (error) {
    if (error.code === 11000) res.status(400).json({ message: "The email already exists" });
    next();
  }
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
