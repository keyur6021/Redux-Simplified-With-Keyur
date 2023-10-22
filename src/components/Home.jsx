import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts, postData } from '../store/actions/testAction';
import User from './User';
import { allProduct } from '../store/actions/productAction';
import ListDown from './ListDown';

const Home = () => {
    const [data, setData] = useState([]);

    const dispatch = useDispatch();
    const listAllProduct = async () => {
        const response = await fetch("http://localhost:8080/productData")
        const responseData = await response.json()
        setData(responseData)
    };
    useEffect(() => {
        listAllProduct();
        dispatch(getAllPosts())
    }, [])

    return (
        <React.Fragment>
            <div className='header'>
                All Users Imformations
            </div>
            <div className='sub-title'>
                This is redux-structure App - <span className='name'>codeWithKeyur</span>
            </div>
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
            {/* //!  here to show some dymmy api response to show unComment to this user Component */}
            {/* <div style={{ margin: 15 }}>
                <User />
            </div> */}
            <div className='btn-post' onClick={() => {
                dispatch(postData({
                    name: 'keyur',
                    sureName: 'mulani',
                    userId: 1,
                }))
            }}>
                POST HERE
            </div>
        </React.Fragment>
    )
}

export default Home
