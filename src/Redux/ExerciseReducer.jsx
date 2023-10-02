import axios from "axios";

const initialState = {
  exercises: [],
  loading: false,
};

export const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_EXERCISE_SUCCESS":
      return {
        ...state,
        exercises: action.payload,
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
export function getExercise() {
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const goalData = await axios.get(
      "https://assignment17.nithinrocky30.repl.co/api/exercises"
    );
    const fetchedData = goalData.data.allExercises;
    if (goalData.status === 200) {
      dispatch({
        type: "FETCH_EXERCISE_SUCCESS",
        payload: fetchedData,
      });
    }
  };
}
export function setExercises(exerData) {
  return async function (dispatch, getState) {
    dispatch({ type: "FETCH_DATA_LOADING" });
    console.log(exerData);
    const data = await fetch(
      `https://assignment17.nithinrocky30.repl.co/api/exercises`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(exerData),
      }
    );
    const fetchedData = await data;
    if (fetchedData.status === 201) {
      dispatch(getExercise());
    }
  };
}
export function deleteExercise(deleteExer) {
  return async function (dispatch, getState) {
    const data = await axios.delete(
      `https://assignment17.nithinrocky30.repl.co/api/exercises/${deleteExer}`
    );
    if (data.status == 201) {
      dispatch(getExercise());
    }
  };
}
