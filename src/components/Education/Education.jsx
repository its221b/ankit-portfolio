import React, { useMemo, useCallback } from 'react';
import { getImageUrl } from "../../utils";
import styles from "./Education.module.css";

const Education = () => {
  // Memoize the college logo source
  const collegeLogo = useMemo(() => "https://upload.wikimedia.org/wikipedia/en/3/36/VNIT_logo.jpeg", []);
  
  // Memoize the education image source
  const educationImage = useMemo(() => getImageUrl("education/education.png"), []);

  // Handle logo load error
  const handleLogoError = useCallback((event) => {
    console.error("College logo failed to load");
    event.target.style.display = "none";
  }, []);

  // Handle education image load error
  const handleEducationImageError = useCallback((event) => {
    console.error("Education image failed to load");
    event.target.style.display = "none";
  }, []);

  return (
    <section className={styles.container} id="education">
      <div className={styles.content}>
        <h2 className={styles.sectionTitle}>
          <span className={styles.titleIcon}>🎓</span>
          Education
        </h2>
        
        <div className={styles.educationCard}>
          {/* Education Image */}
          <div className={styles.imageContainer}>
            <img 
              src={educationImage} 
              alt="Education" 
              className={styles.educationImage}
              onError={handleEducationImageError}
              loading="lazy"
            />
          </div>

          {/* Education Details */}
          <div className={styles.detailsContainer}>
            <div className={styles.collegeInfo}>
              <div className={styles.logoContainer}>
                <img 
                  src={collegeLogo} 
                  alt="NIT Nagpur Logo" 
                  className={styles.collegeLogo}
                  onError={handleLogoError}
                  loading="lazy"
                />
                <div className={styles.logoGlow}></div>
              </div>
              
              <div className={styles.collegeDetails}>
                <h3 className={styles.collegeName}>
                  Visvesvaraya National Institute of Technology (NIT Nagpur)
                </h3>
                <div className={styles.degreeInfo}>
                  <span className={styles.degree}>Bachelor of Technology (B.Tech)</span>
                  <span className={styles.branch}>in Mining Engineering</span>
                </div>
                <div className={styles.metaInfo}>
                  <div className={styles.dateRange}>
                    <span className={styles.dateIcon}>📅</span>
                    <span>Jul 2017 – May 2021</span>
                  </div>
                  <div className={styles.cgpa}>
                    <span className={styles.cgpaIcon}>⭐</span>
                    <span>CGPA: <strong>7.98/10</strong></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Achievement Badges */}
            <div className={styles.achievements}>
              <div className={styles.achievementBadge}>
                <span className={styles.badgeIcon}>🏆</span>
                <span>First Class with Distinction</span>
              </div>
              <div className={styles.achievementBadge}>
                <span className={styles.badgeIcon}>📚</span>
                <span>Engineering Excellence</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className={styles.backgroundElements}>
        <div className={styles.floatingBook1}></div>
        <div className={styles.floatingBook2}></div>
        <div className={styles.floatingBook3}></div>
        <div className={styles.glowOrb1}></div>
        <div className={styles.glowOrb2}></div>
      </div>
    </section>
  );
};

export default React.memo(Education);
