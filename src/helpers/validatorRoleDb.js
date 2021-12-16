
const validatorRoleDb = async (role) => {
  const roleArr = ["ADMIN_ROLE", "USER_ROLE", "SUPER_ADMIN_ROLE"];
  if (!roleArr.includes(role)) {
    throw new Error(`Role ${role} is not valid`);
  }
};

module.exports = { validatorRoleDb };
