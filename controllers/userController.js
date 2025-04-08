//Register user: /api/user/register

import User from "../models/User.js";

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.json({
        succsess: false,
        message: "Missing details.",
      });
    }
    const existingUser = await User.findOne({ email });

    if (existingUser)
      return res.json({
        succsess: false,
        message: "User already exists.",
      });
  } catch (error) {}
};
