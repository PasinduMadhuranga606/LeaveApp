import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { changePassword } from "../controllers/settingsController.js";

const router = express.Router();

router.put("/change-password", authMiddleware, changePassword);

// router.put(
//   "/change-password",
//   authMiddleware,
//   (req, res, next) => {
//     console.log("Hit /api/settings/change-password route");
//     next();
//   },
//   changePassword
// );

export default router;
