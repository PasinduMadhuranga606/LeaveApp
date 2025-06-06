import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  getEmployees,
  addEmployee,
  upload,
  getEmployee,
  editEmployee,
} from "../controllers/employeeController.js";

const router = express.Router();

router.get("/", authMiddleware, getEmployees);
router.post("/add", authMiddleware, upload.single("image"), addEmployee);
router.get("/:id", authMiddleware, getEmployee);
router.put("/:id", authMiddleware, editEmployee);
// router.delete("/:id", authMiddleware, deleteDepartment);

export default router;
