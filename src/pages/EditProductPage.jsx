import React, { useEffect } from 'react'
import UserDetailsHeader from '../components/UserDetailsComponent/UserDetailsHeader'
import { useSelector } from 'react-redux'
import EditProductBody from '../components/EditProductComponent/EditProductBody'
import { useNavigate, useParams } from 'react-router-dom'

function EditProductPage() {

    const { isLoggedIn } = useSelector((state) => state.user)
    const navigate = useNavigate()

    useEffect(() => {

        if (!isLoggedIn) {

            navigate('/login')
        }
    }, [])

    return (
        <div>
            <UserDetailsHeader />
            <EditProductBody />
        </div>
    )
}

export default EditProductPage
