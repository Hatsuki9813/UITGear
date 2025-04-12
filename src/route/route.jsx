import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter } from "react-router";
import React from "react";
import App from "../App";
import Login from "../pages/LoginSignup/Login";
import ForgotPassword from "../pages/LoginSignup/ForgotPassword";
import Otp from "../pages/LoginSignup/Otp";
import Cart from "../pages/ShoppingCart/Cart";
import CheckoutInfo from "../pages/Checkout/CheckoutInfo";
import CustomerService from "../pages/CustomerService/CustomerService";
import Question from "../pages/CustomerService/Question";
import OrderFind from "../pages/OrderTrack/OrderFind";
import OrderTrack from "../pages/OrderTrack/OrderTrack";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Detail from "../pages/Detail/Detail";
import GuestRoute from "./GuestRoute ";
import ChangePassword from "../pages/LoginSignup/ChangePassword";
// Import route của Profile
import profileRoutes from "./profileRoutes"; // Đường dẫn đúng với dự án của bạn

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <GuestRoute>
            <Login />
          </GuestRoute>
        ),
      },
      {
        path: "/otp",
        element: <Otp />,
      },
      {
        path: "/forgotpassword",
        element: <ForgotPassword />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/detail",
        element: <Detail />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <CheckoutInfo />,
      },
      {
        path: "/customerservice",
        element: <CustomerService />,
      },
      {
        path: "/question",
        element: <Question />,
      },
      {
        path: "/orderfind",
        element: <OrderFind />,
      },
      {
        path: "/ordertrack",
        element: <OrderTrack />,
      },
      // Lồng route Profile vào đây
      {
        path: profileRoutes.path,
        element: profileRoutes.element,
        children: [...profileRoutes.children], // Spread các route con vào
      },
    ],
  },
]);

export default router;
