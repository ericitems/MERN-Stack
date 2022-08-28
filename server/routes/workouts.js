import express from "express";
import controller, { middleware } from "../controllers/workouts.js";
// import Workout from "../schemas/workouts.js"

const router = express.Router();

const { getWorkouts, createWorkout, getWorkout, updateWorkout, deleteWorkout } =
  controller;

const { getId } = middleware;
router.get("/", getWorkouts);

router.post("/", createWorkout);

router.get("/:id", getId, getWorkout);

router.patch("/:id", updateWorkout);

router.delete("/:id", deleteWorkout);

export default router;
