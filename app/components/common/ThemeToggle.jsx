"use client";

import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const getInitialTheme = () => {
  if (typeof window === "undefined") return false;
  const savedTheme = window.localStorage.getItem("theme");
  return savedTheme
    ? savedTheme === "dark"
    : window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export default function ThemeToggle() {
  const [dark, setDark] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const theme = dark ? "dark" : "light";

    root.classList.toggle("dark", dark);
    root.style.colorScheme = theme;

    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // Ignore storage errors in restricted environments.
    }
  }, [dark]);

  const toggleTheme = () => {
    setDark((current) => !current);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Switch to light mode" : "Switch to dark mode"}
      className="theme-toggle"
    >
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
