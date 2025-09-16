import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Palette,
  Server,
  MapPin,
  Mail,
  Phone,
  Calendar,
  GraduationCap,
  Briefcase,
  Star,
  CheckCircle,
  ArrowRight,
  User,
  Award,
  Target,
} from "lucide-react";

const About: React.FC = () => {
  const skills = [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "Angular"],
      icon: Code,
      color: "from-blue-500 to-cyan-500",
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "RESTful APIs", "GraphQL", "C#"],
      icon: Server,
      color: "from-green-500 to-emerald-500",
    },
    {
      category: "Design & Tools",
      items: ["UI/UX Design", "Figma", "Adobe XD", "Git/GitHub", "MongoDB"],
      icon: Palette,
      color: "from-purple-500 to-pink-500",
    },
  ];

  const achievements = [
    {
      metric: "95%",
      label: "Error-free Deployment Rate",
      icon: CheckCircle,
    },
    {
      metric: "3+",
      label: "Years Experience",
      icon: Calendar,
    },
    {
      metric: "50+",
      label: "Projects Completed",
      icon: Award,
    },
    {
      metric: "100%",
      label: "Client Satisfaction",
      icon: Star,
    },
  ];

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Essential Nigeria",
      period: "May 2024 – Present",
      location: "Lagos, Nigeria",
      type: "Full-time",
    },
    {
      title: "Frontend Developer",
      company: "NEA Global",
      period: "Oct 2023 – Apr 2024",
      location: "Nairobi, Kenya",
      type: "Full-time",
    },
    {
      title: "Frontend Developer",
      company: "Diamond Heart Technologies",
      period: "Jul 2023 – Mar 2024",
      location: "Lagos, Nigeria",
      type: "Freelance",
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

  const cardVariants = {
    hidden: { scale: 0.95, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="relative py-8 md:py-10 lg:py-12 bg-accent-cream dark:bg-primary-customDark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-secondary/8 to-primary/8 dark:from-secondary/4 dark:to-primary/4 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-primary/8 to-secondary/8 dark:from-primary/4 dark:to-secondary/4 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-secondary/4 to-primary/4 dark:from-secondary/2 dark:to-primary/2 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-primary/3 to-transparent dark:via-primary/2 opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, rgba(249, 115, 22, 0.08) 2px, transparent 2px)`,
              backgroundSize: "60px 60px",
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
            className="text-center mb-6 md:mb-8">
            <div className="inline-flex items-center justify-center space-x-3 mb-3">
              <div className="w-6 md:w-8 h-0.5 bg-gradient-to-r from-secondary to-primary rounded-full"></div>
              <span className="text-secondary dark:text-secondary-light text-xs md:text-sm font-bold tracking-widest uppercase">
                About Me
              </span>
              <div className="w-6 md:w-8 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full"></div>
            </div>

            <motion.h2
              className="text-2xl md:text-3xl lg:text-4xl font-bold font-montserrat mb-2"
              whileHover={{ scale: 1.02 }}>
              <span className="bg-gradient-to-r from-primary-dark via-secondary to-primary dark:from-accent-cream dark:via-primary-light dark:to-secondary-light bg-clip-text text-transparent">
                Meet Peter Chidubem
              </span>
            </motion.h2>

            <p className="text-base md:text-lg text-primary-dark/70 dark:text-accent-cream/70 max-w-2xl mx-auto leading-relaxed">
              Full Stack Web Developer passionate about creating exceptional
              digital experiences
            </p>
          </motion.div>

          {/* Hero Section with Image */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-10">
            <div className="bg-white dark:bg-accent-creamDark/10 rounded-xl md:rounded-2xl p-4 md:p-6 lg:p-8 border border-gray-200 dark:border-accent-cream/10 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300">
              <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6">
                {/* Image */}
                <motion.div
                  className="w-full lg:w-1/3 flex justify-center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}>
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-xl transform rotate-3"></div>
                    <img
                      src="https://previews.123rf.com/images/artursz/artursz1807/artursz180700445/103872681-word-writing-text-my-portfolio-motivational-call-business-concept-for-samples-of-work-art-drawings.jpg"
                      loading="lazy"
                      alt="Peter Chidubem Portfolio"
                      className="relative rounded-xl shadow-md object-cover w-full max-w-xs h-48 md:h-56 border-4 border-white dark:border-accent-cream/20 hover:shadow-xl transition-all duration-300"
                    />
                    <div className="absolute -bottom-3 -right-3 w-12 h-12 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center shadow-md">
                      <User className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="w-full lg:w-2/3 text-center lg:text-left">
                  <div className="inline-flex items-center justify-center lg:justify-start space-x-2 mb-2">
                    <Target className="w-4 h-4 text-secondary dark:text-secondary-light" />
                    <span className="text-xs font-semibold text-secondary dark:text-secondary-light tracking-wide uppercase">
                      Full Stack Developer
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-dark dark:text-accent-cream mb-4">
                    Uche Peter Chidubem
                  </h3>

                  <p className="text-sm md:text-base text-primary-dark/80 dark:text-accent-cream/80 leading-relaxed mb-4">
                    I am a dedicated Full Stack Web Developer with proficiency
                    in frontend and backend technologies. I specialize in
                    building visually appealing, high-performance solutions,
                    thrive in collaborative settings, and stay ahead of industry
                    trends to deliver impactful results that drive business
                    success.
                  </p>

                  <p className="text-sm md:text-base text-primary-dark/80 dark:text-accent-cream/80 leading-relaxed mb-6">
                    My expertise spans across modern web technologies including
                    React.js, Next.js, TypeScript, and Node.js. I'm passionate
                    about creating seamless user experiences and continuously
                    enhancing my skills to stay at the forefront of web
                    development.
                  </p>

                  {/* Contact Info Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
                    <div className="flex items-center justify-center mid:justify-start lg:justify-start space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center ">
                        <MapPin className="w-4 h-4 text-secondary dark:text-secondary-light" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Location
                        </p>
                        <p className="font-medium text-primary-dark dark:text-accent-cream text-sm">
                          Lagos, Nigeria
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center mid:justify-start lg:justify-start space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center">
                        <Phone className="w-4 h-4 text-secondary dark:text-secondary-light" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Phone
                        </p>
                        <p className="font-medium text-primary-dark dark:text-accent-cream text-sm">
                          +234-706-291-6027
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-center mid:justify-start lg:justify-start space-x-2 sm:col-span-2 lg:col-span-1">
                      <div className="w-8 h-8 bg-gradient-to-br from-secondary/20 to-primary/20 rounded-lg flex items-center justify-center">
                        <Mail className="w-4 h-4 text-secondary dark:text-secondary-light" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Email
                        </p>
                        <p className="font-medium text-primary-dark dark:text-accent-cream text-sm break-all">
                          petersonzoconis@gmail.com
                        </p>
                      </div>
                    </div>
                  </div>

                  <motion.a
                    href="/resume"
                    whileHover={{
                      scale: 1.05,
                      boxShadow: "0 10px 25px rgba(249, 115, 22, 0.3)",
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-light hover:to-secondary-dark text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 inline-flex items-center space-x-2 shadow-md">
                    <span>View Full CV</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div variants={itemVariants} className="mb-8 md:mb-10">
            <div className="text-center mb-5 md:mb-6">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-dark dark:text-accent-cream mb-2">
                Technical Expertise
              </h3>
              <p className="text-sm md:text-base text-primary-dark/70 dark:text-accent-cream/70 max-w-2xl mx-auto">
                Comprehensive skill set spanning modern web technologies and
                development practices
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-5 lg:gap-6">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ y: -6, scale: 1.02 }}
                  className="bg-white dark:bg-accent-creamDark/10 rounded-xl p-4 md:p-6 lg:p-7 border border-gray-200 dark:border-accent-cream/10 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
                  {/* Card Header */}
                  <div className="flex items-center mb-3 md:mb-4">
                    <div
                      className={`w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br ${skillGroup.color} rounded-lg flex items-center justify-center mr-3 md:mr-4 shadow-md`}>
                      <skillGroup.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                    </div>
                    <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-primary-dark dark:text-accent-cream">
                      {skillGroup.category}
                    </h4>
                  </div>

                  {/* Skill Items */}
                  <div className="space-y-2 md:space-y-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="flex items-center space-x-2"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1, duration: 0.3 }}>
                        <div className="w-2 h-2 md:w-2.5 md:h-2.5 bg-secondary dark:bg-secondary-light rounded-full flex-shrink-0"></div>
                        <span className="text-sm md:text-base text-primary-dark/80 dark:text-accent-cream/80 font-medium">
                          {skill}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-12 md:mb-16 py-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
            <div className="text-center mb-8 md:mb-12 max-w-4xl mx-auto px-4">
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white mb-3 bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent">
                Key Achievements
              </h3>
              <p className="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                A proven track record of delivering excellence and innovation in
                web development.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 md:px-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -8, scale: 1.05 }}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-orange-100 to-blue-100 dark:from-gray-700/50 dark:to-gray-800 flex items-center justify-center">
                      <achievement.icon className="w-8 h-8 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                      {achievement.metric}
                    </div>
                    <div className="text-sm md:text-base text-gray-500 dark:text-gray-400 text-center max-w-[150px]">
                      {achievement.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-secondary/5 to-primary/5 dark:from-secondary/8 dark:to-primary/8 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 border border-secondary/20 dark:border-secondary-light/20">
            <div className="max-w-3xl mx-auto">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-dark dark:text-accent-cream mb-3 md:mb-4">
                Let's Build Something Amazing Together
              </h3>

              <p className="text-sm md:text-base lg:text-lg text-primary-dark/80 dark:text-accent-cream/80 mb-6 md:mb-8 leading-relaxed">
                Ready to transform your ideas into exceptional digital
                experiences? I'm passionate about collaborating on innovative
                projects that make a real impact.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 15px 30px rgba(249, 115, 22, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-secondary to-secondary-dark hover:from-secondary-light hover:to-secondary-dark text-white px-6 py-3 rounded-lg font-semibold text-base shadow-lg transition-all duration-300 inline-flex items-center space-x-2">
                  <span>Start a Project</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-secondary dark:border-secondary-light text-secondary dark:text-secondary-light hover:bg-secondary hover:text-white dark:hover:bg-secondary-light dark:hover:text-primary-dark px-6 py-3 rounded-lg font-semibold text-base transition-all duration-300 inline-flex items-center space-x-2">
                  <span>View Portfolio</span>
                  <Briefcase className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: Math.random() * 6 + 3,
              height: Math.random() * 6 + 3,
              background:
                i % 2 === 0
                  ? `rgba(249, 115, 22, ${Math.random() * 0.2 + 0.1})`
                  : `rgba(30, 64, 175, ${Math.random() * 0.2 + 0.1})`,
            }}
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1200),
              y: Math.random() * 1000,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 1.3, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default About;
