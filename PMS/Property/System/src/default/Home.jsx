import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFileAlt, faComments } from "@fortawesome/free-solid-svg-icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

import "../css/Home.css";

function Home() {
  const projectsRef = useRef(null); // Reference to Top Projects section

  const handleScrollToProjects = () => {
    projectsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };


  const projects = [
    {
      title: "Orchid Platinum",
      location: "Whitefield, Bangalore",
      company: "Goyal & Co and Hariyana Group",
      type: "2, 3 BHK Flats",
      price: "₹ 1.83 Cr onwards",
      image: "public/images/bang.jpeg",
    },
    {
      title: "Fortuna Tejus",
      location: "Mathikere, Bangalore",
      company: "Fortuna Constructions Pvt Ltd",
      type: "2 BHK Flats",
      price: "₹ 1.37 Cr onwards",
      image: "public/images/proj2.jpg",
    },
    {
      title: "Binary Temple Tree",
      location: "Sarjapur Road, Bangalore",
      company: "Binary Realty",
      type: "3 BHK Flats",
      price: "₹ 1.20 Cr onwards",
      image: "public/images/proj3.jpg",
    },
    {
      title: "VBHC Aurora",
      location: "Yelahanka New Town, Bangalore",
      company: "VBHC Value Homes Pvt Ltd",
      type: "3 BHK Flats",
      price: "₹ 2.26 Cr onwards",
      image: "public/images/proj4.jpg",
    },
    {
      title: "Prestige Serenity Shores",
      location: "Whitefield, Bangalore",
      company: "Prestige Group",
      type: "2, 3, 4 BHK Flats",
      price: "₹ 1.95 Cr onwards",
      image: "public/images/proj5.jpg",
    },
    {
      title: "Sobha Windsor",
      location: "Whitefield, Bangalore",
      company: "Sobha Limited",
      type: "3, 4 BHK Flats",
      price: "₹ 2.10 Cr onwards",
      image: "public/images/proj6.jpg",
    },
    {
      title: "Brigade Utopia",
      location: "Varthur Road, Bangalore",
      company: "Brigade Group",
      type: "Studio, 1, 2, 3 BHK",
      price: "₹ 70 Lakh onwards",
      image: "public/images/proj7.jpg",
    },
    {
      title: "Assetz Bloom & Dell",
      location: "Whitefield, Bangalore",
      company: "Assetz Property Group",
      type: "1, 2, 3 BHK Flats",
      price: "₹ 75 Lakh onwards",
      image: "public/images/proj8.jpg",
    },
    {
      title: "Prestige Waterford",
      location: "Whitefield, Bangalore",
      company: "Prestige Group",
      type: "3, 4 BHK Flats",
      price: "₹ 2.15 Cr onwards",
      image: "public/images/proj9.jpg",
    },
    {
      title: "Sobha Dream Acres",
      location: "Panathur, Bangalore",
      company: "Sobha Limited",
      type: "1, 2 BHK Flats",
      price: "₹ 68 Lakh onwards",
      image: "public/images/proj10.jpg",
    },
    {
      title: "Salarpuria Sattva Magnus",
      location: "Rajajinagar, Bangalore",
      company: "Salarpuria Sattva Group",
      type: "3, 4 BHK Flats",
      price: "₹ 2.4 Cr onwards",
      image: "public/images/proj11.jpg",
    },
    {
      title: "Brigade Cornerstone Utopia",
      location: "Whitefield, Bangalore",
      company: "Brigade Group",
      type: "1, 2, 3 BHK Flats",
      price: "₹ 80 Lakh onwards",
      image: "public/images/proj12.jpg",
    },
    {
      title: "Adarsh Palm Retreat",
      location: "Sarjapur Road, Bangalore",
      company: "Adarsh Developers",
      type: "Luxury Villas",
      price: "₹ 3.5 Cr onwards",
      image: "public/images/proj13.jpg",
    },
    {
      title: "Sobha Royal Pavilion",
      location: "Sarjapur Road, Bangalore",
      company: "Sobha Limited",
      type: "2, 3, 4 BHK Flats",
      price: "₹ 1.85 Cr onwards",
      image: "public/images/proj14.jpg",
    },
    {
      title: "Embassy Springs",
      location: "Devanahalli, Bangalore",
      company: "Embassy Group",
      type: "Plots & Villas",
      price: "₹ 2.1 Cr onwards",
      image: "public/images/proj15.jpg",
    },
    {
      title: "Prestige Finsbury Park",
      location: "Bagalur, Bangalore",
      company: "Prestige Group",
      type: "1, 2, 3 BHK Flats",
      price: "₹ 58 Lakh onwards",
      image: "public/images/proj16.jpg",
    },
    {
      title: "Purva Atmosphere",
      location: "Thanisandra, Bangalore",
      company: "Puravankara Limited",
      type: "2, 3 BHK Flats",
      price: "₹ 1.4 Cr onwards",
      image: "public/images/proj17.jpg",
    },
    {
      title: "Godrej Aqua",
      location: "Hosahalli, Bangalore",
      company: "Godrej Properties",
      type: "2, 3 BHK Flats",
      price: "₹ 92 Lakh onwards",
      image: "public/images/proj18.jpg",
    },
    {
      title: "Total Environment In That Quiet Earth",
      location: "Hennur Road, Bangalore",
      company: "Total Environment",
      type: "Luxury Villas & Flats",
      price: "₹ 3.5 Cr onwards",
      image: "public/images/proj19.jpg",
    },
    {
      title: "Shriram Blue",
      location: "KR Puram, Bangalore",
      company: "Shriram Properties",
      type: "1, 2, 3 BHK Flats",
      price: "₹ 70 Lakh onwards",
      image: "public/images/proj20.jpg",
    },
  ];
  


  return (
    <div className="homepage">
      {/* Intro Section */}
      <div className="intro-section">
        <h1>Discover Exceptional Living Spaces</h1>
        <p>
          Welcome to BlissNest — your trusted destination for finding premium residential properties 
          across Bangalore. Explore hand-picked homes that blend modern living with timeless elegance.
        </p>
        <button className="explore-btn" onClick={handleScrollToProjects}>
          Explore Top Projects
        </button>
      </div>
  


     {/* magicHomes Section */}
     <div className="magic-homes">
        <span className="new-launch">New Launch</span>
        <h2 className="magic-title">magicHomes</h2>
        <p className="magic-subtitle">Encyclopedia For All New Projects</p>

        <div className="magic-options">
          <div className="magic-card blue">
            <FontAwesomeIcon icon={faFolder} className="magic-icon" />
            <p>Directory for All New Projects</p>
          </div>

          <div className="magic-card red">
            <FontAwesomeIcon icon={faFileAlt} className="magic-icon" />
            <p>All Reports from RERA</p>
          </div>

          <div className="magic-card yellow">
            <FontAwesomeIcon icon={faComments} className="magic-icon" />
            <p>Expert Reviews & Advice</p>
          </div>
        </div>

        <button className="view-projects-button">View All New Projects</button>
      </div>

      {/* Property Cards Section */}
      <div className="property-section">
        <h2 className="section-title">
          We've got properties for everyone
          <span className="underline"></span>
        </h2>

        <div className="property-grid">
          {/* Owner Properties */}
          <div className="property-card">
            <img src="public/images/pp1.jpeg" alt="Owner Properties" className="property-image" />
            <div className="property-info">
              <p className="property-title">Owner Properties</p>
              <Link to="/owner-properties" className="property-link">Explore →</Link>
            </div>
          </div>

          {/* Projects */}
          <div className="property-card">
            <img src="https://via.placeholder.com/300" alt="Projects" className="property-image" />
            <div className="property-info">
              <p className="property-title">Projects</p>
              <Link to="/projects" className="property-link">Explore →</Link>
            </div>
          </div>

          {/* Ready to Move-in */}
          <div className="property-card">
            <img src="https://via.placeholder.com/300" alt="Ready to Move-in" className="property-image" />
            <div className="property-info">
              <p className="property-title">Ready to move-in</p>
              <Link to="/ready-to-move" className="property-link">Explore →</Link>
            </div>
          </div>

          {/* Budget Homes */}
          <div className="property-card">
            <img src="https://via.placeholder.com/300" alt="Budget Homes" className="property-image" />
            <div className="property-info">
              <p className="property-title">Budget Homes</p>
              <Link to="/budget-homes" className="property-link">Explore →</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Property Services Section */}
      <section className="property-services">
  <h2 className="property-title">Property Services</h2>
  <div className="underline"></div>

  <div className="properties-cards">
    <div className="properties-card">
      <img src="public/images/hh1.jpeg" alt="Best Home Loan Deals" className="properties-image" />
      <div className="properties-info">
        <h3>Best Home Loan Deals</h3>
        <p>Compare & choose from 34+ banks to get the best home loan deal</p>
      </div>
    </div>

    <div className="properties-card">
      <img src="public/images/jj1.webp" alt="Home Interiors" className="properties-image" />
      <div className="properties-info">
        <h3>Home Interiors</h3>
        <p>Transform your space with our trusted Decor partners</p>
      </div>
    </div>

    <div className="properties-card">
      <img src="public/images/services.jpg" alt="Legal Assistance" className="properties-image" />
      <div className="properties-info">
        <h3>Legal Assistance</h3>
        <p>Expert legal support for property documentation & verification</p>
      </div>
    </div>

    <div className="properties-card">
      <img src="public/images/rent.webp" alt="Rental & Property Management" className="properties-image" />
      <div className="properties-info">
        <h3>Rental & Property Management</h3>
        <p>End-to-end rental and property management solutions</p>
      </div>
    </div>
  </div>
</section>



      {/* Top Projects Section */}
      <div className="top-projects" ref={projectsRef}>
        <div className="header">
          <h2>Top Projects </h2>
          <a href="#" className="see-all">See all Projects →</a>
        </div>
        <div className="underline"></div>
        <div className="projects-container">
          <button className="scroll-btn left" onClick={scrollLeft}>
            <FaArrowLeft />
          </button>
          <div className="projects" ref={scrollRef}>
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.image} alt={project.title} className="project-img" />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p>{project.company}</p>
                  <p>{project.location}</p>
                  <p><strong>{project.type}</strong></p>
                  <p className="price">{project.price}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="scroll-btn right" onClick={scrollRight}>
            <FaArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
