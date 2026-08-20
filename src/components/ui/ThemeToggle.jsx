import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useTheme } from "../../hooks/useTheme";

const ThemeToggle = ({ size = 32 }) => {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const isDarkMode = themeMode === "dark";

  // Calculations based on the height (size)
  const width = size * 1.75; // Proportional width
  const padding = size * 0.125; // 1/8th of height for padding
  const circleSize = size - padding * 2;
  const translateX = width - circleSize - padding * 2;
  const iconSize = circleSize * 0.6; // Icon is 60% of the circle

  const toggleTheme = () => {
    isDarkMode ? lightTheme() : darkTheme();
  };

  return (
    <button
      title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
      onClick={toggleTheme}
      style={{
        width: `${width}px`,
        height: `${size}px`,
        padding: `${padding}px`,
      }}
      className={`relative border border-gray-300 dark:border-gray-700 flex items-center rounded-full transition-all duration-300 ${
        isDarkMode ? "bg-gray-800" : "bg-gray-200"
      }`}
    >
      <div
        style={{
          width: `${circleSize}px`,
          height: `${circleSize}px`,
          transform: isDarkMode
            ? `translateX(${translateX}px)`
            : "translateX(0px)",
        }}
        className="bg-white rounded-full shadow-md transition-transform duration-300 flex items-center justify-center"
      >
        {isDarkMode ? (
          <FaSun
            size={iconSize}
            className="text-yellow-500 hover:cursor-pointer"
          />
        ) : (
          <FaMoon
            size={iconSize}
            className="text-gray-800 hover:cursor-pointer"
          />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
