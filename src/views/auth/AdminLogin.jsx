import React, { useEffect, useState } from "react";
import adminLogo from "../../assets/adminLogo.jpg";
import { useDispatch, useSelector } from "react-redux";
import { admin_login, messageClear } from "../../store/reducers/authReducer";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
  };

  const overrideStyle = {
    display: "flex",
    margin: "0 auto",
    height: "24px",
    justifyContent: "center",
    alignItem: "center",
  };

  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/");
    }
  }, [errorMessage, successMessage]);

  return (
    <div className="min-w-screen min-h-screen  flex justify-center items-center bg-admin  bg-center bg-cover h-[500px] w-full bg-no-repeat ">
      <div className="w-[450px] text-[#ffffff] p-2 ">
        <div className="bg-[#1D1616] p-4 rounded-md">
          <div className="h-[120px] flex gap-10 items-center">
            <div className="w-[80px] h-[50px]">
              <img className="w-full h-full" src={adminLogo} alt="" />
            </div>
            <h1 className="text-3xl">Login as Admin</h1>
          </div>
          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3 ">
              <label htmlFor="email">Email</label>
              <input
                value={state.email}
                onChange={inputHandle}
                type="email"
                name="email"
                placeholder="Email"
                id="email"
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                required
              />
            </div>
            <div className="flex flex-col w-full gap-1 mb-3">
              <label htmlFor="password">Password</label>
              <input
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                value={state.password}
                onChange={inputHandle}
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>

            <button
              disabled={loader ? true : false}
              className="bg-slate-600 w-full hover:shadow-blue-300/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
            >
              {loader ? (
                <PropagateLoader color="#fff" cssOverride={overrideStyle} />
              ) : (
                " Login"
              )}
            </button>
          </form>
          <div className="flex items-center gap-4 justify-start px-[50px]">
            <hr className="w-20 bg-gray-700" />

            <Link to="/login">Login as Seller</Link>
            <hr className="w-20 bg-gray-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
