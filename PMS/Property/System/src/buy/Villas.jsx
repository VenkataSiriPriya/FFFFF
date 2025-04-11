import React, { useState } from 'react';
import '../css/Villas.css';

function Villa() {
  const [villas, setVillas] = useState([
    { id: 1, title: "Luxury Beachfront Villa", location: "Seaside", price: 5000, bedrooms: 4, bathrooms: 3, area: 2500, image: "/api/placeholder/300/200" },
    { id: 2, title: "Mountain Retreat Villa", location: "Hills", price: 4000, bedrooms: 3, bathrooms: 2, area: 2000, image: "/api/placeholder/300/200" },
    { id: 3, title: "Tropical Garden Villa", location: "Countryside", price: 3500, bedrooms: 3, bathrooms: 2, area: 1800, image: "/api/placeholder/300/200" },
    { id: 4, title: "Modern Luxury Villa", location: "City Center", price: 6000, bedrooms: 5, bathrooms: 4, area: 3000, image: "/api/placeholder/300/200" },
    { id: 5, title: "Ocean View Villa", location: "Seaside", price: 7000, bedrooms: 5, bathrooms: 3, area: 3200, image: "/api/placeholder/300/200" },
    { id: 6, title: "Hillside Cozy Villa", location: "Hills", price: 3800, bedrooms: 3, bathrooms: 2, area: 1900, image: "/api/placeholder/300/200" },
    { id: 7, title: "Countryside Family Villa", location: "Countryside", price: 3600, bedrooms: 4, bathrooms: 3, area: 2100, image: "/api/placeholder/300/200" },
    { id: 8, title: "City Center Penthouse Villa", location: "City Center", price: 7500, bedrooms: 5, bathrooms: 4, area: 3100, image: "/api/placeholder/300/200" },
    { id: 9, title: "Seaside Sunset Villa", location: "Seaside", price: 6800, bedrooms: 4, bathrooms: 3, area: 2600, image: "/api/placeholder/300/200" },
    { id: 10, title: "Hills Luxury Retreat", location: "Hills", price: 4200, bedrooms: 3, bathrooms: 2, area: 2200, image: "/api/placeholder/300/200" },
    { id: 11, title: "Green Countryside Villa", location: "Countryside", price: 3400, bedrooms: 3, bathrooms: 2, area: 2000, image: "/api/placeholder/300/200" },
    { id: 12, title: "City Luxury Villa", location: "City Center", price: 6200, bedrooms: 4, bathrooms: 3, area: 2800, image: "/api/placeholder/300/200" },
    { id: 13, title: "Seaside Breeze Villa", location: "Seaside", price: 5200, bedrooms: 3, bathrooms: 2, area: 2100, image: "/api/placeholder/300/200" },
    { id: 14, title: "Hilltop Modern Villa", location: "Hills", price: 4400, bedrooms: 4, bathrooms: 3, area: 2400, image: "/api/placeholder/300/200" },
    { id: 15, title: "Countryside Escape Villa", location: "Countryside", price: 3300, bedrooms: 3, bathrooms: 2, area: 1950, image: "/api/placeholder/300/200" },
    { id: 16, title: "City Center Stylish Villa", location: "City Center", price: 6400, bedrooms: 4, bathrooms: 3, area: 2900, image: "/api/placeholder/300/200" },
    { id: 17, title: "Beachfront Paradise Villa", location: "Seaside", price: 7100, bedrooms: 5, bathrooms: 4, area: 3300, image: "/api/placeholder/300/200" },
    { id: 18, title: "Hills Serenity Villa", location: "Hills", price: 4100, bedrooms: 3, bathrooms: 2, area: 2100, image: "/api/placeholder/300/200" },
    { id: 19, title: "Countryside Relax Villa", location: "Countryside", price: 3700, bedrooms: 3, bathrooms: 2, area: 2050, image: "/api/placeholder/300/200" },
    { id: 20, title: "City Center Prime Villa", location: "City Center", price: 7000, bedrooms: 5, bathrooms: 4, area: 3200, image: "/api/placeholder/300/200" },
    { id: 21, title: "Seaside Cozy Villa", location: "Seaside", price: 4900, bedrooms: 3, bathrooms: 2, area: 2000, image: "/api/placeholder/300/200" },
    { id: 22, title: "Luxury Hills Villa", location: "Hills", price: 4600, bedrooms: 4, bathrooms: 3, area: 2300, image: "/api/placeholder/300/200" },
    { id: 23, title: "Countryside Nature Villa", location: "Countryside", price: 3400, bedrooms: 3, bathrooms: 2, area: 1850, image: "/api/placeholder/300/200" },
    { id: 24, title: "City Center Grand Villa", location: "City Center", price: 7200, bedrooms: 5, bathrooms: 4, area: 3100, image: "/api/placeholder/300/200" },
  ]);
  
  

  const [locationFilter, setLocationFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const locations = ['Seaside', 'Hills', 'Countryside', 'City Center'];

  const filteredVillas = villas.filter(villa => {
    if (locationFilter && villa.location !== locationFilter) return false;
    if (minPrice && villa.price < parseInt(minPrice)) return false;
    if (maxPrice && villa.price > parseInt(maxPrice)) return false;
    return true;
  });

  return (
    <div className="villas-container flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="villas-header">
          <h1>Find Your Dream Villa</h1>
          <p>Browse our collection of luxurious villas available for rent</p>
        </div>
        
        <div className="f1-container">
          <div className="f2-bar">
            <div className="f3-group">
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
            
            <div className="f3-group">
              <label>Budget</label>
              <div className="budget-inputs">
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
            
            <button className="clear-filters" onClick={() => {
              setLocationFilter('');
              setMinPrice('');
              setMaxPrice('');
            }}>
              Clear Filters
            </button>
          </div>
        </div>
        
        <div className="results-overview">
          <p>Showing {filteredVillas.length} villas</p>
        </div>
        
        <div className="villas-grid">
          {filteredVillas.map(villa => (
            <div key={villa.id} className="villa-card">
              <div className="villa-image">
                <img src={villa.image} alt={villa.title} />
                <div className="rental-tag">${villa.price}/month</div>
              </div>
              <div className="villa-info">
                <h3>{villa.title}</h3>
                <p className="location"><i className="location-icon">📍</i> {villa.location}</p>
                <div className="villa-details">
                  <span><i className="bed-icon">🛏️</i> {villa.bedrooms} {villa.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}</span>
                  <span><i className="bath-icon">🚿</i> {villa.bathrooms} {villa.bathrooms === 1 ? 'Bathroom' : 'Bathrooms'}</span>
                  <span><i className="area-icon">📏</i> {villa.area} sq ft</span>
                </div>
                <button className="ex-button">Explore Villa</button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredVillas.length === 0 && (
          <div className="no-results">
            <h3>No villas match your search criteria</h3>
            <p>Try adjusting your filters to see more options</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Villa;
