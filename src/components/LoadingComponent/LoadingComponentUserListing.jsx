import React from 'react'

function LoadingComponentUserListing() {
    return (
        <div className='w-[180px] rounded shadow-xl border-[1px] animate-pulse'>
            <div className='bg-gray-800/30 rounded w-full h-[130px]'></div>
            <div className='p-1 flex flex-col gap-4'>

                <section className='flex justify-between'>
                    <div className='gap-1 grid'>
                        <div className='bg-gray-800/20 rounded h-4 w-24'></div>
                        <div className='bg-gray-800/20 rounded h-4 w-20'></div>
                    </div>
                    <div className='gap-1 grid'>
                        <div className='bg-gray-800/20 rounded h-4 w-4'></div>

                    </div>
                </section>

            </div>
        </div>
    )
}

export default LoadingComponentUserListing