import React, { useState, useRef, useEffect } from "react";
import "../css/Navbar.css";

function Navbar() {
  const [selectedCity, setSelectedCity] = useState("Bangalore");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const cities = {
    "Nearby Cities": ["Bangalore - East", "Bangalore - South", "Bangalore - West", "Bangalore - Central", "Bangalore - North"],
    "Popular Cities": ["Ahmedabad", "Bangalore", "Chennai", "Gurgaon", "Hyderabad", "Mumbai", "New Delhi", "Noida", "Pune", "Thane"],
    "Other Cities": [
      "Agra", "Allahabad", "Amritsar", "Bhopal", "Bhubaneswar", "Chandigarh", "Coimbatore", "Dehradun", "Goa", "Gwalior",
      "Haridwar", "Indore", "Jalandhar", "Jammu", "Jodhpur", "Kanpur", "Kochi", "Lucknow", "Madurai", "Mangalore",
      "Mysore", "Nagpur", "Patna", "Ranchi", "Shimla", "Surat", "Udaipur", "Vadodara", "Varanasi", "Vijayawada"
    ]
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="top-bar">
        <div className="logo">PropSync</div>

        {/* City Dropdown */}
        <div className="location" ref={dropdownRef}>
          <div className="location-label" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {selectedCity} 🔻
          </div>

          {isDropdownOpen && (
            <div className="dropdown">
              <h3>INDIA</h3>
              <div className="dropdown-content">
                {Object.entries(cities).map(([category, cityList]) => (
                  <div key={category} className="city-category">
                    <strong>{category}</strong>
                    <div className="city-list">
                      {cityList.map((city, index) => (
                        <div key={index} className="dropdown-item" onClick={() => handleCitySelect(city)}>
                          {city}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="right-section">
          <div className="menu-item">MB Prime 🔻</div>
          <div className="menu-item">Login 🔻</div>
          <button className="post-property-btn">
            Post Property <span className="free-badge">FREE</span>
          </button>
        </div>
      </div>

      <div className="bottom-bar">
        <a href="#">Buy 🔻</a>
        <a href="#">Rent 🔻</a>
        <a href="#">Sell 🔻</a>
        <a href="#">Home Loans 🔻</a>
        <a href="#">Home Interiors</a>
        <a href="#">MB Advice <span className="new-badge">NEW</span> 🔻</a>
        <a href="#">Help 🔻</a>
      </div>
    </nav>
  );
}

export default Navbar;
