import React, { useEffect, useState } from "react";
import ListDown from './../components/ListDown'

const ListDownPage = () => {
    const [data, setData] = useState([]);
    console.log("data", data)
    const listAllProduct = async () => {
        const response = await fetch("http://localhost:8080/productData")
        const responseData = await response.json()
        setData(responseData)
        console.log("responseData", responseData)
    };
    useEffect(() => {
        listAllProduct();
    }, []);

    return (
        <React.Fragment>
            <div className="product-title">
                All Products
            </div>
            <div className="parent-list">
                {
                    data?.map((product) => {
                        return (
                            <ListDown product={product} />
                        )
                    })
                }
            </div>
        </React.Fragment>
    );
};

export default ListDownPage;
