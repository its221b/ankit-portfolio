import React from "react";
import styles from "./App.module.css";
import Education from "./components/Education/Education";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/NavBar";
import Experience from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import ErrorBoundary from "./components/ErrorBoundary";

const App = () => {
  return (
    <ErrorBoundary>
      <div className={styles.App}>
        <NavBar />
        <Hero />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </ErrorBoundary>
  );
};

export default React.memo(App);
