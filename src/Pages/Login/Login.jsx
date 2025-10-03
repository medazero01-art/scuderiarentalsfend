import React, { useState } from "react";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // pour redirection SPA

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${API_BASE_URL}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password })
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Login failed");
        return;
      }

      // Sauvegarder l'objet user complet dans localStorage
      const user = {
        token: data.token,
        username: data.username,
        role: data.role,
        email: data.email,
        phoneNumber: data.phoneNumber
      };
      localStorage.setItem("user", JSON.stringify(user));
      window.dispatchEvent(new Event("user-login")); // <-- Ajout
      navigate("/"); 

    } catch (err) {
      console.error(err);
      setError("Server error");
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              placeholder="USERNAME"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">LOGIN</button>
        </form>

        {error && <p className="error">{error}</p>}

        <div className="forgot">
          <Link to="/register">Create an account</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
