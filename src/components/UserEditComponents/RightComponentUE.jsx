import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getUserAllDetails } from '../../Redux/Slices/AllDetailsOfUser'

function RightComponentUE() {

    const [checked, setChecked] = useState("")
    const [edit, setEdit] = useState(false)
    const [userName, setUserName] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")
    const [userImage, setUserImage] = useState(null)
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")

    const { user, isLoggedIn } = useSelector((state) => state.user)
    // const [userData, setUserData] = useState({})
    const { data: userData } = useSelector((state) => state.userAllDetails)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleChange = (e) => {

        setChecked(e.target.value)
    }

    const handleEdit = (e) => {

        setEdit(!edit)
    }

    const handleSave = async (e) => {

        // console.log(userName, email, number, checked,userImage);
        const { id } = user
        // console.log(user);

        const formData = new FormData()
        formData.append("image", userImage)
        formData.append("name", userName)
        formData.append("email", email)
        formData.append("phoneNumber", number)
        formData.append("gender", checked)
        formData.append("id", id)
        formData.append("city", city)
        formData.append("country", country)

        console.log([...formData.entries()]);

        try {

            const response = await axios.patch(`${import.meta.env.VITE_SERVER_URL}/user/update`, formData, {

                headers: { 'Content-Type': 'multipart/form-data' }
            })

            if (response.data.success) {

                // console.log("data added successfully");
                navigate('/userdetails')
            }
        } catch (error) {

            console.log(error);
        }
    }

    useEffect(() => {

        if (!isLoggedIn) {

            navigate('/login')
        }

    }, [])

    useEffect(() => {

        const { id } = user
        dispatch(getUserAllDetails(id))
    }, [dispatch])

    return (

        <div className='bg-white border rounded-lg shadow-md grid w-full px-3'>

            <div className='p-6 flex gap-5 items-center'>
                <h1 className='font-medium'>Personal Informations</h1>
                <h3 className='text-blue-600 text-sm font-medium tracking-wide cursor-pointer'
                    onClick={handleEdit}>{!edit ? "Edit" : "Cancel"}</h3>
            </div>

            <div className='px-5 py-1 flex gap-10 items-center'>
                <div>
                    <input type="text" placeholder={`${userData?.name}`} className='border focus:outline-blue-700 focus:outline-1 py-2 px-3' disabled={!edit} onChange={(e) => {
                        setUserName(e.target.value)
                    }} />
                </div>
                <div>
                    {
                        edit ?
                            <button className='uppercase bg-blue-600 py-[9px] px-5 text-white opacity-95 rounded-sm text-xs' onClick={handleSave}>save</button>
                            : ""
                    }
                </div>
            </div>

            <div className='p-5 grid items-center'>
                <div className='flex items-center gap-5'>
                    <h1 className='font-light text-xs'>Your Gender</h1>
                </div>
                <div className='flex gap-4 py-2'>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={checked === "male"}
                        disabled={!edit}
                        onChange={handleChange} />
                    <h3>Male</h3>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={checked === "female"}
                        disabled={!edit}
                        onChange={handleChange} />
                    <h3>Female</h3>
                </div>
            </div>

            <div className='p-5 grid items-center'>
                <div className='flex items-center gap-5'>
                    <h1 className='font-medium'>Email Address</h1>
                </div>
                <div className='py-6'>
                    <input type="text" placeholder={`${userData?.email}`} className='border focus:outline-blue-700 focus:outline-1 py-2 px-3' disabled={!edit} onChange={(e) => {
                        setEmail(e.target.value)
                    }} required />
                </div>
            </div>

            <div className='p-5 grid items-center'>
                <div className='flex items-center gap-5'>
                    <h1 className='font-medium'>Address</h1>
                </div>
                <div className='py-6 flex gap-5'>
                    <div className='grid gap-2'>
                        <h1 className='text-sm'>City</h1>
                        <input type="text" placeholder={userData?.city ?? 'City'} className='border focus:outline-blue-700 focus:outline-1 py-2 px-3' disabled={!edit} onChange={(e) => {
                            setCity(e.target.value)
                        }} required />
                    </div>
                    <div className='grid gap-2'>
                        <h1 className='text-sm'>Country</h1>
                        <input type="text" placeholder={userData?.country ?? 'Country'} className='border focus:outline-blue-700 focus:outline-1 py-2 px-3' disabled={!edit} onChange={(e) => {
                            setCountry(e.target.value)
                        }} required />
                    </div>
                </div>
            </div>

            <div className='p-5 grid items-center'>
                <div className='flex items-center gap-5'>
                    <h1 className='font-medium'>Mobile Number</h1>
                </div>
                <div className='py-6'>
                    <input type="text" placeholder={`${userData?.phoneNumber}`} className='border focus:outline-blue-700 focus:outline-1 py-2 px-3' disabled={!edit} onChange={(e) => setNumber(e.target.value)
                    } />
                </div>
            </div>

            <div className='p-5 grid items-center'>
                <div className='flex items-center gap-5'>
                    <h1 className='font-medium'>Upload Profile</h1>
                </div>
                <div className='py-6'>
                    <input
                        type="file"
                        accept="image/*"
                        disabled={!edit}
                        onChange={(e) => setUserImage(e.target.files[0])}
                    />
                </div>
            </div>

        </div>
    )
}

export default RightComponentUE
