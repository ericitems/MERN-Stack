import express from "express"
import controller, { middleware } from "../controllers/workouts.js"
// import Workout from "../schemas/workouts.js"

const router = express.Router()

router.get("/", controller.getWorkouts)

router.post("/", controller.createWorkout)

router.get("/:id", middleware.getId, controller.getWorkout)

router.patch("/:id", controller.updateWorkout)

router.delete("/:id", controller.deleteWorkout)

export default router