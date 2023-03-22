const { User } = require("../../db");

const newPostUser = async ( name, lastName, email, password ) => {
  if (!name, !lastName, !email, !password) throw new Error("Incomplete information")

  try {
    await User.create({ name, lastName, email, password });

    return ("User created succesfully")

  } catch (error) {
    return { error: error.message };
  }
};

module.exports = newPostUser;
