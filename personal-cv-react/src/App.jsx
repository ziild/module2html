import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import { useState } from "react";
  
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(prev => !prev);
  return (
    <body className={darkMode ? "dark-mode" : ""}>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
      </button>
      <Header />
      <About />
      <Skills />
      <Education />
      <Contact />
    </body>
  );
}

export default App;