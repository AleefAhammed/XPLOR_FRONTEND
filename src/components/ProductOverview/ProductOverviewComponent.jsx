import { faAward, faCarRear, faPaw, faStar, faTv, faUtensils, faWifi } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import FireplaceIcon from '@mui/icons-material/Fireplace';
import OutdoorGrillIcon from '@mui/icons-material/OutdoorGrill';
import PoolIcon from '@mui/icons-material/Pool';
import React, { useEffect } from 'react'
import BookingComponent from './BookingComponent';
import OverviewSubHeader from './OverviewSubHeader';
import Description from './Description';
import RatingComponent from './RatingComponent';
import IndividualRating from './IndividualRating';
import { useNavigate } from 'react-router-dom';
import { FitnessCenter } from '@mui/icons-material';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../Redux/Slices/ProductById';
import moment from 'moment/moment';
import ImagesWindow from './ImagesWindow';

function ProductOverviewComponent({ id }) {

  const navigate = useNavigate();

  const dispatch = useDispatch()
  const { data: product, status, error } = useSelector((state) => state.productById)

  // console.log(product);
  useEffect(() => {

    dispatch(getProductById(id))
  }, [dispatch, id])


  return (

    <div className='w-full h-max flex flex-col bg-white'>

      {/* heading */}
      <OverviewSubHeader product={product} />

      {/* photo of the property */}
      <div className='w-full flex px-5 md:px-20 xl:px-40 py-2'>

        {/* <div className='w-full h-max flex overflow-y-auto'> */}

          <ImagesWindow />

        {/* </div> */}
      </div>

      {/* location */}
      <div className="flex flex-col px-5 md:px-20 xl:px-40 py-5">
        <h1 className='font-medium text-xl'>{product?.propertyLocation}</h1>
        <div className="flex space-x-2 text-extraSmall">
          {
            product.propertyType === "couple" ?
              <h1 className=''>Couple</h1>
              :
              <h1 className=''>{product?.maxAccomodation} guests</h1>
          }
          <h1 className="">&middot;</h1>
          <h1 className=''>{product?.facilities?.bedrooms} bedrooms</h1>
          <h1 className="">&middot;</h1>
          <h1 className=''>{product?.facilities?.bathrooms} bathrooms</h1>
        </div>
      </div>

      {/* property details */}
      <div className='w-full h-max flex flex-col md:flex-row px-5 md:px-20 xl:px-40 py-5'>

        <div className='flex flex-col w-full md:w-3/5'>

          <div className="py-8 max-w-sm space-y-2 bg-white sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:gap-x-6">
            {
              product?.createdBy?.image ?
                <img className="object-cover block mx-auto h-14 w-14 rounded-full sm:mx-0 sm:shrink-0 cursor-pointer" src="/Images/user.jpg" alt="Woman's Face" />
                :
                <img className="object-cover block mx-auto h-14 w-14 rounded-full sm:mx-0 sm:shrink-0 cursor-pointer" src="/Images/UserAvatar.png" alt="Woman's Face" />

            }
            <div className="text-center space-y-2 sm:text-left cursor-pointer" onClick={(e) => {

              e.preventDefault();
              navigate("/userdetails")
            }}>
              <div className="space-y-0.5">
                <p className="text-lg text-black font-semibold">
                  {product?.createdBy?.name}
                </p>
                <p className="text-slate-500 font-medium">
                  Listed on {moment(product.createdAt).format("DD MMM YYYY")}
                </p>
              </div>
            </div>
          </div>

          <div className='flex justify-between rounded-lg border border-gray-300 p-5 align-middle font-medium w-full items-center sm:text-extraSmall lg:text-base'>
            <p className='hidden sm:max-w-[200px] md:max-w-[250px] lg:max-w-[300] md:flex tracking-tight'>One of the most loved homes on xplor, according to guests</p>
            <p className='flex flex-col space-x-1 md:hidden items-center'> <span><FontAwesomeIcon icon={faAward} /></span> Guest Favourite</p>

            <div className='border-r border-gray-300 h-10 md:hidden'></div>

            <div className='flex flex-col items-center'>
              <h1>4</h1>
              <span className='flex space-x-1 text-verySmall'>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </span>
            </div>

            <div className='border-r border-gray-300 h-10 md:h-full'></div>

            <div className='flex flex-col items-center'>
              <h1>33</h1>
              <h1 className='underline'>Reviews</h1>
            </div>
          </div>

          <div className='border-b-[1px] border-gray-200 py-5 md:flex hidden'></div>

          <div className='block pt-5 px-1'>

            <div className='py-5'>
              <div>
                <h1 className='text-xl2xl font-medium'>What this place offers</h1>
              </div>

              <div className='md:grid-cols-2 grid'>

                {product?.amenities?.map((amenity, index) => (

                  <div className='flex space-x-3 py-4 items-center' key={index}>
                    {
                      amenity === "wifi" ? (<FontAwesomeIcon icon={faWifi} />)
                        : amenity === "Kitchen" ? (<FontAwesomeIcon icon={faUtensils} />)
                          : amenity === "Parking" ? (<FontAwesomeIcon icon={faCarRear} />)
                            : amenity === "Grill" ? (<OutdoorGrillIcon />)
                              : amenity === "Pet" ? (<FontAwesomeIcon icon={faPaw} />)
                                : amenity === "Swimming Pool" ? (<PoolIcon />)
                                  : amenity === "TV" ? (<FontAwesomeIcon icon={faTv} />)
                                    : amenity === "Indoor fireplace" ? (<FireplaceIcon />)
                                      : amenity === "Dress Washer" ? (<LocalLaundryServiceIcon />)
                                        : amenity == "Gym" ? (<FitnessCenter />)
                                          : ""
                    }
                    {/*  <FontAwesomeIcon icon={faUtensils} /> */}
                    <h1>{amenity}</h1>
                  </div>
                ))
                }
              </div >
            </div >
          </div >

          <Description product={product} />

        </div >

        {/* Booking Component */}
        <BookingComponent product={product} />


      </div >

      <RatingComponent />
      <IndividualRating />

    </div >
  )
}

export default ProductOverviewComponent