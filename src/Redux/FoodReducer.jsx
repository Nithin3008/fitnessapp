import axios from "axios";

const initialState = {
  foods: [],
  loading: false,
};

export const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_FOOD_SUCCESS":
      return {
        ...state,
        foods: action.payload,
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
export function getFood() {
  return async (dispatch, getState) => {
    dispatch({ type: "FETCH_DATA_LOADING" });
    const goalData = await axios.get("http://localhost:3500/api/food");
    const fetchedData = goalData.data.allFood;
    if (goalData.status === 200) {
      console.log(fetchedData);
      dispatch({
        type: "FETCH_FOOD_SUCCESS",
        payload: fetchedData,
      });
    }
  };
}
export function setFood(goalsData) {
  return async function (dispatch, getState) {
    dispatch({ type: "FETCH_DATA_LOADING" });
    console.log(goalsData);
    const data = await fetch(`http://localhost:3500/api/food`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(goalsData),
    });
    const fetchedData = await data;
    if (fetchedData.status === 201) {
      dispatch(getFood());
    }
  };
}
export function deleteFood(deleteFood) {
  return async function (dispatch, getState) {
    const data = await axios.delete(
      `http://localhost:3500/api/Food/${deleteFood}`
    );
    if (data.status == 201) {
      dispatch(getFood());
    }
  };
}
