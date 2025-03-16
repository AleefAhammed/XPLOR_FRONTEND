import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { deleteFAvouriteById, getAllUserFavourites } from '../../Redux/Slices/UserFavouritesSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import FavouriteLoader from '../LoadingComponent/FavouriteLoader';

function FavRightComponent() {

    const option = useSelector((state) => state.option.value);
    const { user, isLoggedIn } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const { data: favourites, status, error } = useSelector((state) => state.userFavourites)
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        let id = user.id;
        dispatch(getAllUserFavourites(id))
    }, [dispatch]);

    const handleDelete = (id) => {

        dispatch(deleteFAvouriteById(id))

    }

    useEffect(() => {

        setTimeout(() => {

            setLoading(false);
        }, 500)
    }, [])

    return (
        <div className='bg-white border rounded-lg shadow-md grid w-full'>
            <div className='p-4'>
                <h1 className='font-bold uppercase'>{option} ({favourites?.length})</h1>
            </div>

            <div className='border'></div>
            {
                loading ? (
                    Array(favourites.length)
                        .fill(null)
                        .map((d, i) => <FavouriteLoader key={i}/>)
                ) : (
                    favourites?.length > 0 ? (

                        favourites?.map((favourite,index) => (
                            <div className='flex w-full p-4 justify-between items-center border-b' key={index}>
                                <div className='flex gap-5 cursor-pointer'>
                                    <div className='md:w-[100px]'>
                                        <img src={favourite.images[0]} alt="" className='bg-cover' />
                                    </div>
                                    <div className='flex flex-col'>
                                        <h1>{favourite.propertyName}</h1>
                                        <h1>{favourite.propertyLocation}</h1>
                                        <h1>{favourite.rent}</h1>
                                    </div>
                                </div>
                                <div>
                                    <FontAwesomeIcon icon={faTrash} className='cursor-pointer text-gray-400 hover:text-red-500' onClick={(e) => {
                                        // e.preventDefault()
                                        handleDelete(favourite._id)
                                    }} />
                                </div>
                            </div>

                        ))
                    ) : (
                        <p className="text-gray-500 p-4">No favourites found.</p>
                    )
                )
            }

        </div>
    );
}

export default FavRightComponent;

// {
//     favourites?.length > 0 ? (
//         favourites?.map((favourite, index) => (
//             <div key={index} className="p-2 rounded-lg border shadow-lg flex-col w-max">
//                 <img src={favourite.images[0]} alt="" className='max-w-40' />
//                 <h2 className='text-sm font-light'>{favourite.propertyName}</h2>
//             </div>
//         ))
//     ) : (
//         <p className="text-gray-500 mt-4">No favourites found.</p>
//     )
// }