import { faCircleCheck, faMessage } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import SellOutlinedIcon from '@mui/icons-material/SellOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { faHandSparkles } from '@fortawesome/free-solid-svg-icons';
import BackHandOutlinedIcon from '@mui/icons-material/BackHandOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';

import React from 'react'

function RatingComponent() {
    return (
        <div className='w-full block md:px-20 xl:px-40 py-3'>
            <div className='flex justify-center border-t border-t-gray-300 md:pt-10 pt-6'>
                <img src="/Images/left.avif" alt="" className='w-12 h-20 md:max-w-20 md:max-h-32' />
                <h1 className='text-4xl md:text-7xl font-medium'>4.0</h1>
                <img src="/Images/right.avif" alt="" className='w-12 h-20 md:max-w-20 md:max-h-32' />
            </div>

            <div className='flex flex-col justify-center items-center'>
                <h1 className='text-xl md:text-2xl font-medium text-center'>Guest favourite</h1>
                <p className='max-w-[240px] md:max-w-[330px] text-base  md:text-lg text-gray-600 tracking-tight leading-5 text-center pt-1'>One of the most loved stays on xplor based on ratings, reviews and reliability</p>
            </div>

            <div className='grid grid-flow-col grid-col-6 py-7 px-5 md:px-0  border-b border-b-gray-300 overflow-x-scroll md:overflow-x-hidden scrollbar-hide'>
                <div className='flex flex-col border-r border-r-gray-300'>
                    <h1 className='text-xs font-medium'>All Reviews</h1>
                </div>
                <div className='flex flex-col border-r border-r-gray-300 px-5 items-start'>
                    <h1 className='text-xs font-medium'>Accuracy</h1>
                    <h1 className='font-medium'>5.0</h1>
                    <FontAwesomeIcon icon={faCircleCheck} className='text-2xl pt-5' />
                </div>
                <div className='flex flex-col border-r border-r-gray-300 px-5 items-start'>
                    <h1 className='text-xs font-medium'>Value</h1>
                    <h1 className='font-medium'>5.0</h1>
                    <div className='pt-5'>
                        <SellOutlinedIcon sx={{ fontSize: 30 }} />
                    </div>
                </div>
                <div className='flex flex-col border-r border-r-gray-300 px-5 items-start'>
                    <h1 className='text-xs font-medium'>Communication</h1>
                    <h1 className='font-medium'>5.0</h1>
                    <FontAwesomeIcon icon={faMessage} className='text-2xl pt-5' />
                </div>
                <div className='flex flex-col px-5 items-start'>
                    <h1 className='text-xs font-medium'>Location</h1>
                    <h1 className='font-medium'>5.0</h1>
                    <div className='pt-5'>
                        <MapOutlinedIcon sx={{ fontSize: 30 }} />
                    </div>
                </div>
                <div className='flex flex-col px-5 items-start border-l-gray-300 border-l'>
                    <h1 className='text-xs font-medium'>Cleanliness</h1>
                    <h1 className='font-medium'>5.0</h1>
                    {/* <FontAwesomeIcon icon={faHandSparkles} className='text-2xl pt-5' /> */}
                    <div className='pt-5 flex'>
                        <BackHandOutlinedIcon sx={{ fontSize: 25 }} />
                        <AutoAwesomeOutlinedIcon sx={{ fontSize: 25 }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RatingComponent
