import React from "react";
import { useDispatch } from "react-redux";
import { deleteFood } from "../Redux/FoodReducer";
const FoodUi = ({ data }) => {
  const dispatcher = useDispatch();
  return (
    <div>
      <li className="border-4 list-none w-2/4 m-auto space-y-2 p-2 my-2">
        <p>
          <span className="font-medium text-xl">Food Name : </span>
          {data.FoodName}
        </p>
        <p>
          <span className="font-medium text-xl">Fat : </span>
          {data.Fat}
        </p>
        <p>
          <span className="font-medium text-xl">Carbohydrates : </span>
          {data.Carbohydrates}
        </p>
        <p>
          <span className="font-medium text-xl">Calories : </span>
          {data.Calories}
        </p>
        <p>
          <span className="font-medium text-xl">Protein : </span>
          {data.Protein}
        </p>
        <button
          onClick={() => dispatcher(deleteFood(data._id))}
          className="bg-red-500 p-2 text-white rounded text-lg "
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default FoodUi;
