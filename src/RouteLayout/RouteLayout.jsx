import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Outlet, useLoaderData } from 'react-router-dom'
import { authenticateUser } from '../Redux/Slices/userDetails';
import { loader } from '../Loaders/RouteLoader';
import { checkUserSigned } from '../Redux/Slices/UserSigned';

export function RouteLayout() {

    const loaderData = useLoaderData()
    console.log(loaderData);

    const userData = loaderData?.userData || {};
    const login = loaderData?.login || false;
    const dispatch = useDispatch()

    useEffect(() => {
        // console.log("hi");

        if (login && userData) {
            dispatch(authenticateUser(userData));
        }
    }, [dispatch, login, userData]);

    // useEffect(() => {

    //     dispatch(checkUserSigned())
    // }, [dispatch])


    return (
        <>
            <Outlet />
        </>
    )
}

// export { loader };