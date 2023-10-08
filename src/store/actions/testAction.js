// all types declare here

export const DO_THIS = "DO_THIS";
export const NEW_POST_THIS = "NEW_POST_THIS";


export const getAllPosts = () => {
    return (dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((result) =>
                //dispatch response to the store
                dispatch({ type: DO_THIS, payload: result })
            );
    };
};

export const postData = (data) => {
    return (dispatch) => {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response) => response.json()).then((newData) => {
            dispatch({ type: NEW_POST_THIS, payload: newData })
        })
    }
}