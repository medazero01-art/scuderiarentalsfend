import React, { useState, useEffect } from "react";
import './AddCar.css';
import { FaPlus } from 'react-icons/fa';
import { API_BASE_URL } from "../../config.js";


function AddCar({ onAdd }) {
  const [showForm, setShowForm] = useState(false);
  const [carData, setCarData] = useState({
    name: "",
    year: "",
    pricePerDay: "",
    imageUrl: "",
    description: ""
  });
  const [user, setUser] = useState(null);

  // récupère l'utilisateur pour vérifier le rôle
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  if (!user || user.role !== "admin") return null; // admin only

  const handleChange = (e) => {
    setCarData({ ...carData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const carToSend = {
      ...carData,
      available: true // par défaut
    };

    try {
      const res = await fetch(`${API_BASE_URL}/cars`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`
        },
        body: JSON.stringify(carToSend)
      });

      const newCar = await res.json();

      if (!res.ok) throw new Error(newCar.message || "Failed to add car");

      onAdd(newCar); // mise à jour de l'UI
      setCarData({ name: "", year: "", pricePerDay: "", imageUrl: "", description: "" });
      setShowForm(false);

    } catch (err) {
      console.error(err);
      alert(err.message); // simple feedback d'erreur
    }
  };

  return (
    <div className="add-car-container">
      <button className="show-form-btn" onClick={() => setShowForm(!showForm)}>
        {showForm ? "Cancel" : <FaPlus />}
      </button>

      {showForm && (
        <div className="popup-overlay" onClick={() => setShowForm(false)}>
          <form 
            className="add-car-form-popup" 
            onClick={(e) => e.stopPropagation()} // évite de fermer en cliquant dans le formulaire
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="name"
              placeholder="Car Name"
              value={carData.name}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="year"
              placeholder="Year"
              value={carData.year}
              onChange={handleChange}
              required
            />
            <input
              type="number"
              name="pricePerDay"
              placeholder="Price per Day"
              value={carData.pricePerDay}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="imageUrl"
              placeholder="Image URL (upload on imgur)"
              value={carData.imageUrl}
              onChange={handleChange}
            />
            <textarea
              name="description"
              placeholder="Description"
              value={carData.description}
              onChange={handleChange}
            />
            <button type="submit">Add Car</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default AddCar;