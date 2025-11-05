import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import store from "./store/index.js";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { lazy, Suspense } from "react";
const App = lazy(() => import("./App.jsx"));
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <Suspense>
        <App />
        <Toaster
          toastOptions={{
            position: "top-center",
            style: {
              background: "black",
              color: "white",
            },
          }}
        />
      </Suspense>
    </Provider>
  </BrowserRouter>
);
