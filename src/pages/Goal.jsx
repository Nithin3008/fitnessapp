import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGoals, setGoals } from "../Redux/GoalReducer";
import DataUi from "../components/DataUi";
const Goal = () => {
  const [displayForm, setDisplay] = useState(false);
  const dispatcher = useDispatch();
  const goalData = useSelector((state) => state.goalReducer);
  function getData(event) {
    event.preventDefault();
    const data = {
      GoalName: event.target.name.value,
      GoalDesc: event.target.description.value,
      TargetDate: event.target.date.value,
      TargetCalories: event.target.calories.value,
      Status: event.target.status.value,
    };
    console.log(event);
    dispatcher(setGoals(data));
  }
  useEffect(() => {
    dispatcher(getGoals());
  }, [dispatcher]);
  console.log(goalData);
  return (
    <>
      <div className={displayForm ? "block" : "hidden"}>
        <form
          onSubmit={(e) => {
            getData(e);
            e.target.reset();
          }}
        >
          <label>Enter goal name</label>
          <input required id="name" type="text"></input>
          <label>Enter goal desc</label>
          <input required id="description" type="text"></input>
          <label>Enter target date</label>
          <input required id="date" type="date"></input>
          <label>Enter target calories</label>
          <input required id="calories" type="number"></input>
          <label>Enter status</label>
          <input required id="status" type="text"></input>
          <button type="submit">Submit</button>
        </form>
      </div>
      <div>
        {goalData.goals.map((val) => (
          <DataUi data={val}></DataUi>
        ))}
      </div>
      <button onClick={() => setDisplay(!displayForm)}>Add New Goal</button>
    </>
  );
};

export default Goal;
