import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter } from "react-router";
import React from 'react'
import App from '../App'
import Login from '../pages/LoginSignup/Login';
import ForgotPassword from '../pages/LoginSignup/ForgotPassword';
import Cart from '../pages/ShoppingCart/Cart';
import CartItem from '../components/Cart/CartItem';
import CheckoutInfo from '../pages/Checkout/CheckoutInfo';
import CustomerService from '../pages/CustomerService/CustomerService';
import Question from '../pages/CustomerService/Question';
import OrderFind from '../pages/OrderTrack/OrderFind';
import OrderTrack from '../pages/OrderTrack/OrderTrack';
const root = document.getElementById("root");

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Login />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/forgotpassword",
                element: <ForgotPassword />
            }
        ]
    }
])
export default router