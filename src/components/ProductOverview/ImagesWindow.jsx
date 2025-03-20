import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../../Redux/Slices/ProductById';
import { useParams } from 'react-router-dom';

Modal.setAppElement("#root"); // Required for accessibility

export default function ImagesWindow() {
    const [isOpen, setIsOpen] = useState(false);
    const { data: product } = useSelector((state) => state.productById);
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProductById(id));
    }, [dispatch, id]);

    return (
        <div className="relative inline-block w-full">
            {/* Product Image */}
            {product?.images?.length > 0 && (
                <img
                    alt={product.imageAlt || "Product Image"}
                    src={product.images[0]}
                    className="object-cover h-customHeight w-full rounded-lg"
                />
            )}

            {/* More Button (Bottom Right) */}
            <button
                onClick={() => setIsOpen(true)}
                className="absolute bottom-2 right-2 bg-white bg-opacity-70 text-black px-3 py-2 rounded-md text-sm hover:bg-opacity-90 transition shadow-lg border border-black"
            >
               Show all images
            </button>

            {/* Modal for showing all images */}
            <Modal
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                className="fixed inset-0 flex items-center justify-center p-4"
                overlayClassName="fixed inset-0 bg-black bg-opacity-50"
            >
                <div className="bg-white p-5 rounded-lg shadow-lg max-w-4xl w-full relative">
                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-3 right-10 bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
                    >
                        X
                    </button>
                    <div className="flex flex-wrap gap-3 py-5 overflow-auto max-h-[80vh]">
                        {product?.images?.map((img, index) => (
                            <img key={index} src={img} alt={`Product ${index}`} className="object-cover rounded-md max-w-full" />
                        ))}
                    </div>
                </div>
            </Modal>
        </div>
    );
}
