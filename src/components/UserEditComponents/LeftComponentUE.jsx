import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import PersonIcon from '@mui/icons-material/Person';

function LeftComponentUE() {

    const dispatch = useDispatch()
    const [wishlistClicked, setWishlistClicked] = useState(false)
    const [bookingsClicked, setBookingsClicked] = useState(false)

    return (

        <div className="flex flex-col gap-y-5">
            <div className='bg-white border rounded-lg shadow-md grid'>
                <div className='border-b p-4 items-center align-middle flex gap-5 justify-between'>
                    <div className='flex items-center gap-4'>
                        <PersonIcon className='text-blue-500' />
                        <h1 className='text-gray-500 md:text-sm lg:text-base text-center font-medium uppercase'>Account settings</h1>
                    </div>
                    <ArrowForwardIosIcon className='text-gray-500 font-medium text-end' sx={{ fontSize: 17, stroke: "grey", strokeWidth: 1 }} />
                </div>

                <div className={` border-b p-4 justify-center flex cursor-pointer ${wishlistClicked ? "bg-blue-50" : ""}`} onClick={() => {
                    setWishlistClicked(!wishlistClicked)
                    if (bookingsClicked) {

                        setBookingsClicked(!bookingsClicked)
                    }

                    dispatch(setOption("My Wishlist"))
                }}>

                    <h1 className={`text-black text-xsmall font-light ${wishlistClicked ? "text-blue-600 font-medium" : ""}`}>Personal Informations</h1>
                </div>

                <div className={` border-b p-4 justify-center flex cursor-pointer ${bookingsClicked ? "bg-blue-50" : ""}`} onClick={() => {
                    setBookingsClicked(!bookingsClicked)
                    if (wishlistClicked) {
                        setWishlistClicked(!wishlistClicked)
                    }
                    dispatch(setOption("My Bookings"))
                }}>
                    <h1 className={`text-black text-xsmall font-light ${bookingsClicked ? "text-blue-600 font-medium" : ""}`}>Banking Details</h1>
                </div>

            </div>
        </div>

    )
}

export default LeftComponentUE
