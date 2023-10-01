import axios from "axios";
const initialState = {
  goals: [],
  loading: false,
};

export const goalReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_GOAL_SUCCESS":
      return {
        ...state,
        goals: action.payload,
        loading: false,
      };

    case "FETCH_DATA_LOADING":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
export function getGoals() {
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const goalData = await axios.get("http://localhost:3500/api/goals");
    const fetchedData = goalData.data.allGoal;
    if (goalData.status === 200) {
      console.log(fetchedData);
      dispatch({
        type: "FETCH_GOAL_SUCCESS",
        payload: fetchedData,
      });
    }
  };
}
export function setGoals(goalsData) {
  return async function (dispatch, getState) {
    dispatch({ type: "FETCH_DATA_LOADING" });
    console.log(goalsData);
    const data = await fetch(`http://localhost:3500/api/goals`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(goalsData),
    });
    const fetchedData = await data;
    if (fetchedData.status === 201) {
      dispatch(getGoals());
    }
  };
}
export function deleteGoal(deleteGoal) {
  return async function (dispatch, getState) {
    const data = await axios.delete(
      `http://localhost:3500/api/goals/${deleteGoal}`
    );
    if (data.status == 201) {
      dispatch(getGoals());
    }
  };
}
