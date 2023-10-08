import { Toaster } from 'react-hot-toast';

export const PRODUCT_ADD = "PRODUCT_ADD"
export const PRODUCT_LIST = "PRODUCT_LIST"


export const addProduct = (data) => {
    return (dispatch) => {
        fetch("http://127.0.0.1:8080/private", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((result) => {
                dispatch({ type: PRODUCT_ADD, payload: result })
            })
    }
}

export const allProduct = () => {
    return (dispatch) => {
        fetch("http://127.0.0.1:8080/private").then((response) => response.json())
            .then((result) =>
                dispatch({ type: PRODUCT_LIST, payload: result })
            );
    };
};


