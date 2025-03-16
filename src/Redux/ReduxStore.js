import { configureStore } from "@reduxjs/toolkit";
import optionReducer from './Slices/OptionSlice'
import searchKeyReducer from './Slices/SearchKeySlice'
import allProductReducer from './Slices/AllProductsSlice'
import userReducer from './Slices/userDetails'
import productByIdReducer from './Slices/ProductById'
import userFavouritesReducer from './Slices/UserFavouritesSlice'
import usersProductsReducer from './Slices/ProductsOfUser'
import userAllDetailsReducer from './Slices/AllDetailsOfUser'
import userDetailsReducer from './Slices/userDetails'

const store = configureStore({
  reducer: {

    option: optionReducer,
    products: allProductReducer,
    searchKey: searchKeyReducer,
    user: userReducer,
    productById: productByIdReducer,
    userFavourites: userFavouritesReducer,
    usersProducts: usersProductsReducer,
    userAllDetails: userAllDetailsReducer,
    UserDetails: userDetailsReducer
  }, // Add your reducers here
});

export default store;
