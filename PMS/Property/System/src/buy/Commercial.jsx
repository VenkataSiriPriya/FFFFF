import React, { useState } from 'react';


function Commercial() {
  const [properties, setProperties] = useState([
    { id: 1, title: "Downtown Office Space", location: "Downtown", price: 5000, area: 3000, image: "/api/placeholder/300/200" },
    { id: 2, title: "Retail Storefront", location: "Shopping District", price: 7000, area: 2500, image: "/api/placeholder/300/200" },
    { id: 3, title: "Warehouse Facility", location: "Industrial Zone", price: 6000, area: 10000, image: "/api/placeholder/300/200" },
    { id: 4, title: "Business Park Unit", location: "Tech Park", price: 8000, area: 5000, image: "/api/placeholder/300/200" },
  ]);

  const [locationFilter, setLocationFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const locations = ['Downtown', 'Shopping District', 'Industrial Zone', 'Tech Park'];

  const filteredProperties = properties.filter(property => {
    if (locationFilter && property.location !== locationFilter) return false;
    if (minPrice && property.price < parseInt(minPrice)) return false;
    if (maxPrice && property.price > parseInt(maxPrice)) return false;
    return true;
  });

  return (
    <div className="commercial-container flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="commercial-header">
          <h1>Find Your Ideal Commercial Space</h1>
          <p>Explore premium commercial properties for your business</p>
        </div>
        
        <div className="f1-section">
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
              <label>Price Range</label>
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
            
            <button className="r1-filters" onClick={() => {
              setLocationFilter('');
              setMinPrice('');
              setMaxPrice('');
            }}>
              Reset Filters
            </button>
          </div>
        </div>
        
        <div className="r2-section">
          <p>Showing {filteredProperties.length} properties</p>
        </div>
        
        <div className="commercial-grid">
          {filteredProperties.map(property => (
            <div key={property.id} className="property-card">
              <div className="property-image">
                <img src={property.image} alt={property.title} />
                <div className="price-tag">${property.price}</div>
              </div>
              <div className="property-info">
                <h3>{property.title}</h3>
                <p className="location"><i className="location-icon">📍</i> {property.location}</p>
                <div className="property-details">
                  <span><i className="area-icon">📏</i> {property.area} sq ft</span>
                </div>
                <button className="Explore-button">Explore Property</button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProperties.length === 0 && (
          <div className="no-results">
            <h3>No properties match your search criteria</h3>
            <p>Try adjusting your filters to see more options</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Commercial;
