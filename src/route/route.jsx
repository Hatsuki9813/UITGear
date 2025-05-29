import { createBrowserRouter } from "react-router";
import App from "../App";
import Login from "../pages/LoginSignup/Login";
import ForgotPassword from "../pages/LoginSignup/ForgotPassword";
import Cart from "../pages/ShoppingCart/Cart";
import CheckoutInfo from "../pages/Checkout/CheckoutInfo";
import CustomerService from "../pages/CustomerService/CustomerService";
import Question from "../pages/CustomerService/Question";
import OrderFind from "../pages/OrderTrack/OrderFind";
import OrderTrack from "../pages/OrderTrack/OrderTrack";
import Home from "../pages/Home/Home";
import Products from "../pages/Products/Products";
import Detail from "../pages/Detail/Detail";
import GuestRoute from "./GuestRoute";
import OrderDetails from "../pages/OrderDetails/OrderDetails";
import ChangePassword from "../pages/LoginSignup/ChangePassword";
import WarrantyPolicies from "../pages/Support/WarrantyPolicies";
import InstallmentPolicies from "../pages/Support/InstallmentPolicies";
import News from "../pages/Support/News";
import Sale from "../pages/Support/Sale";
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
                path: "/forgotpassword",
                element: <ForgotPassword />,
            },
            {
                path: "/home",
                element: <Home />,
            },
            {
                path: "/products/:slug",
                element: <Products />,
            },
            {
                path: "/products",
                element: <Products />,
            },

            {
                path: "/detail/:product_id",
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
            {
                path: profileRoutes.path,
                element: profileRoutes.element,
                children: [...profileRoutes.children], // Spread các route con vào
            },
            {
                path: "/order-details/:orderId",
                element: <OrderDetails />,
            },
            {
                path: "/warranty-policies",
                element: <WarrantyPolicies />,
            },
            {
                path: "/installment-policies",
                element: <InstallmentPolicies />,
            },
            {
                path: "/news",
                element: <News />,
            },
            {
                path: "/sales",
                element: <Sale />,
            },
        ],
    },
]);

export default router;
