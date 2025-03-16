import { faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function Header() {
    return (
        <div className='w-full h-max fixed z-10 flex justify-between px-7 sm:px-20 md:px-20 xl:px-40 items-center bg-white py-3 border-b border-b-gray-300'>
            <h2 className="hover:cursor-pointer text-center text-rose-500 text-xl sm:text-3xl font-bold">xplor</h2>

            <div className="flex items-center space-x-7">
                <FontAwesomeIcon
                    icon={faUser}
                    className="hover:cursor-pointer text-md bg-gray-400 rounded-full px-2 py-2 hover:shadow-md hover:shadow-slate-600"
                />
            </div>
        </div>
    )
}

export default Header
