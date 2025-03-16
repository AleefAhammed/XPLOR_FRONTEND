import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById } from '../../Redux/Slices/ProductById';
import axios from 'axios';

function RightComponentPE() {

    const { id } = useParams()
    const dispatch = useDispatch()
    const { data: property } = useSelector((state) => state.productById)
    const { user, isLoggedIn } = useSelector((state) => state.user)
    const [edit, setEdit] = useState(false)
    const navigate = useNavigate()

    const [propertyType, setPropertyType] = useState('');
    const [propertyName, setPropertyName] = useState('');
    const [propertyLocation, setPropertyLocation] = useState('');
    const [amenities, setAmenities] = useState([]);
    const [description, setDescription] = useState('');
    const [maxAccomodation, setMaxAccomodation] = useState('2');
    const [rent, setRent] = useState("");
    const [images, setImages] = useState([])
    const [contactDetails, setConatctDetails] = useState({
        phoneNumber: "",
        email: ""
    })
    const [facilities, setFacilities] = useState({

        bedrooms: "",
        bathrooms: ""
    })


    useEffect(() => {
        if (property) {
            setPropertyType(property.propertyType || '');
            setPropertyName(property.propertyName || '');
            setPropertyLocation(property.propertyLocation || '');
            setAmenities(property.amenities || []);
            setDescription(property.description || '');
            setRent(property.rent || '');
            setFacilities(property.facilities || { bedrooms: "", bathrooms: "" });
            setConatctDetails(property.contactDetails || { phoneNumber: "", email: "" });
            setImages(property.images || [])
            setMaxAccomodation(property.maxAccomodation || '2');
        }

    }, [property]);


    useEffect(() => {

        dispatch(getProductById(id))
    }, [dispatch, id])

    const handleEdit = (e) => {

        setEdit((prev) => !prev);
    }
    const handleType = (e) => {
        setPropertyType(e.target.value)
    }

    const handleAmenitiesChange = (event) => {
        const { value, checked } = event.target;
        setAmenities(prev =>
            checked ? [...prev, value] : prev.filter(amenity => amenity !== value)
        );
    };

    const handleContact = (e) => {

        const { name, value } = e.target;
        setConatctDetails((initialState) => ({

            ...initialState,
            [name]: value
        }))
    }

    //handle facilities
    const handleFacilities = (e) => {

        const { name, value } = e.target;
        setFacilities((initiaState) => ({

            ...initiaState,
            [name]: value
        }))
    }

    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);

        if (files.length === 0) {
            setImages((prevImages) => [...prevImages]);
        } else {
            setImages((prevImages) => [...prevImages, ...files]);
        }
    };

    const HandleSubmit = async (id) => {

        if (!property?._id) return;
        const formData = new FormData()

        images.forEach((image) => formData.append("images", image));
        formData.append("propertyLocation", propertyLocation);
        formData.append("propertyName", propertyName);
        formData.append("propertyType", propertyType);
        formData.append("rent", rent);
        formData.append("description", description);
        formData.append("facilities", JSON.stringify(facilities));
        formData.append("amenities", JSON.stringify(amenities));
        formData.append("contactDetails", JSON.stringify(contactDetails));
        formData.append("maxAccomodation", maxAccomodation);
        formData.append("createdBy", JSON.stringify(user))

        console.log("FormData before sending:", [...formData.entries()]);

        try {

            const response = await axios.patch(`${import.meta.env.VITE_SERVER_URL}/product/update/${id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' }, withCredentials: true
            })

            console.log(response.data);

            if (response.data.success) {

                navigate('/userdetails')
            }
        } catch (error) {

            console.log(error);

        }
    }

    return (
        <div className='bg-white border rounded-lg shadow-md grid w-full px-3'>

            <div className='p-6 flex gap-5 items-center'>
                <h1 className='font-medium'>Edit Product</h1>
                <h3 className='text-blue-600 text-sm font-medium tracking-wide cursor-pointer'
                    onClick={handleEdit}>{!edit ? "Edit" : "Cancel"}</h3>
            </div>

            <div className='p-6 grid md:flex gap-5'>
                <div className='grid'>
                    <h1 className='text-gray-800 text-xs'>Property Name</h1>
                    <div className='py-3'>
                        <input
                            type="text"
                            placeholder={property?.propertyName}
                            name=""
                            id=""
                            className='px-3 py-2 focus:outline-none border-gray-400 border'
                            disabled={!edit}
                            onChange={(e) => setPropertyName(e.target.value)} />
                    </div>
                </div>

                <div className='grid'>
                    <h1 className='text-gray-800 text-xs'>Property Location</h1>
                    <div className='py-3'>
                        <input
                            type="text"
                            placeholder={property?.propertyLocation}
                            name=""
                            id=""
                            className='px-3 py-2 focus:outline-none border-gray-400 border'
                            disabled={!edit}
                            onChange={(e) => setPropertyLocation(e.target.value || property?.propertyLocation)} />
                    </div>
                </div>
            </div>

            <div className='px-6 py-4 grid gap-3'>
                <h1 className='text-gray-800 text-xs'>Property Type</h1>
                <div className='flex gap-5'>
                    <div className='flex gap-1'>
                        <input
                            type="radio"
                            name="type"
                            value="family"
                            checked={propertyType === "family"}
                            onChange={handleType}
                            disabled={!edit}
                        />

                        <h3 className='text-gray-500 text-xs'>Family</h3>
                    </div>
                    <div className='flex gap-1'>
                        <input
                            type="radio"
                            name="type"
                            value="couple"
                            checked={propertyType === "couple"}
                            onChange={handleType}
                            disabled={!edit}
                        />

                        <h3 className='text-gray-500 text-xs'>Couple</h3>
                    </div>
                </div>
            </div>
            {
                propertyType === 'family' && (
                    <div className='px-6 py-4 grid gap-3'>
                        <h1 className='text-gray-800 text-xs'>Maximum Occupancy</h1>
                        <div>
                            <input
                                type="number"
                                className='px-3 py-2 focus:outline-none border-gray-400 border'
                                disabled={!edit}
                                onChange={(e) => setMaxAccomodation(e.target.value)}
                                placeholder={property?.maxAccomodation}
                            />
                        </div>
                    </div>
                )
            }

            <div className='px-6 py-4 grid gap-3'>
                <h1 className='text-gray-800 text-xs'>Facilities</h1>
                <div className='flex gap-5'>
                    <div className=''>
                        <h3 className='text-gray-500 text-xs'>Bedrooms</h3>
                        <input
                            type="number"
                            className='px-3 py-2 focus:outline-none border-gray-400 border'
                            disabled={!edit}
                            placeholder={property?.facilities?.bedrooms}
                            onChange={handleFacilities}
                            name='bedrooms'
                        />
                    </div>
                    <div className=''>
                        <h3 className='text-gray-500 text-xs'>Bathrooms</h3>
                        <input
                            type="number"
                            name='bathrooms'
                            className='px-3 py-2 focus:outline-none border-gray-400 border'
                            disabled={!edit}
                            placeholder={property?.facilities?.bathrooms}
                            onChange={handleFacilities}
                        />
                    </div>
                </div>
            </div>

            <div className='px-6 py-4 grid gap-3'>
                <h1 className='text-gray-800 text-xs'>Contact Details</h1>
                <div className='flex gap-5'>
                    <input
                        type="text"
                        className='px-3 py-2 focus:outline-none border-gray-400 border'
                        disabled={!edit}
                        placeholder={property?.contactDetails?.phoneNumber}
                        name='phoneNumber'
                        onChange={handleContact}
                    />
                    <input
                        type="text"
                        className='px-3 py-2 focus:outline-none border-gray-400 border'
                        disabled={!edit}
                        placeholder={property?.contactDetails?.email}
                        name='email'
                        onChange={handleContact}
                    />
                </div>
            </div>

            <div className='px-6 py-4 grid gap-3'>
                <h1 className='text-gray-800 text-xs'>Property Rent</h1>
                <div>
                    <input
                        type="text"
                        className='px-3 py-2 focus:outline-none border-gray-400 border'
                        disabled={!edit}
                        placeholder={`₹ ${property?.rent}`}
                        onChange={(e) => setRent(e.target.value)}
                    />
                </div>
            </div>

            <div className='px-6 py-4 grid gap-3'>
                <h1 className='text-gray-800 text-xs'>About Property</h1>
                <textarea
                    type="text"
                    className='px-3 py-2 focus:outline-none border-gray-400 border'
                    disabled={!edit}
                    rows="3"
                    placeholder={property?.description}
                    onChange={(e) => setDescription(e.target.value)} />
            </div>

            <div className='px-6 py-4 grid gap-3'>
                <h1 className='text-gray-800 text-xs'>Amenities</h1>
                <div className="grid grid-cols-2 gap-3">

                    {['Swimming Pool', 'Gym', 'Parking', 'Pet', 'Grill', 'Indoor fireplace', 'wifi', 'Kitchen', 'TV', 'Dress Washer'].map((amenity, index) => (
                        <label key={index} className="flex items-center space-x-3">
                            <input
                                type="checkbox"
                                value={amenity}
                                checked={amenities.includes(amenity)}
                                onChange={handleAmenitiesChange}
                                className="h-4 text-indigo-500 "
                                disabled={!edit}
                            />
                            <span className='text-sm font-light'>{amenity}</span>
                        </label>
                    ))}

                </div>
            </div>

            <div className='px-6 py-4 grid gap-3'>
                <div>
                    <input type="file" name="" id="" multiple disabled={!edit} onChange={handleFileChange} />
                </div>
            </div>
            {
                edit && (
                    <div className='px-6 py-4 grid gap-3'>
                        <div className=''>
                            <button
                                className='bg-blue-500 text-white px-3 py-2 rounded-sm'
                                onClick={() => HandleSubmit(property?._id)}
                            >Save</button>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default RightComponentPE
