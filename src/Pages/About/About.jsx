import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-us-container">
      <div className="about-us-content">
        <h2 className="about-us-title">Our Story: The Scuderia Rentals Legacy</h2>
        <div className="story-section">
          <div className="story-text">
            <p>
              Founded in the bustling heart of Algiers in 2010, <b>Scuderia Rentals</b> was born from a passion for automotive excellence and a vision to redefine luxury travel. What began as a small fleet of two meticulously maintained vehicles quickly grew into a premier car rental service, celebrated for its unparalleled fleet and commitment to client satisfaction.
            </p>
            <p>
              Our founder, driven by the thrill of the open road and a deep appreciation for high-performance engineering, saw a gap in the market. The desire for more than just transportation, but for an experience—a blend of power, elegance, and freedom. This core philosophy became the engine of Scuderia Rentals.
            </p>
          </div>
          <div className="story-image">
            <img src="https://imgur.com/tCHDuiG.png" alt="Scuderia Rentals Headquarters" />
          </div>
        </div>
        <div className="mission-section">
          <h3>Our Mission</h3>
          <p>
            At Scuderia Rentals, our mission is simple: to provide a seamless and memorable journey for every client. We believe that renting a car should be as thrilling as driving it. From the moment you book with us to the second you return the keys, our team ensures every detail is perfect. We offer a fleet that is not just about getting you from point A to B, but about making the trip an adventure in itself.
          </p>
        </div>
        <div className="values-section">
          <h3>Our Values</h3>
          <ul>
            <li>
              <span className="value-icon">🏎️</span> Excellence: We meticulously maintain our vehicles to guarantee peak performance and safety.
            </li>
            <li>
              <span className="value-icon">🤝</span> Integrity: We operate with complete transparency, from pricing to our rental agreements.
            </li>
            <li>
              <span className="value-icon">🌟</span> Passion: We share a genuine love for cars and the experiences they create.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;