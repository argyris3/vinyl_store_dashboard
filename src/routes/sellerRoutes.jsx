import { lazy } from "react";

const SellerDashboard = lazy(() =>
  import("../../src/views/seller/SellerDashboard")
);
const AddProduct = lazy(() => import("../../src/views/seller/AddProduct"));
const Products = lazy(() => import("../../src/views/seller/Products"));

const Orders = lazy(() => import("../../src/views/seller/Orders"));
const Payments = lazy(() => import("../../src/views/seller/Payments"));
const SellerToAdmin = lazy(() =>
  import("../../src/views/seller/SellerToAdmin")
);
const SellerToCustomer = lazy(() =>
  import("../../src/views/seller/SellerToCustomer")
);
const Profile = lazy(() => import("../../src/views/seller/Profile"));
const EditProduct = lazy(() => import("../../src/views/seller/EditProduct"));
const OrderDetails = lazy(() => import("../../src/views/seller/OrderDetails"));
const Pending = lazy(() => import("./../../src/views/Pending"));
const Deactive = lazy(() => import("./../../src/views/Deactive"));

export const sellerRoutes = [
  {
    path: "/seller/account-pending",
    element: <Pending />,
    ability: "seller",
  },
  {
    path: "/seller/account-deactive",
    element: <Deactive />,
    ability: "seller",
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/edit-product/:productId",
    element: <EditProduct />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/products",
    element: <Products />,
    role: "seller",
    status: "active",
  },

  {
    path: "/seller/dashboard/orders",
    element: <Orders />,
    role: "seller",
    visibility: ["active", "deactive"],
  },
  {
    path: "/seller/dashboard/order/details/:orderId",
    element: <OrderDetails />,
    role: "seller",
    visibility: ["active", "deactive"],
  },
  {
    path: "/seller/dashboard/payments",
    element: <Payments />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-support",
    element: <SellerToAdmin />,
    role: "seller",
    visibility: ["active", "deactive", "pending"],
  },
  {
    path: "/seller/dashboard/chat-customer/:customerId",
    element: <SellerToCustomer />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/chat-customer",
    element: <SellerToCustomer />,
    role: "seller",
    status: "active",
  },
  {
    path: "/seller/dashboard/profile",
    element: <Profile />,
    role: "seller",
    visibility: ["active", "deactive", "pending"],
  },
];
