import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import 'tailwindcss/tailwind.css';

function ProductForm() {

    const navigate = useNavigate()
    const { user } = useSelector((state) => state.user)
    // console.log(user);


    const [propertyType, setPropertyType] = useState('');
    const [propertyName, setPropertyName] = useState('');
    const [propertyLocation, setPropertyLocation] = useState('');
    const [amenities, setAmenities] = useState([]);
    const [description, setDescription] = useState('');
    const [maxAccomodation, setMaxAccomodation] = useState('');
    const [rent, setRent] = useState('');
    const [images, setImages] = useState([])
    const [contactDetails, setConatctDetails] = useState({
        phonenumber: "",
        email: ""
    })
    const [facilities, setFacilities] = useState({

        bedrooms: "",
        bathrooms: ""
    })

    //handle multiple image
    const handleFileChange = (e) => {
        const files = Array.from(e.target.files);
        setImages((prevImages) => [...prevImages, ...files]);
    };


    // amenities
    const handleAmenitiesChange = (event) => {
        const { value, checked } = event.target;
        setAmenities(prev =>
            checked ? [...prev, value] : prev.filter(amenity => amenity !== value)
        );
    };

    // contactdetails
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

    const submitform = async () => {

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
        // console.log("API URL:", import.meta.env.VITE_SERVER_URL + "/product/add");

        try {

            const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/product/add`, formData, {

                headers: { 'Content-Type': 'multipart/form-data' }
            }
            )

            console.log(response.data);


            if (response.data.success) {

                console.log("data added successfully");
                navigate('/userdetails')
            }
        } catch (error) {

            console.log(error);

        }
    }

    return (
        <div className="w-full min-h-screen flex items-center justify-center p-5 py-32">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-4xl">
                <h1 className="text-3xl font-semibold text-rose-500 mb-6 text-center">New Property</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Left Section */}
                    <div className="space-y-5">
                        <div>
                            <label className="block text-gray-600 font-medium">Property Name</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded-md focus:ring focus:ring-gray-300 focus:outline-none"
                                onChange={(e) => setPropertyName(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium">Property Location</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded-md focus:ring focus:ring-gray-300 focus:outline-none"
                                onChange={(e) => setPropertyLocation(e.target.value)}
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium">Facilities</label>
                            <div className="flex gap-4">
                                <input
                                    type="number"
                                    name='bedrooms'
                                    placeholder="Bedrooms"
                                    className="w-full p-2 border rounded-md focus:outline-none"
                                    onChange={handleFacilities}
                                />
                                <input
                                    type="number"
                                    name='bathrooms'
                                    placeholder="Bathrooms"
                                    className="w-full p-2 border rounded-md focus:outline-none"
                                    onChange={handleFacilities}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-600 font-medium">Amenities</label>
                            <div className="grid grid-cols-2 gap-3">
                                {['Swimming Pool', 'Gym', 'Parking', 'Pet', 'Grill', 'Indoor fireplace', 'wifi', 'Kitchen', 'TV', 'Dress Washer'].map((amenity, index) => (
                                    <label key={index} className="flex items-center space-x-3">
                                        <input
                                            type="checkbox"
                                            value={amenity}
                                            checked={amenities.includes(amenity)}
                                            onChange={handleAmenitiesChange}
                                            className="h-4 text-indigo-500 "
                                        />
                                        <span className='text-sm font-light'>{amenity}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Right Section */}
                    <div className="space-y-4">

                        <div className='grid gap-21'>
                            <label className="block text-gray-600 font-medium">Property Type</label>
                            <div className="flex gap-5">
                                <label className="flex items-center space-x-2">
                                    <input
                                        className="h-4 text-indigo-500"
                                        name='option'
                                        value='family'
                                        type="checkbox"
                                        checked={propertyType === 'family'}
                                        onChange={(e) => setPropertyType(e.target.value)}
                                    />
                                    <span className='text-sm font-normal'>Family</span>
                                </label>
                                <label className="flex items-center space-x-2">
                                    <input
                                        className="h-4 text-indigo-500"
                                        name='option'
                                        value='couple'
                                        type="checkbox"
                                        checked={propertyType === 'couple'}
                                        onChange={(e) => setPropertyType(e.target.value)}
                                    />
                                    <span className='text-sm font-normal'>Couple</span>
                                </label>
                            </div>
                        </div>

                        {
                            propertyType === 'family' ?
                                <div>
                                    <label className="block text-gray-600 font-medium">Maximum Occupancy</label>
                                    <input
                                        type="number"
                                        className="w-full p-2 border rounded-md focus:ring focus:ring-gray-300 focus:outline-none"
                                        onChange={(e) => setMaxAccomodation(e.target.value)}
                                    />
                                </div>
                                : <></>
                        }

                        {/* Contact Details */}
                        <div className="mt-6">
                            <h2 className="text-xl font-semibold text-gray-700">Contact Details</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                                <input
                                    name='phonenumber'
                                    type="text"
                                    value={contactDetails.phonenumber}
                                    placeholder="Phone Number"
                                    className="w-full p-2 border rounded-md focus:ring focus:ring-gray-300 focus:outline-none"
                                    onChange={handleContact}
                                />
                                <input
                                    type="text"
                                    name='email'
                                    value={contactDetails.email}
                                    placeholder="Email"
                                    className="w-full p-2 border rounded-md focus:ring focus:ring-gray-300 focus:outline-none"
                                    onChange={handleContact}
                                />
                            </div>
                        </div>

                        <div className='grid gap-1'>
                            <label className="block text-gray-600 font-medium">Property Rent</label>
                            <input
                                type="text"
                                className="w-full p-2 border rounded-md focus:ring focus:ring-gray-300 focus:outline-none"
                                placeholder='₹'
                                onChange={(e) => setRent(e.target.value)}
                            />
                            <span className='text-sm font-light'>*amount for a day or a night</span>
                        </div>
                    </div>
                </div>

                {/* Description & Images */}
                <div className="mt-6 space-y-4">
                    <div>
                        <label className="block text-gray-600 font-medium">About the Property</label>
                        <textarea
                            className="w-full p-2 border rounded-md focus:ring focus:ring-gray-300 focus:outline-none text-sm"
                            rows="3"
                            onChange={(e) => setDescription(e.target.value)}
                        ></textarea>
                    </div>
                    <div>
                        <label className="block text-gray-600 font-medium">Upload Images</label>
                        <input type="file" className="w-full p-2 border rounded-md" multiple
                            onChange={handleFileChange} />
                        <span className='text-sm font-light'>* choose not more than 5 images</span>
                    </div>
                </div>
                {/* Submit Button */}
                <div className="mt-6 text-center">
                    <button onClick={submitform} className="bg-gradient-to-r from-rose-500  to-rose-600 p-3 rounded-md text-white text-base font-medium hover:bg-rose-700 hover:-translate-y-1 hover:scale-110 delay-100 duration-300">
                        ADD
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductForm;
