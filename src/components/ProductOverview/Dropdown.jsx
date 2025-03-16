import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function Dropdown({ state }) {

    const [adult, setAdult] = useState(0)
    const [child, setChild] = useState(0)
    const [infant, setInfant] = useState(0)

    return (
        <div className={`w-[78%] md:w-[23%] border rounded-lg border-gray-400 shadow-2xl ${state ? "block" : "hidden"} absolute bg-white z-10 right-[42px] md:right-[213px]`}>
            <div className='p-2 block'>
                <div className='flex justify-between'>
                    <div className='flex flex-col py-3'>
                        <h1 className='text-smbase font-medium'>Adults</h1>
                        <h1 className='text-sm'>Age 13+</h1>
                    </div>
                    <div className='justify-between flex items-center space-x-3'>
                        <FontAwesomeIcon
                            icon={faMinus}
                            className={`text-sm rounded-full border border-gray-300 p-2 hover:border-gray-600 text-gray-500 hover:text-gray-700 ${adult == 0 ? 'hidden' : 'flex'}`}
                            onClick={() => setAdult(adult - 1)} />
                        <h1>{adult}</h1>
                        <FontAwesomeIcon
                            icon={faPlus}
                            className='text-sm rounded-full border border-gray-300 p-2 hover:border-gray-600 text-gray-500 hover:text-gray-700'
                            onClick={() => setAdult(adult + 1)} />
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div className='flex flex-col py-3'>
                        <h1 className='text-smbase font-medium'>Childrens</h1>
                        <h1 className='text-sm'>Age 4-12</h1>
                    </div>
                    <div className='justify-between flex items-center space-x-3'>
                        <FontAwesomeIcon
                            icon={faMinus}
                            className={`text-sm rounded-full border border-gray-300 p-2 hover:border-gray-600 text-gray-500 hover:text-gray-700 ${child == 0 ? 'hidden' : 'flex'}`}
                            onClick={() => setChild(child - 1)} />
                        <h1>{child}</h1>
                        <FontAwesomeIcon
                            icon={faPlus}
                            className='text-sm rounded-full border border-gray-300 p-2 hover:border-gray-600 text-gray-500 hover:text-gray-700'
                            onClick={() => setChild(child + 1)} />
                    </div>
                </div>

                <div className='flex justify-between'>
                    <div className='flex flex-col py-3'>
                        <h1 className='text-smbase font-medium'>Infants</h1>
                        <h1 className='text-sm'>Below 3</h1>
                    </div>
                    <div className='justify-between flex items-center space-x-3'>
                        <FontAwesomeIcon
                            icon={faMinus}
                            className={`text-sm rounded-full border border-gray-300 p-2 hover:border-gray-600 text-gray-500 hover:text-gray-700 ${infant == 0 ? 'hidden' : 'flex'}`}
                            onClick={() => setInfant(infant - 1)} />
                        <h1>{infant}</h1>
                        <FontAwesomeIcon
                            icon={faPlus}
                            className='text-sm rounded-full border border-gray-300 p-2 hover:border-gray-600 text-gray-500 hover:text-gray-700'
                            onClick={() => setInfant(infant + 1)} />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dropdown
