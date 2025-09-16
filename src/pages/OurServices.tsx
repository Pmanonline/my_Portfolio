import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Server,
  ArrowRight,
  Wrench,
  Zap,
  Globe,
  Database,
} from "lucide-react";

const OurServices: React.FC = () => {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Building responsive, interactive user interfaces with React.js, Next.js, and modern CSS frameworks for exceptional user experiences.",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Backend Development",
      description:
        "Developing robust server-side solutions with Node.js, Express.js, RESTful APIs, and database integration for scalable applications.",
      icon: Server,
      color: "from-green-500 to-emerald-500",
    },
    {
      title: "Code Modernization",
      description:
        "Upgrading legacy systems to modern frameworks, improving performance, and implementing best practices for future-ready applications.",
      icon: Zap,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Application Maintenance",
      description:
        "Ongoing support, bug fixes, performance optimization, and feature updates to keep your applications running smoothly.",
      icon: Wrench,
      color: "from-orange-500 to-red-500",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const hexVariants = {
    hidden: { scale: 0.8, opacity: 0, rotate: -10 },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="services"
      className="relative py-6 bg-gray-50 dark:bg-primary-customDark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-secondary/8 to-primary/8 dark:from-secondary/4 dark:to-primary/4 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-primary/8 to-secondary/8 dark:from-primary/4 dark:to-secondary/4 rounded-full blur-3xl" />

        {/* Hexagonal grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/3 to-transparent dark:via-primary/2 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60' viewBox='0 0 60 60'%3E%3Cpath d='M30 0l15 8.66v17.32L30 34.64 15 25.98V8.66z' fill='none' stroke='rgba(249,115,22,0.1)' stroke-width='1'/%3E%3C/svg%3E")`,
              backgroundSize: "60px 52px",
            }}
          />
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}>
          {/* Section Header */}
          <motion.div
            variants={itemVariants}
            className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center space-x-3 mb-6">
              <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
              <span className="text-secondary dark:text-secondary-light text-xs md:text-sm font-bold tracking-widest uppercase">
                Services
              </span>
              <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-montserrat mb-4">
              <span className="bg-gradient-to-r from-primary-dark via-secondary to-primary dark:from-accent-cream dark:via-primary-light dark:to-secondary-light bg-clip-text text-transparent">
                What I Offer
              </span>
            </h2>

            <p className="text-lg md:text-xl text-primary-dark/70 dark:text-accent-cream/70 max-w-3xl mx-auto leading-relaxed">
              Comprehensive web development services tailored to bring your
              digital vision to life
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div variants={itemVariants} className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={hexVariants}
                  whileHover={{
                    y: -12,
                    scale: 1.05,
                    rotateY: 5,
                  }}
                  className="relative group">
                  {/* Hexagonal Card Container */}
                  <div className="relative">
                    {/* Hexagonal Background */}
                    <div
                      className="relative bg-white dark:bg-accent-creamDark/10 border border-gray-200 dark:border-accent-cream/10 backdrop-blur-sm hover:shadow-2xl transition-all duration-500 p-8 md:p-10"
                      style={{
                        clipPath:
                          "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                        minHeight: "280px",
                      }}>
                      {/* Content positioned to work with hex shape */}
                      <div className="flex flex-col items-center text-center h-full justify-center space-y-4 px-4">
                        {/* Icon */}
                        <motion.div
                          className={`w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.8 }}>
                          <service.icon className="w-8 h-8 md:w-10 md:h-10 text-white" />
                        </motion.div>

                        {/* Title */}
                        <h3 className="text-lg md:text-xl font-bold text-primary-dark dark:text-accent-cream leading-tight">
                          {service.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm md:text-base text-primary-dark/80 dark:text-accent-cream/80 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Learn More Link */}
                        <motion.div
                          className="inline-flex items-center text-secondary dark:text-secondary-light hover:text-secondary-dark dark:hover:text-secondary-light font-semibold text-sm transition-colors duration-300 opacity-0 group-hover:opacity-100"
                          whileHover={{ x: 5 }}
                          whileTap={{ scale: 0.98 }}>
                          Learn More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </motion.div>
                      </div>
                    </div>

                    {/* Hexagonal Shadow/Border Effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 transform translate-x-1 translate-y-1`}
                      style={{
                        clipPath:
                          "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                      }}></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Hexagonal Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              width: Math.random() * 12 + 8,
              height: Math.random() * 12 + 8,
              background:
                i % 2 === 0
                  ? `rgba(249, 115, 22, ${Math.random() * 0.2 + 0.1})`
                  : `rgba(30, 64, 175, ${Math.random() * 0.2 + 0.1})`,
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * 1000,
              rotate: 0,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 50 - 25, 0],
              rotate: [0, 360, 0],
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 12 + Math.random() * 6,
              repeat: Infinity,
              delay: Math.random() * 8,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default OurServices;
