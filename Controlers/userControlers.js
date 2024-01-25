const User = require("../models/User");
console.log(User);

// @ create User
// @ POST /api/users

const createUser = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    res.status(404).send("Liko neuzpildyti laukeliai");
  }
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  });
  const result = await user.save();
  res.status(200).send(result);
};
module.exports = createUser;

//@ get all user
//@ get /api/users

const getAllUsers = async (req, res) => {
  const usersFromDB = await User.find();
  if (!usersFromDB) {
    res.status(404).send("Data is missing");
    return;
  }
  res.status(200).json(usersFromDB);
};
module.exports = { createUser, getAllUsers };
