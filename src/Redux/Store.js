import { createStore, combineReducers, applyMiddleware } from "redux";
import { exerciseReducer } from "./ExerciseReducer";
import { foodReducer } from "./FoodReducer";
import { goalReducer } from "./GoalReducer";
import thunk from "redux-thunk";
const allReducers = combineReducers({
  exerciseReducer,
  foodReducer,
  goalReducer,
});
export const store = createStore(allReducers, applyMiddleware(thunk));
console.log(store.getState());
