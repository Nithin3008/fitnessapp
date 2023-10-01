const initialState = {
  exercises: [],
  error: null,
};

export const exerciseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_INCOME_SUCCESS":
      return {
        ...state,
        exercises: action.payload,
        error: null,
      };

    case "FETCH_INCOME_FAILURE":
      return {
        ...state,
        error: "Error fetching income data",
      };
    default:
      return state;
  }
};
