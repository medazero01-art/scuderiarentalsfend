import React from "react";
import "./Contact.css";
import MapComponent from "../../Components/Map/MapApi.jsx";

function Contact() {
  return(
    <>
    <section className="contact-us-section">
        <div className="contact-left">
          <p className="subtitle">GET IN TOUCH</p>
          <h2>Contact Us</h2>
          <p className="contact-description">
            If you need consultation with us, you can write a message or call us, we will respond as quickly as possible.
          </p>

          <ul className="contact-list">
            <li>
              <span className="contact-icon">📧</span>
              <p>randomemail@gmail.com</p>
            </li>
            <li>
              <span className="contact-icon">📞</span>
              <p>+213 560 23 38 19</p>
            </li>
            <li>
              <span className="contact-icon">⏰</span>
              <p>Everyday : 08.00-21.00</p>
            </li>
            <li>
              <span className="contact-icon">📍</span>
              <a href="https://www.google.com/maps/place/BrainerX+%7C+Ecole+de+Formation+Tech/@36.7434389,3.0352653,17z/data=!3m1!4b1!4m6!3m5!1s0x128fad8c30699cd9:0x276ebeb61aca58eb!8m2!3d36.7434389!4d3.0378456!16s%2Fg%2F11sv3gnv7c?entry=ttu&g_ep=EgoyMDI1MDkwOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer">Vinewood Hills, Los Santos, San Andreas, USA</a>
            </li>
          </ul>

          <div className="social-media">
            <a href="#" className="social-icon linkedin">in</a>

            <a href="#" className="social-icon twitter">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.901 1.144h3.68L14.07 10.74 24 23H18.58L11.705 15.658 5.768 23H1.18L10.998 12.44L1 1.144h5.455L12.92 7.723L18.901 1.144ZM17.155 21L6.082 3h2.365L18.434 21h-1.279Z"/>
              </svg>
            </a>

            <a href="#" className="social-icon facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-facebook">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>

            <a href="#" className="social-icon instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-instagram">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        <div className="contact-right">
          <div className="map-placeholder">
            <MapComponent />
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact;
