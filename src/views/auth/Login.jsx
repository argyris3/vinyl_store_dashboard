import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { overrideStyle } from "../../utils/utils";
import { seller_login, messageClear } from "../../store/reducers/authReducer";
const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );

  const inputHandle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(seller_login(state));
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
      navigate("/");
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
    }
  }, [successMessage, errorMessage]);

  return (
    <div className="min-w-screen min-h-screen  flex justify-center items-center bg-login  bg-center bg-cover h-[500px] w-full bg-no-repeat ">
      <div className="w-[450px] text-[#ffffff] p-2 ">
        <div className="bg-[#1D1616] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold text-center">
            Welcome to Music_Shop
          </h2>

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
                value={state.password}
                onChange={inputHandle}
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                required
              />
            </div>

            <button
              disabled={loader ? true : false}
              className="bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
            >
              {loader ? (
                <PropagateLoader color="#fff" cssOverride={overrideStyle} />
              ) : (
                " Login"
              )}
            </button>
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Don't Have an Account?
                <Link
                  to="/register"
                  className="font-bold px-2 text-sky-500 text-lg "
                >
                  Register
                </Link>
              </p>
            </div>
            <div className="flex items-center gap-4 justify-start px-[50px]">
              <hr className="w-20 bg-gray-700" />

              <Link to="/admin/login">Login as Admin</Link>
              <hr className="w-20 bg-gray-700" />
            </div>
            {/* <div className="w-full flex justify-center items-center mb-3 ">
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
              <div className="w-[10%] flex justify-center items-center ">
                <span className="pb-1">Or</span>
              </div>
              <div className="w-[45%] bg-slate-700 h-[1px]"></div>
            </div>

            <div className="flex justify-center items-center gap-3">
              <div className="w-[135px] h-[35px] flex rounded-md bg-orange-700 shadow-lg hover:shadow-orange-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FaGoogle />
                </span>
              </div>
              <div className="w-[135px] h-[35px] flex rounded-md bg-blue-700 shadow-lg hover:shadow-blue-700/50 justify-center cursor-pointer items-center overflow-hidden">
                <span>
                  <FaFacebookF />
                </span>
              </div>
            </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
