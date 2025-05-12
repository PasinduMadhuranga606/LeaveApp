import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import {
  addLeave,
  getLeave,
  getLeaves,
  viewLeave,
  updateLeave,
} from "../controllers/leaveController.js";

const router = express.Router();

router.get("/", authMiddleware, getLeaves);
router.post("/add", authMiddleware, addLeave);
router.get("/view/:id", authMiddleware, viewLeave);
router.get("/:id/:role", authMiddleware, getLeave);
router.put("/:id", authMiddleware, updateLeave);
//router.delete("/:id", authMiddleware, deleteDepartment);

export default router;
