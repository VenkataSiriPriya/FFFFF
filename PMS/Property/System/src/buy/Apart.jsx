import React, { useState } from 'react';
import '../css/Apartment.css';

function Apart() {
  const [apartments, setApartments] = useState([
    { id: 1, title: "Luxury Downtown Loft", location: "Bangalore", price: 1800, bedrooms: 2, bathrooms: 2, area: 1200, image: "images/img1.jpeg" },
    { id: 2, title: "Cozy Suburban Apartment", location: "Andhra Pradesh", price: 1200, bedrooms: 1, bathrooms: 1, area: 750, image: "images/img2.jpeg" },
    { id: 3, title: "Modern Riverside Condo", location: "Chennai", price: 2200, bedrooms: 3, bathrooms: 2, area: 1500, image: "images/img3.jpeg" },
    { id: 4, title: "Urban Studio Apartment", location: "Hyderabad", price: 900, bedrooms: 0, bathrooms: 1, area: 500, image: "images/img4.jpeg" },
    { id: 5, title: "Family Friendly Unit", location: "Andhra Pradesh", price: 1600, bedrooms: 3, bathrooms: 2, area: 1300, image: "images/img5.jpeg" },
    { id: 6, title: "Upscale Hillside Apartment", location: "Chennai", price: 2500, bedrooms: 2, bathrooms: 2, area: 1100, image: "images/img6.jpeg" },
    { id: 7, title: "Cityscape Penthouse", location: "Bangalore", price: 3000, bedrooms: 4, bathrooms: 3, area: 1800, image: "images/img7.jpg" },
    { id: 8, title: "Budget Studio Apartment", location: "Hyderabad", price: 850, bedrooms: 0, bathrooms: 1, area: 450, image: "images/img7.jpeg" },
    { id: 9, title: "Lakeview Apartment", location: "Chennai", price: 2000, bedrooms: 3, bathrooms: 2, area: 1400, image: "images/img9.jpg" },
    { id: 10, title: "Compact City Flat", location: "Andhra Pradesh", price: 950, bedrooms: 1, bathrooms: 1, area: 600, image: "images/img10.webp" },
    { id: 11, title: "Elegant Family Suite", location: "Bangalore", price: 2100, bedrooms: 3, bathrooms: 3, area: 1600, image: "images/img11.jpeg" },
    { id: 12, title: "Luxury High-Rise", location: "Hyderabad", price: 2800, bedrooms: 4, bathrooms: 3, area: 2000, image: "images/img12.jpeg" },
    { id: 13, title: "Stylish Loft", location: "Chennai", price: 1750, bedrooms: 2, bathrooms: 1, area: 1000, image: "images/img13.jpeg" },
    { id: 14, title: "Small Budget Apartment", location: "Andhra Pradesh", price: 800, bedrooms: 1, bathrooms: 1, area: 500, image: "images/img14.jpeg" },
    { id: 15, title: "Downtown Elite Condo", location: "Bangalore", price: 2700, bedrooms: 3, bathrooms: 2, area: 1900, image: "images/img15.jpeg" },
    { id: 16, title: "Riverside Duplex", location: "Hyderabad", price: 2300, bedrooms: 3, bathrooms: 2, area: 1700, image: "images/img16.jpg" },
    { id: 17, title: "Luxury Villa", location: "Chennai", price: 3200, bedrooms: 5, bathrooms: 4, area: 2500, image: "images/img17.jpg" },
    { id: 18, title: "Compact Townhouse", location: "Andhra Pradesh", price: 1400, bedrooms: 2, bathrooms: 2, area: 1000, image: "images/img18.jpg" },
    { id: 19, title: "Modern Duplex", location: "Bangalore", price: 2600, bedrooms: 3, bathrooms: 3, area: 1700, image: "images/img19.jpeg" },
    { id: 20, title: "Greenview Apartment", location: "Hyderabad", price: 1600, bedrooms: 2, bathrooms: 2, area: 1200, image: "images/img20.avif" },
    { id: 21, title: "Luxury Lakeview Suite", location: "Chennai", price: 2900, bedrooms: 4, bathrooms: 3, area: 2000, image: "images/img21.jpeg" },
    { id: 22, title: "Affordable Cozy Home", location: "Andhra Pradesh", price: 950, bedrooms: 1, bathrooms: 1, area: 700, image: "images/img22.jpeg" },
    { id: 23, title: "Spacious Family Apartment", location: "Bangalore", price: 1800, bedrooms: 3, bathrooms: 2, area: 1400, image: "images/img23.jpeg" },
    { id: 24, title: "Luxury Smart Home", location: "Hyderabad", price: 3100, bedrooms: 5, bathrooms: 4, area: 2400, image: "images/img24.jpeg" },
  ]);


  const [locationFilter, setLocationFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const locations = ['Andhra Pradesh', 'Chennai', 'Hyderabad', 'Banglore',];

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
        
        <div className="Search-container">
          <div className="Search-bar">
            <div className="Search-group">
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
            
            <div className="Search-group">
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
                <div className="pr-tag">${apartment.price}/month</div>
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
