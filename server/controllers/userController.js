const User = require("../db/models/user");

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error("Err message:", err.message);
    console.error("Err code", err);
  }

  res.status(200).end();
};
