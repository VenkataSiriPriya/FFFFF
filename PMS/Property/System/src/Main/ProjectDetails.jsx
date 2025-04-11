import React from 'react';
import ProjectHighlights from '../Main/ProjectHighlights';
import ContactForm from '../Main/ContactForm';

function ProjectDetails() {
  return (
    <div className="project-details">
      <h1>Project Name</h1>
      <ProjectHighlights />
      <ContactForm />
    </div>
  );
}

export default ProjectDetails;