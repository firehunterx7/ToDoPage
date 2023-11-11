import { useDebugValue, useState } from "react";

export default function useTheme(params) {
  const [darkTheme, setDarkTheme] = useState(false);
  const toggleTheme = () => {
    setDarkTheme(!darkTheme);
  };

  useDebugValue(`theme: ${darkTheme ? "dark" : "light"}`, (val) => {
    if (val === "light") {
      return "Light theme";
    } else {
      return "Dark theme";
    }
  });

  return {
    darkTheme,
    toggleTheme,
  };
}
