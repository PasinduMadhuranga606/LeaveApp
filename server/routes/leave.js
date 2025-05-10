import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { addLeave } from "../controllers/leaveController.js";

const router = express.Router();

//router.get("/", authMiddleware, getDepartments);
router.post("/add", authMiddleware, addLeave);
//router.get("/:id", authMiddleware, getDepartment);
//router.put("/:id", authMiddleware, editDepartment);
//router.delete("/:id", authMiddleware, deleteDepartment);

export default router;
