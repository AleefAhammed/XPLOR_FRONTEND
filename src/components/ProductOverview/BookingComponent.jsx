import { faAngleDown, faAngleUp, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import { MobileDatePicker } from '@mui/x-date-pickers'; import Dropdown from './Dropdown';
import axios from 'axios';
import { useSelector } from 'react-redux';

function BookingComponent({ product }) {

    const [state, setState] = useState(false);

    const [checkIn, setCheckIn] = useState(null)
    const [checkOut, setCheckOut] = useState(null)
    const [totalDays, setTotalDays] = useState(null)
    const [totalAmount, setTotalAmount] = useState(null);
    const [serviceFee, setServiceFee] = useState(500);
    const [bookingAmount, setBookingAmount] = useState('');
    const [image, setImage] = useState('')

    const { user, isLoggedIn } = useSelector((state) => state.user)

    useEffect(() => {

        if (checkIn && checkOut) {

            const days = dayjs(checkOut).diff(dayjs(checkIn), "day")
            setTotalDays(days)

            const totalPrice = days * product.rent;
            setTotalAmount(totalPrice)

            const amount = totalPrice + serviceFee;
            setBookingAmount(amount)

        } else {

            setTotalDays(0)
        }

    }, [checkIn, checkOut])

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    const initPayment = (data) => {

        if (!window.Razorpay) {
            console.error("Razorpay SDK not loaded");
            return;
        }

        const options = {
            key: `${import.meta.env.VITE_RAZORPAY_KEY_ID}`,
            amount: data.amount,
            currency: data.currency,
            name: product?.propertyName,
            // description: product?.description,
            image: product?.images[0],
            order_id: data.id,
            handler: async (response) => {
                try {
                    const verifyUrl = `${import.meta.env.VITE_SERVER_URL}/payment/verify`;
                    const { data } = await axios.post(verifyUrl, response);
                    console.log(data);
                    if (data.success) {

                        // window.location.reload()
                    }
                } catch (error) {
                    console.log(error);
                }
            },
            theme: {
                color: "#3399cc",
            },
        };
        const rzp1 = new window.Razorpay(options);
        rzp1.open();
    };

    const makePayment = async (e) => {


        const formData = new FormData();
        formData.append("amount", bookingAmount)
        // console.log("FormData before sending:", [...formData.entries()]);

        if (isLoggedIn) {
            try {


                const orderUrl = `${import.meta.env.VITE_SERVER_URL}/payment/orders`;
                const { data } = await axios.post(orderUrl, formData, {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                });
                // console.log(data);
                initPayment(data.data);
            } catch (error) {
                console.log(error);
            }
        } else if (!isLoggedIn) {

            alert("Login to use this feature");
            // alert()
        }
    }

    return (
        <>

            <div className='w-full md:w-2/5 md:p-4 lg:pl-14 lg:py-0 pt-10'>

                <div className='px-5 py-2 block border rounded-lg shadow-2xl'>
                    <div className='w-full h-max flex space-x-1 items-baseline py-3'>
                        <h1 className='text-xl font-medium'>₹ {product.rent}</h1>
                        <h1 className='font-normal text-extraSmall tracking-normal align-bottom '>daily</h1>
                    </div>

                    <div className='w-full h-max '>
                        <div className='w-full border border-gray-400 rounded-lg'>
                            <div className='grid grid-cols-2'>
                                <div className={`p-2 border-r border-r-gray-400 ${state ? "border-b-0" : 'border-b-2 border-b-gray-400'}`}>
                                    <h1 className='text-small font-medium uppercase'>CHECK-IN</h1>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <MobileDatePicker
                                            value={checkIn}
                                            onChange={(newValue) => setCheckIn(newValue)}
                                        />
                                    </LocalizationProvider>
                                </div>
                                <div className={`p-2 border-b-2 border-b-gray-400 ${state ? 'border-none' : 'border-b-2 border-b-gray-400'}`}>
                                    <h1 className='text-small font-medium uppercase'>CHECK-OUT</h1>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <MobileDatePicker
                                            value={checkOut}
                                            onChange={(newValue) => setCheckOut(newValue)}
                                            minDate={checkIn}
                                        />
                                    </LocalizationProvider>
                                </div>
                            </div>

                            <div className={`w-full relative ${state ? 'border-black border-2 rounded-lg' : ''}`} onClick={() => setState(!state)}>
                                <div className='flex justify-between items-center cursor-pointer'>
                                    <div className='p-2'>
                                        <h1 className='text-small font-medium uppercase'>Guests</h1>
                                        <h1 className='text-sm'>2 guests</h1>
                                    </div>
                                    <div className='p-2'>
                                        <FontAwesomeIcon icon={faAngleDown} className={` ${!state ? "flex" : "hidden"}`} />
                                        <FontAwesomeIcon icon={faAngleUp} className={` ${state ? "flex" : "hidden"}`} />
                                    </div>
                                </div>
                            </div>

                            {/* dropdown */}
                            {
                                product?.propertyType !== "couple" ?
                                    <Dropdown state={state} />
                                    : ""
                            }

                        </div>


                        {/*reserve btn */}
                        <div className='w-full flex justify-center py-4 px-[1px]'>
                            <button
                                className='p-3 text-base rounded-md w-full text-white bg-gradient-to-r from-rose-700 via-rose-500 to-rose-600 hover:bg-gradient-to-r hover:from-rose-600 hover:to-rose-600'
                                onClick={(e) => makePayment(e)}
                            >Reserve</button>
                        </div>

                        <p className='text-center pt-2 pb-3 text-extraSmall font-light'>Reservation charges may vary</p>

                    </div>

                    <div className='flex justify-between py-2'>

                        <p className='underline decoration-1 text-extraSmall text-gray-800'>{product.rent} x {totalDays} Days</p>
                        <p className='text-extraSmall text-gray-800'>₹ {totalAmount}</p>
                    </div>

                    <div className='flex justify-between py-2'>

                        <p className='underline decoration-1 text-smbase text-gray-800'>Our Service Fee</p>
                        <p className='text-extraSmall text-gray-800'>₹ {serviceFee}</p>
                    </div>

                    <div className='border-b border-b-gray-200 py-2'></div>

                    <div className='flex justify-between py-4 font-medium'>

                        <p className='text-smbase text-gray-800'>Total Including Tax</p>
                        <p className='text-extraSmall text-gray-800'>₹ {bookingAmount}</p>
                    </div>

                </div>

            </div >

        </>
    )
}

export default BookingComponent
