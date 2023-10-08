import { PRODUCT_ADD, PRODUCT_LIST } from "../actions/productAction";

const initialState = {
    products: [],
    productsAll: []
}

export const productReducer = (state = initialState, action) => {
    console.log("payload====", action?.payload)
    switch (action.type) {
        case PRODUCT_ADD:
            return {
                ...state,
                products: action.payload
            }

        case PRODUCT_LIST:
            return {
                ...state,
                productsAll: action.payload
            }


        default:
            return state;
    }
}