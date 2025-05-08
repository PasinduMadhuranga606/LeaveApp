import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  getDepartments,
  addDepartment,
  getDepartment,
  editDepartment,
} from "../controllers/departmentController.js";

const router = express.Router();

router.get("/", authMiddleware, getDepartments);
router.post("/add", authMiddleware, addDepartment);
router.get("/:id", authMiddleware, getDepartment);
router.put("/:id", authMiddleware, editDepartment);

export default router;
