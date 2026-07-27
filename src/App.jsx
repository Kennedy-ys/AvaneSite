import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Development from "./routes/Development";
import UIUXDesign from "./routes/UIUXDesign";
import Research from "./routes/Research";
import Contact from "./routes/Contact";
import DataAnalysis from "./routes/DataAnalysis";
import ProjectManagement from "./routes/ProjectManagement";
import GraphicsDesign from "./routes/GraphicsDesign";
import SocialMediaManagement from "./routes/SocialMediaManagement";
import ComingSoon from "./routes/ComingSoon";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ThemeProvider from "./providers/ThemeProviders";
import Cybersecurity from "./routes/Cybersecurity";
import Academy from "./routes/Academy";
import Blog from "./routes/blog";

function App() {
  // Initial state: check localStorage,then system, then default to light
  const [themeMode, setThemeMode] = useState(() => {
    const savedTheme = localStorage.getItem("themeMode");
    if (savedTheme) return savedTheme;

    // Follow system default if no manual choice exists
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Function to toggle between light and dark themes
  const lightTheme = () => {
    if (!document.startViewTransition) return setThemeMode("light");
    document.startViewTransition(() => setThemeMode("light"));
  };
  const darkTheme = () => {
    if (!document.startViewTransition) return setThemeMode("dark");
    document.startViewTransition(() => setThemeMode("dark"));
  };

  // Effect to apply the theme class to the root element
  useEffect(() => {
    const root = window.document.documentElement; // Get the root element (html)

    // Save preference to local storage for next reload
    localStorage.setItem("themeMode", themeMode);

    // Apply class to root element for Tailwind's 'dark' variants
    root.classList.remove("light", "dark"); // remove both classes first
    root.classList.add(themeMode); // add the current theme

    // Force color-scheme for scrollbars and system UI
    root.style.colorScheme = themeMode; // set color-scheme to match theme

    // Listen for automatic system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => {
      // Only update theme if user hasn't manually set a preference
      if (!localStorage.getItem("themeMode")) {
        setThemeMode(e.matches ? "dark" : "light"); // Update theme based on system preference
      }
    };
    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange); // Cleanup listner on ummount
  }, [themeMode]); // re-run effect when themeMode changes

  return (
    <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/academy" element={<Academy />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/development" element={<Development />} />
        <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
        <Route path="/services/research" element={<Research />} />
        <Route path="/services/cybersecurity" element={<Cybersecurity />} />
        <Route path="/services/analysis" element={<DataAnalysis />} />
        <Route path="/services/graphics-design" element={<GraphicsDesign />} />
        <Route path="/services/social-media-management" element={<SocialMediaManagement />} />
        <Route path="/services/project-management" element={<ProjectManagement />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
      </Routes>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
