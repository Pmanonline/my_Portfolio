import React, { useEffect, useState, useRef } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { store } from "./store";
import "./index.css";
import About from "./pages/AboutUsPage";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
import Portfolio from "./pages/Portfolio";
import { Sun, Moon, Menu, X } from "lucide-react";
import { toggleTheme } from "./features/Theme/themeSlice";
import type { ThemeState } from "./features/Theme/themeSlice";

import { Link } from "react-router-dom";
import heroImage1 from "../assets/hero-bg-1.jpg";
import heroImage2 from "../assets/hero-bg-2.jpg";
import heroImage3 from "../assets/hero-bg-3.jpg";
import heroImage4 from "../assets/hero-bg-4.jpg";
import { useLocation } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { mode } = useSelector((state: { theme: ThemeState }) => state.theme);
  const navRef = useRef<HTMLDivElement>(null); // Explicitly typed as HTMLDivElement
  const mobileMenuRef = useRef<HTMLDivElement>(null); // Explicitly typed as HTMLDivElement

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  // Handle click outside to close mobile menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMobileMenuOpen]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isMobileMenuOpen]);

  const navItems = [
    { name: "HOME", href: "/#home" },
    { name: "PORTFOLIO", href: "/#portfolio" },
    { name: "ABOUT", href: "/#about" },
    { name: "SERVICES", href: "/#services" },
    { name: "CONTACT", href: "/#contact" },
  ];

  const isDark = mode === "dark";

  const handleNavItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-gray-50/95 text-primary-dark dark:bg-primary-customDark/95 backdrop-blur-md border-b border-accent-charcoalDark/20 dark:border-accent-cream/20"
            : `${
                pathname === "/resume"
                  ? "bg-gray-900 text-white"
                  : "bg-transparent"
              }`
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center cursor-pointer">
              <div className="relative">
                <div className="text-2xl lg:text-3xl font-bold font-serif">
                  <span
                    className={`bg-gradient-to-r ${
                      isDark
                        ? "from-blue-400 via-purple-500 to-pink-500"
                        : "from-blue-600 via-purple-600 to-pink-600"
                    } bg-clip-text text-transparent`}>
                    Portfolio
                  </span>
                </div>
                <motion.div
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r ${
                    isDark
                      ? "from-blue-400 to-purple-500"
                      : "from-blue-600 to-purple-600"
                  } rounded-full`}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 1, duration: 0.8 }}
                />
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  whileHover={{ y: -2 }}
                  className={`relative px-4 py-2 mx-1 font-medium text-sm tracking-wide transition-all duration-300 rounded-lg group ${
                    isScrolled || isDark
                      ? "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                      : "text-white/90 hover:text-white"
                  }`}>
                  {item.name}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${
                      isDark
                        ? "from-blue-400 to-purple-500"
                        : "from-blue-600 to-purple-600"
                    } rounded-full`}
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}

              {/* Desktop Theme Toggle */}
              <motion.button
                onClick={handleThemeToggle}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className={`relative ml-4 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDark
                    ? "bg-gray-800 hover:bg-gray-700 text-yellow-400"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                } shadow-lg hover:shadow-xl`}>
                <motion.div
                  key={mode}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  exit={{ scale: 0, rotate: 180 }}
                  transition={{ duration: 0.3 }}>
                  {isDark ? (
                    <Sun className="w-5 h-5" />
                  ) : (
                    <Moon className="w-5 h-5" />
                  )}
                </motion.div>
              </motion.button>
            </div>

            {/* Mobile menu button & theme toggle */}
            <div className="flex items-center space-x-2 lg:hidden">
              {/* Mobile Theme Toggle */}
              <motion.button
                onClick={handleThemeToggle}
                whileTap={{ scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                className={`w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                  isDark
                    ? "bg-gray-800 text-yellow-400"
                    : "bg-gray-100 text-gray-700"
                } shadow-md`}>
                <motion.div
                  key={mode}
                  initial={{ scale: 0, rotate: -90 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.2 }}>
                  {isDark ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </motion.div>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                whileTap={{ scale: 0.9 }}
                className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                  isDark
                    ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } shadow-md`}>
                <motion.div
                  animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}>
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/20 dark:bg-black/40 backdrop-blur-sm lg:hidden"
                style={{ top: "64px" }}
              />

              {/* Mobile Menu */}
              <motion.div
                ref={mobileMenuRef}
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute top-full left-4 right-4 mt-2 lg:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 overflow-hidden">
                <div className="p-4">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.a
                        key={item.name}
                        href={item.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ delay: index * 0.05, duration: 0.2 }}
                        whileHover={{
                          x: 4,
                          backgroundColor: isDark
                            ? "rgba(59, 130, 246, 0.1)"
                            : "rgba(59, 130, 246, 0.05)",
                        }}
                        whileTap={{ scale: 0.98 }}
                        className="block px-4 py-3 text-gray-700 dark:text-gray-300 font-medium rounded-xl transition-all duration-200 hover:text-blue-600 dark:hover:text-blue-400"
                        onClick={handleNavItemClick}>
                        <div className="flex items-center justify-between">
                          <span>{item.name}</span>
                          <motion.div
                            initial={{ opacity: 0 }}
                            whileHover={{ opacity: 1 }}
                            className="w-2 h-2 rounded-full bg-blue-500"
                          />
                        </div>
                      </motion.a>
                    ))}
                  </div>

                  {/* Mobile menu footer */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-6 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex items-center justify-center">
                      <span
                        className={`text-sm font-medium ${
                          isDark ? "text-gray-400" : "text-gray-600"
                        }`}>
                        Swipe up to close
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
};
const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Background images array
  // const backgroundImages = [heroImage1, heroImage2, heroImage3, heroImage4];

  // Alternative: If you want to use online images instead
  const backgroundImages = [
    "https://res.cloudinary.com/dvrrp1om6/image/upload/v1757336791/414172260_rr7ohn.png",
    "https://res.cloudinary.com/dvrrp1om6/image/upload/v1757336754/410763216_ak6emf.png",
    "https://res.cloudinary.com/dvrrp1om6/image/upload/v1757336716/591507930_ktxebi.png",
    "https://res.cloudinary.com/dvrrp1om6/image/upload/v1757336591/lgtkjpik9hxh52pxaprb_khytyd.png",
  ];

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  // Auto-change background images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 12000); // Change every 6 seconds

    return () => clearInterval(interval);
  }, [backgroundImages.length]);
  useEffect(() => {
    backgroundImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, [backgroundImages]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Images */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(
                     135deg,
                     rgba(0, 0, 0, 0.7) 0%,
                     rgba(30, 64, 175, 0.5) 25%,
                     rgba(249, 115, 22, 0.5) 75%,
                     rgba(0, 0, 0, 0.8) 100%
                   ), url(${backgroundImages[currentImageIndex]})`,
            }}
          />
        </AnimatePresence>

        {/* Sliding overlay effect */}
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: "100%" }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-white/5 to-transparent"
          style={{
            background: `linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.1) 50%, transparent 100%)`,
          }}
        />
      </div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/40 z-10" />

      {/* Background Pattern Overlays */}
      <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-secondary/20 to-primary/20 dark:from-secondary/10 dark:to-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-primary/20 to-secondary/20 dark:from-primary/10 dark:to-secondary/10 rounded-full blur-3xl"
        />

        {/* Animated grid pattern */}
        <motion.div
          animate={{
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 opacity-30">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(249, 115, 22, 0.2) 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </motion.div>
      </div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-30 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/40 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 800),
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 30 - 15, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Background Image Indicators */}
      <div className="absolute bottom-20 right-8 z-40 flex flex-col space-y-3">
        {backgroundImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentImageIndex === index
                ? "bg-white shadow-lg"
                : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
      {/* Content */}
      <div className="relative z-40 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-5xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight font-montserrat">
          <span className="bg-gradient-to-r from-white via-accent-cream to-white bg-clip-text text-transparent drop-shadow-2xl">
            LETS BUILD
          </span>
          <br />
          <span className="bg-gradient-to-r from-secondary-light via-primary-light to-accent-cream bg-clip-text text-transparent drop-shadow-2xl">
            SOMETHING TOGETHER
          </span>
        </motion.h1>

        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-lg sm:text-xl lg:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
          Looking for exceptional web development and design? Take our premium
          portfolio tour, your best guide to modern web solutions and
          cutting-edge digital experiences.
        </motion.p>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <motion.a
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)",
            }}
            href="#portfolio"
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-light hover:to-secondary 
                        backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-2xl 
                        transition-all duration-300 border border-white/20">
            VIEW PORTFOLIO
          </motion.a>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white/80 text-white hover:bg-white/20 hover:backdrop-blur-sm
                        px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-xl">
            GET IN TOUCH
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-40">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-white/60 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 z-30 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full backdrop-blur-sm"
            style={{
              width: Math.random() * 8 + 4,
              height: Math.random() * 8 + 4,
              background: `rgba(255, 255, 255, ${Math.random() * 0.3 + 0.1})`,
              border: `1px solid rgba(255, 255, 255, 0.2)`,
            }}
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * 600,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0.1, 0.6, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="bg-gray-50 dark:bg-primary-customDark text-primary-dark dark:text-accent-cream min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Hero />
          <About />
          <OurServices />
          <Portfolio />
          <ContactUs />
          {/* Additional sections will go here */}
        </div>
      </div>
    </Provider>
  );
};

export default App;
