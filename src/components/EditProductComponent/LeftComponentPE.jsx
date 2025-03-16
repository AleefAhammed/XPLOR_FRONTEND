import { faFilePen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductById } from '../../Redux/Slices/ProductById'
import { useParams } from 'react-router-dom'

function LeftComponentPE() {

    const { data: property } = useSelector((state) => state.productById)
    const { id } = useParams()
    const dispatch = useDispatch()

    useEffect(() => {

        dispatch(getProductById(id))
    }, [dispatch])
    return (

        <div className="flex flex-col gap-y-5">
            <div className='bg-white border rounded-lg shadow-md grid'>
                <div className='px-5 py-3 flex items-center gap-5 border-b'>
                    <FontAwesomeIcon icon={faFilePen} className='text-blue-600' />
                    <h1 className='text-base font-medium text-gray-400 uppercase'>Edit Product</h1>
                </div>

                <div className='px-5 py-3 justify-center flex bg-blue-100'>
                    <h3 className='text-xs font-light'>{property?.propertyName}</h3>
                </div>
            </div>
        </div>

    )
}

export default LeftComponentPE
