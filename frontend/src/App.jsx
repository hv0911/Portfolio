import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home.jsx"
import Header from "./components/Header.jsx"
import About from "./components/About/About.jsx"
import { useState, useEffect } from 'react'

function App() {

  const [fragment, setFragment] = useState(window.location.hash.slice(1));

  useEffect(() => {
    const handleHashChange = () => {
      const newFragment = window.location.hash.slice(1);
      setFragment(newFragment);

      // Check if the fragment is equal to "project"
      if (newFragment === 'projects') {
        // Get the DOM element of the project section (replace 'project-section' with the actual ID)
        const projectSection = document.getElementById('projects');

        // Scroll to the project section
        if (projectSection) {
          projectSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home fragement={fragment} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
