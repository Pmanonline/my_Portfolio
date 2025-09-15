import React, { useEffect, useState } from "react";
import { Provider, useSelector, useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import { store } from "./store";
import "./index.css";
import About from "./pages/AboutUsPage";
import OurServices from "./pages/OurServices";
import ContactUs from "./pages/ContactUs";
import Portfolio from "./pages/Portfolio";
import { Sun, Moon } from "lucide-react";
import { toggleTheme } from "./features/Theme/themeSlice";
import type { ThemeState } from "./features/Theme/themeSlice";

import { Link } from "react-router-dom";
import heroImage1 from "../assets/hero-bg-1.jpg";
import heroImage2 from "../assets/hero-bg-2.jpg";
import heroImage3 from "../assets/hero-bg-3.jpg";
import heroImage4 from "../assets/hero-bg-4.jpg";
import { useLocation } from "react-router-dom";

// Navbar Component
export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const { pathname } = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const dispatch = useDispatch();
  const { mode } = useSelector((state: { theme: ThemeState }) => state.theme);

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

  const navItems = [
    { name: "HOME", href: "/#home" },
    { name: "PORTFOLIO", href: "/#portfolio" },
    { name: "ABOUT", href: "/#about" },
    { name: "CONTACT", href: "/#contact" },
  ];

  const isDark = mode === "dark";
  return (
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
            className="flex items-center">
            <div className="text-xl lg:text-2xl font-bold font-montserrat">
              <span className="bg-gradient-to-r from-secondary to-primary-light dark:from-secondary-light dark:to-primary-light bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                whileHover={{ y: -2, color: "#60A5FA" }}
                className={`font-medium tracking-wide transition-colors duration-300 ${
                  isScrolled
                    ? "text-primary-dark dark:text-accent-cream"
                    : "text-white dark:text-white"
                }`}>
                {item.name}
              </motion.a>
            ))}

            <motion.button
              onClick={handleThemeToggle}
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.02 }}
              className="relative w-16 h-8 rounded-full shadow-lg transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500">
              {/* Background Track */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  background: isDark
                    ? "linear-gradient(to right, #4f46e5, #9333ea)" // Dark Mode (purple gradient)
                    : "linear-gradient(to right, #f97316, #ec4899)", // Light Mode (orange to pink)
                }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />

              {/* Sliding Knob */}
              <motion.div
                className="absolute top-0.5 w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center"
                animate={{
                  x: isDark ? 32 : 2, // Move knob position
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30,
                  duration: 0.3,
                }}>
                <motion.div
                  initial={false}
                  animate={{
                    rotate: isDark ? 360 : 0,
                    scale: isDark ? 1 : 1.1,
                  }}
                  transition={{ duration: 0.4 }}>
                  {isDark ? (
                    <Moon className="w-4 h-4 text-indigo-600" />
                  ) : (
                    <Sun className="w-4 h-4 text-orange-500" />
                  )}
                </motion.div>
              </motion.div>

              {/* Optional: Screen reader text */}
              <span className="sr-only">
                {isDark ? "Switch to light mode" : "Switch to dark mode"}
              </span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-primary-dark dark:text-accent-cream transition-colors duration-300">
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
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
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-gray-50/95 dark:bg-primary-customDark/95 backdrop-blur-md border-t border-accent-charcoalDark/20 dark:border-accent-cream/20">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ x: 10 }}
                    className="block px-3 py-2 text-primary-dark dark:text-accent-cream font-medium"
                    onClick={() => setIsMobileMenuOpen(false)}>
                    {item.name}
                  </motion.a>
                ))}

                {/* Theme Toggle inside Mobile menu */}
                <motion.button
                  onClick={handleThemeToggle}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 w-full flex items-center justify-center py-3 rounded-lg 
                              bg-gradient-to-r from-primary/20 to-secondary/20 dark:from-primary-light/20 dark:to-secondary-light/20
                              hover:from-primary/30 hover:to-secondary/30 dark:hover:from-primary-light/30 dark:hover:to-secondary-light/30
                              border border-accent-charcoalDark/20 dark:border-accent-cream/10 transition-all duration-300">
                  {mode === "dark" ? (
                    <Moon className="w-5 h-5 text-primary-light" />
                  ) : (
                    <Sun className="w-5 h-5 text-secondary" />
                  )}
                  <span className="ml-2 text-primary-dark dark:text-accent-cream">
                    {mode === "dark" ? "Light Mode" : "Dark Mode"}
                  </span>
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

// Hero Component
// const Hero: React.FC = () => {
//   const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const updateMousePosition = (e: MouseEvent) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };
//     window.addEventListener("mousemove", updateMousePosition);
//     return () => window.removeEventListener("mousemove", updateMousePosition);
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-50 dark:bg-primary-customDark">
//       {/* Background Pattern */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-secondary/10 to-primary/10 dark:from-secondary/5 dark:to-primary/5 rounded-full blur-3xl" />
//         <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-primary/10 to-secondary/10 dark:from-primary/5 dark:to-secondary/5 rounded-full blur-3xl" />
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-secondary/5 to-primary/5 dark:from-secondary/3 dark:to-primary/3 rounded-full blur-3xl" />

//         {/* Animated grid pattern */}
//         <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/5 to-transparent dark:via-primary/2 opacity-50">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `radial-gradient(circle at 25% 25%, rgba(249, 115, 22, 0.15) 2px, transparent 2px)`,
//               backgroundSize: "60px 60px",
//             }}
//           />
//         </div>
//       </div>

//       {/* Animated particles */}
//       <div className="absolute inset-0 pointer-events-none">
//         {[...Array(15)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute w-2 h-2 bg-secondary/30 dark:bg-secondary-light/40 rounded-full"
//             initial={{
//               x:
//                 Math.random() *
//                 (typeof window !== "undefined" ? window.innerWidth : 1200),
//               y:
//                 Math.random() *
//                 (typeof window !== "undefined" ? window.innerHeight : 800),
//             }}
//             animate={{
//               y: [0, -30, 0],
//               x: [0, Math.random() * 20 - 10, 0],
//               opacity: [0.2, 0.6, 0.2],
//               scale: [1, 1.2, 1],
//             }}
//             transition={{
//               duration: 4 + Math.random() * 2,
//               repeat: Infinity,
//               delay: Math.random() * 2,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>

//       {/* Content */}
//       <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
//         <motion.h1
//           initial={{ y: 100, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.2 }}
//           className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight font-montserrat">
//           <span className="bg-gradient-to-r from-primary-dark via-secondary to-primary dark:from-accent-cream dark:via-primary-light dark:to-secondary-light bg-clip-text text-transparent">
//             YOUR CREATIVE
//           </span>
//           <br />
//           <span className="bg-gradient-to-r from-secondary via-primary-dark to-primary-light dark:from-secondary-light dark:via-accent-cream dark:to-primary-light bg-clip-text text-transparent">
//             PORTFOLIO
//           </span>
//         </motion.h1>

//         <motion.p
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 0.6 }}
//           className="text-lg sm:text-xl lg:text-2xl text-primary-dark/80 dark:text-accent-cream/80 mb-12 max-w-4xl mx-auto leading-relaxed">
//           Looking for exceptional web development and design? Take our premium
//           portfolio tour, your best guide to modern web solutions and
//           cutting-edge digital experiences.
//         </motion.p>

//         <motion.div
//           initial={{ y: 50, opacity: 0 }}
//           animate={{ y: 0, opacity: 1 }}
//           transition={{ duration: 1, delay: 1 }}
//           className="flex flex-col sm:flex-row gap-6 justify-center items-center">
//           <motion.button
//             whileHover={{
//               scale: 1.05,
//               boxShadow: "0 20px 40px rgba(249, 115, 22, 0.3)",
//             }}
//             whileTap={{ scale: 0.95 }}
//             className="bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-light hover:to-secondary-dark
//                        dark:from-secondary-darkMode dark:to-secondary-dark dark:hover:from-secondary-light dark:hover:to-secondary-darkMode
//                        text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-2xl transition-all duration-300">
//             VIEW PORTFOLIO
//           </motion.button>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-white
//                        dark:border-secondary-light dark:text-secondary-light dark:hover:bg-secondary-light dark:hover:text-primary-dark
//                        px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
//             GET IN TOUCH
//           </motion.button>
//         </motion.div>
//       </div>

//       {/* Scroll indicator */}
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 2, duration: 1 }}
//         className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
//         <motion.div
//           animate={{ y: [0, 10, 0] }}
//           transition={{ duration: 2, repeat: Infinity }}
//           className="w-6 h-10 border-2 border-secondary/50 dark:border-secondary-light/50 rounded-full flex justify-center">
//           <motion.div
//             animate={{ y: [0, 12, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//             className="w-1 h-3 bg-secondary/50 dark:bg-secondary-light/50 rounded-full mt-2"
//           />
//         </motion.div>
//       </motion.div>

//       {/* Enhanced Floating Elements */}
//       <div className="absolute inset-0 pointer-events-none overflow-hidden">
//         {[...Array(8)].map((_, i) => (
//           <motion.div
//             key={i}
//             className="absolute rounded-full"
//             style={{
//               width: Math.random() * 6 + 2,
//               height: Math.random() * 6 + 2,
//               background:
//                 i % 2 === 0
//                   ? `rgba(249, 115, 22, ${Math.random() * 0.3 + 0.1})`
//                   : `rgba(30, 64, 175, ${Math.random() * 0.3 + 0.1})`,
//             }}
//             initial={{
//               x:
//                 Math.random() *
//                 (typeof window !== "undefined" ? window.innerWidth : 1200),
//               y: Math.random() * 600,
//             }}
//             animate={{
//               y: [0, -30, 0],
//               x: [0, Math.random() * 50 - 25, 0],
//               opacity: [0.1, 0.4, 0.1],
//               scale: [1, 1.5, 1],
//             }}
//             transition={{
//               duration: 6 + Math.random() * 4,
//               repeat: Infinity,
//               delay: Math.random() * 5,
//               ease: "easeInOut",
//             }}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };
// Hero Component with Animated Backgrounds
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
