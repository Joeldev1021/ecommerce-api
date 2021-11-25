const signin = (req, res) => {
  res.json("auth signin get");
};

const signup = (req, res) => {
  res.json("auth signin post");
};

module.exports = { signin, signup };
