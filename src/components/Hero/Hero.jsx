import React, { useMemo, useCallback } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  // Memoize the hero image source to prevent unnecessary re-renders
  const heroImageSrc = useMemo(() => getImageUrl("hero/heroImage.png"), []);

  // Handle contact button click with smooth scroll to contact section
  const handleContactClick = useCallback((e) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, []);

  // Handle image load error
  const handleImageError = useCallback((event) => {
    event.target.style.display = "none";
  }, []);

  return (
    <section className={styles.container} aria-labelledby="hero-title">
      <div className={styles.content}>
        <h1 id="hero-title" className={styles.title}>
          Hi, I'm <span className={styles.highlight}>Ankit Soni</span>
        </h1>
        <p className={styles.description}>
          Frontend Developer with <strong>3+ years</strong> of experience in
          designing and delivering high-performance{" "}
          <span className={styles.techHighlight}>web</span> and{" "}
          <span className={styles.techHighlight}>mobile applications</span>{" "}
          using <span className={styles.techHighlight}>React.js</span>,{" "}
          <span className={styles.techHighlight}>React Native</span>,{" "}
          <span className={styles.techHighlight}>JavaScript</span>, and{" "}
          <span className={styles.techHighlight}>TypeScript</span>. Skilled in
          building{" "}
          <strong>scalable, maintainable, and accessible UI solutions</strong>{" "}
          across diverse domains including real estate, healthcare, and edtech.
          Proven expertise in{" "}
          <span className={styles.techHighlight}>Redux</span>,{" "}
          <span className={styles.techHighlight}>Context API</span>,{" "}
          <span className={styles.techHighlight}>performance optimization</span>
          , and <span className={styles.techHighlight}>responsive design</span>.
          Strong grasp of DSA and OOP, with hands-on experience in{" "}
          <strong>Agile</strong> environments. Adept at collaborating with
          cross-functional teams to deliver{" "}
          <strong>business-driven solutions</strong> for product-based and
          consultancy-driven requirements.
        </p>

        <div className={styles.ctaContainer}>
          <a
            href="#contact"
            className={styles.contactBtn}
            onClick={handleContactClick}
            aria-label="Navigate to contact section"
          >
            <span className={styles.btnText}>Contact Me</span>
            <span className={styles.btnIcon}>→</span>
          </a>
          <a
            href="#projects"
            className={styles.secondaryBtn}
            aria-label="View my projects"
          >
            View Projects
          </a>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <img
            src={heroImageSrc}
            alt="Ankit Soni - Frontend Developer"
            className={styles.heroImg}
            onError={handleImageError}
            loading="eager"
            decoding="async"
          />
        </div>
        <div className={styles.imageGlow} />
        <div className={styles.particle1} />
        <div className={styles.particle2} />
        <div className={styles.particle3} />
      </div>

      <div className={styles.topBlur} aria-hidden="true" />
      <div className={styles.bottomBlur} aria-hidden="true" />
    </section>
  );
};

export default React.memo(Hero);
