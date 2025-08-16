import React, { useEffect, useRef } from "react";
import styles from "./ProjectModal.module.css";
import { getImageUrl } from "../../utils";

export const ProjectModal = ({ project, onClose }) => {
  const modalRef = useRef(null);
  const { 
    title, 
    imageSrc, 
    description, 
    skills, 
    demo, 
    source,
    playstorelink,
    appstorelink
  } = project;

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  // Handle click outside modal
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleLinkClick = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal} ref={modalRef}>
        <button className={styles.closeButton} onClick={onClose} aria-label="Close modal">
          <span className={styles.closeIcon}>×</span>
        </button>
        
        <div className={styles.modalContent}>
          <div className={styles.modalHeader}>
            <div className={styles.projectImage}>
              <img
                src={getImageUrl(imageSrc)}
                alt={`${title} project screenshot`}
                className={styles.image}
                loading="lazy"
              />
            </div>
            <div className={styles.projectInfo}>
              <h2 className={styles.projectTitle}>{title}</h2>
              <div className={styles.projectLinks}>
                {demo && (
                  <button 
                    className={`${styles.modalLinkButton} ${styles.demoLink}`}
                    onClick={() => handleLinkClick(demo)}
                  >
                    <span className={styles.linkIcon}>🌐</span>
                    View Demo
                  </button>
                )}
                
                {source && (
                  <button 
                    className={`${styles.modalLinkButton} ${styles.sourceLink}`}
                    onClick={() => handleLinkClick(source)}
                  >
                    <span className={styles.linkIcon}>📁</span>
                    Source Code
                  </button>
                )}

                {playstorelink && (
                  <button 
                    className={`${styles.modalLinkButton} ${styles.playstoreLink}`}
                    onClick={() => handleLinkClick(playstorelink)}
                  >
                    <img
                      src={getImageUrl("projects/playstore.png")}
                      alt="Google Play Store"
                      className={styles.storeIcon}
                      width="20"
                      height="20"
                    />
                    Play Store
                  </button>
                )}

                {appstorelink && (
                  <button 
                    className={`${styles.modalLinkButton} ${styles.appstoreLink}`}
                    onClick={() => handleLinkClick(appstorelink)}
                  >
                    <img
                      src={getImageUrl("projects/appstore.png")}
                      alt="Apple App Store"
                      className={styles.storeIcon}
                      width="20"
                      height="20"
                    />
                    App Store
                  </button>
                )}
              </div>
              <div className={styles.skillsContainer}>
                <div className={styles.skillsGrid}>
                  {skills.map((skill, id) => (
                    <span key={`skill-${id}`} className={styles.skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className={styles.modalBody}>
            <div className={styles.descriptionSection}>
              <h3 className={styles.sectionTitle}>Project Description</h3>
              <div className={styles.descriptionList}>
                {description.map((desc, index) => (
                  <p key={`desc-${index}`} className={styles.description}>
                    {desc}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
