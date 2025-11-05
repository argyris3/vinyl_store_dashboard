import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import io from "socket.io-client";

import { useDispatch, useSelector } from "react-redux";
import { updateCustomer, updateSellers } from "../store/reducers/chatReducer";

const MainLayout = () => {
  const socket = io("https://vinyl-store-backend-k4g7.onrender.com");
  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.auth);

  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (userInfo && userInfo.role === "seller") {
      socket.emit("add_seller", userInfo._id, userInfo);
    } else {
      socket.emit("add_admin", userInfo);
    }
  }, [userInfo]);

  useEffect(() => {
    socket.on("activeCustomer", (customers) => {
      dispatch(updateCustomer(customers));
    });
    socket.on("activeSeller", (sellers) => {
      dispatch(updateSellers(sellers));
    });
  });
  return (
    <div className="bg-black w-full min-h-screen ">
      <Header showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
      <div className="ml-0 lg:ml-[260px] pt-[95px] transition-all">
        <Outlet />
      </div>
    </div>
  );
};
export default MainLayout;
