import { useEffect } from "react";
import useWorkoutsContext from "../hooks/useWorkoutsContext.js";
import axios from "axios";

//  components
import WorkoutDetails from "../components/WorkoutDetails.js";
import WorkoutForm from "../components/WorkoutForm.js";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const test = "testing";
  console.log(test);
  // const fetchWorkouts = async () => {
  //   const res = await axios.get("http://localhost:4000/api/workouts");

  //   if (res.status === 200) {
  //     dispatch({ type: "SET_WORKOUTS", payload: res.data });
  //   }

  //   // axios.get("http://localhost:4000/api/workouts").then((res) => (
  //   //     console.log(res.data)
  //   // ));

  //   // const res = await fetch("http://localhost:4000/api/workouts")
  //   // const data = await res.json()

  //   // if (res.ok){
  //   //     setWorkouts(data)
  //   // }
  //   //                    or
  //   // fetch("http://localhost:4000/api/workouts")
  //   //     .then((res) => res.json())
  //   //     .then((data) => setWorkouts(data))
  // };

  useEffect(() => {
    const fetchWorkouts = async () => {
      const res = await axios.get("http://localhost:4000/api/workouts");

      if (res.status === 200) {
        dispatch({ type: "SET_WORKOUTS", payload: res.data });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => (
            <WorkoutDetails key={workout._id} workout={workout} />
          ))}
      </div>
      <WorkoutForm></WorkoutForm>
    </div>
  );
};

export default Home;
