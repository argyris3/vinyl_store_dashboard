import { FcStatistics } from "react-icons/fc";
import { FcDebt } from "react-icons/fc";
import { FcTemplate } from "react-icons/fc";
import { FcViewDetails } from "react-icons/fc";
import { FcBadDecision } from "react-icons/fc";
import { FcButtingIn } from "react-icons/fc";
import { FcNightPortrait } from "react-icons/fc";
import { FaCodePullRequest } from "react-icons/fa6";

import { FcPhone } from "react-icons/fc";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoMdAdd } from "react-icons/io";
import { MdViewList } from "react-icons/md";
import { TbBasketDiscount } from "react-icons/tb";
import { BsCartCheck } from "react-icons/bs";
import { IoChatbubbles } from "react-icons/io5";
import { BsFillChatQuoteFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { MdPayment } from "react-icons/md";

export const allNav = [
  {
    id: 1,
    title: "Dashboard",
    icon: <FcStatistics />,
    role: "admin",
    path: "/admin/dashboard",
  },
  {
    id: 2,
    title: "Orders",
    icon: <FcTemplate />,
    role: "admin",
    path: "/admin/dashboard/orders",
  },
  {
    id: 3,
    title: "Category",
    icon: <FcViewDetails />,
    role: "admin",
    path: "/admin/dashboard/category",
  },
  {
    id: 4,
    title: "Sellers",
    icon: <FcButtingIn />,
    role: "admin",
    path: "/admin/dashboard/sellers",
  },
  {
    id: 5,
    title: "Payment Request",
    icon: <FcDebt />,
    role: "admin",
    path: "/admin/dashboard/payment-request",
  },
  {
    id: 6,
    title: "Deactive Sellers",
    icon: <FcBadDecision />,
    role: "admin",
    path: "/admin/dashboard/deactive-sellers",
  },
  {
    id: 7,
    title: "Seller Request",
    icon: <FcNightPortrait />,
    role: "admin",
    path: "/admin/dashboard/sellers-request",
  },
  {
    id: 8,
    title: "Live Chat",
    icon: <FcPhone />,

    role: "admin",
    path: "/admin/dashboard/chat-sellers",
  },
  {
    id: 9,
    title: "Dashboard",
    icon: <AiOutlineDashboard />,
    role: "seller",
    path: "/seller/dashboard",
  },
  {
    id: 10,
    title: "Add Product",
    icon: <IoMdAdd />,
    role: "seller",
    path: "/seller/dashboard/add-product",
  },
  {
    id: 11,
    title: "All Product",
    icon: <MdViewList />,
    role: "seller",
    path: "/seller/dashboard/products",
  },
  {
    id: 12,
    title: "Discount Product",
    icon: <TbBasketDiscount />,
    role: "seller",
    path: "/seller/dashboard/discount-product",
  },
  {
    id: 13,
    title: "Orders",
    icon: <BsCartCheck />,
    role: "seller",
    path: "/seller/dashboard/orders",
  },
  {
    id: 14,
    title: "Payments",
    icon: <MdPayment />,
    role: "seller",
    path: "/seller/dashboard/payments",
  },
  {
    id: 15,
    title: "Chat-Customer",
    icon: <IoChatbubbles />,
    role: "seller",
    path: "/seller/dashboard/chat-customer",
  },
  {
    id: 16,
    title: "Chat-Support",
    icon: <BsFillChatQuoteFill />,
    role: "seller",
    path: "/seller/dashboard/chat-support",
  },
  {
    id: 17,
    title: "Profile",
    icon: <CgProfile />,
    role: "seller",
    path: "/seller/dashboard/profile",
  },
];
