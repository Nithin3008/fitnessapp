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
    setDisplay(!displayForm);
    dispatcher(setGoals(data));
  }
  useEffect(() => {
    dispatcher(getGoals());
  }, [dispatcher]);
  console.log(goalData);
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
            getData(e);
            e.target.reset();
          }}
        >
          <label>Enter goal name</label>
          <input
            className="border-2 border-gray-400"
            required
            id="name"
            type="text"
          ></input>
          <label>Enter goal desc</label>
          <input
            className="border-2 border-gray-400"
            required
            id="description"
            type="text"
          ></input>
          <label>Enter target date</label>
          <input
            className="border-2 border-gray-400"
            required
            id="date"
            type="date"
          ></input>
          <label>Enter target calories</label>
          <input
            className="border-2 border-gray-400"
            required
            id="calories"
            type="number"
          ></input>
          <label>Enter status</label>
          <input
            className="border-2 border-gray-400"
            required
            id="status"
            type="text"
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
        {goalData.goals.map((val) => (
          <DataUi data={val}></DataUi>
        ))}
      </div>
      <button onClick={() => setDisplay(!displayForm)}>Add New Goal</button>
    </>
  );
};

export default Goal;
