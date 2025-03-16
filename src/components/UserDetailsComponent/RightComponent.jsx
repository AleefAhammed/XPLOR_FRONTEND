import { faCircleExclamation, faEarthAmericas, faEllipsisVertical, faFilePen, faStar, faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteProductById, getUserUploadedProducts } from '../../Redux/Slices/ProductsOfUser'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import LoadingComponent from '../LoadingComponent/LoadingComponent'
import LoadingComponentUserListing from '../LoadingComponent/LoadingComponentUserListing'

function RightComponent() {

    const { data: products } = useSelector((state) => state.usersProducts)
    const dispatch = useDispatch()
    const [data, setData] = useState({})
    const { user } = useSelector((state) => state.user)

    const [clickedIndex, setClickedIndex] = useState(null);
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

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

    const handleDelete = (productId) => {

        // console.log(productId, userId);
        dispatch(deleteProductById(productId))

    }

    useEffect(() => {

        setTimeout(() => {

            setLoading(false);
        }, 1000)
    }, [])

    return (

        <div className="w-full px-3 py-10 block h-max">
            <div className='flex flex-col px-2'>

                <div className='flex flex-col gap-y-6'>
                    <h1 className='text-3xl font-medium'>About {data?.name}</h1>
                    <div className='flex space-x-3 items-center text-gray-800'>
                        <FontAwesomeIcon icon={faEarthAmericas} className='text-blue-600' />
                        {
                            data?.city && data?.country ? (
                                <h1 className='text-smbase font-normal tracking-wide'>Lives in {data?.city}, {data?.country}</h1>
                            ) : (

                                <span className='flex gap-2 items-center'>
                                    <h1 className='text-smbase font-normal tracking-wide'>Lives in </h1>
                                    <p className='hover:underline text-blue-600 cursor-pointer' onClick={() => navigate('/edituser')}>Edit</p>
                                    <FontAwesomeIcon icon={faCircleExclamation} className='text-yellow-400' />
                                </span>
                            )
                        }

                    </div>
                </div>

                <div className='py-8'>
                    <div className='flex flex-col'>

                        <div className='pt-8 border-t border-gray-300'>
                            <h1 className='text-xl font-medium tracking-tight'>{data?.name?.split(" ")[1]}'s listings</h1>
                        </div>

                        <div className='py-8 grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 xl:grid-cols-3'>

                            {
                                loading ? (
                                    Array(products.length)
                                        .fill(null)
                                        .map((d, i) => <LoadingComponentUserListing key={i} />)
                                ) : (

                                    products?.length > 0 ? (

                                        products?.map((product, index) => (

                                            <div className='min-w-[200px] md:max-w-[280px] flex flex-col relative' key={index} >
                                                <div className='w-full'>
                                                    <img src={product?.images[0]} alt="bgphoto" className='bg-cover rounded-lg lg:aspect-video lg:h-36 h-24 aspect-video' onClick={() => {
                                                        navigate(`/productoverview/${product?._id}`)
                                                    }} />
                                                </div>
                                                <div>
                                                    <div className='flex items-center justify-between'>
                                                        <h1 className='text-sm font-medium tracking-wide'>{product?.propertyName}</h1>

                                                        <div className='ml-10'>
                                                            <FontAwesomeIcon icon={faEllipsisVertical} className='text-small cursor-pointer text-gray-400 hover:text-red-500'
                                                                onClick={() => setClickedIndex(clickedIndex === index ? null : index)}
                                                            />

                                                            {clickedIndex === index && (
                                                                <div className="z-10 absolute right-0 w-32 bg-white shadow-md rounded-md border border-gray-200">
                                                                    <div className='flex flex-col'>

                                                                        <div className='flex items-center justify-around border-b hover:bg-gray-100 cursor-pointer' onClick={() => {

                                                                            navigate(`/editproduct/${product?._id}`)
                                                                        }}>
                                                                            <h1 className="p-2 cursor-pointer">Edit</h1>
                                                                            <FontAwesomeIcon icon={faFilePen} className='hover:text-red-500 text-sm text-gray-400' />
                                                                        </div>
                                                                        <div className='flex items-center justify-around hover:bg-gray-100 cursor-' onClick={() => handleDelete(product?._id)}>
                                                                            <h1 className="p-2 cursor-pointer">Delete</h1>
                                                                            <FontAwesomeIcon icon={faTrash} className='hover:text-red-500 text-sm text-gray-400' />
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <p className='text-sm font-medium text-gray-600 w-3/4 truncate'>{product?.description}</p>
                                                </div>
                                            </div>


                                        ))
                                    ) : (
                                        <p className="text-gray-500 p-4">No favourites found.</p>
                                    )
                                )
                            }
                        </div>



                    </div>
                </div>

            </div>
        </div>

    )
}

export default RightComponent
