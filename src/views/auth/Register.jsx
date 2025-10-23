import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import { overrideStyle } from "../../utils/utils";
import {
  seller_register,
  messageClear,
} from "../../store/reducers/authReducer";
import toast from "react-hot-toast";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loader, successMessage, errorMessage } = useSelector(
    (state) => state.auth
  );

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(seller_register(state));
    console.log(state);
  };

  useEffect(() => {
    if (successMessage) {
      toast.success(successMessage);
      dispatch(messageClear());
    }
    if (errorMessage) {
      toast.error(errorMessage);
      dispatch(messageClear());
      navigate("/");
    }
  }, [successMessage, errorMessage]);

  return (
    <section className="min-w-screen min-h-screen  flex justify-center items-center bg-logo bg-center bg-cover  w-full bg-no-repeat  ">
      <div className="w-[450px] text-[#ffffff] p-2 ">
        <div className="bg-[#1D1616] p-4 rounded-md ">
          <h2 className="text-white  text-center text-xl font-semibold">
            Welcome to Vinylio
          </h2>
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
                type="text"
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
            <button
              disabled={loader ? true : false}
              className="bg-slate-800 w-full hover:shadow-blue-300/50 hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 capitalize font-semibold text-xl "
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
                  className="font-bold px-2 text-sky-500 text-lg italic "
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Register;
