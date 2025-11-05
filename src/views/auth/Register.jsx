import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import { overrideStyle } from "../../utils/utils";
import { seller_register } from "../../store/reducers/authReducer";
import { messageClear } from "../../store/reducers/authReducer";
import toast from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loader, successMessage, errorMessage } = useSelector(
    (state) => state.auth
  );

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(seller_register(state));
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
    <div className="min-w-screen min-h-screen  flex justify-center items-center bg-register bg-center bg-cover h-[500px] w-full bg-no-repeat ">
      <div className="w-[450px] text-[#ffffff] p-2 ">
        <div className="bg-[#1D1616] p-4 rounded-md">
          <h2 className="text-xl mb-3 font-bold">Welcome to Music_Shop</h2>

          <form onSubmit={submit}>
            <div className="flex flex-col w-full gap-1 mb-3 ">
              <label htmlFor="name">Name</label>
              <input
                value={state.name}
                onChange={inputHandle}
                type="text"
                name="name"
                placeholder="Name"
                id="name"
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                required
              />
            </div>
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
            <div className="flex flex-col w-full gap-1 mb-3 ">
              <label htmlFor="password">Password</label>
              <input
                value={state.password}
                onChange={inputHandle}
                type="password"
                name="password"
                placeholder="Password"
                id="password"
                className="px-3 py-2 outline-none border border-slate-400 bg-transparent rounded-md"
                required
              />
            </div>
            <div className="flex items-center w-full gap-3 mb-3">
              <input
                className="w-4 h-4 text-blue-600 overflow-hidden bg-gray-200 rounded border-gray-300 focus:ring-blue-500"
                type="checkbox"
                name="checkbox"
                id="checkbox"
              />
              <label htmlFor="checkbox">
                I agree to privacy policy & terms
              </label>
            </div>
            <button
              disabled={loader ? true : false}
              className="bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3"
            >
              {loader ? (
                <PropagateLoader color="#fff" cssOverride={overrideStyle} />
              ) : (
                " Register"
              )}
            </button>
            <div className="flex items-center mb-3 gap-3 justify-center">
              <p>
                Already Have an Account?
                <Link
                  to="/login"
                  className="font-bold px-2 text-sky-500 text-lg "
                >
                  Login
                </Link>
              </p>
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

export default Register;
