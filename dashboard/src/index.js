import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import API from "./api/axios";


function DashboardAuthWrapper({ children }) {

  useEffect(() => {

    API.get("/api/auth/check")
      .then(res => {
        if (!res.data.loggedIn) {
          window.location.href = "http://localhost:3000/login";
        }
      })
      .catch(() => {
        window.location.href = "http://localhost:3000/login";
      });

  }, []);

  return children;
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>

    <DashboardAuthWrapper>

      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>

    </DashboardAuthWrapper>

  </React.StrictMode>
);
