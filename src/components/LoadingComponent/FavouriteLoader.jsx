import React from 'react'

function FavouriteLoader() {
    return (
        <div className='flex w-full p-4 justify-between items-center border-b'>
            <div className='flex gap-5 cursor-pointer'>
                <div className='bg-gray-800/30 rounded w-[100px] h-[75px]'></div>
                <div className='grid'>
                    <div className='bg-gray-800/20 rounded h-4 w-24'></div>
                    <div className='bg-gray-800/20 rounded h-4 w-24'></div>
                </div>
                
            </div>
            <div className='bg-gray-800/20 rounded h-4 w-24'></div>

        </div>
    )
}

export default FavouriteLoader
