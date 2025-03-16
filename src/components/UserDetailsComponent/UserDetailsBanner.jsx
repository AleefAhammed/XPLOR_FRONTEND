import React from 'react'
import LeftComponent from './LeftComponent'
import RightComponent from './RightComponent'
import FlagIcon from '@mui/icons-material/Flag';



function UserDetailsBanner() {

    return (

        <div className="w-full h-max bg-white">
            <div className="md:flex md:flex-row flex flex-col justify-between py-10 px-10 md:px-20 xl:px-40 md:py-16">

                {/* Left Section */}
                <div className="md:w-2/5 w-full">
                    <LeftComponent />
                </div>

                {/* Right Section */}
                <div className="md:w-3/5 w-full">
                    <RightComponent />
                </div>
            </div>

            <div className='w-full flex space-x-2 items-center cursor-pointer md:hidden px-8 sm:px-20 md:px-20 xl:px-40 '>
                <FlagIcon sx={{ fontSize: 20 }} />
                <h1 className='text-smbase underline font-medium'>Report this profile</h1>
            </div>
        </div>


    )
}

export default UserDetailsBanner