import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Header/Navbar";
import About from "./Pages/About/About";
import Car from "./Pages/Car/Cars";
import Home from "./Pages/Home/Home.jsx";
import Login from "./Pages/Login/Login.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Register from "./Pages/Login/Register.jsx";
import Contact from "./Pages/Contact/Contact.jsx";
import Profile from "./Pages/Profile/Profile.jsx";
import AdminPanel from "./Pages/Admin/AdminPanel.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cars" element={<Car />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<AdminPanel />} /> 
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}
export default App;
