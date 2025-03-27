import ProfileLayout from "../pages/Profile/layouts/ProfileLayout"; // layout chỉ cho phần bên phải chứa sidebar + nội dung
import ProfileOverview from "../pages/Profile/Overview";
import ShippingAddress from "../pages/Profile/ShippingAddress";
import PurchaseHistory from "../pages/Profile/PurchaseHistory";

const profileRoutes = {
    path: "/profile",
    element: <ProfileLayout />,
    children: [
        {
            index: true, // tương ứng path: "/profile"
            element: <ProfileOverview />,
        },
        {
            path: "address",
            element: <ShippingAddress />,
        },
        {
            path: "history",
            element: <PurchaseHistory />,
        },
    ],
};

export default profileRoutes;
