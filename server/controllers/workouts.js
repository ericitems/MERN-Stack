import mongoose from "mongoose";
import Workout from "../schemas/workouts.js";

// get all workouts
async function getWorkouts(req, res) {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// create new workout
async function createWorkout(req, res) {
  const { title, reps, load } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }

  if (!load) {
    emptyFields.push("load");
  }

  if (!reps) {
    emptyFields.push("reps");
  }

  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all the fields", emptyFields });
  }

  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(201).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// get a single workout
async function getWorkout(req, res) {
  const workout = res.workout;
  res.status(200).json(workout);
}

// update a workout
async function updateWorkout(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: `Cannot find workout with id: ${id}` });
  }

  const workout = await Workout.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!workout) {
    return res
      .status(404)
      .json({ error: `Cannot find workout with id: ${id}` });
  }

  res.status(200).json(workout);
}

// delete a workout
async function deleteWorkout(req, res) {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: `Cannot find workout with id: ${id}` });
  }

  const workout = await Workout.findOneAndDelete({ _id: id });

  if (!workout) {
    return res
      .status(404)
      .json({ error: `Cannot find workout with id: ${id}` });
  }

  res.status(200).json(workout);
}

async function getId(req, res, next) {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res
      .status(404)
      .json({ error: `Cannot find workout with id: ${id}` });
  }

  const workout = await Workout.findById(id);

  if (!workout) {
    res.status(404).json({ error: `Cannot find workout with id: ${id}` });
  }

  res.workout = workout;
  next();
}

export default {
  getWorkouts,
  createWorkout,
  getWorkout,
  updateWorkout,
  deleteWorkout,
};
export const middleware = { getId };
