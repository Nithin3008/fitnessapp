import React from "react";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../Redux/GoalReducer";
const DataUi = ({ data }) => {
  console.log(data);
  const dispatcher = useDispatch();
  return (
    <div>
      <li className="border-4 list-none w-2/4 m-auto space-y-2 p-2 my-2">
        <p>
          <span className="font-medium text-xl">Goal Name : </span>
          {data.GoalName}
        </p>
        <p>
          <span className="font-medium text-xl">Description : </span>
          {data.GoalDesc}
        </p>
        <p>
          <span className="font-medium text-xl">Target Date : </span>
          {data.TargetDate}
        </p>
        <p>
          <span className="font-medium text-xl">Target Calories : </span>
          {data.TargetCalories}
        </p>
        <p>
          <span className="font-medium text-xl">Status : </span>
          {data.Status}
        </p>
        <button
          onClick={() => dispatcher(deleteGoal(data._id))}
          className="bg-red-500 p-2 text-white rounded text-lg "
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default DataUi;
