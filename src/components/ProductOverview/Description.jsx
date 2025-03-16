import React from 'react'

function Description({ product }) {
    return (

        <div className="w-full mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="md:flex">
                <div className="md:shrink-0">
                    {product.images?.length > 0 && (

                        <img
                            alt={product.imageAlt}
                            src={product.images[0]}
                           className="h-48 w-full object-cover md:h-full md:w-48"
                        />
                    )}
                </div>
                {/* <img className="h-48 w-full object-cover md:h-full md:w-48"  src="/Images/vythiri-village.jpg" alt="Modern building architecture" /> */}
                <div className="p-8">
                    <div className="uppercase tracking-wide text-md text-indigo-500 font-semibold">{product.propertyName}</div>
                    <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
                    <p className="mt-2 text-slate-500 sm:w-max w-[100px]">
                        {product.description}
                    </p>
                </div>
            </div>
        </div>

    )
}

export default Description
