// Profile.jsx (Mise à jour)
import React, { useEffect, useState } from "react";
import { FiUser } from "react-icons/fi";
import "./Profile.css";
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

function UserProfile() {
  const [user, setUser] = useState(null);
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
        setUser(storedUser);
        fetchReservations(storedUser.token); // Charger les résa si l'utilisateur est là
    } else {
        setLoading(false);
    }
  }, []);

  const fetchReservations = async (token) => {
    try {
        const res = await fetch(`${API_BASE_URL}/reservations/my-reservations`, {
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });
        const data = await res.json();

        if (res.ok) {
            setReservations(data);
        } else {
            console.error("Failed to fetch reservations:", data.message);
        }
    } catch (err) {
        console.error("Server error fetching reservations:", err);
    } finally {
        setLoading(false);
    }
  };
  
  // Fonction utilitaire pour le formatage des dates
  const formatDate = (dateString) => {
      return new Date(dateString).toLocaleDateString('en-US', {
          year: 'numeric', month: 'short', day: 'numeric'
      });
  };
  
  // Fonction utilitaire pour le style du statut
  const getStatusClass = (status) => {
      switch (status) {
          case 'approved': return 'status-approved';
          case 'rejected': return 'status-rejected';
          case 'completed': return 'status-completed';
          default: return 'status-pending';
      }
  };


  if (loading) return <div className="profile-container"><p>Loading profile...</p></div>;
  if (!user) return <div className="profile-container"><p>Please log in to view your profile.</p></div>;

  return (
    <div className="profile-container">
      <div className="profile-section">
        <div className="profile-icon"><FiUser size={120} /></div>
        <h2 className="profile-username">{user.username}</h2>
        <div className="profile-info">
          <div className="info-item"><span className="label">Email:</span> {user.email || "N/A"}</div>
          <div className="info-item"><span className="label">Phone:</span> {user.phoneNumber || "N/A"}</div>
          <div className="info-item"><span className="label">Profile:</span> {user.role || "User"}</div>
        </div>
      </div>
      
      {/* 🛑 SECTION DES RÉSERVATIONS */}
      <div className="reservations-section">
        <h3>My Reservations ({reservations.length})</h3>
      
        {reservations.length === 0 ? (
          <p className="no-reservations">No current or past reservations.</p>
        ) : (
          <div className="reservations-list">
            {reservations.map((res) => (
              <div key={res._id} className="reservation-card">
      
                <img
                  src={res.car?.imageUrl || "https://imgur.com/MW3Som8.png"}
                  alt={res.car?.name || "DELETED Car"}
                  className="reservation-car-image"
                />
      
                <div className="reservation-details">
                  <h4>
                    {res.car?.name ?? "Deleted"} ({res.car?.year ?? "-"})
                  </h4>
      
                  <p>
                    From:{" "}
                    <strong>
                      {res.startDate ? formatDate(res.startDate) : "-"}
                    </strong>{" "}
                    to{" "}
                    <strong>
                      {res.endDate ? formatDate(res.endDate) : "-"}
                    </strong>
                  </p>
      
                  <p>
                    Total: <strong>{res.totalPrice ?? "N/A"}€</strong>
                  </p>
      
                  <p>
                    Status:{" "}
                    <span
                      className={`reservation-status ${getStatusClass(res.status)}`}
                    >
                      {(res.status || "unknown").toUpperCase()}
                    </span>
                  </p>
                </div>
      
              </div>
            ))}
          </div>
        )}
      </div>

    </div>
  );
}

export default UserProfile;
