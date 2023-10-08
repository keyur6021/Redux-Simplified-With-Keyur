import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPosts, postData } from '../store/actions/testAction';
import User from './User';
import { allProduct } from '../store/actions/productAction';

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
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
            <div style={{ margin: 15 }}>
                <User />
            </div>
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
