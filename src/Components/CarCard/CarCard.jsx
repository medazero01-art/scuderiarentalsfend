// src/components/CarCard/CarCard.js
import React, { useState } from 'react';
import './CarCard.css'; 
import { API_BASE_URL } from "../../config.js";
import CarRentalModal from './CarRentalModal.jsx';

const CarCard = ({ car, isAdmin, onDelete, onCardClick }) => { 
    const [available, setAvailable] = useState(car.available);
    const [menuOpen, setMenuOpen] = useState(false);

    const stopPropagation = (e) => {
        if (e && e.stopPropagation) e.stopPropagation(); 
    };

    const handleAdminDelete = (e) => {
        stopPropagation(e); 
        if (window.confirm("Are you sure you want to delete this car?")) {
            onDelete(car._id);
            setMenuOpen(false);
        }
    };

    const toggleAvailable = async (e) => {
        stopPropagation(e); 
        try {
            const user = JSON.parse(localStorage.getItem("user"));
            if (!user?.token) throw new Error("Not authorized");

            const res = await fetch(`${API_BASE_URL}/cars/${car._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${user.token}`
                },
                body: JSON.stringify({ available: !available })
            });

            const updatedCar = await res.json();
            if (!res.ok) throw new Error(updatedCar.message || "Failed to update car");

            setAvailable(updatedCar.available);
            setMenuOpen(false);

        } catch (err) {
            console.error(err);
            alert("Error updating availability: " + err.message);
        }
    };

    return (
        <div className={`car-card ${!available ? "unavailable" : ""}`}>
            <img src={car.imageUrl} alt={car.name} className="car-image" />

            <div className="car-info">
                <h3>{car.name}</h3>
                <p className="car-details">
                    {car.year} • {car.pricePerDay}€ / Day • AVAILABLE: {available ? "YES" : "NO"}
                </p>
            </div>

            <div className="card-buttons" onClick={stopPropagation}>
                {/* Ici on appelle la fonction passée depuis la page Cars */}
                <button 
                    className="add-to-cart-btn" 
                    disabled={!available} 
                    onClick={() => onCardClick(car)}
                >
                    Rent
                </button>

                {isAdmin && (
                    <div className="admin-menu-wrapper">
                        <button
                            className="admin-menu-btn"
                            onClick={(e) => {
                                stopPropagation(e);
                                setMenuOpen(prev => !prev); 
                            }}
                        >
                            ⋮
                        </button>

                        {menuOpen && (
                            <div className="admin-menu" onClick={stopPropagation}> 
                                <button onClick={toggleAvailable}>
                                    {available ? "Set Unavailable" : "Set Available"}
                                </button>
                                <button onClick={handleAdminDelete}>Delete</button>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CarCard;
