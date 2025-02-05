import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import './App.css';
import Apropos from './Apropos';
import Projects from './Projects';
import Contact from './Contact';
import "boxicons/css/boxicons.min.css";
import PageIntro from './PageIntro';
import gsap from 'gsap';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <Router>
      <MainContent darkMode={darkMode} toggleDarkMode={() => setDarkMode(!darkMode)} />
    </Router>
  );
}

function MainContent({ darkMode, toggleDarkMode }) {
  const location = useLocation(); 
  const pageInfo = {
    "/about": { title: "À propos de moi", description: "Découvrez mon parcours, mes compétences et mon expérience." },
    "/projects": { title: "Mes Projets", description: "Voici quelques-uns des projets sur lesquels j'ai travaillé." },
    "/contact": { title: "Contactez-moi", description: "N'hésitez pas à me contacter pour toute collaboration ou question." },
  };

  useEffect(() => {
    
    gsap.from(".header-nav", { opacity: 0, y: -50, duration: 1 });

    gsap.from(".nav-link", {
      opacity: 0,
      x: -50,
      stagger: 0.2,
      duration: 1,
    });

    gsap.from(".project-card", { opacity: 0, y: 100, stagger: 0.3, duration: 1 });
  }, [location.pathname]); 

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <header className="bg-blue-600 dark:bg-gray-800 text-white p-4 flex justify-between header-nav">
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/" className="hover:underline nav-link">Home</Link></li>
            <li><Link to="/about" className="hover:underline nav-link">À propos</Link></li>
            <li><Link to="/projects" className="hover:underline nav-link">Projets</Link></li>
            <li><Link to="/contact" className="hover:underline nav-link">Contact</Link></li>
          </ul>
        </nav>
        <button 
          onClick={toggleDarkMode} 
          className="ml-4 px-3 py-2 bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white rounded-md"
        >
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <main className="p-6">
        {location.pathname !== "/" && pageInfo[location.pathname] && (
          <PageIntro title={pageInfo[location.pathname].title} description={pageInfo[location.pathname].description} />
        )}

        <Routes>
          <Route path="/" element={<div>Home Page</div>} />
          <Route path="/about" element={<Apropos />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
