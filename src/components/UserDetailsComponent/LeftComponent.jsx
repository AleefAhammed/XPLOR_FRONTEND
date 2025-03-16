import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import FlagIcon from '@mui/icons-material/Flag';

import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getUserUploadedProducts } from '../../Redux/Slices/ProductsOfUser';
import axios from 'axios';
import moment from 'moment';
// import { userLogout } from '../../Redux/Slices/userDetails';

function LeftComponent() {

    const { user } = useSelector((state) => state.user)
    const [data, setData] = useState({})
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const { data: products } = useSelector((state) => state.usersProducts)

    useEffect(() => {

        dispatch(getUserUploadedProducts(user.id))
        const getUserDetails = async () => {

            try {
                if (!user?.id) return;

                const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/user/get/${user?.id}`, { withCredentials: true })
                // console.log(response.data.data);
                setData(response.data.data)
            } catch (error) {
                console.error("Error verifying user:", error?.response?.data?.message || error.message);
            }
        }

        getUserDetails()

    }, [dispatch])

    const handleLogOut = () => {

        // dispatch(userLogout)
        console.log(sessionStorage.removeItem("token"));


    }

    return (

        <div className="w-full px-3 py-10 block">
            <div className="p-2 flex flex-col gap-y-8">

                {/* profile card */}
                <div className="flex p-5 border border-gray-100 rounded-xl shadow-3xl max-w-[300px]">
                    {/* Profile Image and Badge Container */}
                    <div className='flex flex-col w-1/2'>
                        <div className="relative p-3">
                            <img
                                className="object-cover block mx-auto h-24 w-24 rounded-full"
                                src="/Images/user.jpg"
                                alt="Profile Image"
                            />
                            {/* Badge */}
                            <div className="absolute rounded-full bg-gradient-to-r from-red-500 to-rose-600 h-7 w-7 flex items-center justify-center bottom-3 right-5">
                                <VerifiedUserIcon sx={{ fontSize: 15, color: "white" }} />
                            </div>
                        </div>

                        <div className='items-center flex justify-center'>
                            <h1 className='2xl:text-2xl md:text-xl text-base font-medium tracking-tight'>{user?.userName}</h1>
                        </div>
                    </div>
                    <div className="grid py-3 pl-10 w-1/2">
                        <div className="border-b border-b-gray-300 pb-1">
                            <h1 className='text-lg font-semibold'>74</h1>
                            <h1 className='text-small tracking-tight'>Reviews</h1>
                        </div>

                        <div className="border-b border-b-gray-300 py-1">
                            <h1 className='text-lg font-semibold'>{products?.length}</h1>
                            <h1 className='text-small tracking-tight'>Listing</h1>
                        </div>

                        <div className="pt-1">
                            {data?.createdAt && moment().diff(moment(data.createdAt), "years") >= 1 && (
                                <>
                                    <h1 className="text-lg font-semibold pt-1">
                                        {moment().diff(moment(data.createdAt), "years")}
                                    </h1>
                                    <h1 className="text-small tracking-tight">Years of hosting</h1>
                                </>
                            )}
                        </div>
                    </div>
                </div>

                {/* Information */}
                <div className="flex p-5 border border-gray-300 rounded-xl max-w-[300px]">

                    <div className='w-full flex flex-col gap-y-3'>
                        <div>
                            <h1 className='text-xl2xl font-medium text-gray-800'>John Doe's confirmed information</h1>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <VerifiedUserIcon sx={{ color: "blue", fontSize: 17 }} />
                            <h1 className='text-base'>Verified by xplor in 2019</h1>
                        </div>
                        <div className='flex items-center space-x-2 pl-6 text-sm'>
                            <FontAwesomeIcon icon={faCheck} />

                            <h1>Identity</h1>
                        </div>
                        <div className='flex items-center space-x-2 pl-6 text-sm'>
                            <FontAwesomeIcon icon={faCheck} />
                            <h1>Email address</h1>
                        </div>
                        <div className='flex items-center space-x-2 pl-6 text-sm'>
                            <FontAwesomeIcon icon={faCheck} />
                            <h1>Phone number</h1>
                        </div>
                    </div>

                </div>

                {/* Account settings*/}

                <div className="flex p-5 border border-gray-300 rounded-xl max-w-[300px]">

                    <div className='w-full flex flex-col gap-y-3'>
                        <div>
                            <h1 className='text-xl2xl font-medium text-gray-800'>Account Settings</h1>
                        </div>
                        <div className='flex items-center space-x-2 pl-6 text-sm'>
                            <h1 className='hover:underline hover:cursor-pointer' onClick={(e) => {

                                e.preventDefault();
                                navigate('/edituser')
                            }}>Personal Informations</h1>
                        </div>
                        <div className='flex items-center space-x-2 pl-6 text-sm'>
                            <h1
                                className='hover:underline hover:cursor-pointer'
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/addproduct')
                                }}
                            >Add a new property</h1>
                        </div>
                        <div className='flex items-center space-x-2 pl-6 text-sm'>
                            <h1
                                className='hover:underline hover:cursor-pointer'
                                onClick={(e) => {
                                    e.preventDefault();
                                    navigate('/favourites')
                                }}
                            >My Wishlist</h1>
                        </div>
                        <div className='flex items-center space-x-2 pl-6 text-sm'>
                            <h1 className='hover:underline hover:cursor-pointer' onClick={handleLogOut}>Log out</h1>
                        </div>
                        <div className='flex items-center space-x-2 pl-6 text-sm'>
                            <h1 className='hover:underline hover:cursor-pointer'>Delete Account</h1>
                        </div>
                    </div>

                </div>

                <div className='w-full md:flex space-x-2 items-center cursor-pointer hidden hover:text-blue-600'>
                    <FlagIcon sx={{ fontSize: 20 }} />
                    <h1 className='text-smbase underline font-medium'>Report this profile</h1>
                </div>

            </div>
        </div >

    )
}

export default LeftComponent
