import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import Main from "./Main";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(<Main />);