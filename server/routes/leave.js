import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  addLeave,
  getLeave,
  getLeaves,
  viewLeave,
} from "../controllers/leaveController.js";

const router = express.Router();

router.get("/", authMiddleware, getLeaves);
router.post("/add", authMiddleware, addLeave);
router.get("/:id", authMiddleware, getLeave);
router.get("/view/:id", authMiddleware, viewLeave);
//router.put("/:id", authMiddleware, editDepartment);
//router.delete("/:id", authMiddleware, deleteDepartment);

export default router;
