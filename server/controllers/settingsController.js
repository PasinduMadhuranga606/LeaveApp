import User from "../models/User.js";
import bcrypt from "bcrypt";

const changePassword = async (req, res) => {
  try {
    //console.log("Payload:", req.body);
    const { userId, oldPassword, newPassword } = req.body;

    const user = await User.findById({ _id: userId });
    if (!user) {
      return res.status(404).json({ success: false, error: "user not found" });
    }

    // console.log("HASH IN DB:", user.password);
    const isMatch = await bcrypt.compare(oldPassword, user.password);
    //console.log(oldPassword);

    if (!isMatch) {
      return res
        .status(404)
        .json({ success: false, error: "wrong old password" });
    }

    const hashPassword = await bcrypt.hash(newPassword, 10);

    const newUser = await User.findByIdAndUpdate(
      { _id: userId },
      { password: hashPassword }
    );

    return res.status(200).json({ success: true });
  } catch (error) {
    //console.error("Server Error:", error);
    return res
      .status(500)
      .json({ success: false, error: "settings server error" });
  }
};

export { changePassword };
