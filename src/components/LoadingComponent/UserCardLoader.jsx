import React from 'react'

function UserCardLoader() {
    return (
        <div className='bg-white border rounded-lg shadow-md p-3 flex flex-shrink gap-5 items-center animate-pulse'>

            <div className=''>
                <div className='rounded-full h-12 w-12 bg-gray-800/40'></div>
            </div>
            <div className='grid gap-1'>
                <div className='bg-gray-800/30 rounded h-4 w-10'></div>
                <div className='bg-gray-800/30 rounded h-4 w-24'></div>
            </div>
        </div>
    )
}

export default UserCardLoader
