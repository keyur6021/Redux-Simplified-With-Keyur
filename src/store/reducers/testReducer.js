import { DO_THIS } from "../actions/testAction";

const initialState = {
    users: []
}

export const TestReducer = (state = initialState, action) => {
    switch (action.type) {
        case DO_THIS:
            return {
                ...state,
                users: action.payload
            }


        default:
            return state;
    }

}