import userModel from "../../models/userModel/index.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import validator from "validator";

const createToken = (user) => {
  return jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

const registerUser = async (req, res) => {
  const { fullName, email, password, age, gender, role, dateofbirth } = req.body;

  try {
    const emailExist = await userModel.findOne({ email });
    if (emailExist) {
      return res.json({ success: false, message: "Email Already Exists" });
    }
    if (role != "Admin" && role != "User") {
      res.json({ success: false, message: "Role should be Admin or User" })
    }

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "please enter valid email",
      });
    }

    if (password.length < 8) {
      res.json({
        success: false,
        message: "Please enter password with alteast 8 characters",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({
      role: role,
      fullName: fullName,
      email: email,
      password: hashedPassword,
      age: age,
      gender: gender,
      dateofbirth: dateofbirth,
    });

    const user = await newUser.save();
    const token = createToken(user);
    return res.json({ success: true, token });
  } catch (error) {
    console.log("Error");
    return res.json({ success: false, message: error.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({ success: false, message: "User dont Exist" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success: false, message: "Invalid Crediantials" });
    }
    const token = createToken(user);
    return res.json({ success: true, token });
  } catch (error) {
    return res.json({ success: false, message: error });
  }
};

export { registerUser, loginUser };
