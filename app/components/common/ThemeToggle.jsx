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
  const [dark, setDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initialTheme = getInitialTheme();
    setDark(initialTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const root = document.documentElement;
    const theme = dark ? "dark" : "light";

    root.classList.toggle("dark", dark);
    root.style.colorScheme = theme;

    try {
      window.localStorage.setItem("theme", theme);
    } catch {
      // Ignore storage errors in restricted environments.
    }
  }, [dark, mounted]);

  const toggleTheme = () => {
    setDark((current) => !current);
  };

  const isDark = mounted ? dark : false;

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="theme-toggle flex-shrink-0"
    >
      {isDark ? <FaSun /> : <FaMoon />}
    </button>
  );
}
