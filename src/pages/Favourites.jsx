import React, { useEffect } from 'react'
import FavHeader from '../components/Favourites/FavHeader'
import FavBody from '../components/Favourites/FavBody'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';

function FavContent() {

    const { isLoggedIn } = useSelector((state) => state.user);
    const navigate = useNavigate()

    useEffect(() => {

        if (!isLoggedIn) {
            navigate('/login')
        }
    }, [])
    return (
        <div>
            <FavHeader />
            <FavBody />
        </div>
    )
}

export default FavContent
