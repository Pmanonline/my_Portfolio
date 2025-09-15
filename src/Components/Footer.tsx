import React from "react";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  ExternalLink,
  ArrowUp,
  Heart,
  Sun,
  Moon,
} from "lucide-react";
import { toggleTheme } from "../features/Theme/themeSlice";
import type { ThemeState } from "../features/Theme/themeSlice";

const Footer: React.FC = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state: { theme: ThemeState }) => state.theme);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        duration: 0.6,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const socialIconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      },
    },
  };

  const hoverEffect = {
    y: -5,
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  };

  return (
    <motion.footer
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="relative bg-gray-100 dark:bg-primary-customDark border-t border-accent-charcoalDark/20 dark:border-accent-cream/10 ">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-secondary/5 to-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-primary/5 to-secondary/5 rounded-full blur-3xl" />

        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/2 to-transparent opacity-50">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, ${
                mode === "dark" ? "#60A5FA10" : "#1E40AF10"
              } 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <div className="mb-6">
              <motion.h3
                className="text-3xl font-bold font-montserrat mb-4"
                whileHover={{ scale: 1.02 }}>
                <span className="bg-gradient-to-r from-secondary to-primary-light dark:from-secondary-light dark:to-primary-light bg-clip-text text-transparent">
                  Portfolio
                </span>
              </motion.h3>
              <motion.p
                className="text-primary-dark dark:text-accent-cream text-lg leading-relaxed max-w-md opacity-80"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 0.8 }}
                transition={{ delay: 0.3, duration: 0.8 }}>
                Crafting exceptional digital experiences with modern web
                technologies. Let's build something amazing together and push
                the boundaries of creativity.
              </motion.p>
            </div>

            {/* Contact Info */}

            {/* Follow me */}
            {/* Social Media, Theme Toggle & CTA Section */}
            <motion.div variants={itemVariants} className="mt-9">
              <div className="flex flex-col lg:flex-row justify-between items-center space-y-8 lg:space-y-0">
                {/* Social Links & Theme Toggle */}
                <div className="md:flex mid: items-center md:space-x-6">
                  <div className="flex items-center space-x-1">
                    <span className="text-primary-dark font-semibold dark:text-accent-cream mr-4 font-medium opacity-70">
                      Follow me:
                    </span>
                    {[
                      { icon: Github, href: "#", label: "GitHub" },
                      { icon: Linkedin, href: "#", label: "LinkedIn" },
                      { icon: Twitter, href: "#", label: "Twitter" },
                      { icon: Instagram, href: "#", label: "Instagram" },
                    ].map(({ icon: Icon, href, label }, index) => (
                      <motion.a
                        key={label}
                        href={href}
                        variants={socialIconVariants}
                        whileHover={hoverEffect}
                        whileTap={{ scale: 0.9 }}
                        className="w-12 h-12 bg-gradient-to-br from-secondary to-primary dark:from-secondary-light/20 dark:to-primary-light/20 
                             hover:from-secondary/30 hover:to-primary/30 dark:hover:from-secondary-light/30 dark:hover:to-primary-light/30
                             rounded-xl flex items-center justify-center text-accent-cream dark:text-accent-cream 
                             border border-accent-charcoalDark/20 dark:border-accent-cream/10
                             hover:border-secondary/50 dark:hover:border-secondary-light/50 transition-all duration-300
                             hover:shadow-lg hover:shadow-secondary/20 dark:hover:shadow-secondary-light/20"
                        custom={index}
                        aria-label={label}>
                        <Icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>

                  {/* Theme Toggle Button */}
                  <div className="h-8 w-px bg-accent-charcoalDark/20 dark:bg-accent-cream/10"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold text-secondary dark:text-accent-cream mb-6 font-montserrat flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-secondary to-primary-light mr-3 rounded-full"></span>
              Quick Links
            </h4>
            <nav className="space-y-4">
              {["Home", "About", "Portfolio", "Services", "Contact"].map(
                (link, index) => (
                  <motion.a
                    key={link}
                    href={`/#${link.toLowerCase()}`}
                    className="block text-primary-dark font-semibold dark:text-accent-cream opacity-70 hover:opacity-100 hover:text-secondary dark:hover:text-secondary-light transition-all duration-300 group"
                    whileHover={{ x: 10, scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 0.7, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}>
                    <span className="flex items-center space-x-2">
                      <span className="w-1 h-1 bg-secondary dark:bg-secondary-light rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                      <span>{link}</span>
                    </span>
                  </motion.a>
                )
              )}
            </nav>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xl font-semibold text-secondary dark:text-accent-cream mb-6 font-montserrat flex items-center">
              <span className="w-8 h-0.5 bg-gradient-to-r from-primary-light to-secondary mr-3 rounded-full"></span>
              Services
            </h4>
            <div className="space-y-4">
              {[
                "Web Development",
                "UI/UX Design",
                "E-commerce",
                "SEO Optimization",
                "Consultation",
              ].map((service, index) => (
                <motion.div
                  key={service}
                  className="text-primary-dark font-semibold dark:text-accent-cream opacity-70 hover:opacity-100 hover:text-secondary dark:hover:text-secondary-light transition-all duration-300 cursor-pointer group"
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 0.7, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}>
                  <span className="flex items-center space-x-2">
                    <span className="w-1 h-1 bg-secondary dark:bg-secondary-light rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <span>{service}</span>
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        <div className="y-12 border-t border-gray-500 dark:border-accent-cream/10"></div>

        {/* Bottom Bar */}
        <motion.div
          variants={itemVariants}
          className="py-8 border-t border-accent-charcoalDark/20 dark:border-accent-cream/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.p
              className="text-primary-dark dark:text-accent-cream opacity-60 text-center md:text-left md:flex items-center space-x-1 font-inter"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 0.6 }}
              transition={{ delay: 0.6, duration: 0.6 }}>
              <span>&copy; 2024 Portfolio. Made with</span>
              <motion.span
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut",
                }}>
                <Heart className="w-4 h-4 text-accent-red fill-current" />
              </motion.span>
              <span>and passion by</span>
              <span className="text-secondary dark:text-secondary-light font-semibold ml-1">
                Uche Peter Chidubem
              </span>
            </motion.p>

            {/* Back to Top Button */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ y: -3, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative bg-secondary dark:from-primary-light/20 dark:to-secondary-light/20
                       hover:from-primary/30 hover:to-secondary/30 dark:hover:from-primary-light/30 dark:hover:to-secondary-light/30
                       border border-accent-charcoalDark/20 dark:border-accent-cream/10 
                       hover:border-secondary/50 dark:hover:border-secondary-light/50
                       rounded-full p-3 transition-all duration-300 
                       backdrop-blur-sm hover:shadow-lg hover:shadow-secondary/20 dark:hover:shadow-secondary-light/20
                       overflow-hidden"
              aria-label="Back to top">
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              <motion.div
                animate={{ y: [0, -2, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="relative z-10">
                <ArrowUp className="w-5 h-5 text-accent-cream dark:text-accent-cream group-hover:text-secondary dark:group-hover:text-secondary-light transition-colors duration-300" />
              </motion.div>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 2,
              height: Math.random() * 6 + 2,
              background:
                i % 2 === 0
                  ? `rgba(249, 115, 22, ${Math.random() * 0.3 + 0.1})`
                  : `rgba(30, 64, 175, ${Math.random() * 0.3 + 0.1})`,
            }}
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * 600,
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.footer>
  );
};

export default Footer;
