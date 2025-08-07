import styles from "./App.module.css";
import Education from "./components/Education/Education";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/NavBar";
import Experience from "./components/Experience/Experience"
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";

const App = () => {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
};

export default App;
