"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitch from "@/components/UI/ThemeSwitch";
import logo_dark from "@/assets/logo-dark.svg";
import logo_light from "@/assets/logo-light.svg";
import { ChevronDown, Menu, X, Github, Linkedin, Mail } from "lucide-react";

const navLinks = [
  { href: "#hero", label: "home" },
  { href: "#projects", label: "works" },
  { href: "#about", label: "about-me" },
  { href: "#contact", label: "contacts" },
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
    <header className={`relative bg-background ${isMenuOpen ? "h-screen" : ""}`}>
      <div className="container mx-auto px-4 md:px-0 lg:px-0 flex items-center justify-between py-5 md:py-8">
        <Link href="/" className="flex items-center gap-2">
          {isDarkMode ? (
            <Image src={logo_dark} alt="Logo" width={16} height={16} />
          ) : (
            <Image src={logo_light} alt="Logo" width={16} height={16} />
          )}
          <span className="text-base font-bold">Salman</span>
        </Link>
        <div className="gap-8 hidden md:flex items-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-base font-medium text-secondary-foreground hover:text-primary-foreground transition-all duration-200">
              <span className="text-main-purple">#</span>
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-1 text-base font-semibold text-secondary-foreground hover:text-primary-foreground transition-all duration-200 cursor-pointer">
            EN <ChevronDown width={16} height={16} strokeWidth={3} />
          </div>
          {/* theme toggle button for desktop view */}
          <ThemeSwitch isDarkMode={isDarkMode} handleToggleTheme={handleToggleTheme} />
        </div>
        {/* open/colse icon */}
        <div className="md:hidden text-primary-foreground hover:text-secondary-foreground transition-all duration-200 cursor-pointer">
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
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-1 text-3xl font-semibold text-secondary-foreground active:text-primary-foreground transition-all duration-200 cursor-pointer">
              EN <ChevronDown width={16} height={16} strokeWidth={3} />
            </div>
            <ThemeSwitch isDarkMode={isDarkMode} handleToggleTheme={handleToggleTheme} />
          </div>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-3xl font-medium text-secondary-foreground active:text-primary-foreground transition-all duration-200"
              onClick={() => setIsMenuOpen(false)}>
              <span className="text-main-purple">#</span>
              {link.label}
            </Link>
          ))}
        </div>
      )}
      {/* social icons */}
      <div className={`absolute md:left-4 bottom-18 md:top-0 w-full md:w-fit ${!isMenuOpen ? "hidden" : ""} md:block`}>
        <div className="flex md:flex-col justify-center items-center gap-6">
          <div className="hidden md:block h-48 border-r border-secondary-foreground"></div>
          <Link href="#" target="_blank">
            <Github
              strokeWidth={1.5}
              className="w-[46px] h-[46px] md:w-[24px] md:h-[24px] text-secondary-foreground hover:text-primary-foreground active:text-primary-foreground transition-all duration-200"
            />
          </Link>
          <Link href="#">
            <Linkedin
              strokeWidth={1.5}
              className="w-[46px] h-[46px] md:w-[24px] md:h-[24px] text-secondary-foreground hover:text-primary-foreground active:text-primary-foreground transition-all duration-200"
            />
          </Link>
          <Link href="#">
            <Mail
              strokeWidth={1.5}
              className="w-[46px] h-[46px] md:w-[24px] md:h-[24px] text-secondary-foreground hover:text-primary-foreground active:text-primary-foreground transition-all duration-200"
            />
          </Link>
        </div>
      </div>
    </header>
  );
}
