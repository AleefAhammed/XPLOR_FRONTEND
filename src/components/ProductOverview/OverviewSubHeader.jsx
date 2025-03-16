import { faHeart, faShareFromSquare } from '@fortawesome/free-regular-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useSelector } from 'react-redux';
import { addFavourite } from '../../Middlewares/Middleware';

function OverviewSubHeader({ product }) {

    // console.log(product);
    const { user, isLoggedIn } = useSelector((state) => state.user)

    const handleAddFavourite = () => {

        if (isLoggedIn) {

            addFavourite(product, user)
        }
    }

    return (
        <>
            <div className='w-full flex justify-between px-5 md:px-20 xl:px-40 py-5 items-center'>
                <h1 className='md:text-2xl text-lg font-medium md:flex hidden'>{product?.propertyName}</h1>
                <FontAwesomeIcon icon={faArrowLeft} className='md:hidden cursor-pointer' />

                <div className='flex md:space-x-5 space-x-2 '>
                    <h1 className='flex text-extraSmall pt-1 cursor-pointer'>
                        <span className='mr-1'>
                            <FontAwesomeIcon icon={faShareFromSquare} className='w-4' />
                        </span>
                        <span className='underline md:flex hidden'>
                            Share
                        </span>
                    </h1>
                    <h1 className='flex text-extraSmall pt-1 cursor-pointer' onClick={() => handleAddFavourite()}>
                        <span className='mr-1'>
                            <FontAwesomeIcon icon={faHeart} className='w-4' />
                        </span>
                        <span className='underline md:flex hidden'>
                            Save
                        </span>
                    </h1>
                </div>

            </div>
        </>
    )
}

export default OverviewSubHeader
