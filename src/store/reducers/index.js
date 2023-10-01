import { combineReducers } from "redux";
import { TestReducer } from "./testReducer";

const reducers = combineReducers({
    users: TestReducer
})

export default reducers;