import React, { useState, useCallback, useMemo } from "react";
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

// Custom hook for accordion functionality
const useAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = useCallback((index) => {
    setOpenIndex(prevIndex => prevIndex === index ? null : index);
  }, []);

  return { openIndex, toggleAccordion };
};

// Memoized SkillItem component for performance
const SkillItem = React.memo(({ skill }) => (
  <div className={styles.skill}>
    <div className={styles.skillImageContainer}>
      <img 
        src={getImageUrl(skill.imageSrc)} 
        alt={skill.title} 
        loading="lazy"
        width="75"
        height="75"
      />
    </div>
    <p>{skill.title}</p>
  </div>
));

SkillItem.displayName = 'SkillItem';

// Memoized HistoryItem component for better performance
const HistoryItem = React.memo(({ historyItem, index, isOpen, onToggle }) => {
  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onToggle(index);
    }
  }, [index, onToggle]);

  const handleClick = useCallback(() => {
    onToggle(index);
  }, [index, onToggle]);

  return (
    <div className={styles.accordionItem}>
      <div
        className={styles.accordionHeader}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
        role="button"
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${index}`}
        data-is-open={isOpen}
      >
        <div className={styles.historyImageContainer}>
          <img
            src={getImageUrl(historyItem.imageSrc)}
            alt={`${historyItem.organisation} Logo`}
            loading="lazy"
            width="75"
            height="75"
          />
        </div>
        <div className={styles.historyItemDetails}>
          <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
          <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
        </div>
        <div className={styles.accordionIcon}>
          <span className={isOpen ? styles.iconOpen : styles.iconClosed}>
            {isOpen ? '−' : '+'}
          </span>
        </div>
      </div>
      <div 
        id={`accordion-content-${index}`}
        className={`${styles.accordionContent} ${isOpen ? styles.open : ''}`}
        aria-hidden={!isOpen}
      >
        <ul>
          {historyItem.experiences.map((experience, expId) => (
            <li key={`${index}-${expId}`}>{experience}</li>
          ))}
        </ul>
      </div>
    </div>
  );
});

HistoryItem.displayName = 'HistoryItem';

const Experience = () => {
  const { openIndex, toggleAccordion } = useAccordion();

  // Memoize the skills and history data to prevent unnecessary re-renders
  const memoizedSkills = useMemo(() => skills, []);
  const memoizedHistory = useMemo(() => history, []);

  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        {/* Skills Section */}
        <div className={styles.skills}>
          {memoizedSkills.map((skill, id) => (
            <SkillItem key={`skill-${id}-${skill.title}`} skill={skill} />
          ))}
        </div>

        {/* History/Accordion Section */}
        <div className={styles.history}>
          {memoizedHistory.map((historyItem, index) => (
            <HistoryItem
              key={`history-${index}-${historyItem.organisation}`}
              historyItem={historyItem}
              index={index}
              isOpen={openIndex === index}
              onToggle={toggleAccordion}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default React.memo(Experience);
