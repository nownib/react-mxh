import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Layout from "../pages/Layout/Layout";
import Home from "../pages/Home/Home";
import NoPage from "../pages/NoPage/NoPage";
import TKB from "../pages/TKB/TKB";
import Dashboard from "../pages/Dashboard/Dashboard";
// Các trang không cần tải khi không dùng đến
// const Dashboard = lazy(() => import("../pages/Dashboard/Dashboard"));

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/xep-lop" element={<Dashboard />} />
        <Route path="/tkb" element={<TKB />} />
      </Route>
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

export default App;
