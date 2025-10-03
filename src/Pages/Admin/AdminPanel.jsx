
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminPanel.css"; 
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function AdminPanel() {
  const [user, setUser] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (!storedUser || storedUser.role !== "admin") {
      navigate("/"); 
      return;
    }
    setUser(storedUser);
    fetchReservations(storedUser.token);
  }, [navigate]);

  const fetchReservations = async (token) => {
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/reservations`, { 
        headers: { "Authorization": `Bearer ${token}` },
      });
      const data = await res.json();

      if (res.ok) {
        setReservations(data);
      } else {
        console.error("Admin fetch failed:", data.message);
      }
    } catch (err) {
      console.error("Server error:", err);
    } finally {
      setLoading(false);
    }
  };

  const handleStatusUpdate = async (reservationId, newStatus) => {
    if (!user) return;

    try {
      const res = await fetch(`${API_BASE_URL}/reservations/${reservationId}/status`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${user.token}`,
        },
        body: JSON.stringify({ status: newStatus }),
      });

      if (res.ok) {
        // Mettre à jour la liste des réservations sans recharger
        setReservations(prev => 
          prev.map(res => 
            res._id === reservationId ? { ...res, status: newStatus } : res
          )
        );
      } else {
        alert("Failed to update status.");
      }
    } catch (err) {
      console.error("Error updating status:", err);
    }
  };
  
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString();

  if (!user || loading) return <div className="admin-container"><p>Loading...</p></div>;

  return (
    <div className="admin-container">
      <h1>Admin Panel</h1>
      <h2>Reservation Requests</h2>

      <div className="reservation-table">
        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Car</th>
              <th>Period</th>
              <th>Total</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((res) => (
              <tr key={res._id}>
                <td>{res.user.username} ({res.user.phoneNumber})</td>
                <td>{res.car.name} ({res.car.year})</td>
                <td>{formatDate(res.startDate)} - {formatDate(res.endDate)}</td>
                <td>{res.totalPrice}€</td>
                <td className={`status-${res.status}`}>{res.status.toUpperCase()}</td>
                <td>
                  {res.status === "pending" && (
                    <>
                      <button 
                        className="btn-approve" 
                        onClick={() => handleStatusUpdate(res._id, 'approved')}
                      >
                        Approve
                      </button>
                      <button 
                        className="btn-reject" 
                        onClick={() => handleStatusUpdate(res._id, 'rejected')}
                      >
                        Reject
                      </button>
                    </>
                  )}
                  {res.status === "approved" && (
                    <button 
                      className="btn-complete" 
                      onClick={() => handleStatusUpdate(res._id, 'completed')}
                    >
                      Mark Completed
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminPanel;