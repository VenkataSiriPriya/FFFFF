import React from "react";
import { Link } from "react-router-dom";
import "../css/ProjectNavbar.css";

const ProjectNavbar = () => {
  return (
    <nav className="project-navbar">
      <div className="logo">Property Management</div>
      <ul className="project-nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default ProjectNavbar;
