import React, { useState } from 'react';
import '../css/Plots.css';

function Plots() {
  const [plots, setPlots] = useState([
    { id: 1, title: "Riverside Residential Plot", location: "Riverbank", price: 5000, area: 10000, frontage: 100, depth: 100, image: "/api/placeholder/300/200" },
    { id: 2, title: "Urban Development Plot", location: "City Outskirts", price: 4000, area: 8000, frontage: 80, depth: 100, image: "/api/placeholder/300/200" },
    { id: 3, title: "Agricultural Land", location: "Countryside", price: 3500, area: 20000, frontage: 200, depth: 100, image: "/api/placeholder/300/200" },
    { id: 4, title: "Hillside Terrain", location: "Mountain Region", price: 6000, area: 15000, frontage: 150, depth: 100, image: "/api/placeholder/300/200" },
    { id: 5, title: "Lakeside Residential Plot", location: "Lakeside", price: 7000, area: 12000, frontage: 120, depth: 100, image: "/api/placeholder/300/200" },
    { id: 6, title: "Desert Retreat Land", location: "Desert", price: 3000, area: 18000, frontage: 180, depth: 100, image: "/api/placeholder/300/200" },
    { id: 7, title: "Suburban Expansion Plot", location: "Suburbs", price: 4500, area: 9000, frontage: 90, depth: 100, image: "/api/placeholder/300/200" },
    { id: 8, title: "Coastal View Plot", location: "Seaside", price: 6500, area: 14000, frontage: 140, depth: 100, image: "/api/placeholder/300/200" },
    { id: 9, title: "Downtown Commercial Plot", location: "City Center", price: 8000, area: 7000, frontage: 70, depth: 100, image: "/api/placeholder/300/200" },
    { id: 10, title: "Hilly Estate Plot", location: "Foothills", price: 5500, area: 13000, frontage: 130, depth: 100, image: "/api/placeholder/300/200" },
    { id: 11, title: "Tropical Paradise Plot", location: "Island", price: 9000, area: 16000, frontage: 160, depth: 100, image: "/api/placeholder/300/200" },
    { id: 12, title: "Green Valley Farmland", location: "Countryside", price: 3800, area: 25000, frontage: 250, depth: 100, image: "/api/placeholder/300/200" },
    { id: 13, title: "Private Mountain Lot", location: "Highlands", price: 7000, area: 15000, frontage: 150, depth: 100, image: "/api/placeholder/300/200" },
    { id: 14, title: "Harborfront Investment Plot", location: "Harbor", price: 6200, area: 12000, frontage: 120, depth: 100, image: "/api/placeholder/300/200" },
    { id: 15, title: "Luxury Suburban Plot", location: "Elite Suburbs", price: 7500, area: 11000, frontage: 110, depth: 100, image: "/api/placeholder/300/200" },
    { id: 16, title: "Industrial Land", location: "Warehouse District", price: 5000, area: 30000, frontage: 300, depth: 100, image: "/api/placeholder/300/200" },
    { id: 17, title: "Hilltop Scenic Plot", location: "Highlands", price: 6800, area: 14000, frontage: 140, depth: 100, image: "/api/placeholder/300/200" },
    { id: 18, title: "Sunny Beachfront Lot", location: "Coastline", price: 7200, area: 13000, frontage: 130, depth: 100, image: "/api/placeholder/300/200" },
    { id: 19, title: "Dense Forest Land", location: "Woodlands", price: 4000, area: 22000, frontage: 220, depth: 100, image: "/api/placeholder/300/200" },
    { id: 20, title: "Golf Course Estate", location: "Luxury Golf Estate", price: 5800, area: 10000, frontage: 100, depth: 100, image: "/api/placeholder/300/200" },
    { id: 21, title: "Harborfront Commercial Plot", location: "Marina Bay", price: 5300, area: 11000, frontage: 110, depth: 100, image: "/api/placeholder/300/200" },
    { id: 22, title: "Rolling Hills Farm", location: "Hill Country", price: 4500, area: 27000, frontage: 270, depth: 100, image: "/api/placeholder/300/200" },
    { id: 23, title: "Downtown Investment Plot", location: "City Center", price: 8800, area: 7500, frontage: 75, depth: 100, image: "/api/placeholder/300/200" },
    { id: 24, title: "Scenic Countryside Plot", location: "Rural Valley", price: 3700, area: 20000, frontage: 200, depth: 100, image: "/api/placeholder/300/200" },
    { id: 25, title: "Nature Reserve Plot", location: "Wilderness", price: 4700, area: 21000, frontage: 210, depth: 100, image: "/api/placeholder/300/200" },
    { id: 26, title: "Mediterranean Coastal Plot", location: "Seaside Cliffs", price: 6100, area: 12000, frontage: 120, depth: 100, image: "/api/placeholder/300/200" },
    { id: 27, title: "Secluded Private Island", location: "Remote Island", price: 15000, area: 50000, frontage: 500, depth: 100, image: "/api/placeholder/300/200" },
    { id: 28, title: "Forest Retreat Plot", location: "Deep Woods", price: 3200, area: 17000, frontage: 170, depth: 100, image: "/api/placeholder/300/200" }
  ]);


  const [locationFilter, setLocationFilter] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');

  const locations = ['Riverbank', 'City Outskirts', 'Countryside', 'Mountain Region'];

  const filteredPlots = plots.filter(plot => {
    if (locationFilter && plot.location !== locationFilter) return false;
    if (minPrice && plot.price < parseInt(minPrice)) return false;
    if (maxPrice && plot.price > parseInt(maxPrice)) return false;
    return true;
  });

  return (
    <div className="plots-container">
      <div className="plots-header">
        <h1>Find Your Perfect Plot</h1>
        <p>Explore our collection of prime land locations</p>
      </div>
      
      <div className="filter-container">
        <div className="filter-bar">
          <div className="filter-group">
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
          
          <div className="filter-group">
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
          
          <button 
            className="clear-filters" 
            onClick={() => {
              setLocationFilter('');
              setMinPrice('');
              setMaxPrice('');
            }}
          >
            Clear Filters
          </button>
        </div>
      </div>
      
      <div className="results-overview">
        <p>Showing {filteredPlots.length} plots</p>
      </div>
      
      <div className="plots-grid">
        {filteredPlots.map(plot => (
          <div key={plot.id} className="plot-card">
            <div className="plot-image">
              <img src={plot.image} alt={plot.title} />
              <div className="price-tag">${plot.price}</div>
            </div>
            <div className="plot-info">
              <h3>{plot.title}</h3>
              <p className="location"><i className="location-icon">📍</i> {plot.location}</p>
              <div className="plot-details">
                <span><i className="area-icon">📏</i> {plot.area} sq ft</span>
                <span><i className="frontage-icon">↔️</i> {plot.frontage} ft Frontage</span>
                <span><i className="depth-icon">↕️</i> {plot.depth} ft Depth</span>
              </div>
              <button className="explore-button">Explore Plot</button>
            </div>
          </div>
        ))}
      </div>
      
      {filteredPlots.length === 0 && (
        <div className="no-results">
          <h3>No plots match your search criteria</h3>
          <p>Try adjusting your filters to see more options</p>
        </div>
      )}
    </div>
  );
}

export default Plots;