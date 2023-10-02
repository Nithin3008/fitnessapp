import React from "react";
import { useDispatch } from "react-redux";
import { deleteExercise } from "../Redux/ExerciseReducer";
const ExerciseUI = ({ data }) => {
  const dispatcher = useDispatch();
  return (
    <div>
      <li className="border-4 list-none w-2/4 m-auto space-y-2 p-2 my-2">
        <p>
          <span className="font-medium text-xl">Exercise Name : </span>
          {data.name}
        </p>
        <p>
          <span className="font-medium text-xl">Exercise Duration : </span>
          {data.duration}
        </p>
        <p>
          <span className="font-medium text-xl">Calories Burnt : </span>
          {data.calories}
        </p>
        <button
          onClick={() => dispatcher(deleteExercise(data._id))}
          className="bg-red-500 p-2 text-white rounded text-lg "
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default ExerciseUI;
