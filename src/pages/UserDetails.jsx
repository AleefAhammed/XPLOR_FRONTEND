import React, { useEffect } from 'react'
import UserDetailsHeader from '../components/UserDetailsComponent/UserDetailsHeader'
import UserDetailsBanner from '../components/UserDetailsComponent/UserDetailsBanner'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'

function UserDetails() {

    const { user, isLoggedIn } = useSelector((state) => state.user)
    // const { user, isLoggedIn } = useSelector((state) => state.userDetails)

    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn === false) {
            navigate('/login', { replace: true });
        }
    }, [isLoggedIn, navigate]);

    return (
        <>
            <UserDetailsHeader />
            <UserDetailsBanner />
        </>
    )
}

export default UserDetails
