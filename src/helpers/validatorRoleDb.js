
const validatorRoleDb = async (req, res, next) => {
    const roleArr = ["ADMIN_ROLE", "USER_ROLE", "SUPER_ADMIN_ROLE"];
    if (req.body.role === undefined || roleArr.includes(req.body.role)) {
        next();
    }
    if (req.body.role !== "" && !roleArr.includes(req.body.role) && req.body.role !== undefined) {
        throw new Error(`Role ${req.body.role} is not valid`);
    }
    //
    // console.log(role);
    // if (!roleArr.includes(role)) {
    //     if (role === "" || role === undefined) {
    //         req.body.role = "USER_ROLE";
    //         next();
    //     } else {
    //         throw new Error();
    //     }
    // } else {
    //     next();
    // }
};

module.exports = { validatorRoleDb };
