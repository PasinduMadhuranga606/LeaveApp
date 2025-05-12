import express from "express";
import cors from "cors";
import authRouter from "./routes/auth.js";
import departmentRouter from "./routes/department.js";
import employeeRouter from "./routes/employee.js";
import leaveRouter from "./routes/leave.js";
import settingsRouter from "./routes/settings.js";
import dashboardRouter from "./routes/dashboard.js";
import connectToDatabase from "./db/db.js";

connectToDatabase();
const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public/uploads"));
app.use("/api/auth", authRouter);
app.use("/api/department", departmentRouter);
app.use("/api/employee", employeeRouter);
app.use("/api/leave", leaveRouter);
app.use("/api/settings", settingsRouter);
app.use("/api/dashboard", dashboardRouter);
//console.log("Settings router mounted at /api/settings");

app.listen(process.env.PORT, () => {
  console.log(`Server is Running on port ${process.env.PORT}`);
});
