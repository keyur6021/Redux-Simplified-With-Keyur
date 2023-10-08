import React, { useEffect, useState } from "react";
import ListDown from './../components/ListDown'
import { allProduct } from "../store/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ListDownPage = () => {
    const [data, setData] = useState([]);
    const dispatch = useDispatch();
    console.log("data", data)
    const listAllProduct = async () => {
        const response = await fetch("http://localhost:8080/productData")
        const responseData = await response.json()
        setData(responseData)
    };
    const productResponse = useSelector((state) => state?.products?.productsAll)
    console.log("new====", productResponse)
    useEffect(() => {
        listAllProduct();
        dispatch(allProduct())
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
            <div className="product-title">
                Personal product
            </div>
            <div className="parent-list">
                {
                    productResponse?.length > 0 ? productResponse?.map((product) => {
                        return (
                            <ListDown product={product} />
                        )
                    }) : <>Data Not Found</>
                }
            </div>
        </React.Fragment>
    );
};

export default ListDownPage;
