import React, { useState } from 'react';
import Footer from "../components/Footer";
import '../css/Apartment.css';

function Apart() {
  const [apartments, setApartments] = useState([
    { id: 1, title: "Luxury Downtown Loft", location: "Downtown", price: 1800, bedrooms: 2, bathrooms: 2, area: 1200, image: "/api/placeholder/300/200" },
    { id: 2, title: "Cozy Suburban Apartment", location: "Suburbs", price: 1200, bedrooms: 1, bathrooms: 1, area: 750, image: "/api/placeholder/300/200" },
    { id: 3, title: "Modern Riverside Condo", location: "Riverside", price: 2200, bedrooms: 3, bathrooms: 2, area: 1500, image: "/api/placeholder/300/200" },
    { id: 4, title: "Urban Studio Apartment", location: "Downtown", price: 900, bedrooms: 0, bathrooms: 1, area: 500, image: "/api/placeholder/300/200" },
    { id: 5, title: "Family Friendly Unit", location: "Suburbs", price: 1600, bedrooms: 3, bathrooms: 2, area: 1300, image: "/api/placeholder/300/200" },
    { id: 6, title: "Upscale Hillside Apartment", location: "Hillside", price: 2500, bedrooms: 2, bathrooms: 2, area: 1100, image: "/api/placeholder/300/200" },
  ]);

  const [locationFilter, setLocationFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const locations = ['Downtown', 'Suburbs', 'Riverside', 'Hillside'];

  const filteredApartments = apartments.filter(apartment => {
    if (locationFilter && apartment.location !== locationFilter) return false;
    if (minPrice && apartment.price < parseInt(minPrice)) return false;
    if (maxPrice && apartment.price > parseInt(maxPrice)) return false;
    return true;
  });

  return (
    <div className="apartments-container flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="apartments-header">
          <h1>Find Your Perfect Apartment</h1>
          <p>Browse our selection of premium apartments available for rent</p>
        </div>
        
        <div className="search-container">
          <div className="search-bar">
            <div className="search-group">
              <label>Location</label>
              <select 
                value={locationFilter} 
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                <option value="">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
            </div>
            
            <div className="search-group">
              <label>Budget</label>
              <div className="price-inputs">
                <input 
                  type="number" 
                  placeholder="Min Price" 
                  value={minPrice}
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <span>to</span>
                <input 
                  type="number" 
                  placeholder="Max Price" 
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(e.target.value)}
                />
              </div>
            </div>
            
            <button className="reset-button" onClick={() => {
              setLocationFilter('');
              setMinPrice('');
              setMaxPrice('');
            }}>
              Reset Filters
            </button>
          </div>
        </div>
        
        <div className="results-info">
          <p>Showing {filteredApartments.length} apartments</p>
        </div>
        
        <div className="apartments-grid">
          {filteredApartments.map(apartment => (
            <div key={apartment.id} className="apartment-card">
              <div className="apartment-image">
                <img src={apartment.image} alt={apartment.title} />
                <div className="price-tag">${apartment.price}/month</div>
              </div>
              <div className="apartment-info">
                <h3>{apartment.title}</h3>
                <p className="location"><i className="location-icon">📍</i> {apartment.location}</p>
                <div className="apartment-details">
                  <span><i className="bed-icon">🛏️</i> {apartment.bedrooms} {apartment.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}</span>
                  <span><i className="bath-icon">🚿</i> {apartment.bathrooms} {apartment.bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}</span>
                  <span><i className="area-icon">📏</i> {apartment.area} sq ft</span>
                </div>
                <button className="view-button">View Details</button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredApartments.length === 0 && (
          <div className="no-results">
            <h3>No apartments match your search criteria</h3>
            <p>Try adjusting your filters to see more options</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Apart;
