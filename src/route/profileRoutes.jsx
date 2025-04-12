import { ProfileLayout } from "../pages/Profile/layouts/ProfileLayout"; // layout chỉ cho phần bên phải chứa sidebar + nội dung
import { Overview } from "../pages/Profile/Overview";
import { ShippingAddress } from "../pages/Profile/ShippingAddress";
import { PurchaseHistory } from "../pages/Profile/PurchaseHistory";
import ProtectedRoute from "./ProtectedRoute";

const profileRoutes = {
  path: "/profile",
  element: (
    <ProtectedRoute>
      <ProfileLayout />
    </ProtectedRoute>
  ),
  children: [
    {
      index: true, // tương ứng path: "/profile"
      element: <Overview />,
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
