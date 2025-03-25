import React, { useState } from 'react';
import '../css/Villas.css';

function Villa() {
  const [villas, setVillas] = useState([
    { id: 1, title: "Luxury Beachfront Villa", location: "Seaside", price: 5000, bedrooms: 4, bathrooms: 3, area: 2500, image: "/api/placeholder/300/200" },
    { id: 2, title: "Mountain Retreat Villa", location: "Hills", price: 4000, bedrooms: 3, bathrooms: 2, area: 2000, image: "/api/placeholder/300/200" },
    { id: 3, title: "Tropical Garden Villa", location: "Countryside", price: 3500, bedrooms: 3, bathrooms: 2, area: 1800, image: "/api/placeholder/300/200" },
    { id: 4, title: "Modern Luxury Villa", location: "City Center", price: 6000, bedrooms: 5, bathrooms: 4, area: 3000, image: "/api/placeholder/300/200" },
    { id: 5, title: "Ocean View Villa", location: "Seaside", price: 7000, bedrooms: 5, bathrooms: 3, area: 3200, image: "/api/placeholder/300/200" },
    { id: 6, title: "Desert Oasis Villa", location: "Desert", price: 3000, bedrooms: 3, bathrooms: 2, area: 1900, image: "/api/placeholder/300/200" },
    { id: 7, title: "Lakeside Serenity Villa", location: "Lakeside", price: 4500, bedrooms: 4, bathrooms: 3, area: 2300, image: "/api/placeholder/300/200" },
    { id: 8, title: "Ski Resort Villa", location: "Mountains", price: 6500, bedrooms: 4, bathrooms: 3, area: 2600, image: "/api/placeholder/300/200" },
    { id: 9, title: "Urban Skyline Villa", location: "Downtown", price: 5500, bedrooms: 3, bathrooms: 2, area: 2100, image: "/api/placeholder/300/200" },
    { id: 10, title: "Sunny Beach Villa", location: "Coastal", price: 4800, bedrooms: 3, bathrooms: 3, area: 2200, image: "/api/placeholder/300/200" },
    { id: 11, title: "Historic Charm Villa", location: "Old Town", price: 5200, bedrooms: 4, bathrooms: 3, area: 2400, image: "/api/placeholder/300/200" },
    { id: 12, title: "Countryside Getaway", location: "Rural", price: 3300, bedrooms: 3, bathrooms: 2, area: 1800, image: "/api/placeholder/300/200" },
    { id: 13, title: "Rainforest Retreat", location: "Jungle", price: 7000, bedrooms: 5, bathrooms: 4, area: 3400, image: "/api/placeholder/300/200" },
    { id: 14, title: "Cliffside Villa", location: "Coastal", price: 6200, bedrooms: 4, bathrooms: 3, area: 2800, image: "/api/placeholder/300/200" },
    { id: 15, title: "Metropolitan Penthouse", location: "City Center", price: 9000, bedrooms: 6, bathrooms: 5, area: 3500, image: "/api/placeholder/300/200" },
    { id: 16, title: "Riverside Retreat", location: "Riverfront", price: 5000, bedrooms: 4, bathrooms: 3, area: 2700, image: "/api/placeholder/300/200" },
    { id: 17, title: "Sunset Paradise Villa", location: "Beachfront", price: 6800, bedrooms: 5, bathrooms: 3, area: 2900, image: "/api/placeholder/300/200" },
    { id: 18, title: "Hilltop Mansion", location: "Hills", price: 7500, bedrooms: 6, bathrooms: 4, area: 3600, image: "/api/placeholder/300/200" },
    { id: 19, title: "Woodland Escape", location: "Forest", price: 4000, bedrooms: 3, bathrooms: 2, area: 2000, image: "/api/placeholder/300/200" },
    { id: 20, title: "Golf Course Villa", location: "Golf Resort", price: 5800, bedrooms: 4, bathrooms: 3, area: 2800, image: "/api/placeholder/300/200" },
    { id: 21, title: "Harborfront Villa", location: "Harbor", price: 5300, bedrooms: 4, bathrooms: 3, area: 2500, image: "/api/placeholder/300/200" },
    { id: 22, title: "Luxury Farmhouse", location: "Countryside", price: 4500, bedrooms: 4, bathrooms: 3, area: 2600, image: "/api/placeholder/300/200" },
    { id: 23, title: "Skyline View Penthouse", location: "Downtown", price: 8800, bedrooms: 5, bathrooms: 4, area: 3400, image: "/api/placeholder/300/200" },
    { id: 24, title: "Zen Garden Villa", location: "Suburbs", price: 3700, bedrooms: 3, bathrooms: 2, area: 2000, image: "/api/placeholder/300/200" },
    { id: 25, title: "Secluded Nature Villa", location: "Wilderness", price: 4700, bedrooms: 4, bathrooms: 3, area: 2300, image: "/api/placeholder/300/200" },
    { id: 26, title: "Mediterranean Retreat", location: "Coastal", price: 6100, bedrooms: 4, bathrooms: 3, area: 2900, image: "/api/placeholder/300/200" },
    { id: 27, title: "Private Island Villa", location: "Island", price: 15000, bedrooms: 7, bathrooms: 6, area: 5000, image: "/api/placeholder/300/200" },
    { id: 28, title: "Cabin in the Woods", location: "Forest", price: 3200, bedrooms: 2, bathrooms: 1, area: 1500, image: "/api/placeholder/300/200" }
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
