import toast from "react-hot-toast";
import { PRODUCT_ADD, PRODUCT_DELETE, PRODUCT_LIST } from "../actions/productAction";

const initialState = {
    products: [],
    productsAll: []
}

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRODUCT_ADD:
            toast.success('Product add successfully.')
            return {
                ...state,
                products: action.payload
            }

        case PRODUCT_LIST:
            toast.success('Product get successfully.')
            return {
                ...state,
                productsAll: action.payload
            }

        case PRODUCT_DELETE:
            toast.success('Product delete successfully.')
            return {
                ...state,
                products: action.payload
            }

        default:
            return state;
    }
}