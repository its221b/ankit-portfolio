import React, { useCallback, useMemo, useRef, useEffect, useState } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = React.memo(({ project, onClick }) => {
  const { 
    title, 
    imageSrc, 
    skills, 
    demo, 
    source,
    playstorelink,
    appstorelink
  } = project;



  const cardRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Memoize skills to prevent unnecessary re-renders
  const memoizedSkills = useMemo(() => skills, [skills]);

  // Intersection Observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Handle card click
  const handleCardClick = useCallback(() => {
    if (onClick) {
      onClick();
    }
  }, [onClick]);

  // Handle mouse enter with 3D effect
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
  }, []);

  // Handle mouse leave
  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
  }, []);

  return (
    <div 
      className={`${styles.container} ${isVisible ? styles.visible : ''} ${isHovered ? styles.hovered : ''}`}
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCardClick}
    >
      <div className={styles.cardContent}>
        <div className={styles.imageContainer}>
          <img
            src={getImageUrl(imageSrc)}
            alt={`${title} project screenshot`}
            className={styles.image}
            loading="lazy"
            width="345"
            height="200"
          />
          <div className={styles.imageOverlay}>
            <div className={styles.overlayContent}>
              <h3 className={styles.overlayTitle}>{title}</h3>
              <div className={styles.clickHint}>Click to view details</div>
            </div>
          </div>
        </div>
        
        <div className={styles.content}>
          <h3 className={styles.title}>{title}</h3>
          
          <div className={styles.descriptionContainer}>
            <p className={styles.description}>
              {project.info || 'No information available'}
            </p>
          </div>

          <div className={styles.skillsContainer}>
            <div className={styles.skills}>
              {memoizedSkills.slice(0, 3).map((skill, id) => (
                <span key={`skill-${id}`} className={styles.skill}>
                  {skill}
                </span>
              ))}
              {memoizedSkills.length > 3 && (
                <span className={styles.moreSkills}>+{memoizedSkills.length - 3} more</span>
              )}
            </div>
          </div>

          <div className={styles.links}>
            {demo && (
              <button 
                className={`${styles.linkButton} ${styles.demoLink}`}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(demo, '_blank', 'noopener,noreferrer');
                }}
                aria-label={`View ${title} demo`}
                title="View Demo"
              >
                <span className={styles.linkIcon}>🌐</span>
              </button>
            )}
            
            {source && (
              <button 
                className={`${styles.linkButton} ${styles.sourceLink}`}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(source, '_blank', 'noopener,noreferrer');
                }}
                aria-label={`View ${title} source code`}
                title="View Source Code"
              >
                <span className={styles.linkIcon}>📁</span>
              </button>
            )}

            {playstorelink && (
              <button 
                className={`${styles.linkButton} ${styles.playstoreLink}`}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(playstorelink, '_blank', 'noopener,noreferrer');
                }}
                aria-label={`Download ${title} from Play Store`}
                title="Download from Play Store"
              >
                <img
                  src={getImageUrl("projects/playstore.png")}
                  alt="Google Play Store"
                  className={styles.storeIcon}
                  loading="lazy"
                  width="24"
                  height="24"
                />
              </button>
            )}

            {appstorelink && (
              <button 
                className={`${styles.linkButton} ${styles.appstoreLink}`}
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(appstorelink, '_blank', 'noopener,noreferrer');
                }}
                aria-label={`Download ${title} from App Store`}
                title="Download from App Store"
              >
                <img
                  src={getImageUrl("projects/appstore.png")}
                  alt="Apple App Store"
                  className={styles.storeIcon}
                  loading="lazy"
                  width="24"
                  height="24"
                />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

ProjectCard.displayName = 'ProjectCard';