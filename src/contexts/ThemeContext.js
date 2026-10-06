import { createContext } from "react";
// This context will be used to manage the theme state (light or dark) across the application.
export const ThemeContext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
});
