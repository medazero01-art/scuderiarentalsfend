// en haut du fichier Cars.jsx
import React, { useState, useEffect } from "react";
import CarCard from "../../Components/CarCard/CarCard.jsx";
import AddCar from "../../Components/CarCard/AddCar.jsx";
import CarRentalModal from "../../Components/CarCard/CarRentalModal.jsx";
import "./Cars.css";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Cars() {
  const [cars, setCars] = useState([]);
  const [user, setUser] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedUser);
  }, []);

  useEffect(() => {
    fetch(`${API_BASE_URL}/cars`)
      .then((res) => res.json())
      .then((data) => setCars(data))
      .catch((err) => console.error("Error fetching cars:", err));
  }, []);

  const handleCardClick = (car) => {
    setSelectedCar(car);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedCar(null);
  };

  const handleReservationSuccess = (reservation) => {
    alert("Reservation created successfully!");
    // si tu veux, update UI: p.ex. marquer voiture indisponible ou refetch reservations
  };

  return (
    <div className="cars-container">
      <h1>Featured Cars</h1>

      <div className="cars-grid">
        {cars.map((car) => (
          <CarCard
            key={car._id}
            car={car}
            isAdmin={user?.role === "admin"}
            onDelete={(id) => {
              // ta logique delete existante
              const userToken = user?.token;
              fetch(`${API_BASE_URL}/cars/${id}`, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${userToken}`,
                },
              })
                .then((res) => {
                  if (!res.ok) return res.json().then(err => { throw new Error(err.message || "Failed to delete"); });
                  setCars(prev => prev.filter(c => c._id !== id));
                })
                .catch(err => { console.error(err); alert(err.message); });
            }}
            onCardClick={handleCardClick}
          />
        ))}

        {user?.role === "admin" && <AddCar onAdd={(newCar) => setCars(prev => [...prev, newCar])} user={user} />}
      </div>

      {isModalOpen && selectedCar && (
        <CarRentalModal
          car={selectedCar}
          onClose={handleCloseModal}
          userToken={user?.token}
          onReservationSuccess={handleReservationSuccess}
        />
      )}
    </div>
  );
}

export default Cars;
