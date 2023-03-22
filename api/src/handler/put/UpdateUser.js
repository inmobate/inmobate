const { User } = require("../../db");

const UpdateUser = async (id, name, lastName, email, password) => {
  try {
    const findUser = await User.findByPk(id);
    if (!findUser) throw new Error("Id not found");
    else {
      const newUser = await User.upsert({
        id,
        name,
        lastName,
        email,
        password,
      });
      return newUser;
    }
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = UpdateUser;
