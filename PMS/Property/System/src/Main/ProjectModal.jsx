import React from "react";
import "../css/ProjectModal.css";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>X</button>

        <h2>{project.name}</h2>
        <p>{project.location}</p>
        <p>{project.description}</p>

        <div className="modal-images">
          {project.images.map((img, index) => (
            <img key={index} src={img} alt="Project" />
          ))}
        </div>

        <div className="contact-section">
          <h3>Contact Person</h3>
          <p>Name: {project.contact.name}</p>
          <p>Phone: {project.contact.phone}</p>
          <p>Email: {project.contact.email}</p>
          <button className="contact-btn">Contact Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
