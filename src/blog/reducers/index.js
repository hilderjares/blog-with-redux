import postReducer from "./postReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    posts: postReducer,
});

export default rootReducer;
