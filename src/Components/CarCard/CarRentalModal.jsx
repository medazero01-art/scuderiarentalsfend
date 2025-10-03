// src/components/CarRentalModal/CarRentalModal.js
import React, { useState, useEffect } from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';
import "./CarRentalModal.css";
import { API_BASE_URL } from "../../config.js";

const calculateDays = (start, end) => {
  if (!start || !end || moment(start).isAfter(end, 'day')) return 0;
  return moment(end).diff(moment(start), 'days') + 1;
};

const CarRentalModal = ({ car, onClose, userToken, onReservationSuccess }) => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [disabledDates, setDisabledDates] = useState([]); // stocke les réservations
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Récupération des réservations existantes
  useEffect(() => {
    if (!car) return;
    const fetchReservations = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/reservations/car/${car._id}/approved`);
        const data = await res.json();
        if (Array.isArray(data)) {
          setDisabledDates(data.map(d => ({
            start: moment(d.startDate).startOf("day"),
            end: moment(d.endDate).endOf("day")
          })));
        }
      } catch (err) {
        console.error("Erreur récupération réservations :", err);
      }
    };
    fetchReservations();
  }, [car]);

  // Fonction pour bloquer les dates déjà réservées
  const isDateDisabled = (date) => {
    const day = moment(date).startOf("day");

    // Bloquer les dates passées
    if (day.isBefore(moment().startOf("day"))) return false;

    // Vérifier si ce jour tombe dans une réservation existante
    return !disabledDates.some(range => day.isBetween(range.start, range.end, "day", "[]"));
  };

  const handleReserve = async () => {
    if (!startDate || !endDate) {
      setError("Please select both start and end dates.");
      return;
    }
    if (moment(startDate).isAfter(endDate, 'day')) {
      setError("Start date cannot be after end date.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const startISO = moment(startDate).toISOString();
      const endISO = moment(endDate).toISOString();

      const res = await fetch(`${API_BASE_URL}/reservations`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${userToken}`,
        },
        body: JSON.stringify({
          carId: car._id,
          startDate: startISO,
          endDate: endISO
        }),
      });

      const data = await res.json();
      if (res.ok) {
        onReservationSuccess(data);
        onClose();
      } else {
        setError(data.message || "Failed to create reservation.");
      }
    } catch (err) {
      console.error(err);
      setError("Server error.");
    } finally {
      setLoading(false);
    }
  };

  const rentalPrice = calculateDays(startDate, endDate) * car.pricePerDay;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>{car.name} ({car.year})</h2>
        <img src={car.imageUrl} alt={car.name} className="modal-car-image"/>
        <p>{car.description}</p>
        <p>Price per day: {car.pricePerDay}€</p>

        <div className="date-selection">
          <label>Start Date:</label>
          <DatePicker
            selected={startDate}
            onChange={(date) => {
              setStartDate(date);
              if (date && endDate && moment(date).isAfter(endDate, "day")) {
                setEndDate(null);
              }
            }}
            selectsStart
            startDate={startDate}
            endDate={endDate}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select start date"
            filterDate={isDateDisabled}
            className="date-input"
            wrapperClassName="date-picker-wrapper"
          />

          <label>End Date:</label>
          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            selectsEnd
            startDate={startDate}
            endDate={endDate}
            minDate={startDate || moment().toDate()}
            dateFormat="dd/MM/yyyy"
            placeholderText="Select end date"
            filterDate={isDateDisabled}
            disabled={!startDate}
            className="date-input"
            wrapperClassName="date-picker-wrapper"
          />
          <h6>Les crénaux non-disponibles sont désactivés.</h6>
        </div>

        <div className="rental-summary">
          <p>Selected days: <strong>{calculateDays(startDate, endDate)}</strong></p>
          <p>Total price: <strong>{rentalPrice}€</strong></p>
        </div>

        {error && <p className="error">{error}</p>}

        <button 
          onClick={handleReserve} 
          disabled={loading || rentalPrice <= 0}
        >
          {loading ? "Processing..." : "Reserve Now"}
        </button>
      </div>
    </div>
  );
};

export default CarRentalModal;
