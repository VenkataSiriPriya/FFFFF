import React, { useState } from "react";
import Footer from "../components/Footer";
import "../css/Home.css";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [propertyType, setPropertyType] = useState("flat");
  const [budget, setBudget] = useState("");
  const [location, setLocation] = useState("Bangalore-Central");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handlePropertyTypeChange = (e) => {
    setPropertyType(e.target.value);
  };

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", { location, propertyType, budget });
  };

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
          <a href="#" className="nav-tab brand">magicHomes</a>
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
              <select
                value={propertyType}
                onChange={handlePropertyTypeChange}
                className="dropdown-select"
              >
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
              <select
                value={budget}
                onChange={handleBudgetChange}
                className="dropdown-select"
              >
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

      {/* Footer Component */}
      <Footer />
    </div>
  );
}

export default Home;