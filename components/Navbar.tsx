"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const currentAttr = document.documentElement.getAttribute("data-theme");
    const saved = window.localStorage.getItem("ocean-theme");
    const resolved =
      saved === "light" || currentAttr === "light" ? "light" : "dark";
    setTheme(resolved);
    document.documentElement.setAttribute("data-theme", resolved);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      window.localStorage.setItem("ocean-theme", next);
    } catch {
      // Ignore storage restrictions in private browsing
    }
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "About", href: "/about" },
  ];

  return (
    <nav
      aria-label="Primary navigation"
      className="w-full max-w-[1080px] mx-auto px-4 sm:px-8 pt-5 pb-3 flex flex-wrap items-center justify-between gap-3 text-sm"
    >
      <Link
        href="/"
        className="text-ink font-semibold tracking-tight hover:opacity-80 transition-opacity text-sm sm:text-base shrink-0"
      >
        Ocean D&apos;souza
      </Link>

      {/* Pill Navigation with Smooth Sliding Active Indicator + Connect + Light/Dark Switch */}
      <div className="inline-flex items-center gap-0.5 sm:gap-1 p-1 sm:p-1.5 rounded-full bg-canvas-surface max-w-full overflow-x-auto no-scrollbar">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative px-3.5 sm:px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-colors whitespace-nowrap ${
                isActive
                  ? "text-ink font-semibold"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="navbar-active-pill"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 32,
                  }}
                  className="absolute inset-0 rounded-full bg-canvas-elevated"
                />
              )}
              <span className="relative z-10">{item.label}</span>
            </Link>
          );
        })}

        <a
          href="#connect"
          className="relative px-3 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium text-ink-muted hover:text-ink transition-colors whitespace-nowrap"
        >
          Connect
        </a>

        {/* Light / Dark Mode Switch */}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          className="w-8 h-8 rounded-full bg-canvas flex items-center justify-center text-ink hover:opacity-80 transition-opacity ml-0.5 shrink-0"
        >
          {theme === "dark" ? (
            <Sun className="w-4 h-4 text-[#FACC15]" />
          ) : (
            <Moon className="w-4 h-4 text-[#0F172A]" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
