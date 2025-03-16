import React from "react"
import LoginPage from "./pages/LoginPage"
import SignupPage from "./pages/SignupPage"
import HomePage from "./pages/HomePage"
import ProductOverviewPage from "./pages/ProductOverviewPage"
import UserDetails from "./pages/UserDetails"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { RouteLayout } from "./RouteLayout/RouteLayout"
import AddProductPage from "./pages/AddProductPage"
import FavContent from "./pages/Favourites"
import UserEditPage from "./pages/UserEditPage"
import EditProductPage from "./pages/EditProductPage"
import { loader as routeLoader } from "./Loaders/RouteLoader"


export function App() {

  const router = createBrowserRouter([

    {
      path: "/",
      element: <RouteLayout />,
      loader: routeLoader,
      children: [

        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/signup",
          element: <SignupPage />
        },
        {
          path: "/login",
          element: <LoginPage />
        },
        {
          path: "/userdetails",
          element: <UserDetails />
        },
        {
          path: "/productoverview/:id",
          element: <ProductOverviewPage />
        },
        {
          path: "/addproduct",
          element: <AddProductPage />
        },
        {
          path: "/favourites",
          element: <FavContent />
        },
        {
          path: "/edituser",
          element: <UserEditPage />
        },
        {
          path: "/editproduct/:id",
          element: <EditProductPage />
        },
      ]
    }

  ]
  )

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}


