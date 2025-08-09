import React, { useState, useCallback, useMemo } from "react";
import styles from "./NavBar.module.css";
import { getImageUrl } from "../../utils";

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Memoize navigation items to prevent unnecessary re-renders
  const navigationItems = useMemo(() => [
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ], []);

  // Memoize menu button image source
  const menuButtonSrc = useMemo(() => 
    isMenuOpen 
      ? getImageUrl("nav/closeIcon.png")
      : getImageUrl("nav/menuIcon.png"),
    [isMenuOpen]
  );

  // Optimize event handlers with useCallback
  const handleMenuToggle = useCallback(() => {
    setIsMenuOpen(prev => !prev);
  }, []);

  const handleMenuClose = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const handleKeyDown = useCallback((event) => {
    if (event.key === "Escape") {
      setIsMenuOpen(false);
    }
  }, []);

  // Add keyboard event listener for escape key
  React.useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscapeKey);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <nav className={styles.navbar} role="navigation" aria-label="Main navigation">
      <a className={styles.title} href="/" aria-label="Portfolio home">
        My Portfolio
      </a>
      
      <div className={styles.menu}>
        <button
          className={styles.menuBtn}
          onClick={handleMenuToggle}
          onKeyDown={handleKeyDown}
          aria-expanded={isMenuOpen}
          aria-controls="navigation-menu"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          type="button"
        >
          <img
            src={menuButtonSrc}
            alt=""
            aria-hidden="true"
          />
        </button>
        
        <ul
          id="navigation-menu"
          className={`${styles.menuItems} ${isMenuOpen ? styles.menuOpen : ""}`}
          role="menu"
          aria-hidden={!isMenuOpen}
        >
          {navigationItems.map((item) => (
            <li key={item.href} role="none">
              <a
                href={item.href}
                onClick={handleMenuClose}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleMenuClose();
                  }
                }}
                role="menuitem"
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default React.memo(NavBar);
