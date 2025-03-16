import { Checkbox } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import { authenticateUser } from '../Redux/Slices/userDetails'

function SignupComponent() {

  const navigate = useNavigate()
  const [selecteOption, setSelectedOption] = useState('')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [password, setPassword] = useState('')
  const { user, isLoggedIn } = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleSubmit = async () => {

    try {
      const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/user/signup`, { name, email, phone, password }, { withCredentials: true })
      console.log("Response Data:", response.data);

      if (response?.data?.success) {

        dispatch(authenticateUser(response?.data?.data));

        toast.success('Successful login!', {
          position: "top-center",
          autoClose: 1500, // Auto close after 1.5s
          theme: "light",
        });

        // Delay navigation by 1.5s
        setTimeout(() => {
          navigate('/')
        }, 2000);

      }
    } catch (error) {

      toast.error(`Login failed: ${error.response?.data?.message || "Unknown error"}`, {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
      });
      console.error("Login Error:", error.response?.data?.message || error.message);
    }
  }

  return (
    <div className='w-full h-max'>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className='bg-signuppage-bg bg-cover flex flex-col'>


        <div className='w-full h-max flex justify-start space-x-6 md:px-16 px-6 md:py-3 py-2 items-center opacity-85 '>

          <h1 className='text-2xl sm:text-4xl underline font-bold text-rose-500 cursor-pointer' onClick={(e) => {

            e.preventDefault();
            navigate("/")
          }}>
            xplor
          </h1>

          <p className='font-medium text-white'>Hotels and homes across 800 cities, 24+ countries</p>
        </div>

        <div className='w-full h-max flex flex-col sm:flex sm:flex-row justify-evenly p-6 md:p-8 2xl:p-10'>

          <div className='sm:w-1/2 text-white py-3 sm:py-20 sm:pl-10 md:pl-20'>
            <p className='text-2xl md:text-4xl font-bold max-w-52 md:max-w-80 mb-3'>There’s a smarter way to <span className='underline text-rose-500'>xplor</span> around</p>
            <p className='text-sm sm:text-base max-w-60 md:max-w-96'>Sign up with your phone number and get exclusive access to discounts and savings on OYO stays and with our many travel partners.</p>
          </div>

          <div className='py-5 bg-white p-10 shadow-md flex flex-col md:w-1/3'>
            <h1 className='text-rose-500 text-4xl font-semibold mb-4'>Sign-in</h1>

            <span className='flex items-center space-x-2 border outline-1 p-2 mb-5'>
              <h1 className='font-medium text-base'>Name</h1>
              <div className="border-l h-6"></div>
              <input type="text" className='w-full p-1 focus:outline-none text-sm font-light'
                onChange={(e) => setName(e.target.value)}
              />
            </span>

            <span className='flex items-center space-x-2 border outline-1 p-2 mb-5'>
              <h1 className='font-medium text-base'>Email</h1>
              <div className="border-l h-6"></div>
              <input type="email" className='w-full p-1 focus:outline-none text-sm font-light'
                onChange={(e) => setEmail(e.target.value)}
              />
            </span>

            <span className='flex items-center space-x-2 border outline-1 p-2 mb-5'>
              <h1 className='font-medium text-base'>Phone</h1>
              <div className="border-l h-6"></div>
              <input type="text" className='w-full p-1 focus:outline-none text-sm font-light'
                onChange={(e) => setPhone(e.target.value)}
              />
            </span>

            <span className='flex items-center space-x-2 border outline-1 p-2 mb-5'>
              <h1 className='font-medium text-base'>Password</h1>
              <div className="border-l h-6"></div>
              <input type="password" className='w-full p-1 focus:outline-none text-sm font-light'
                onChange={(e) => setPassword(e.target.value)}
              />

            </span>

            <div className='grid-rows-2 grid w-full py-2'>
              <div className='flex font-light text-base space-x-2 items-center'>
                <h1>Become a host</h1>
                <Checkbox
                  name='option'
                  value='option1'
                  checked={selecteOption === 'option1'}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  size="small" />
              </div>

              <div className='flex font-light text-base space-x-2 items-center'>
                <h1>Become a xplorer</h1>
                <Checkbox
                  name='option'
                  value='option2'
                  checked={selecteOption === 'option2'}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  size="small" />
              </div>
            </div>

            <div className="w-full flex justify-center mb-4">
              <button
                type="button"
                className="bg-gradient-to-r from-rose-500  to-rose-600 p-3 rounded-md text-white text-base font-medium hover:bg-rose-700 hover:-translate-y-1 hover:scale-110 delay-100 duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  handleSubmit()
                }}
              >
                Explore
              </button>
            </div>

            <div className='border-t mb-4'></div>

            <div className='flex justify-center items-center'>

              <p className='text-base text-black'>
                Already a member
                <span className='text-rose-500 underline cursor-pointer ml-1 mr-1' onClick={(e) => {

                  e.preventDefault();
                  navigate("/login")
                }}>
                  login
                </span>
                and continue
              </p>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default SignupComponent
