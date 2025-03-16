import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function IndividualRating() {

    const users = [

        {
            "userId": 1,
            "id": 2,
            "name": "John",
            "joinedOn": "12-5-2019",
            "listedOn": "10-10-24",
            "rating": "4 Star",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo consequatur, architecto expedita dolor, sed eius inventore dolorem aut hic odit voluptatibus ut provident. Ipsam, quia nostrum? Amet sequi accusantium quibusdam!"
        },
        {
            "userId": 1,
            "id": 2,
            "joinedOn": "12-5-2019",
            "name": "Smith",
            "listedOn": "10-10-24",
            "rating": "4 Star",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo consequatur, architecto expedita dolor, sed eius inventore dolorem aut hic odit voluptatibus ut provident. Ipsam, quia nostrum? Amet sequi accusantium quibusdam!"
        },
        {
            "userId": 1,
            "id": 2,
            "joinedOn": "12-5-2019",
            "name": "Morgan",
            "rating": "4 Star",
            "listedOn": "10-10-24",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo consequatur, architecto expedita dolor, sed eius inventore dolorem aut hic odit voluptatibus ut provident. Ipsam, quia nostrum? Amet sequi accusantium quibusdam!"
        },
        {
            "userId": 1,
            "id": 2,
            "joinedOn": "12-5-2019",
            "name": "Santos",
            "rating": "4 Star",
            "listedOn": "10-10-24",
            "description": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo consequatur, architecto expedita dolor, sed eius inventore dolorem aut hic odit voluptatibus ut provident. Ipsam, quia nostrum? Amet sequi accusantium quibusdam!"
        }
    ]
    return (
        <div className='w-full md:block md:px-20 xl:px-40 py-3'>

            {/* for laptops and more */}
            <div className='md:grid md:grid-cols-2 hidden'>

                {
                    users.map((user, index) => {

                        return (
                            <div className='flex- flex-col flex-grow p-5' key={index}>
                                <div className="py-8 max-w-sm space-y-2 bg-white sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-4">
                                    <img className="object-cover block mx-auto h-11 w-11 rounded-full sm:mx-0 sm:shrink-0" src="/Images/user.jpg" alt="Woman's Face" />
                                    <div className="text-center space-y-2 sm:text-left">
                                        <div className="space-y-0.5">
                                            <p className="text-base text-black font-medium">
                                                {user.name}
                                            </p>
                                            <p class="text-slate-500 text-sm">
                                                {user.joinedOn}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='md:block hidden'>
                                    <div className="flex items-center space-x-1">
                                        <FontAwesomeIcon icon={faStar} className='text-xxs' />
                                        <p className="text-slate-500 text-xsmall font-medium">{user.joinedOn}</p>
                                    </div>
                                    <div className='md:max-w-[450px] pt-2'>
                                        <p>{user.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>

            <div className='md:flex justify-center items-center hidden'>
                <div className='p-5'>
                    <button className='px-5 py-3 border border-gray-500 rounded-lg font-medium text-smbase'>Load more reviews</button>
                </div>
            </div>

            <div className='border-b border-b-gray-300'></div>

        </div>
    )
}

export default IndividualRating
