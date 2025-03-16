import { faHeart, faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const FavHeader = () => {

    const navigate = useNavigate();
    const [user, setUSer] = useState(true)
    return (
        <div className='flex justify-between px-7 sm:px-20 md:px-20 xl:px-40 items-center bg-white py-3 border-b fixed w-full'>

            <h2 className="hover:cursor-pointer text-center text-rose-500 text-xl sm:text-3xl font-bold" onClick={(e) => {

                e.preventDefault();
                navigate("/");
            }}>
                xplor
            </h2>

            {/* <div className="flex items-center bg-white p-1 rounded-full focus:outline-dashed border-solid border-2 w-max hover:cursor-pointer">
                <input
                    type="search"
                    placeholder="Search..."
                    className="border-none focus:outline-none px-3 md:w-max w-24"
                />
                <FontAwesomeIcon
                    icon={faSearch}
                    className="bg-rose-500 text-white rounded-full p-2 hover:bg-rose-600"
                />
            </div> */}

            <div className="flex items-center space-x-7">
                <FontAwesomeIcon
                    icon={faUser}
                    className="hover:cursor-pointer text-md bg-gray-400 rounded-full px-2 py-2 hover:shadow-md hover:shadow-slate-600"
                    onClick={() => user ? navigate('/userdetails') : navigate('/login')}
                />
                <FontAwesomeIcon icon={faHeart} className="text-2xl text-rose-600 cursor-pointer hidden md:flex" />
            </div>
        </div>
    );
};

export default FavHeader;
