import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExercise, setExercises } from "../Redux/ExerciseReducer";
import ExerciseUI from "../components/ExerciseUI";
const Exercise = () => {
  const dispatcher = useDispatch();
  const exerciseData = useSelector((state) => state.exerciseReducer);
  console.log(exerciseData);
  const exerciesObj = {
    Select: 0,
    Burpees: 7,
    TreadMill: 10,
    StrengthTraining: 20,
    Running: 8,
  };
  useEffect(() => {
    dispatcher(getExercise());
  }, [dispatcher]);
  const exerciseKeys = Object.keys(exerciesObj);
  const [exerciseType, setType] = useState("");
  const [displayForm, setDisplay] = useState(false);
  const [caloriesBurned, setBurned] = useState(0);
  function caloriesCal(event) {
    const time = event.target.value;
    const total = exerciesObj[exerciseType] * (Number(time) / 60) * 65;
    setBurned(Math.round(total));
  }
  function submitForm(event) {
    event.preventDefault();
    const data = {
      name: exerciseType,
      duration: event.target.time.value,
      calories: caloriesBurned,
    };
    setDisplay(!displayForm);
    dispatcher(setExercises(data));
  }
  return (
    <>
      <div
        style={{
          display: displayForm ? "block" : "none",
        }}
        className="fixed hidden inset-0 overflow-auto bg-black bg-opacity-40 z-50"
      >
        <form
          className="p-6 flex flex-col text-xl rounded-lg bg-white w-fit mt-36 mx-auto space-y-2 space-x-2 "
          onSubmit={(e) => {
            submitForm(e);
            e.target.reset();
          }}
        >
          <label>Select Your Exercise</label>
          <select
            className="border-2 border-gray-400"
            required
            onChange={(e) => setType(e.target.value)}
          >
            {exerciseKeys.map((val) => (
              <option>{val}</option>
            ))}
          </select>
          <lable>Duration in min</lable>
          <input
            className="border-2 border-gray-400"
            id="time"
            required
            type="number"
            onChange={(e) => caloriesCal(e)}
          ></input>
          <label>Calories Burned:{caloriesBurned}</label>
          <button
            className="border-2 p-2 bg-blue-500 border-blue-500 rounded-md"
            type="submit"
          >
            Submit
          </button>
          <button
            className="border-2 p-2 bg-red-500 border-red-500 rounded-md"
            onClick={() => setDisplay(!displayForm)}
          >
            Cancel
          </button>
        </form>
      </div>
      <ul>
        {exerciseData.exercises.map((val) => (
          <ExerciseUI data={val}></ExerciseUI>
        ))}
      </ul>

      <button onClick={() => setDisplay(!displayForm)}>Add New Exercies</button>
    </>
  );
};

export default Exercise;
