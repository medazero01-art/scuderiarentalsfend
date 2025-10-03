import React from "react";
import "./Home.css";

import bgVideo from "../../assets/bgVideo.mp4";
import bmwLogo from "../../assets/BMW-logo.png"
import ferrariLogo from "../../assets/Scuderia_Ferrari_Logo.svg.png";
import rrlogo from "../../assets/rr-logo.png";
import lamboLogo from "../../assets/Lamborghini-Logo.svg.png";
import mercedesLogo from "../../assets/Mercedes-Logo.svg.png";
import bentleyLogo from "../../assets/Bentley-logo-svg-vector.svg.png"
import { Link } from "react-router-dom";

function Home() {
    

    return (
        <>
        <section className="hero">
            <video className="bg-video" autoPlay loop muted playsInline>
                <source src={bgVideo} type="video/mp4"/>
            </video>
            <div className="hero-text">
                <h1>
                    Drive the Exception. <br /> Where Adrenaline Meets the Road.
                </h1>
                <p>
                    Experience the thrill of the world’s finest sports and hypercars. Unmatched performance, unparalleled style.
                </p>
                <div className="hero-buttons">
                    
                    <button className="btn-primary">
                        <Link to="/contact">Get In Touch</Link>
                    </button>
                    <button className="btn-secondary">
                        <Link to="/cars">Our Cars</Link>
                    </button>
                </div>
            </div>
        </section>
        
        <div className="brands-grid">
            <div className="brand"><img src={ferrariLogo} alt="Ferrari" /></div>
            <div className="brand"><img src={lamboLogo} alt="Lamborghini" /></div>
            <div className="brand"><img src={mercedesLogo} alt="Mercedes" /></div>
            <div className="brand"><img src={bmwLogo} alt="BMW" /></div>
            <div className="brand"><img src={bentleyLogo} alt="Bentley" /></div>
            <div className="brand"><img src={rrlogo} alt="Rolls Royce" /></div>
        </div>

        <div id="services" className="services-container">
            <div className="services-header">
                <h3 className="services-title">Services</h3>
                <p className="services-description">
                    Our service is not only renting a car, but we also provide a private chauffeur service that can guide you on your trip and also longtrip packages to support your travel needs.
                </p>
            </div>

            <div className="services-cards">
                <div className="service-card instant-rent">
                    <div className="card-overlay">
                        <div className="card-content">
                            <span className="card-icon">

                                <svg width="107" height="107" viewBox="0 0 107 107" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <g clipPath="url(#clip0_8_92)">
                                    <path d="M74.6018 21.3015C75.1746 22.3441 75.2186 23.4721 75.2165 24.6303C75.1995 32.9997 75.1948 41.3688 75.2022 49.7378C75.1969 54.2848 72.6937 57.942 68.5497 59.3134C67.4594 59.6623 66.3217 59.8409 65.1768 59.8427C57.515 59.8883 49.8536 59.8945 42.1928 59.8612C36.4377 59.8464 32.1972 55.6377 32.1765 49.8841C32.145 41.1722 32.1503 32.461 32.1924 23.7505C32.1961 22.9333 32.5727 22.1155 32.7715 21.3015L33.7033 20.3697C34.7481 19.798 35.874 19.7571 37.0311 19.7593C48.1341 19.7748 59.2369 19.7761 70.3396 19.763C71.4968 19.7619 72.6264 19.799 73.669 20.3707L74.6018 21.3015ZM65.1742 37.2702C66.3027 36.2478 66.9937 34.5703 67.0139 32.7301C67.0316 31.1447 67.0328 29.5592 67.0176 27.9735C67.0027 26.3762 66.1118 25.4852 64.5091 25.4852C57.2903 25.4768 50.0702 25.4769 42.8489 25.4858C41.2542 25.4895 40.3685 26.3836 40.3553 27.9889C40.3422 29.5499 40.3431 31.111 40.3579 32.6723C40.4014 36.4122 42.9316 38.9646 46.6688 38.9832C51.3516 39.0097 56.0355 38.9906 60.7189 38.989C62.4244 38.989 63.9252 38.4598 65.1742 37.2702Z" fill="white"/>
                                    <path d="M49.8062 102.573C49.1672 101.443 48.4624 100.346 47.8923 99.1836C46.6492 96.6497 46.0812 93.9657 46.0923 91.1258C46.1178 83.3087 46.0165 68.6255 45.9486 63.6669C45.9457 63.4468 45.9866 63.2284 46.0688 63.0243C46.151 62.8202 46.2729 62.6344 46.4275 62.4777C46.582 62.3211 46.7662 62.1967 46.9692 62.1118C47.1722 62.0269 47.3901 61.9831 47.6102 61.9831L59.6057 61.9826C60.0453 61.9823 60.467 62.1564 60.7786 62.4665C61.0901 62.7766 61.266 63.1976 61.2677 63.6372C61.2799 66.195 61.263 71.0973 61.2778 73.7501C61.2831 74.6357 61.0211 75.3506 60.3789 75.9727C59.6582 76.6711 58.9481 77.3791 58.2199 78.1104C57.721 78.6122 57.4398 79.2903 57.4374 79.9979C57.435 80.7055 57.7116 81.3856 58.2072 81.8906L58.2252 81.9087C59.0457 82.745 59.8358 83.6115 60.6828 84.4192C61.1627 84.8769 61.1802 85.2105 60.704 85.6846C59.4789 86.9097 58.2889 88.1687 57.0882 89.4181L57.0818 89.4245C56.9038 89.6098 56.8007 89.8545 56.7924 90.1114C56.7841 90.3682 56.8711 90.6191 57.0368 90.8155C57.5756 91.4551 58.1033 92.0825 58.6421 92.7104C59.1809 93.3383 59.7261 93.9662 60.2861 94.5782C60.7226 95.055 60.8329 95.562 60.6393 96.1904C59.9594 98.3945 59.0748 100.491 57.6323 102.319C57.5832 102.401 57.5451 102.49 57.5188 102.582L56.2763 103.825C56.0922 103.935 55.9066 104.044 55.7237 104.158C54.4716 104.93 53.1993 105.018 51.8973 104.284C51.673 104.158 51.4365 104.05 51.2106 103.931L49.8062 102.573Z" fill="white"/>
                                    <path d="M51.2042 103.924C51.4317 104.046 51.6704 104.156 51.8974 104.284C53.1999 105.018 54.4721 104.931 55.7232 104.156C55.9061 104.043 56.0912 103.934 56.2758 103.823L53.6893 106.409C52.861 105.581 52.0326 104.753 51.2042 103.924Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_8_92">
                                    <rect width="75" height="75" fill="white" transform="translate(0.467041 53.3992) rotate(-45)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <h3>Instant Rent</h3>
                            <p>
                                We provide direct rental services when you need wherever you are. Our officers are quick to respond in carrying out this task ...
                            </p>
                        </div>
                    </div>
                </div>

                <div className="service-card private-driver">
                    <div className="card-overlay">
                        <div className="card-content">
                            <span className="card-icon">

                                <svg width="85" height="86" viewBox="0 0 85 86" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <g clipPath="url(#clip0_8_100)">
                                    <path d="M49.4313 84.7532C50.4043 81.2235 51.3773 77.6937 52.3502 74.1639C54.4472 66.5063 56.5628 58.8537 58.6105 51.1833C58.9649 49.8556 59.5191 49.519 60.8349 50.0401C65.7904 52.0027 70.8037 53.8302 75.7244 55.8711C77.4354 56.5808 79.0139 57.6637 80.5235 58.7483C82.3085 60.031 83.0735 61.8755 83.2639 64.0506C83.7586 69.6606 84.3553 75.2621 84.9443 80.8636C85.2843 84.1183 83.8019 85.7732 80.3815 85.7749C63.0982 85.784 45.8149 85.784 28.5315 85.7749C20.5982 85.7749 12.6649 85.7749 4.73153 85.7749C1.30943 85.7749 -0.278372 84.2645 0.0199784 80.9571C0.567378 74.8898 1.16238 68.8225 1.96053 62.7833C2.12543 61.5389 3.01028 60.116 4.01413 59.3042C5.85013 57.8286 7.90118 56.4924 10.0687 55.5489C14.5201 53.6169 19.1084 51.9789 23.6432 50.233C25.5761 49.4876 25.9305 49.6754 26.4796 51.6848C29.4235 62.456 32.3673 73.2269 35.3111 83.9976C35.3868 84.3385 35.5834 84.6404 35.8645 84.8476C36.2087 82.2185 36.5606 79.5903 36.8964 76.9604C37.6036 71.4244 38.3303 65.8909 38.9789 60.348C39.0885 59.413 38.933 58.4211 38.7468 57.4844C38.5012 56.2434 38.1042 55.0304 37.7404 53.6857H47.2732C47.206 54.0572 47.2103 54.4167 47.076 54.7176C45.4321 58.4109 46.3339 62.1721 46.7674 65.9104C47.4568 71.8604 48.1988 77.8104 48.9273 83.7528C48.9681 84.086 49.0879 84.409 49.1712 84.7371L49.4313 84.7532Z" fill="white"/>
                                    <path d="M51.1042 41.2775C44.2872 47.672 42.503 48.1157 35.3375 42.1997C26.2807 34.7197 19.961 20.3547 26.0419 10.4633C29.9468 4.11206 35.7098 0.40521 43.4618 0.80386C51.5368 1.21866 56.8986 5.76446 60.2782 12.7039C63.7182 20.064 58.9879 33.9012 51.1042 41.2775Z" fill="white"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_8_100">
                                    <rect width="85" height="85" fill="white" transform="translate(-0.00976562 0.732422)"/>
                                    </clipPath>
                                    </defs>
                                </svg>
                            </span>
                            <h3>Private Driver</h3>
                            <p>
                                We have professional agents to accompany your trip useful for your protection from disturbances that you do not like.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="service-card long-trip">
                    <div className="card-overlay">
                        <div className="card-content">
                            <span className="card-icon">

                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
                                </svg>
                            </span>
                            <h3>Full Coverage Insurance</h3>
                            <p>
                                Drive with confidence. Our all-risk insurance protects you against accidents, theft, and damage, so you can enjoy your Ferrari experience with total peace of mind.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div>

            <section className="advantages-section">
                <div className="section-header">
                    <p className="subtitle">ADVANTAGES</p>
                    <h2>Why Choose Us ?</h2>
                    <p className="description">
                        We present many guarantees and advantages when you rent a car with us for your trip. Here are some of the advantages that you will get
                    </p>
                </div>

                <div className="advantages-grid">
                    <div className="advantage-item">
                        <div className="icon-circle red-bg">
                            <span className="icon">
                                <svg width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M67.625 3.56256C67.3125 2.62506 66.375 1.68756 65.4375 1.37506C52.3125 -2.06244 38.875 2.00006 29.8125 12.6251L26.375 16.6876L17.9375 14.8126C13.875 13.2501 9.5 15.1251 7.625 18.8751L0.75 31.0626C0.125 32.0001 0.125 32.9376 0.75 33.8751C1.0625 34.8126 2 35.4376 2.9375 35.7501L12.625 37.9376C11.6875 40.4376 11.375 42.9376 10.75 45.4376C10.75 46.3751 11.0625 47.3126 11.6875 47.9376L21.375 57.6251C22 58.2501 22.625 58.5626 23.5625 58.5626H23.875C26.6875 58.2501 29.1875 57.9376 31.6875 57.0001L33.5625 66.3751C33.875 67.3126 34.5 68.2501 35.4375 68.5626C35.75 68.8751 36.375 68.8751 36.6875 68.8751C37.3125 68.8751 37.625 68.8751 38.25 68.5626L50.4375 61.6876C53.875 59.8126 55.75 55.4376 54.8125 51.3751L52.625 42.6251L56.375 39.1876C66.6875 30.4376 71.0625 16.3751 67.625 3.56256ZM19.8125 24.5001C17.9375 27.0001 16.0625 29.5001 14.8125 32.0001L8.25 30.4376L12.9375 22.0001C13.5625 20.7501 14.8125 20.4376 16.375 20.7501L21.6875 22.0001L19.8125 24.5001ZM47 56.0626L38.5625 60.7501L37.3125 54.5001C40.125 53.2501 42.625 51.375 44.8125 49.5001L47 47.3126L48.25 52.625C48.875 54.1875 47.9375 55.7501 47 56.0626ZM49.1875 24.5001C46.6875 24.5001 44.5 22.3126 44.5 19.8126C44.5 17.3126 46.6875 15.1251 49.1875 15.1251C51.6875 15.1251 53.875 17.3126 53.875 19.8126C53.875 22.3126 52 24.5001 49.1875 24.5001Z" fill="#F55757"/>
                                </svg>
                            </span>
                            </div>
                        <h4>Easy Rent</h4>
                        <p>Rent a car at our rental with an easy and fast process without disturbing your productivity</p>
                    </div>

                    <div className="advantage-item">
                        <div className="icon-circle red-bg">
                            <span className="icon">
                                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M59.625 0.25H3.375C1.5 0.25 0.25 1.5 0.25 3.375V59.625C0.25 61.5 1.5 62.75 3.375 62.75H59.625C61.5 62.75 62.75 61.5 62.75 59.625V3.375C62.75 1.5 61.5 0.25 59.625 0.25ZM49.3125 23.0625L28.0625 44.3125C26.8125 45.5625 24.9375 45.5625 23.6875 44.3125L13.6875 34.3125C12.4375 33.0625 12.4375 31.1875 13.6875 29.9375C14.9375 28.6875 16.8125 28.6875 18.0625 29.9375L25.875 37.75L44.9375 18.6875C46.1875 17.4375 48.0625 17.4375 49.3125 18.6875C50.5625 19.9375 50.5625 21.8125 49.3125 23.0625Z" fill="#F55757"/>
                                </svg>
                            </span>
                        </div>
                        <h4>Premium Quality</h4>
                        <p>Our cars are always maintained engine health so your trip will provide a more comfortable driving experience</p>
                    </div>

                    <div className="advantage-item">
                        <div className="icon-circle red-bg">
                            <span className="icon">
                                <svg width="75" height="75" viewBox="0 0 75 75" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M49.6875 41.25C49.375 41.25 49.375 40.9375 49.0625 40.9375C53.75 37.5 56.25 32.1875 56.25 26.25C56.25 25.625 56.25 25 56.25 24.375V24.0625L57.1875 16.5625C57.8125 11.5625 54.375 7.1875 49.6875 6.25L46.875 5.625C40.625 4.6875 34.375 4.6875 28.125 5.625L25.625 6.25C20.625 7.1875 17.1875 11.5625 17.8125 16.5625L18.75 24.0625V24.375C18.75 25 18.75 25.625 18.75 26.25C18.75 31.875 21.25 37.5 25.9375 40.9375C25.625 40.9375 25.625 41.25 25.3125 41.25C15 45.625 7.81251 55.3125 6.56251 66.5625C6.25001 68.125 7.50001 69.6875 9.37501 70C11.25 70.3125 64.0625 70 65.625 70H65.9375C67.5 69.6875 68.75 68.125 68.75 66.5625C67.1875 55.3125 60 45.625 49.6875 41.25ZM37.5 50.9375L32.1875 45.625C35.625 45 39.0625 45 42.5 45.625L37.5 50.9375ZM37.5 38.75C30.625 38.75 25.3125 33.4375 25 26.5625H50C49.6875 33.4375 44.375 38.75 37.5 38.75Z" fill="#F55757"/>
                                </svg>
                            </span>
                        </div>
                        <h4>Professional Agent</h4>
                        <p>You can ask your travel companion to escort and guide your journey.</p>
                    </div>

                    <div className="advantage-item">
                        <div className="icon-circle red-bg">
                            <span className="icon">
                                <svg width="52" height="63" viewBox="0 0 52 63" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M49.25 5.25C48.625 4.625 47.6875 4.3125 46.75 4.625C39.875 6.1875 33 4.625 27.375 0.5625C26.4375 -0.0625 24.875 -0.0625 23.9375 0.5625C18 4.625 11.125 6.1875 4.25 4.625C2.6875 4.3125 0.8125 5.5625 0.5 7.125C0.5 7.4375 0.5 7.4375 0.5 7.75V31.1875C0.5 40.25 4.875 48.6875 12.375 54L23.9375 62.125C24.875 62.75 26.4375 62.75 27.6875 62.125L39.25 54C46.75 48.6875 51.125 40.25 51.125 31.1875V7.75C50.5 6.8125 50.1875 5.875 49.25 5.25ZM31.75 34.625H28.625V37.75C28.625 39.625 27.375 40.875 25.5 40.875C23.625 40.875 22.375 39.625 22.375 37.75V34.625H19.25C17.375 34.625 16.125 33.375 16.125 31.5C16.125 29.625 17.375 28.375 19.25 28.375H22.375V25.25C22.375 23.375 23.625 22.125 25.5 22.125C27.375 22.125 28.625 23.375 28.625 25.25V28.375H31.75C33.625 28.375 34.875 29.625 34.875 31.5C34.875 33.375 33.625 34.625 31.75 34.625Z" fill="#F55757"/>
                                </svg>
                            </span>
                        </div>
                        <h4>Car Safety</h4>
                        <p>We guarantee the safety of the engine on the car always running well with regular checks on the car engine.</p>
                    </div>

                    <div className="advantage-item">
                        <div className="icon-circle red-bg">
                            <span className="icon">
                                <svg width="63" height="64" viewBox="0 0 63 64" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M59.625 29.375H3.375C1.5 29.375 0.25 30.625 0.25 32.5C0.25 34.375 1.5 35.625 3.375 35.625H59.625C61.5 35.625 62.75 34.375 62.75 32.5C62.75 30.625 61.5 29.375 59.625 29.375ZM47.125 41.875H15.875C14.9375 41.875 14.3125 42.1875 13.6875 42.8125C12.4375 44.0625 12.4375 45.9375 13.6875 47.1875L29.3125 62.8125C29.9375 63.4375 30.5625 63.75 31.5 63.75C32.4375 63.75 33.0625 63.4375 33.6875 62.8125L49.3125 47.1875C49.9375 46.5625 50.25 45.9375 50.25 45C50.25 43.125 49 41.875 47.125 41.875ZM42.125 20C42.125 21.875 43.375 23.125 45.25 23.125H47.125C48.0625 23.125 48.6875 22.8125 49.3125 22.1875C50.5625 20.9375 50.5625 19.0625 49.3125 17.8125L47.125 15.625C46.1875 14.6875 44.625 14.375 43.375 15C41.8125 15.625 41.1875 17.5 42.125 19.0625C42.125 19.6875 42.125 19.6875 42.125 20ZM30.25 10L31.5 8.75L34 11.25C34.625 11.875 35.25 12.1875 36.1875 12.1875C37.125 12.1875 37.75 11.875 38.375 11.25C39.625 10 39.625 8.125 38.375 6.875L34.9375 3.4375C34.625 3.125 34.3125 3.125 34 2.8125C34 2.5 33.6875 2.1875 33.375 1.875C32.125 0.625 30.25 0.625 29 1.875L25.5625 5.3125C24.3125 6.5625 24.3125 8.4375 25.5625 9.6875C26.8125 10.9375 29.3125 11.25 30.25 10ZM16.1875 23.125C17.125 23.125 17.75 22.8125 18.375 22.1875L21.8125 18.75C23.0625 17.5 23.0625 15.625 21.8125 14.375C20.5625 13.125 18.6875 13.125 17.4375 14.375L13.6875 17.5C13.375 18.125 13.0625 19.0625 13.0625 19.6875C13.0625 21.5625 14.3125 22.8125 16.1875 23.125ZM28.0625 23.125H32.75C34.625 23.125 35.875 21.875 35.875 20C35.875 18.125 34.625 16.875 32.75 16.875H28.0625C26.1875 16.875 24.9375 18.125 24.9375 20C24.9375 21.875 26.5 23.125 28.0625 23.125Z" fill="#F55757"/>
                                </svg>
                            </span>
                        </div>
                        <h4>Refund</h4>
                        <p>Our service guarantee provides a money back opportunity if the car does not match the information provided.</p>
                    </div>

                    <div className="advantage-item">
                        <div className="icon-circle red-bg">
                            <span className="icon">
                                <svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M44 15.875H12.75C10.875 15.875 9.625 17.125 9.625 19V26.8125H33.0625C34.9375 26.8125 36.1875 28.0625 36.1875 29.9375V53.375H44C45.875 53.375 47.125 52.125 47.125 50.25V19C47.125 17.125 45.875 15.875 44 15.875ZM28.375 31.5H3.375C1.5 31.5 0.25 32.75 0.25 34.625V59.625C0.25 61.5 1.5 62.75 3.375 62.75H28.375C30.25 62.75 31.5 61.5 31.5 59.625V34.625C31.5 32.75 30.25 31.5 28.375 31.5ZM59.625 0.25H22.125C20.25 0.25 19 1.5 19 3.375V11.1875H48.6875C50.5625 11.1875 51.8125 12.4375 51.8125 14.3125V44H59.625C61.5 44 62.75 42.75 62.75 40.875V3.375C62.75 1.5 61.5 0.25 59.625 0.25Z" fill="#F55757"/>
                                </svg>
                            </span>
                        </div>
                        <h4>Live Monitoring</h4>
                        <p>Our service provides direct customer monitoring to monitor trips in terms of safety and comfort</p>
                    </div>
                </div>
            </section>
        </div>
        </>
    );
}

export default Home;