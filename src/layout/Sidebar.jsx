import React from "react";
import { Link, useLocation } from "react-router-dom";
import { getNav } from "../navigation/index";
import { useState } from "react";
import { useEffect } from "react";
import logovinyl from "../assets/logo_vinyl.jpg";
import { FcDebian } from "react-icons/fc";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  const dispatch = useDispatch();
  const { role } = useSelector((state) => state.auth);

  const { pathname } = useLocation();
  const [allNav, setAllNav] = useState([]);
  useEffect(() => {
    const navs = getNav(role);
    setAllNav(navs);
  }, [role]);

  return (
    <div>
      <div
        onClick={() => setShowSidebar(false)}
        className={`fixed duration-200 ${
          !showSidebar ? "invisible" : "visible"
        } w-screen h-screen bg-[#0F0E0E] top-0 left-0 z-10`}
      ></div>
      <div
        className={`w-[260px] fixed bg-black z-50 top-0 h-screen shadow-[0_0_15px_0_rgb(34_41_47_/_5%)] transition-all ${
          showSidebar ? "left-0" : "-left-[260px] lg:left-0"
        }  `}
      >
        <div className="h-[70px] flex justify-center items-center">
          <Link to="/" className="w-[180px] h-[50px]">
            <img className="w-full h-full" src={logovinyl} alt="" />
          </Link>
        </div>
        <div className="px-16 py-4">
          <ul>
            {allNav.map((n, i) => (
              <li key={i}>
                <Link
                  to={n.path}
                  className={`${
                    pathname === n.path
                      ? "bg-slate-400 shadow-indigo-500/50 text-white duration-500"
                      : "text-slate-500 font-bold duration-200 "
                  } px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1 `}
                >
                  <span>{n.icon}</span>
                  <span>{n.title}</span>
                </Link>
              </li>
            ))}
            <li>
              <button className="text-slate-500 font-bold duration-200 px-[12px] py-[9px] rounded-sm flex justify-start items-center gap-[12px] hover:pl-4 transition-all w-full mb-1">
                <span>
                  <FcDebian />
                </span>
                <span>Logout</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
