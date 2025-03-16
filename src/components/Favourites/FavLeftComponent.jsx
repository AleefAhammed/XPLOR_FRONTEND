import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setOption } from '../../Redux/Slices/OptionSlice'
import DriveFileMoveIcon from '@mui/icons-material/DriveFileMove';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { getUserAllDetails } from '../../Redux/Slices/AllDetailsOfUser';
import UserCardLoader from '../LoadingComponent/UserCardLoader';

function FavLeftComponent() {

    const dispatch = useDispatch()
    const [wishlistClicked, setWishlistClicked] = useState(false)
    const [bookingsClicked, setBookingsClicked] = useState(false)
    const [loading, setLoading] = useState(true)

    const { user } = useSelector((state) => state.user)
    const { data: userDetails } = useSelector((state) => state.userAllDetails)

    useEffect(() => {

        dispatch(getUserAllDetails(user.id))
    }, [dispatch])

    useEffect(() => {

        setTimeout(() => {

            setLoading(false);
        }, 500)
    }, [])

    return (
        <div className='flex flex-col gap-y-5'>

            {
                loading ? (
                    Array(1)
                        .fill(null)
                        .map((d, i) => <UserCardLoader key={i} />)
                ) : (
                    <div className='bg-white border rounded-lg shadow-md p-3 flex flex-shrink gap-5 items-center'>
                        <div className=''>
                            <img src={userDetails?.image} alt="" className='w-12 h-12 rounded-full object-cover' />
                        </div>
                        <div className='grid'>
                            <h2 className='text-sm'>Hello ,</h2>
                            <h2 className='text-xs font-bold'>{userDetails?.name}</h2>
                        </div>
                    </div>
                )
            }

            <div className='bg-white border rounded-lg shadow-md grid'>
                <div className='border-b p-4 items-center align-middle flex gap-5 justify-between'>
                    <div className='flex items-center gap-4'>
                        <DriveFileMoveIcon className='text-blue-500' />
                        <h1 className='text-gray-500 text-smbase font-medium text-center'>MY ACTIVITIES</h1>
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

                    <h1 className={`text-black text-xsmall font-light ${wishlistClicked ? "text-blue-600 font-medium" : ""}`}>My Whishlist</h1>
                </div>

                <div className={` border-b p-4 justify-center flex cursor-pointer ${bookingsClicked ? "bg-blue-50" : ""}`} onClick={() => {
                    setBookingsClicked(!bookingsClicked)
                    if (wishlistClicked) {
                        setWishlistClicked(!wishlistClicked)
                    }
                    dispatch(setOption("My Bookings"))
                }}>
                    <h1 className={`text-black text-xsmall font-light ${bookingsClicked ? "text-blue-600 font-medium" : ""}`}>My Bookings</h1>
                </div>

            </div>

        </div >
    )
}

export default FavLeftComponent
