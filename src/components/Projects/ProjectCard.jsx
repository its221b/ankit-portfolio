import React, { useCallback, useMemo } from "react";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = React.memo(({ project }) => {
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

  // Memoize skills to prevent unnecessary re-renders
  const memoizedSkills = useMemo(() => skills, [skills]);

  // Memoize description to prevent unnecessary re-renders
  const memoizedDescription = useMemo(() => description, [description]);

  // Handle link clicks with analytics tracking
  const handleLinkClick = useCallback((linkType, url) => {
    // You can add analytics tracking here
    console.log(`${linkType} clicked for ${title}`);
    window.open(url, '_blank', 'noopener,noreferrer');
  }, [title]);

  return (
    <div className={styles.container}>
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
          </div>
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        
        <div className={styles.descriptionContainer}>
          {memoizedDescription.map((desc, index) => (
            <p key={`desc-${index}`} className={styles.description}>
              {desc}
            </p>
          ))}
        </div>

        <div className={styles.skillsContainer}>
          <h4 className={styles.skillsTitle}>Technologies Used:</h4>
          <ul className={styles.skills}>
            {memoizedSkills.map((skill, id) => (
              <li key={`skill-${id}`} className={styles.skill}>
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.links}>
          {demo && (
            <button 
              className={`${styles.linkButton} ${styles.demoLink}`}
              onClick={() => handleLinkClick('demo', demo)}
              aria-label={`View ${title} demo`}
              title="View Demo"
            >
              <span className={styles.linkIcon}>🌐</span>
            </button>
          )}
          
          {source && (
            <button 
              className={`${styles.linkButton} ${styles.sourceLink}`}
              onClick={() => handleLinkClick('source', source)}
              aria-label={`View ${title} source code`}
              title="View Source Code"
            >
              <span className={styles.linkIcon}>📁</span>
            </button>
          )}

          {playstorelink && (
            <button 
              className={`${styles.linkButton} ${styles.playstoreLink}`}
              onClick={() => handleLinkClick('playstore', playstorelink)}
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
              onClick={() => handleLinkClick('appstore', appstorelink)}
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
  );
});

ProjectCard.displayName = 'ProjectCard';