import React, { useMemo } from "react";

import styles from "./Projects.module.css";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  // Memoize projects data to prevent unnecessary re-renders
  const memoizedProjects = useMemo(() => projects, []);

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.sectionTitle}>
        <span className={styles.titleIcon}>🚀</span>
        Projects
      </h2>
      <div className={styles.projects}>
        {memoizedProjects.map((project, id) => (
          <ProjectCard 
            key={`project-${id}-${project.title}`} 
            project={project} 
          />
        ))}
      </div>
    </section>
  );
};