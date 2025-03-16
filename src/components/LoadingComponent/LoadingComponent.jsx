import React from 'react'

function LoadingComponent() {
    return (
        // <div className='w-full h-screen justify-center p-10'>

            <div className='w-[250px] rounded shadow-xl border-[1px] animate-pulse'>
                <div className='bg-gray-800/30 rounded w-full h-[200px]'></div>
                <div className='p-4 flex flex-col gap-4'>

                    <section className='flex flex-col gap-3'>
                        <div className='gap-1 grid'>
                            <div className='bg-gray-800/20 rounded h-4 w-24'></div>
                            <div className='bg-gray-800/20 rounded h-4 w-20'></div>
                        </div>
                        <div className='gap-1 grid'>
                            <div className='bg-gray-800/20 rounded h-4 w-12'></div>
                            <div className='bg-gray-800/20 rounded h-4 w-16'></div>
                        </div>
                    </section>

                </div>
            </div>
        // </div>
    )
}

export default LoadingComponent
