import { commentsReducer } from "./commentsReducer";
import { combineReducers } from "redux";

export const Reducers = combineReducers({
  commentsState: commentsReducer,
});
