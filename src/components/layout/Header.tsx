"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import ThemeSwitch from "@/components/UI/ThemeSwitch";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "home" },
  { href: "/projects", label: "projects" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body).overflow;
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, [isMenuOpen]);

  // Close the menu when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Set initial theme based on document class
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);
  }, []);

  const handleToggleTheme = () => {
    const isDarkMode = document.documentElement.classList.contains("dark");

    if (isDarkMode) {
      // If it's dark, switch to light
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      // If it's light, switch to dark
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <header className={`bg-background ${isMenuOpen ? "h-screen" : ""}`}>
      <div className="flex items-center justify-between py-5 md:py-8">
        <p className="text-lg font-semibold">Salman Abdellatif</p>
        <div className="gap-4 hidden md:flex items-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-base font-medium text-secondary-foreground hover:text-primary-foreground">
              <span className="text-main-purple">*</span>
              {link.label}
            </Link>
          ))}
          {/* theme toggle button for desktop view */}
          <ThemeSwitch isDarkMode={isDarkMode} handleToggleTheme={handleToggleTheme} />
        </div>
        {/* open/colse icon */}
        <div className="md:hidden text-primary-foreground hover:text-secondary-foreground cursor-pointer">
          {isMenuOpen ? (
            <X width={24} height={24} onClick={() => setIsMenuOpen(false)} />
          ) : (
            <Menu width={24} height={24} onClick={() => setIsMenuOpen(true)} />
          )}
        </div>
      </div>
      {/* mobile view navigation */}
      {isMenuOpen && (
        <div className="flex flex-col gap-8 mt-8 px-4">
          {/* theme toggle button for mobile view */}
          <div className="flex justify-end items-center">
            <ThemeSwitch isDarkMode={isDarkMode} handleToggleTheme={handleToggleTheme} />
          </div>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-xl font-medium text-secondary-foreground active:text-primary-foreground"
              onClick={() => setIsMenuOpen(false)}>
              <span className="text-main-purple">*</span>
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
