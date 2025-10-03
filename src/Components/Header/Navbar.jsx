import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false); // <-- Ajout
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));

    const handleStorageChange = () => {
      const updatedUser = localStorage.getItem("user");
      setUser(updatedUser ? JSON.parse(updatedUser) : null);
    };

    window.addEventListener("storage", handleStorageChange);
    window.addEventListener("user-login", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      window.removeEventListener("user-login", handleStorageChange);
    };
  }, []);

  const handleProfileClick = () => navigate("/profile");

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">Scuderia Rentals</Link>
      </div>

      {/* Bouton burger */}
      <button
        className="burger-menu"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Open menu"
      >
        &#9776;
      </button>

      <div className={`nav-items${menuOpen ? " open" : ""}`}>
        <ul className="nav-links">
          <li><Link to="/about" onClick={() => setMenuOpen(false)}>About</Link></li>
          <li><Link to="/cars" onClick={() => setMenuOpen(false)}>Cars</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          {user?.role === "admin" && <li><Link to="/admin" onClick={() => setMenuOpen(false)}>Admin Dashboard</Link></li>}
        </ul>

        <div className="nav-login">
          {user ? (
            <>
              <button className="login-btn" onClick={() => { handleProfileClick(); setMenuOpen(false); }}>
                <FaUser size={20} /> {user.username}
              </button>
              <button className="login-btn" onClick={() => { handleLogout(); setMenuOpen(false); }}>
                <FiLogOut size={20} />
              </button>
            </>
          ) : (
            <Link to="/login" className="login-btn" onClick={() => setMenuOpen(false)}>Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;