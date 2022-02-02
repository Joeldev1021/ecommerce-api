class AuthController {
    signin (req, res) {
        res.json("auth signin get");
    };

    signup (req, res) {
        res.json("auth signin post");
    };
}

module.exports = new AuthController();
