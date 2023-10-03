import { useDispatch, useSelector } from "react-redux";
import { getGoals } from "../Redux/GoalReducer";
import { getExercise } from "../Redux/ExerciseReducer";
import { getFood } from "../Redux/FoodReducer";
import DashboardUi from "../components/DashboardUi";
import { useEffect } from "react";

const Welcome = () => {
  const dispatcher = useDispatch();
  const goalData = useSelector((state) => state.goalReducer);
  const exerciseData = useSelector((state) => state.exerciseReducer);
  const foodData = useSelector((state) => state.foodReducer);
  const caloriesConsumed = foodData.foods.reduce(
    (acc, val) => val.Calories + acc,
    0
  );
  const burnedCalories = exerciseData.exercises.reduce(
    (acc, val) => val.calories + acc,
    0
  );
  const TargetCalories = goalData.goals.reduce(
    (acc, val) => val.TargetCalories + acc,
    0
  );
  const extraCalories1 = TargetCalories - caloriesConsumed - burnedCalories;
  const extraCalories = extraCalories1 > 0 ? extraCalories1 : 0;
  useEffect(() => {
    dispatcher(getGoals());
    dispatcher(getFood());
    dispatcher(getExercise());
  }, []);
  return (
    <>
      <h1 className="text-4xl p-2 mt-8 text-orange-600">
        Welcome to Fitness Tracker
      </h1>
      <p className="text-2xl p-2">
        Here Your can track your exercises,food plan,goals you want to achieve.
      </p>
      <p className="text-lg p-2">You can navigate to your desired section.</p>
      <ul className="flex gap-10 justify-center mt-24">
        <DashboardUi
          values={burnedCalories}
          Names={"Calories Burned"}
        ></DashboardUi>
        <DashboardUi
          Names={"Calories Consumed"}
          values={caloriesConsumed}
        ></DashboardUi>
        <DashboardUi
          Names={"Target Calories"}
          values={TargetCalories}
        ></DashboardUi>
        <DashboardUi
          Names={"Extra Calories"}
          values={extraCalories}
        ></DashboardUi>
      </ul>
    </>
  );
};

export default Welcome;
