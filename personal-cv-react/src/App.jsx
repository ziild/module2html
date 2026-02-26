import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
  
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
      </button>

      {/* Main sections */}
      <Header />
      <About />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;