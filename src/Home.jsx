import NavBar from './components/NavBar';
import PersonalInfo from './components/PersonalInfo';
import AboutMe from './components/AboutMe';
import { useState } from 'react';

export default function Home() {

  const [darkMode, setDarkMode] = useState(true)

  return (
    <div className={darkMode ? "dark" : ""}>
      <main className="bg-[#e6f1ff] dark:bg-[#0a192f] transition duration-700 min-h-screen">
        <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
        <PersonalInfo />
        <AboutMe />
      </main>
    </div>
  )
}
