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
      <div className={displayForm ? "block" : "hidden"}>
        <form
          onSubmit={(e) => {
            getFoodForm(e);
            e.target.reset();
          }}
        >
          <label>Enter Food name</label>
          <input required id="name" type="text"></input>
          <label>Enter Fat Number</label>
          <input required id="fat" type="number"></input>
          <label>Enter Carbohydrates</label>
          <input required id="carbohydrates" type="number"></input>
          <label>Enter calories</label>
          <input required id="calories" type="number"></input>
          <label>Enter Protein</label>
          <input required id="protein" type="number"></input>
          <button type="submit">Submit</button>
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
