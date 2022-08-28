import express from "express";
import controller from "../controllers/user.js";

const router = express.Router();

const { loginUser, signupUser } = controller;

// login route
router.post("/login", loginUser);

// signup route
router.post("/signup", signupUser);

export default router;
