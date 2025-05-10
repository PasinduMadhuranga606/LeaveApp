import mongoose, { Schema } from "mongoose";

const leaveSchema = new mongoose.Schema({
  employeeId: { type: Schema.Types.ObjectId, ref: "Employee", required: true },
  leaveType: { type: String, required: true },
  leaveDuration: { type: String, required: true },
  fromDate: { type: Date, required: true },
  toDate: { type: Date, required: true },
  description: { type: String, required: true },
  status: {
    type: String,
    enum: ["Pending", "Approved", "Rejected"],
    default: "Pending",
  },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Leave = mongoose.model("Leave", leaveSchema);
export default Leave;
