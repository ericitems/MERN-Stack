import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import workouts from "./routes/workouts.js";
import user from "./routes/user.js";
import cors from "cors";

dotenv.config();
const app = express();

app.use(
  cors({
    // origin: "*",
    origin: "http://localhost:3000",
    //origin: "*" | to accept all request
    // method: ["GET", "POST", "PATCH", "PUT", "DELETE"]
    //credentials: true | to allow cookies
  })
);

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/api/workouts", workouts);
app.use("/api/user", user);

mongoose
  .connect(process.env.DATABASE_URI)
  .then(() => {
    app.listen(process.env.PORT, () =>
      console.log(
        `Connected to Database and Server is running on port: ${process.env.PORT}`
      )
    );
  })
  .catch((error) => {
    console.log(error);
  });
