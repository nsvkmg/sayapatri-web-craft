
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "@/components/assets/logo.png";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    // { name: "Projects", href: "#projects" },
    { name: "Events", href: "#events" },
    { name: "Gallery", href: "#gallery" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={cn(
        "fixed w-full top-0 left-0 z-50 transition-all duration-300",
        isScrolled ? "bg-white dark:bg-gray-900 shadow-md py-2" : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div
            className={cn(
              "w-12 h-12 flex items-center justify-center rounded-full",
              isScrolled ? "bg-white dark:bg-gray-900" : "bg-transparent"
            )}
          >
            <img
              src={Image}
              alt="Sayapatri Logo"
              className="w-12 h-12 rounded-full object-cover bg-blend-color-burn"
            />
          </div>
          <span
            className={cn(
              "text-2xl font-bold font-heading transition-colors",
              isScrolled ? "text-sayapatri-800 dark:text-white" : "text-white"
            )}
          >
            Sayapatri
          </span>
        </a>

        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={cn(
              "p-2 focus:outline-none",
              isScrolled ? "text-sayapatri-800 dark:text-white" : "text-white"
            )}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <nav
          className={cn(
            "absolute md:relative top-full left-0 right-0 md:top-0 w-full md:w-auto dark:bg-gray-900 md:dark:bg-transparent bg-white md:bg-transparent shadow-lg md:shadow-none transition-all duration-300",
            isMobileMenuOpen ? "block" : "hidden md:block",
            isScrolled ? "md:text-sayapatri-800 md:dark:text-white" : "md:text-white"
          )}
        >
          <ul className="flex flex-col md:flex-row items-center gap-1 md:gap-8 p-4 md:p-0">
            {navLinks.map(link => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={cn(
                    "block py-2 px-3 text-sayapatri-800 dark:text-white md:px-0 md:py-0 navbar-link",
                    isScrolled ? "md:text-sayapatri-800 md:dark:text-white" : "md:text-white"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <ThemeToggle />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
