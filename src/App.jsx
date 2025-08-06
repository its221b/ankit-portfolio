import styles from "./App.module.css";
import Education from "./components/Education/Education";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/NavBar";
import Experience from "./components/Experience/Experience"
import { Projects } from "./components/Projects/Projects";

const App = () => {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
};

export default App;
