
const isRole = (...roles) => {
    return (req, res, next) => {
        if (!req.user) {
            return res.status(500).json({ msg: "No token" });
        }

        if (!roles.includes(req.user.role)) {
            return res.status(401).json({ msg: "You do not have the permissions" });
        }

        next();
    };
};

const isAdmin = (req, res, next) => {
    const user = req.user;
    if (user.role === "ADMIN_ROLE") {
        next();
    } else {
        return res.status(401).json({ message: "not authorized" });
    }
};

module.exports = { isRole, isAdmin };
