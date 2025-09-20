"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const pages = [
  { name: "Home", id: "home" },
  { name: "About Me", id: "about" },
  { name: "Projects", id: "projects" },
  { name: "Contact", id: "contact" },
];

export default function NavBar() {
  const router = useRouter();
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isNavigating, setIsNavigating] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const lastScroll = useRef(0);
  const navRef = useRef(null);
  const dropdownRef = useRef(null);

  // Auto-hide navbar on scroll (disabled during navigation)
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      const isScrollingUp = currentScroll < lastScroll.current;
      const isNearTop = currentScroll < 100;

      if (menuOpen) {
        setMenuOpen(false);
      }

      setScrollY(currentScroll);

      if (!isNavigating) {
        setIsVisible(isScrollingUp || isNearTop || currentScroll === 0);
      }

      lastScroll.current = currentScroll;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isNavigating, menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Close menu on outside click
  useEffect(() => {
    if (!menuOpen) return;

    const handleClick = (e) => {
      const isClickOutsideNavbar =
        navRef.current && !navRef.current.contains(e.target);
      const isClickOutsideDropdown =
        dropdownRef.current && !dropdownRef.current.contains(e.target);

      if (isClickOutsideNavbar && isClickOutsideDropdown) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [menuOpen]);

  // Handle navigation with proper scroll offset
  const handleNavClick = (id) => {
    setMenuOpen(false);
    setIsNavigating(true);
    setIsVisible(true);

    if (pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        const navbarHeight = navRef.current?.offsetHeight || 64;
        const offsetPosition = section.offsetTop - navbarHeight;

        window.scrollTo({
          top: Math.max(0, offsetPosition),
          behavior: "smooth",
        });
      }
    } else {
      sessionStorage.setItem("scrollToSection", id);
      router.push("/");
    }

    setTimeout(() => setIsNavigating(false), 1000);
  };

  // Scroll to section after navigation
  useEffect(() => {
    if (pathname === "/" && typeof window !== "undefined") {
      const sectionId = sessionStorage.getItem("scrollToSection");
      if (sectionId) {
        setIsNavigating(true);
        setIsVisible(true);

        const scrollToSection = () => {
          const section = document.getElementById(sectionId);
          if (section) {
            const navbarHeight = navRef.current?.offsetHeight || 64;
            const offsetPosition = section.offsetTop - navbarHeight;

            window.scrollTo({
              top: Math.max(0, offsetPosition),
              behavior: "smooth",
            });

            sessionStorage.removeItem("scrollToSection");
            setTimeout(() => setIsNavigating(false), 1000);
          }
        };

        setTimeout(scrollToSection, 100);
      }
    }
  }, [pathname]);

  // Calculate opacity and blur based on scroll, but only on home page
  const isHome = pathname === "/";
  const opacity = isHome ? 0.3 + 0.7 * Math.min(1, scrollY / 150) : 1;
  const blur = isHome ? Math.min(20, scrollY / 10) : 20;

  return (
    <>
      <div
        ref={navRef}
        className={`navbar fixed top-0 left-0 w-full z-50 px-4 transition-all duration-300 ease-in-out ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        } ${scrollY > 50 ? "shadow-lg" : "shadow-none"}`}
        style={{
          background: `rgba(var(--p), ${opacity})`,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          borderBottom: `1px solid rgba(255, 255, 255, ${
            0.1 + 0.3 * Math.min(1, scrollY / 150)
          })`,
        }}
      >
        {/* Logo */}
        <div className="flex-1">
          <button
            className="btn btn-ghost normal-case text-xl !text-white hover:bg-black/10 font-medium"
            onClick={() => handleNavClick("home")}
            aria-label="Home"
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
          >
            <img src="/favicon_white.svg" alt="Logo" className="h-8 mr-2" />
            <span className="hidden sm:inline">Sam Richardson</span>
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="navbar-end hidden sm:flex">
          <ul className="menu menu-horizontal px-1 space-x-2">
            {pages.map((page) => (
              <li key={page.id}>
                <button
                  className="btn btn-ghost !text-white hover:bg-black/10 font-medium"
                  onClick={() => handleNavClick(page.id)}
                  style={{ textShadow: "0 2px 4px rgba(0,0,0,0.5)" }}
                >
                  {page.name}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="navbar-end sm:hidden">
          <button
            className="btn btn-ghost btn-circle !text-white hover:bg-black/10"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg
              className="swap-off fill-current w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              style={{ filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.5))" }}
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          ref={dropdownRef}
          className="fixed top-16 left-0 right-0 z-[9999] bg-base-100 shadow-lg sm:hidden"
        >
          <ul className="menu p-4 space-y-2">
            {pages.map((page) => (
              <li key={page.id}>
                <button
                  className="btn btn-ghost w-full justify-start text-lg"
                  onClick={() => handleNavClick(page.id)}
                >
                  {page.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
