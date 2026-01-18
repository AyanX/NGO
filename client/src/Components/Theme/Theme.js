import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import "./Theme.scss";

const THEME_KEY = "theme"; // localStorage key

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(true);

  // Read theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_KEY);

    if (savedTheme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.removeAttribute("data-theme");
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem(THEME_KEY, "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.setItem(THEME_KEY, "dark");
    }

    setIsDark((prev) => !prev);
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title="Toggle theme"
    >
      {isDark ? (
        <Moon size={18} strokeWidth={1.8} />
      ) : (
        <Sun size={18} strokeWidth={1.8} />
      )}
    </button>
  );
};

export default ThemeToggle;
