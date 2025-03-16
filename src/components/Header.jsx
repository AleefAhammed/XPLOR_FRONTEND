import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser, faHeart } from '@fortawesome/free-solid-svg-icons';
import FlightTakeoffSharpIcon from '@mui/icons-material/FlightTakeoffSharp';
import LuggageOutlinedIcon from '@mui/icons-material/LuggageOutlined';
import HouseOutlinedIcon from '@mui/icons-material/HouseOutlined';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import HouseboatOutlinedIcon from '@mui/icons-material/HouseboatOutlined';
import DirectionsTransitOutlinedIcon from '@mui/icons-material/DirectionsTransitOutlined';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import DirectionsBusSharpIcon from '@mui/icons-material/DirectionsBusSharp';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchKeyWord } from '../Redux/Slices/SearchKeySlice';

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const navigate = useNavigate();
    // const [user, setUser] = useState(true)
    const [search, setSearch] = useState("")
    const dispatch = useDispatch()

    const { user, isLoggedIn } = useSelector((state) => state.UserDetails)
    // console.log(isLoggedIn, user);


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const HandleFavourite = (e) => {

        // e.preventDefault()

        if (isLoggedIn) {

            navigate('/favourites')
        } else {

            navigate('/login')
        }
    }

    const handleSearch = (e) => {

        const value = e.target.value;
        // console.log(value);
        setSearch(value)
    }
    const sentSearch = () => {

        // console.log(search);

        dispatch(setSearchKeyWord(search))
    }

    const handleUser = () => {

        if (!isLoggedIn) {

            navigate('login')

        } else {

            navigate('/userdetails')
        }
    }

    return (
        <header className="bg-white text-black shadow-lg fixed top-0 w-full z-10">
            {/* Small navbar */}
            <div
                className={`hidden sm:flex justify-center border-b border-slate-300 py-2 sm:py-1 text-sm font-light space-x-8 bg-pink-50 uppercase transition-all delay-100 duration-300 ease-out overflow-hidden ${isScrolled ? 'opacity-0 h-0 p-0 border-b-0' : 'opacity-100 h-max'
                    }`}
            >
                <h2 className='cursor-pointer text-small font-medium'>About</h2>
                <h2 className='cursor-pointer text-small font-medium'>Contact us</h2>
            </div>

            {/* Main navbar */}
            <div
                className={`flex justify-between px-7 sm:px-20 items-center bg-white transition-all duration-300 ${isScrolled ? 'border-b border-slate-300' : 'border-b-0'
                    } py-3`}
            >
                <h2 className="hover:cursor-pointer text-center text-rose-500 text-xl sm:text-3xl font-bold">xplor</h2>

                <div className="flex items-center bg-white p-1 rounded-full focus:outline-dashed border-solid border-2 w-max hover:cursor-pointer">
                    <input
                        type="search"
                        placeholder="Search..."
                        className="border-none focus:outline-none px-3 md:w-max w-24"
                        onChange={handleSearch}
                    />
                    <FontAwesomeIcon
                        icon={faSearch}
                        className="bg-rose-500 text-white rounded-full p-2 hover:bg-rose-600"
                        onClick={sentSearch}
                    />
                </div>

                <div className="flex items-center space-x-7">
                    <FontAwesomeIcon
                        icon={faUser}
                        className="cursor-pointer text-md bg-gray-400 rounded-full px-2 py-2 hover:shadow-md hover:shadow-slate-600"
                        onClick={(e) => {
                            e.preventDefault()
                            handleUser()
                        }}
                    />
                    <FontAwesomeIcon icon={faHeart}
                        className="text-2xl text-rose-600 cursor-pointer"
                        onClick={(e) => {
                            e.preventDefault()
                            HandleFavourite(e)
                        }}
                    />
                </div>
            </div>

            {/* Category navbar */}
            <div className="hidden sm:flex flex-row py-3 justify-center space-x-5 text-sm items-center bg-white shadow-md">
                <div className="grid justify-items-center text-center text-gray-500 cursor-pointer">
                    <ExploreOutlinedIcon />
                    <p className="text-verySmall font-medium">Explore</p>
                </div>
                <div className="grid justify-items-center text-center text-gray-500 cursor-pointer">
                    <LuggageOutlinedIcon />
                    <p className="text-verySmall font-medium">Packages</p>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="grid justify-items-center text-center text-gray-500 cursor-pointer">
                    <HouseOutlinedIcon />
                    <p className="text-verySmall font-medium">Home stay</p>
                </div>
                <div className="grid justify-items-center text-center text-gray-500 cursor-pointer">
                    <ApartmentOutlinedIcon />
                    <p className="text-verySmall font-medium">Hotel</p>
                </div>
                <div className="grid justify-items-center text-center text-gray-500 cursor-pointer">
                    <HouseboatOutlinedIcon />
                    <p className="text-verySmall font-medium">House boat</p>
                </div>
                <div className="w-px h-8 bg-gray-300"></div>
                <div className="grid justify-items-center text-center text-gray-500 cursor-pointer">
                    <FlightTakeoffSharpIcon />
                    <p className="text-verySmall font-medium">Flight ticket</p>
                </div>
                <div className="grid justify-items-center text-center text-gray-500 cursor-pointer">
                    <DirectionsTransitOutlinedIcon />
                    <p className="text-verySmall font-medium">Train ticket</p>
                </div>
                <div className="grid justify-items-center text-center text-gray-500 cursor-pointer">
                    <DirectionsBusSharpIcon />
                    <p className="text-verySmall font-medium">Bus ticket</p>
                </div>
            </div>
        </header>
    );
}

export default Header;
