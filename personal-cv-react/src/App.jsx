import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode(prev => !prev);
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React"
  ];
  const education = [
    {
      level: "Elementary",
      school: "PHINMA-COC - CDO Campus",
      year: "2018"
    },
    {
      level: "Junior High School",
      school: "PHINMA-COC - CDO Campus",
      year: "2022"
    },
    {
      level: "Senior High School",
      school: "PHINMA-COC - CDO Campus",
      year: "2024"
    },
    {
      level: "College",
      school: "USTP – CDO Campus",
      year: "2028"
    },

  ];

  return (
    <body className={darkMode ? "dark-mode" : ""}>
      <button onClick={toggleDarkMode}>
        {darkMode ? "Toggle Light Mode" : "Toggle Dark Mode"}
      </button>
      <Header />
      <About />
      <Skills skills={skills} />
      <Education education = {education} />
      <Contact />
    </body>
  );
}

export default App;
