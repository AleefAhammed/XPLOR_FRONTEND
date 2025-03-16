import React from 'react'
import LeftComponentUE from './LeftComponentUE'
import RightComponentUE from './RightComponentUE'

function UserEditBody() {
    return (
        <div className="w-full h-max flex justify-center px-3 py-20 bg-gray-100">

            <div className="flex flex-col md:flex-row w-full max-w-6xl gap-6 p-6">

                <div className="md:w-[29%] w-full">
                    <LeftComponentUE />
                </div>

                <div className="md:w-[71%] w-full">
                    <RightComponentUE />
                </div>

            </div>

        </div>
    )
}

export default UserEditBody
