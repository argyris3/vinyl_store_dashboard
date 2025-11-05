import React, { useState, useEffect } from "react";
import Router from "./router/Router";
import publicRoutes from "./routes/publicRoutes";
import { getRoutes } from "./routes";
import { useDispatch, useSelector } from "react-redux";
import { get_user_info } from "./store/reducers/authReducer";

const App = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);
  const [allRoutes, setAllRoutes] = useState([...publicRoutes]);

  useEffect(() => {
    const routes = getRoutes();
    setAllRoutes([...allRoutes, routes]);
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(get_user_info());
    }
  }, [token]);

  return <Router allRoutes={allRoutes} />;
};

export default App;
