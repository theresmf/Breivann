import React from "react";
import ReactDOM from "react-dom";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./pages/App/App";
import Overview from "./pages/Overview/Overview";
import Register from "./pages/Register/Register";
import reportWebVitals from "./reportWebVitals";

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />} />
      <Route path="overview" element={<Overview />} />
      <Route path="register" element={<Register />} />
      <Route path="*" element={<h1>Not found</h1>} />
    </>
  )
);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
