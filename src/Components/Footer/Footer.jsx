import React from 'react';
import './Footer.css'; 
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-container">
      
      <div className="footer-about">
        <div className="footer-logo">SCUDERIA RENTALS</div>
        <p className="footer-description">
          We are a well-known car rental service that has many partners in each region to connect with you to assist in your trip in meetings, events, holidays or long trips.
        </p>
      </div>

      
      <div className="footer-column">
        <h4>Company</h4>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#">Cars</a></li>
          <li><a href="#">Our Partner</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Services</h4>
        <ul>
          <li><a href="#">Instant Rent</a></li>
          <li><a href="#">Private Driver</a></li>
          <li><a href="#">Long Trip</a></li>
        </ul>
      </div>

      <div className="footer-column">
        <h4>Support</h4>
        <ul>
          <li><a href="#">Blog</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Call Center</a></li>
          <li><a href="#">Partner With Us</a></li>
          <li><a href="#">Terms & Condition</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;