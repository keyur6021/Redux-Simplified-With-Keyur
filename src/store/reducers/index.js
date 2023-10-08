import { combineReducers } from "redux";
import { TestReducer } from "./testReducer";
import { productReducer } from "./productReducer";

const reducers = combineReducers({
    users: TestReducer,
    products: productReducer
})

export default reducers;