const getUser = (req, res) => {
  res.send("user");
};

const createUser = (req, res) => {
  res.send("create user");
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
