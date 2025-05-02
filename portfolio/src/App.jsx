import React from 'react';
import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Skills from './components/Skills/Skills';
import Contact from './components/Contact/Contact';
import ResumeDownload from './components/ResumeDownload/ResumeDownload';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
      <ThemeProvider>
        <Header />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Experience />
        
          <Contact />
          <ResumeDownload />
        </main>
        <Footer />
      </ThemeProvider>
    </BrowserRouter>
    </>
  )
}

export default App
