import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolder, faFileAlt, faComments } from "@fortawesome/free-solid-svg-icons";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useRef } from "react";

import "../css/Home.css";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("flat");
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("Bangalore-Central");

  const handleSearchChange = (e) => setSearchTerm(e.target.value);
  const handlePropertyTypeChange = (e) => setPropertyType(e.target.value);
  const handleBudgetChange = (e) => setBudget(e.target.value);
  const handleLocationChange = (e) => setLocation(e.target.value);

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", { location, propertyType, budget });
  
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
      image: "path-to-image2.jpg",
    },
    {
      title: "Binary Temple Tree",
      location: "Sarjapur Road, Bangalore",
      company: "Binary Realty",
      type: "3 BHK Flats",
      price: "₹ 1.20 Cr onwards",
      image: "path-to-image3.jpg",
    },
    {
      title: "VBHC Aurora",
      location: "Yelahanka New Town, Bangalore",
      company: "VBHC Value Homes Pvt Ltd",
      type: "3 BHK Flats",
      price: "₹ 2.26 Cr onwards",
      image: "path-to-image4.jpg",
    },
  ];


  return (
    <div className="homepage">
      {/* Main Search Section */}
      <div className="search-container">
        <h1 className="main-heading">
          Find a home you'll <span className="love-text">love</span>
        </h1>

        <div className="nav-tabs">
          <a href="#" className="nav-tab active">Buy</a>
          <a href="#" className="nav-tab">Rent</a>
          <a href="#" className="nav-tab brand">BlissNest</a>
          <a href="#" className="nav-tab">PG</a>
          <a href="#" className="nav-tab">Plot</a>
          <a href="#" className="nav-tab">Commercial</a>
          <a href="#" className="nav-tab">Post Free Property Ad</a>
        </div>

        <form onSubmit={handleSearch} className="search-form">
          <div className="location-input">
            <span className="location-icon">
              <i className="fas fa-map-marker-alt"></i>
            </span>
            <span className="location-text">{location}</span>
            <input
              type="text"
              placeholder="Add more..."
              onChange={handleSearchChange}
              value={searchTerm}
              className="location-placeholder"
            />
          </div>

          <div className="property-type">
            <span className="property-icon">
              <i className="fas fa-home"></i>
            </span>
            <div className="property-dropdown">
              <select value={propertyType} onChange={handlePropertyTypeChange} className="dropdown-select">
                <option value="flat">Flat +1</option>
                <option value="apartment">Apartment</option>
                <option value="villa">Villa</option>
                <option value="plot">Plot</option>
                <option value="commercial">Commercial</option>
              </select>
              <span className="dropdown-arrow">
                <i className="fas fa-chevron-down"></i>
              </span>
            </div>
          </div>

          <div className="budget">
            <span className="budget-icon">
              <i className="fas fa-rupee-sign"></i>
            </span>
            <div className="budget-dropdown">
              <select value={budget} onChange={handleBudgetChange} className="dropdown-select">
                <option value="">Budget</option>
                <option value="0-50">Under ₹50 Lakhs</option>
                <option value="50-100">₹50 Lakhs - ₹1 Cr</option>
                <option value="100-200">₹1 Cr - ₹2 Cr</option>
                <option value="200+">Above ₹2 Cr</option>
              </select>
              <span className="dropdown-arrow">
                <i className="fas fa-chevron-down"></i>
              </span>
            </div>
          </div>

          <button type="submit" className="search-button">
            <span className="search-icon">
              <i className="fas fa-search"></i>
            </span>
            Search
          </button>
        </form>
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
        </div>
      </section>


      {/* Top Projects Section */}
      <div className="top-projects">
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
