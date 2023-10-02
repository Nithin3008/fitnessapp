import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFood, setFood } from "../Redux/FoodReducer";
import FoodUi from "../components/FoodUi";
const Food = () => {
  const [displayForm, setDisplay] = useState(false);
  const dispatcher = useDispatch();
  const foodData = useSelector((state) => state.foodReducer);
  function getFoodForm(event) {
    event.preventDefault();
    const data = {
      FoodName: event.target.name.value,
      Fat: event.target.fat.value,
      Carbohydrates: event.target.carbohydrates.value,
      Calories: event.target.calories.value,
      Protein: event.target.protein.value,
    };
    console.log(data);
    dispatcher(setFood(data));
  }
  useEffect(() => {
    dispatcher(getFood());
  }, [dispatcher]);
  console.log(foodData);
  return (
    <>
      <div
        style={{
          display: displayForm ? "block" : "none",
        }}
        className="fixed hidden inset-0 overflow-auto bg-black bg-opacity-40 z-50"
      >
        <form
          onSubmit={(e) => {
            getFoodForm(e);
            e.target.reset();
          }}
          className="p-6 flex flex-col text-xl rounded-lg bg-white w-fit mt-36 mx-auto space-y-2 space-x-2 "
        >
          <label>Enter Food name</label>
          <input
            className="border-2 border-gray-400"
            required
            id="name"
            type="text"
          ></input>
          <label>Enter Fat Number</label>
          <input
            className="border-2 border-gray-400"
            required
            id="fat"
            type="number"
          ></input>
          <label>Enter Carbohydrates</label>
          <input
            className="border-2 border-gray-400"
            required
            id="carbohydrates"
            type="number"
          ></input>
          <label>Enter calories</label>
          <input
            className="border-2 border-gray-400"
            required
            id="calories"
            type="number"
          ></input>
          <label>Enter Protein</label>
          <input
            className="border-2 border-gray-400"
            required
            id="protein"
            type="number"
          ></input>
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
      <div>
        {foodData.foods.map((val) => (
          <FoodUi data={val}></FoodUi>
        ))}
      </div>
      <button onClick={() => setDisplay(!displayForm)}>Add New Food</button>
    </>
  );
};

export default Food;
