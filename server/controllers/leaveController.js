import Employee from "../models/Employee.js";
import Leave from "../models/Leave.js";

const addLeave = async (req, res) => {
  try {
    const { userId, leaveType, leaveDuration, fromDate, toDate, description } =
      req.body;

    const employee = await Employee.findOne({ userId });

    const newLeave = new Leave({
      employeeId: employee._id,
      leaveType,
      leaveDuration,
      fromDate,
      toDate,
      description,
    });
    await newLeave.save();
    return res.status(200).json({ success: true, leave: newLeave });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "add leave server error" });
  }
};

const getLeaves = async (req, res) => {
  try {
    const { id } = req.params;
    const employee = await Employee.findOne({ userId: id });
    const leaves = await Leave.find({ employeeId: employee._id });
    return res.status(200).json({ success: true, leaves });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, error: "get leaves server error" });
  }
};

export { addLeave, getLeaves };
