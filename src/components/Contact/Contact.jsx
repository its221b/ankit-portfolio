import React, { memo, useState } from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

// Contact data for better maintainability
const contactLinks = [
  {
    id: "email",
    icon: "contact/emailIcon.png",
    alt: "Email icon",
    href: "mailto:as.9784845590@gmail.com",
    text: "as.9784845590@gmail.com",
    label: "Send email to as.9784845590@gmail.com"
  },
  {
    id: "linkedin",
    icon: "contact/linkedinIcon.png",
    alt: "LinkedIn icon",
    href: "https://www.linkedin.com/in/ankit-soni-5408a3187/",
    text: "linkedin.com/ankit-soni",
    label: "Visit LinkedIn profile"
  },
  {
    id: "github",
    icon: "contact/githubIcon.png",
    alt: "Github icon",
    href: "https://github.com/its221b",
    text: "github.com/its221b",
    label: "Visit GitHub profile"
  }
];

// Memoized contact link component for better performance
const ContactLink = memo(({ link, onHover, isHovered }) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <li className={`${styles.link} ${isHovered ? styles.linkHovered : ''}`}>
      <div className={styles.iconContainer}>
        <img
          src={getImageUrl(link.icon)}
          alt={link.alt}
          className={`${styles.icon} ${imageLoaded ? styles.iconLoaded : ''}`}
          onLoad={() => setImageLoaded(true)}
          loading="lazy"
        />
        {!imageLoaded && <div className={styles.iconSkeleton} />}
      </div>
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={link.label}
        className={styles.contactLink}
        onMouseEnter={() => onHover(link.id)}
        onMouseLeave={() => onHover(null)}
      >
        {link.text}
      </a>
    </li>
  );
});

ContactLink.displayName = 'ContactLink';

export const Contact = memo(() => {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <section id="contact" className={styles.container} aria-labelledby="contact-heading">
      <div className={styles.content}>
        <div className={styles.textSection}>
          <h2 id="contact-heading" className={styles.heading}>
            Let's Connect
          </h2>
          <p className={styles.subtitle}>
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
          </p>
          <div className={styles.cta}>
            <p className={styles.ctaText}>
              Feel free to reach out!
            </p>
          </div>
        </div>
        
        <nav className={styles.contactNav} aria-label="Contact links">
          <ul className={styles.links}>
            {contactLinks.map((link) => (
              <ContactLink
                key={link.id}
                link={link}
                onHover={setHoveredLink}
                isHovered={hoveredLink === link.id}
              />
            ))}
          </ul>
        </nav>
      </div>
      
      <div className={styles.footer}>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} Ankit Soni. All rights reserved.
        </p>
      </div>
    </section>
  );
});

Contact.displayName = 'Contact';