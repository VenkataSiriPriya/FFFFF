import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  { id: 1, title: 'Luxury Villas', description: 'High-end villas.', image: '/api/placeholder/400/250' },
  { id: 2, title: 'Modern Apartments', description: 'Stylish apartments.', image: '/api/placeholder/400/250' },
  { id: 3, title: 'Luxury Villas', description: 'High-end villas.', image: '/api/placeholder/400/250' },
  { id: 4, title: 'Commercial Spaces', description: 'Offices & Shops.', image: '/api/placeholder/400/250' },
  { id: 5, title: 'Luxury Villas', description: 'High-end villas.', image: '/api/placeholder/400/250' },
  { id: 6, title: 'Modern Apartments', description: 'Stylish apartments.', image: '/api/placeholder/400/250' },
  { id: 7, title: 'Commercial Spaces', description: 'Offices & Shops.', image: '/api/placeholder/400/250' },
  { id: 8, title: 'Luxury Villas', description: 'High-end villas.', image: '/api/placeholder/400/250' },
  { id: 9, title: 'Modern Apartments', description: 'Stylish apartments.', image: '/api/placeholder/400/250' },
  { id: 10, title: 'Commercial Spaces', description: 'Offices & Shops.', image: '/api/placeholder/400/250' },
  { id: 11, title: 'Luxury Villas', description: 'High-end villas.', image: '/api/placeholder/400/250' },
  { id: 12, title: 'Modern Apartments', description: 'Stylish apartments.', image: '/api/placeholder/400/250' },
  { id: 13, title: 'Commercial Spaces', description: 'Offices & Shops.', image: '/api/placeholder/400/250' },
  { id: 14, title: 'Modern Apartments', description: 'Stylish apartments.', image: '/api/placeholder/400/250' },
  { id: 15, title: 'Commercial Spaces', description: 'Offices & Shops.', image: '/api/placeholder/400/250' },
];

function ProjectList() {
  return (
    <div className="project-list">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;