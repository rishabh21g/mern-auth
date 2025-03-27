import User from "../model/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;
  const bcryptPassword = bcrypt.hashSync(password , 10)
  const newUser = new User({ username, email, password :bcryptPassword });
  try {
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log("Something went wrong", err.message);
  }
};
