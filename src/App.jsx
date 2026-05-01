import Home from "./routes/Home"
import About from "./routes/About"
import Services from "./routes/Services"
import Contact from "./routes/Contact"
import NavBar from "./components/NavBar"
import { Routes, Route } from "react-router-dom"
import React, { useEffect, useState } from "react"
import ThemeProvider from "./providers/ThemeProviders"
import Footer from "./components/Footer"

function App() { 
    // Initial state: check localStorage,then system, then default to light
    const [themeMode, setThemeMode] = useState(() => {
      const savedTheme = localStorage.getItem('themeMode');
      if (savedTheme) return savedTheme;

      // Follow system default if no manual choice exists
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    // Function to toggle between light and dark themes
    const lightTheme = () => {
      if (!document.startViewTransition) return setThemeMode('light');
      document.startViewTransition(() => setThemeMode('light'));
    };
    const darkTheme = () => {
      if (!document.startViewTransition) return setThemeMode('dark');
      document.startViewTransition(() => setThemeMode('dark'));
    };

      // Effect to apply the theme class to the root element
      useEffect(() => {
        const root = window.document.documentElement; // Get the root element (html)

        // Save preference to local storage for next reload
        localStorage.setItem('themeMode', themeMode);

        // Apply class to root element for Tailwind's 'dark' variants
        root.classList.remove('light', 'dark'); // remove both classes first
        root.classList.add(themeMode); // add the current theme

        // Force color-scheme for scrollbars and system UI
        root.style.colorScheme = themeMode; // set color-scheme to match theme

        // Listen for automatic system theme changes
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (e) => {
          // Only update theme if user hasn't manually set a preference
          if (!localStorage.getItem('themeMode')) {
            setThemeMode(e.matches ? 'dark' : 'light'); // Update theme based on system preference
          }
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange); // Cleanup listner on ummount
      }, [themeMode]); // re-run effect when themeMode changes


  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme}}>
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer />
    </div>
    </ThemeProvider>
  )
}

export default App
