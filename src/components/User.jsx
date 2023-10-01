import React from 'react'
import { useSelector } from 'react-redux'

const User = () => {
    const userData = useSelector((state) => state?.users?.users)
    return (
        <React.Fragment>
            {
                userData?.length > 0 ? (userData?.map((data, index) => {
                    return (
                        <div className='parent-user' key={index}>
                            <div>
                                <span className='key'> Name:</span> {data?.name}
                            </div>
                            <div>
                                <span className='key'> Website:</span> {data?.website}
                            </div>

                        </div>
                    )
                })) : <div className='loadding'>Loading ....</div>
            }

        </React.Fragment>
    )
}

export default User
