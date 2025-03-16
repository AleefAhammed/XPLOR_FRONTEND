import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { fetchAllProducts } from '../Redux/Slices/AllProductsSlice';
import LoadingComponent from './LoadingComponent/LoadingComponent';


function HomeProdutComponent() {

    const [filteredProducts, setFilteredProducts] = useState([]);
    const value = useSelector((state) => state.searchKey.value);
    // console.log(value);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);

    const { data: products, status, error } = useSelector((state) => state.products);
    // console.log(products, status, error);

    useEffect(() => {

        dispatch(fetchAllProducts())
    }, [dispatch])

    useEffect(() => {
        if (!products || products.length === 0) return;

        if (value === "") {
            setFilteredProducts(products);
        } else {
            const filteredData = products.filter(item =>
                Object.values(item)
                    .join('')
                    .toLowerCase()
                    .includes(value.toLowerCase())
            );
            setFilteredProducts(filteredData);
        }
    }, [value, products]);

    useEffect(() => {

        setTimeout(() => {
            setLoading(false);
        }, 1000)
    }, [])


    return (
        <div className="bg-white sm:px-10 sm:py-60 py-20 px-2">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">

                    {
                        loading ? (
                            Array(products.length)
                                .fill(null)
                                .map((d, i) => <LoadingComponent key={i} />)
                        ) : (
                            filteredProducts?.map((product, index) => (
                                <div key={index} className="group relative" onClick={(e) => {

                                    e.preventDefault();
                                    navigate(`/productoverview/${product._id}`)
                                }}>
                                    {product.images?.length > 0 && (

                                        <img
                                            alt={product.imageAlt}
                                            src={product.images[0]}
                                            className="aspect-square w-full rounded-md bg-gray-200 object-cover group-hover:opacity-75 lg:aspect-auto lg:h-64"
                                        />
                                    )}
                                    < div className="mt-4 flex justify-between ">
                                        <div>
                                            <h3 className="sm:text-base text-gray-700 font-medium">

                                                <span aria-hidden="true" className="absolute inset-0" />
                                                {product.propertyName}

                                            </h3>
                                            <p className="mt-1 text-sm text-gray-500">{product.propertyLocation}</p>
                                            <p className="mt-1 text-sm text-gray-500">{product.propertyType}</p>
                                            <p className="mt-1 text-base font-medium">{product.rent} <span className='font-normal text-sm'>Night</span></p>
                                        </div>
                                        <p className="text-sm font-medium text-gray-900">{product.rating}</p>
                                    </div>
                                </div>
                            ))
                        )
                    }
                </div>
            </div>
        </div >
    )
}

export default HomeProdutComponent
