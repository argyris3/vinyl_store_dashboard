import React, { useState, useEffect } from "react";
import { admin_login, messageClear } from "../../store/reducers/authReducer";
import { useDispatch, useSelector } from "react-redux";
import { PropagateLoader } from "react-spinners";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loader, errorMessage, successMessage } = useSelector(
    (state) => state.auth
  );
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const overrideStyle = {
    display: "flex",
    margin: "0 auto",
    height: "24px",
    justifyContent: "center",
    alignItems: "center",
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

  const inputHandle = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    dispatch(admin_login(state));
    // console.log(state);
  };
  return (
    <section className="min-w-screen min-h-screen  flex justify-center items-center bg-login bg-center bg-cover  w-full bg-no-repeat  ">
      <div className="w-[450px] text-[#ffffff] p-2 ">
        <div className="bg-[#1D1616] p-4 rounded-md ">
          <h2 className="text-white  text-center text-xl font-semibold">
            Login As Admin
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
              className="bg-slate-800 w-full hover:shadow-blue-300/ hover:shadow-lg text-white rounded-md px-7 py-2 mb-3 cursor-pointer"
            >
              {loader ? (
                <PropagateLoader color="#fff" cssOverride={overrideStyle} />
              ) : (
                "Login"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
