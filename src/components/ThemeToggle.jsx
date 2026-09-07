import { Moon, Sun } from "lucide-react";

import useTheme from "../hooks/useTheme";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={
        isDark
          ? "Switch to light theme"
          : "Switch to dark theme"
      }
      title={
        isDark
          ? "Switch to light theme"
          : "Switch to dark theme"
      }
    >
      <span
        className={
          isDark
            ? "theme-toggle-icon active"
            : "theme-toggle-icon"
        }
      >
        <Moon size={15} />
      </span>

      <span
        className={
          !isDark
            ? "theme-toggle-icon active"
            : "theme-toggle-icon"
        }
      >
        <Sun size={15} />
      </span>
    </button>
  );
}