import React, { useMemo, useState } from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";

export const Projects = () => {
  // Memoize projects data to prevent unnecessary re-renders
  const memoizedProjects = useMemo(() => projects, []);
  

  
  // State for modal
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.sectionTitle}>
        Projects
      </h2>
      <div className={styles.projectsContainer}>
        <div className={styles.projects}>
          {memoizedProjects.map((project, id) => (
            <ProjectCard 
              key={`project-${id}-${project.title}`} 
              project={project}
              onClick={() => handleProjectClick(project)}
            />
          ))}
        </div>
      </div>
      
      {isModalOpen && selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={handleCloseModal}
        />
      )}
    </section>
  );
};