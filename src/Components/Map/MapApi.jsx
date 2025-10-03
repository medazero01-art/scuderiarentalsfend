import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Icône personnalisée (sinon bug par défaut)
const customIcon = new L.Icon({
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
});

function MapComponent() {
  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer center={[36.74351627526204, 3.0378402355821104]} zoom={13} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />
        <Marker position={[36.74351627526204, 3.0378402355821104]} icon={customIcon}>
          <Popup>
            We are <b>Here</b>!
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default MapComponent;
