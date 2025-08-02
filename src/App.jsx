import styles from "./App.module.css";
import Education from "./components/Education/Education";
import Hero from "./components/Hero/Hero";
import NavBar from "./components/Navbar/NavBar";

const App = () => {
  return (
    <div className={styles.App}>
      <NavBar />
      <Hero />
      <Education />
    </div>
  );
};

export default App;
