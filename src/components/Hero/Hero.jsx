import React, { useMemo, useCallback } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

const Hero = () => {
  // Memoize the hero image source to prevent unnecessary re-renders
  const heroImageSrc = useMemo(() => getImageUrl("hero/heroImage.png"), []);

  // Memoize contact information
  const contactInfo = useMemo(
    () => ({
      email: "as.9784845590@gmail.com",
      subject: "Portfolio Inquiry",
      body: "Hi Ankit, I'd like to discuss potential opportunities with you.",
    }),
    []
  );

  // Optimize email link generation
  const emailLink = useMemo(() => {
    const params = new URLSearchParams({
      subject: contactInfo.subject,
      body: contactInfo.body,
    });
    return `mailto:${contactInfo.email}?${params.toString()}`;
  }, [contactInfo]);

  // Handle contact button click with analytics tracking
  const handleContactClick = useCallback(() => {
    // Add analytics tracking here if needed
    console.log("Contact button clicked");
  }, []);

  // Handle image load error
  const handleImageError = useCallback((event) => {
    console.error("Hero image failed to load");
    event.target.style.display = "none";
  }, []);

  return (
    <section className={styles.container} aria-labelledby="hero-title">
      <div className={styles.content}>
        <h1 id="hero-title" className={styles.title}>
          Hi, I'm <span className={styles.highlight}>Ankit Soni</span>
        </h1>
        <p className={styles.description}>
          Frontend Developer with <strong>3+ years</strong> of experience
          specializing in building scalable web and mobile applications using{" "}
          <span className={styles.techHighlight}>React</span>,{" "}
          <span className={styles.techHighlight}>React Native</span>, and{" "}
          <span className={styles.techHighlight}>JavaScript</span>. Proven
          expertise in real-time data systems, multilingual applications, and
          performance optimizations. Adept at writing clean, maintainable code
          using design patterns, OOPs, and Agile methodologies. Strong
          foundation in DSA, and C++. Seeking to contribute technical excellence
          and product thinking in a fast-paced engineering team.
        </p>
        <div className={styles.ctaContainer}>
          <a
            href={emailLink}
            className={styles.contactBtn}
            onClick={handleContactClick}
            aria-label="Send email to Ankit Soni"
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
