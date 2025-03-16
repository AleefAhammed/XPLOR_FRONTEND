import axios from "axios";

export const addFavourite = async (product, user) => {

    const data = {};
    // console.log(product, user);
    const { id } = { ...user }
    const { propertyName, _id, images } = { ...product }
    // console.log(id, _id, propertyName, images);

    const details = {
        ...data,
        userId: id,
        propertyId: _id,
        propertyName: propertyName,
        images: images
    }

    const response = await axios.post(`${import.meta.env.VITE_SERVER_URL}/favourite/add`, details)
    // console.log(response);

    return response

};
