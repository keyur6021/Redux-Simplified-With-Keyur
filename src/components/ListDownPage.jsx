import React, { useEffect } from "react";
import ListDown from './../components/ListDown'
import { allProduct } from "../store/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ListDownPage = () => {
    const dispatch = useDispatch();

    const productResponse = useSelector((state) => state?.products?.productsAll)
    useEffect(() => {
        dispatch(allProduct())
    }, []);

    return (
        <React.Fragment>
            <div className="product-title">
                Personal product List
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
