import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Admin from "./pages/admin/Admin";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Navbar2 from "./components/navbar2/Navbar2";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Navbar />
      <Navbar2 />
      <Routes>
        <Route path="/register" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Auth />}>
          <Route path="admin" element={<Admin />} />
        </Route>
      </Routes>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
