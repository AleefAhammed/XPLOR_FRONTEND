import React from 'react'
import LeftComponentPE from './LeftComponentPE'
import RightComponentPE from './RightComponentPE'

function EditProductBody() {
    return (
        <div className="w-full h-max flex justify-center px-3 py-20 bg-gray-100">

            <div className="flex flex-col md:flex-row w-full max-w-6xl gap-6 p-6">

                <div className="md:w-[29%] w-full">
                    <LeftComponentPE />
                </div>

                <div className="md:w-[71%] w-full">
                    <RightComponentPE />
                </div>

            </div>

        </div>
    )
}

export default EditProductBody
