import multer from "multer";
import Employee from "../models/Employee.js";
import User from "../models/User.js";
import Department from "../models/Department.js";
import bcrypt from "bcrypt";
import path from "path";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find()
      .populate("userId", { password: 0 })
      .populate("department");
    return res.status(200).json({ success: true, employees });
  } catch (error) {
    return res
      .success(500)
      .json({ success: false, error: "get employees server error" });
  }
};

const addEmployee = async (req, res) => {
  try {
    const {
      name,
      email,
      employeeId,
      dob,
      gender,
      maritalStatus,
      designation,
      department,
      employmentType,
      password,
      role,
    } = req.body;

    const user = await User.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ success: false, error: "user already registered in employee" });
    }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
      role,
      profileImage: req.file ? req.file.filename : "",
    });
    const savedUser = await newUser.save();

    const newEmployee = new Employee({
      userId: savedUser._id,
      employeeId,
      dob,
      gender,
      maritalStatus,
      designation,
      department,
      employmentType,
    });
    await newEmployee.save();
    return res.status(200).json({ success: true, message: "employee created" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "add employee server error" });
  }
};

const getEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    let employee;
    employee = await Employee.findById({ _id: id })
      .populate("userId", { password: 0 })
      .populate("department");
    if (!employee) {
      employee = await Employee.findOne({ userId: id })
        .populate("userId", { password: 0 })
        .populate("department");
    }
    return res.status(200).json({ success: true, employee });
  } catch (error) {
    return res
      .success(500)
      .json({ success: false, error: "get employee server error" });
  }
};

const editEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      name,
      gender,
      maritalStatus,
      designation,
      department,
      employmentType,
    } = req.body;

    const employee = await Employee.findById({ _id: id });
    if (!employee) {
      return res
        .success(404)
        .json({ success: false, error: "employee not found" });
    }

    const user = await User.findById({ _id: employee.userId });
    if (!user) {
      return res.success(404).json({ success: false, error: "user not found" });
    }

    const updateUser = await User.findByIdAndUpdate(
      { _id: employee.userId },
      { name }
    );

    const updateEmployee = await Employee.findByIdAndUpdate(
      { _id: id },
      {
        gender,
        maritalStatus,
        designation,
        department,
        employmentType,
      }
    );

    if (!updateEmployee || !updateUser) {
      return res
        .success(404)
        .json({ success: false, error: "document not found" });
    }

    return res.status(200).json({ success: true, message: "employee updated" });
  } catch (error) {
    return res
      .success(500)
      .json({ success: false, error: "edit employee server error" });
  }
};

export { addEmployee, upload, getEmployees, getEmployee, editEmployee };
