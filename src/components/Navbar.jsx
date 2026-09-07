import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import ThemeToggle from "./ThemeToggle";
import Button from "../ui/Button";
import { navItems } from "../data/data";
import { scrollToSection } from "../utils/scroll";

export default function Navbar({ onDemo }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigation = (id) => {
    setMenuOpen(false);

    setTimeout(() => {
      scrollToSection(id);
    }, 50);
  };

  return (
    <header className="nova-navbar">
      <div className="navbar-inner">

        {/* LOGO */}
        <button
          type="button"
          className="nova-logo"
          onClick={() => handleNavigation("home")}
          aria-label="Go to NOVA homepage"
        >
          <span className="nova-logo-mark" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>

          <span className="nova-logo-text">
            NOVA
          </span>
        </button>

        {/* DESKTOP NAVIGATION */}
        <nav
          className="desktop-nav"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              type="button"
              className="nav-link"
              onClick={() => handleNavigation(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* ACTIONS */}
        <div className="navbar-actions">
          <ThemeToggle />

          <Button
            size="small"
            onClick={onDemo}
          >
            Book a demo
          </Button>

          <button
            type="button"
            className="mobile-menu-button"
            onClick={() => setMenuOpen((value) => !value)}
            aria-label={
              menuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X size={21} />
            ) : (
              <Menu size={21} />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-nav"
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.2,
            }}
          >
            <div className="mobile-nav-inner">

              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  type="button"
                  className="mobile-nav-link"
                  onClick={() => handleNavigation(item.id)}
                  initial={{
                    opacity: 0,
                    x: -15,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: index * 0.04,
                  }}
                >
                  <span>{item.label}</span>

                  <span className="mobile-nav-arrow">
                    →
                  </span>
                </motion.button>
              ))}

              <Button
                size="medium"
                onClick={() => {
                  setMenuOpen(false);
                  onDemo?.();
                }}
              >
                Book a demo
              </Button>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
