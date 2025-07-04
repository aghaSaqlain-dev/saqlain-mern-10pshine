import express  from "express";
import asyncHandler from "../utils/asyncHandler";
import { sendOtp,verifyOtp,loginUser } from "../controllers/authController";

const router = express.Router();

router.post("/send-otp", asyncHandler(sendOtp));
router.post("/verify-otp", asyncHandler(verifyOtp));
router.post("/login", asyncHandler(loginUser));
// router.post("/logout", logoutUser);
// router.get("/me", getCurrentUser);


export default router;
