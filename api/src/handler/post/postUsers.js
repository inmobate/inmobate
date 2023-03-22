const { User } = require("../../db");
const bcrypt = require("bcrypt");

const signUp = async ( name, lastName, email, password ) => {
  const compare = await findOne({ where: { email: email } })
  if (!name, !lastName, !email, !password) throw new Error("Incomplete information")
  
  if (email === compare.email){
    return("This e-mail is has been  used")
  }

  try {
    hash = await bcrypt.hash(password, 16)
    await User.create({ name, lastName, email, password: hash});
    //const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    //emailService.sendConfirmationEmail(user.email, token);
    return ("User created succesfully", res.redirect("/"))

  } catch (error) {
    return ("Error signing up. Please try again later.")
  }
};

module.exports = {signUp};
