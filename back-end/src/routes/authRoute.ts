import express  from "express";
import asyncHandler from "../utils/asyncHandler";
import { registerUser,loginUser } from "../controllers/authController";

const router = express.Router();

router.post("/register", asyncHandler(registerUser));
router.post("/login", asyncHandler(loginUser));
// router.post("/logout", logoutUser);
// router.get("/me", getCurrentUser);


export default router;
