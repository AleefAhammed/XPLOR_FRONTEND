import { faHeart, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const OverviewHeader = () => {

    const navigate = useNavigate();
    const { user, isLoggedIn } = useSelector((state) => state.user)

    return (
        <div className='flex justify-between px-7 sm:px-20 md:px-20 xl:px-40 items-center bg-white py-3 border-b'>

            <h2 className="hover:cursor-pointer text-center text-rose-500 text-xl sm:text-3xl font-bold" onClick={(e) => {

                e.preventDefault();
                navigate("/");
            }}>
                xplor
            </h2>

            <div className="flex items-center space-x-7">
                <FontAwesomeIcon
                    icon={faUser}
                    className="hover:cursor-pointer text-md bg-gray-400 rounded-full px-2 py-2 hover:shadow-md hover:shadow-slate-600"
                    onClick={() => isLoggedIn ? navigate('/userdetails') : navigate('/login')}
                />
                <FontAwesomeIcon icon={faHeart} className="text-2xl text-rose-600 cursor-pointer hidden md:flex" onClick={() => { isLoggedIn ? navigate('/favourites') : navigate('/login') }} />
            </div>
        </div>
    );
};

export default OverviewHeader;
