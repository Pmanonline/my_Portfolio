// import React from "react";
// import {
//   Mail,
//   Phone,
//   MapPin,
//   ExternalLink,
//   Github,
//   Linkedin,
//   Download,
//   User,
//   Briefcase,
//   GraduationCap,
//   Award,
//   Languages,
//   Globe,
//   Code,
//   Database,
//   Server,
//   Palette,
// } from "lucide-react";
// import { Navbar } from "@/App";

// interface ContactInfo {
//   email: string;
//   phone: string;
//   location: string;
//   linkedin: string;
//   website: string;
//   github: string;
// }

// interface Experience {
//   company: string;
//   position: string;
//   location: string;
//   duration: string;
//   responsibilities: string[];
//   type?: "full-time" | "freelance" | "internship";
// }

// interface Education {
//   institution: string;
//   degree: string;
//   field: string;
//   location: string;
//   duration: string;
//   gpa?: string;
// }

// interface Certification {
//   name: string;
//   issuer: string;
// }

// const Resume: React.FC = () => {
//   const contactInfo: ContactInfo = {
//     email: "petersonzoconis@gmail.com",
//     phone: "+234-706-291-6027",
//     location: "Lagos, Lagos State, Nigeria",
//     linkedin: "https://www.linkedin.com/in/uche-c-peter/",
//     website: "https://portfolio-website-url.com",
//     github: "https://github.com/pmanonline",
//   };

//   const experiences: Experience[] = [
//     {
//       company: "Essential Nigeria",
//       position: "Full Stack Developer",
//       location: "Lagos, Nigeria",
//       duration: "May 2024 – Present",
//       type: "full-time",
//       responsibilities: [
//         "Develop responsive web services and frontend components using HTML, CSS, JavaScript, React, and Next.js, achieving a 95% error-free deployment rate",
//         "Design and integrate RESTful APIs with Node.js and Express.js for seamless CRUD operations and optimized performance",
//         "Maintain and enhance deployed websites, ensuring alignment with user needs and superior user experiences",
//       ],
//     },
//     {
//       company: "NEA Global",
//       position: "Frontend Developer",
//       location: "Nairobi, Kenya",
//       duration: "October 2023 – April 2024",
//       type: "full-time",
//       responsibilities: [
//         "Built responsive frontend components using HTML, CSS, JavaScript, React, and Next.js, enhancing website functionality and design",
//         "Led a team of developers, conducted code reviews, and mentored juniors to maintain high coding standards",
//         "Collaborated with UI/UX designers to create wireframes and mockups, aligning designs with organizational and user-centric goals",
//       ],
//     },
//     {
//       company: "Diamond Heart Technologies",
//       position: "Frontend Developer",
//       location: "Lagos, Nigeria",
//       duration: "July 2023 – March 2024",
//       type: "freelance",
//       responsibilities: [
//         "Partnered with clients to define project vision, delivering responsive websites using React.js, Next.js, Express.js, and Node.js",
//         "Implemented JWT-based authentication and authorization to enhance website security and user access control",
//         "Conducted audience and competitor research to inform design and development, ensuring project success",
//         "Managed backend tasks, including server setup, database configuration, and business logic implementation",
//       ],
//     },
//     {
//       company: "8th Gear Venture Studio",
//       position: "Frontend Developer Intern",
//       location: "Lagos, Nigeria",
//       duration: "August 2022 – May 2023",
//       type: "internship",
//       responsibilities: [
//         "Collaborated with UI/UX designers to develop wireframes and mockups, building responsive frontend components with React, JavaScript, HTML, and CSS",
//         "Researched target audiences and competitors to guide design decisions, improving project relevance and usability",
//         "Conducted quality checks to ensure websites met standards prior to deployment",
//       ],
//     },
//   ];

//   const education: Education = {
//     institution: "Michael Okpara University of Agriculture, Umudike",
//     degree: "Bachelor of Science",
//     field: "Computer Science",
//     location: "Umuahia, Abia State, Nigeria",
//     duration: "September 2012 – October 2017",
//     gpa: "3.01",
//   };

//   const certifications: Certification[] = [
//     { name: "Jobberman Soft Skills Training", issuer: "Jobberman" },
//     { name: "Web Development Certificate", issuer: "Innkeeper.work" },
//   ];

//   const technicalSkills = {
//     languages: ["JavaScript", "HTML", "CSS", "TypeScript", "C#"],
//     frameworks: [
//       "React.js",
//       "Angular",
//       "Next.js",
//       "Express.js",
//       "Redux",
//       "Bootstrap",
//       "Tailwind CSS",
//       "SASS/SCSS",
//     ],
//     webServices: ["RESTful APIs", "GraphQL"],
//     databases: ["MySQL", "MongoDB"],
//     tools: ["Git/GitHub", "Figma", "Adobe XD", "Postman", "Visual Studio"],
//   };

//   const coreCompetencies = [
//     "Full Stack Development",
//     "UI/UX Design",
//     "Continuous Learning",
//     "Collaboration",
//     "Problem Solving",
//   ];

//   const getExperienceIcon = (type?: string) => {
//     switch (type) {
//       case "internship":
//         return <GraduationCap className="w-4 h-4" />;
//       case "freelance":
//         return <User className="w-4 h-4" />;
//       default:
//         return <Briefcase className="w-4 h-4" />;
//     }
//   };

//   const getExperienceColor = (type?: string) => {
//     switch (type) {
//       case "internship":
//         return "from-blue-500 to-blue-600";
//       case "freelance":
//         return "from-green-500 to-green-600";
//       default:
//         return "from-orange-500 to-orange-600";
//     }
//   };

//   const handleDownload = () => {
//     // Placeholder file path - replace with the actual path or URL of your attached PDF
//     const fileUrl = "/path/to/your-resume.pdf"; // Update this with the correct file path after attaching the PDF
//     const link = document.createElement("a");
//     link.href = fileUrl;
//     link.download = "Peter_Uche_Chidubem_Resume.pdf"; // Customizable file name
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <>
//       <Navbar />
//       <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 mt-12">
//         <div className="max-w-5xl mx-auto p-3">
//           {/* Header Section */}
//           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 mb-8 border border-gray-200 dark:border-gray-700">
//             <div className="text-center mb-6">
//               <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-800 via-orange-500 to-blue-500 dark:from-blue-200 dark:via-orange-400 dark:to-blue-300 bg-clip-text text-transparent mb-2 sm:mb-3">
//                 Peter Uche Chidubem
//               </h1>
//               <p className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 font-semibold mb-4 sm:mb-5">
//                 Full Stack Web Developer
//               </p>

//               {/* Contact Information */}
//               <div className="grid   grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm sm:text-base">
//                 <div className="flex    items-center md:justify-center space-x-2">
//                   <Mail className="w-4 h-4 text-orange-500" />
//                   <a
//                     href={`mailto:${contactInfo.email}`}
//                     className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">
//                     {contactInfo.email}
//                   </a>
//                 </div>
//                 <div className="flex    items-center md:justify-center space-x-2">
//                   <Phone className="w-4 h-4 text-orange-500" />
//                   <span className="text-gray-600 dark:text-gray-300">
//                     {contactInfo.phone}
//                   </span>
//                 </div>
//                 <div className="flex    items-center md:justify-center space-x-2">
//                   <MapPin className="w-4 h-4 text-orange-500" />
//                   <span className="text-gray-600 dark:text-gray-300">
//                     {contactInfo.location}
//                   </span>
//                 </div>
//                 <div className="flex    items-center md:justify-center space-x-2">
//                   <Linkedin className="w-4 h-4 text-orange-500" />
//                   <a
//                     href={contactInfo.linkedin}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">
//                     LinkedIn Profile
//                   </a>
//                 </div>
//                 <div className="flex    items-center md:justify-center space-x-2">
//                   <Globe className="w-4 h-4 text-orange-500" />
//                   <a
//                     href={contactInfo.website}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">
//                     Portfolio Website
//                   </a>
//                 </div>
//                 <div className="flex    items-center md:justify-center space-x-2">
//                   <Github className="w-4 h-4 text-orange-500" />
//                   <a
//                     href={contactInfo.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">
//                     GitHub
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Career Summary */}
//             <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
//               <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
//                 <User className="w-5 h-5 text-orange-500 mr-2" />
//                 Career Summary
//               </h3>
//               <div className="mb-4">
//                 <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-2 sm:mb-3">
//                   <span className="font-semibold">Career Goal:</span> Leverage
//                   my expertise in full stack development to create seamless,
//                   user-focused websites and applications while continuously
//                   enhancing my skills in frontend technologies.
//                 </p>
//                 <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
//                   I am a dedicated Full Stack Web Developer with proficiency in
//                   frontend and backend technologies. I specialize in building
//                   visually appealing, high-performance solutions, thrive in
//                   collaborative settings, and stay ahead of industry trends to
//                   deliver impactful results that drive business success.
//                 </p>
//               </div>
//             </div>

//             {/* Core Competencies */}
//             <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
//               <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
//                 Core Competencies
//               </h3>
//               <div className="flex flex-wrap gap-2">
//                 {coreCompetencies.map((skill, index) => (
//                   <span
//                     key={index}
//                     className="px-3 py-1 bg-gradient-to-r from-orange-100 to-blue-100 dark:from-orange-900/20 dark:to-blue-900/20 text-orange-600 dark:text-orange-400 rounded-full text-base sm:text-lg font-medium">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Technical Skills */}
//           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 flex items-center">
//               <Code className="w-6 h-6 text-orange-500 mr-3" />
//               Technical Skills
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div>
//                 <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center">
//                   <Code className="w-4 h-4 text-orange-500 mr-2" />
//                   Languages
//                 </h4>
//                 <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
//                   {technicalSkills.languages.map((lang, index) => (
//                     <span
//                       key={index}
//                       className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-base sm:text-lg">
//                       {lang}
//                     </span>
//                   ))}
//                 </div>

//                 <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center">
//                   <Server className="w-4 h-4 text-orange-500 mr-2" />
//                   Web Services
//                 </h4>
//                 <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
//                   {technicalSkills.webServices.map((service, index) => (
//                     <span
//                       key={index}
//                       className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-base sm:text-lg">
//                       {service}
//                     </span>
//                   ))}
//                 </div>
//               </div>

//               <div>
//                 <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center">
//                   <Palette className="w-4 h-4 text-orange-500 mr-2" />
//                   Frameworks & Libraries
//                 </h4>
//                 <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
//                   {technicalSkills.frameworks.map((framework, index) => (
//                     <span
//                       key={index}
//                       className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-base sm:text-lg">
//                       {framework}
//                     </span>
//                   ))}
//                 </div>

//                 <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center">
//                   <Database className="w-4 h-4 text-orange-500 mr-2" />
//                   Databases & Tools
//                 </h4>
//                 <div className="flex flex-wrap gap-2">
//                   {[...technicalSkills.databases, ...technicalSkills.tools].map(
//                     (tool, index) => (
//                       <span
//                         key={index}
//                         className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-base sm:text-lg">
//                         {tool}
//                       </span>
//                     )
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Professional Experience */}
//           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 flex items-center">
//               <Briefcase className="w-12 h-12 text-orange-500 mr-3" />
//               Professional Experience
//             </h2>

//             <div className="space-y-8">
//               {experiences.map((exp, index) => (
//                 <div key={index} className="relative">
//                   {index !== experiences.length - 1 && (
//                     <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
//                   )}

//                   <div className="flex items-start space-x-4">
//                     <div
//                       className={`w-6 h-6 bg-gradient-to-br ${getExperienceColor(
//                         exp.type
//                       )} rounded-lg flex items-center justify-center flex-shrink-0`}>
//                       {getExperienceIcon(exp.type)}
//                     </div>

//                     <div className="flex-1">
//                       <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 sm:mb-3">
//                         <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
//                           {exp.position}
//                         </h3>
//                         <span className="text-base sm:text-lg text-gray-500 dark:text-gray-400 font-medium">
//                           {exp.duration}
//                         </span>
//                       </div>

//                       <p className="text-lg sm:text-xl text-orange-600 dark:text-orange-400 font-medium mb-1 sm:mb-2">
//                         {exp.company}
//                       </p>
//                       <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-3 flex items-center">
//                         <MapPin className="w-3 h-3 mr-1" />
//                         {exp.location}
//                         {exp.type && (
//                           <span className="ml-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm capitalize">
//                             {exp.type.replace("-", " ")}
//                           </span>
//                         )}
//                       </p>

//                       <ul className="space-y-2">
//                         {exp.responsibilities.map((responsibility, idx) => (
//                           <li
//                             key={idx}
//                             className="flex items-start space-x-2 text-base sm:text-lg text-gray-600 dark:text-gray-300">
//                             <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
//                             <span>{responsibility}</span>
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Education */}
//           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 flex items-center">
//               <GraduationCap className="w-6 h-6 text-orange-500 mr-3" />
//               Education
//             </h2>

//             <div className="flex items-start space-x-4">
//               <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
//                 <GraduationCap className="w-6 h-6 text-white" />
//               </div>

//               <div className="flex-1">
//                 <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
//                   {education.degree} in {education.field}
//                 </h3>
//                 <p className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-medium mb-1 sm:mb-2">
//                   {education.institution}
//                 </p>
//                 <div className="flex flex-col md:flex-row md:items-center md:justify-between text-base sm:text-lg text-gray-500 dark:text-gray-400">
//                   <p className="flex items-center mb-1 md:mb-0">
//                     <MapPin className="w-3 h-3 mr-1" />
//                     {education.location}
//                   </p>
//                   <p>{education.duration}</p>
//                 </div>
//                 {education.gpa && (
//                   <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-2 sm:mt-3">
//                     <span className="font-semibold">CGPA:</span> {education.gpa}{" "}
//                     (Grading Scale: F to A)
//                   </p>
//                 )}
//               </div>
//             </div>
//           </div>

//           {/* Certifications */}
//           <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
//             <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 flex items-center">
//               <Award className="w-6 h-6 text-orange-500 mr-3" />
//               Certifications
//             </h2>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               {certifications.map((cert, index) => (
//                 <div
//                   key={index}
//                   className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
//                   <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
//                     <Award className="w-4 h-4 text-white" />
//                   </div>
//                   <div>
//                     <p className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
//                       {cert.name}
//                     </p>
//                     <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
//                       {cert.issuer}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Languages & References */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Languages */}
//             <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
//               <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 flex items-center">
//                 <Languages className="w-6 h-6 text-orange-500 mr-3" />
//                 Languages
//               </h2>
//               <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
//                 English (Fluent)
//               </p>
//             </div>

//             {/* References */}
//             <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
//               <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 flex items-center">
//                 <ExternalLink className="w-6 h-6 text-orange-500 mr-3" />
//                 References
//               </h2>
//               <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
//                 Available on request.
//               </p>
//             </div>
//           </div>

//           {/* Download Button */}
//           <div className="text-center mt-8">
//             <button
//               onClick={handleDownload}
//               className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
//               <Download className="w-5 h-5 mr-2" />
//               Download Resume
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Resume;

import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Download,
  User,
  Briefcase,
  GraduationCap,
  Award,
  Languages,
  Globe,
  Code,
  Database,
  Server,
  Palette,
} from "lucide-react";
import { Navbar } from "@/App";

interface ContactInfo {
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  website: string;
  github: string;
}

interface Experience {
  company: string;
  position: string;
  location: string;
  duration: string;
  responsibilities: string[];
  type?: "full-time" | "freelance" | "internship";
}

interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  duration: string;
  gpa?: string;
}

interface Certification {
  name: string;
  issuer: string;
}

const Resume: React.FC = () => {
  const contactInfo: ContactInfo = {
    email: "petersonzoconis@gmail.com",
    phone: "+234-706-291-6027",
    location: "Lagos, Lagos State, Nigeria",
    linkedin: "https://www.linkedin.com/in/uche-c-peter/",
    website: "https://portfolio-website-url.com",
    github: "https://github.com/pmanonline",
  };

  const experiences: Experience[] = [
    {
      company: "Essential Nigeria",
      position: "Full Stack Developer",
      location: "Lagos, Nigeria",
      duration: "May 2024 – Present",
      type: "full-time",
      responsibilities: [
        "Develop responsive web services and frontend components using HTML, CSS, JavaScript, React, and Next.js, achieving a 95% error-free deployment rate",
        "Design and integrate RESTful APIs with Node.js and Express.js for seamless CRUD operations and optimized performance",
        "Maintain and enhance deployed websites, ensuring alignment with user needs and superior user experiences",
      ],
    },
    {
      company: "NEA Global",
      position: "Frontend Developer",
      location: "Nairobi, Kenya",
      duration: "October 2023 – April 2024",
      type: "full-time",
      responsibilities: [
        "Built responsive frontend components using HTML, CSS, JavaScript, React, and Next.js, enhancing website functionality and design",
        "Led a team of developers, conducted code reviews, and mentored juniors to maintain high coding standards",
        "Collaborated with UI/UX designers to create wireframes and mockups, aligning designs with organizational and user-centric goals",
      ],
    },
    {
      company: "Diamond Heart Technologies",
      position: "Frontend Developer",
      location: "Lagos, Nigeria",
      duration: "July 2023 – March 2024",
      type: "freelance",
      responsibilities: [
        "Partnered with clients to define project vision, delivering responsive websites using React.js, Next.js, Express.js, and Node.js",
        "Implemented JWT-based authentication and authorization to enhance website security and user access control",
        "Conducted audience and competitor research to inform design and development, ensuring project success",
        "Managed backend tasks, including server setup, database configuration, and business logic implementation",
      ],
    },
    {
      company: "8th Gear Venture Studio",
      position: "Frontend Developer Intern",
      location: "Lagos, Nigeria",
      duration: "August 2022 – May 2023",
      type: "internship",
      responsibilities: [
        "Collaborated with UI/UX designers to develop wireframes and mockups, building responsive frontend components with React, JavaScript, HTML, and CSS",
        "Researched target audiences and competitors to guide design decisions, improving project relevance and usability",
        "Conducted quality checks to ensure websites met standards prior to deployment",
      ],
    },
  ];

  const education: Education = {
    institution: "Michael Okpara University of Agriculture, Umudike",
    degree: "Bachelor of Science",
    field: "Computer Science",
    location: "Umuahia, Abia State, Nigeria",
    duration: "September 2012 – October 2017",
    gpa: "3.01",
  };

  const certifications: Certification[] = [
    { name: "Jobberman Soft Skills Training", issuer: "Jobberman" },
    { name: "Web Development Certificate", issuer: "Innkeeper.work" },
  ];

  const technicalSkills = {
    languages: ["JavaScript", "HTML", "CSS", "TypeScript", "C#"],
    frameworks: [
      "React.js",
      "Angular",
      "Next.js",
      "Express.js",
      "Redux",
      "Bootstrap",
      "Tailwind CSS",
      "SASS/SCSS",
    ],
    webServices: ["RESTful APIs", "GraphQL"],
    databases: ["MySQL", "MongoDB"],
    tools: ["Git/GitHub", "Figma", "Adobe XD", "Postman", "Visual Studio"],
  };

  const coreCompetencies = [
    "Full Stack Development",
    "UI/UX Design",
    "Continuous Learning",
    "Collaboration",
    "Problem Solving",
  ];

  const getExperienceIcon = (type?: string) => {
    switch (type) {
      case "internship":
        return <GraduationCap className="w-4 h-4" />;
      case "freelance":
        return <User className="w-4 h-4" />;
      default:
        return <Briefcase className="w-4 h-4" />;
    }
  };

  const getExperienceColor = (type?: string) => {
    switch (type) {
      case "internship":
        return "from-blue-500 to-blue-600";
      case "freelance":
        return "from-green-500 to-green-600";
      default:
        return "from-orange-500 to-orange-600";
    }
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    // Placeholder file path - replace with the actual path or URL of your attached PDF
    const fileUrl = "/path/to/your-resume.pdf"; // Update this with the correct file path after attaching the PDF
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Peter_Uche_Chidubem_Resume.pdf"; // Customizable file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8 mt-12">
        <div className="max-w-5xl mx-auto p-3">
          {/* Header Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-5 mb-8 border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-6">
              <h1 className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-800 via-orange-500 to-blue-500 dark:from-blue-200 dark:via-orange-400 dark:to-blue-300 bg-clip-text text-transparent mb-2 sm:mb-3">
                Peter Uche Chidubem
              </h1>
              <p className="text-2xl sm:text-3xl text-gray-600 dark:text-gray-300 font-semibold mb-4 sm:mb-5">
                Full Stack Web Developer
              </p>

              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm sm:text-base">
                <div className="flex items-center md:justify-center space-x-2">
                  <Mail className="w-4 h-4 text-orange-500" />
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">
                    {contactInfo.email}
                  </a>
                </div>
                <div className="flex items-center md:justify-center space-x-2">
                  <Phone className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {contactInfo.phone}
                  </span>
                </div>
                <div className="flex items-center md:justify-center space-x-2">
                  <MapPin className="w-4 h-4 text-orange-500" />
                  <span className="text-gray-600 dark:text-gray-300">
                    {contactInfo.location}
                  </span>
                </div>
                <div className="flex items-center md:justify-center space-x-2">
                  <Linkedin className="w-4 h-4 text-orange-500" />
                  <a
                    href={contactInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center md:justify-center space-x-2">
                  <Globe className="w-4 h-4 text-orange-500" />
                  <a
                    href={contactInfo.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">
                    Portfolio Website
                  </a>
                </div>
                <div className="flex items-center md:justify-center space-x-2">
                  <Github className="w-4 h-4 text-orange-500" />
                  <a
                    href={contactInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-300 hover:text-orange-500 transition-colors">
                    GitHub
                  </a>
                </div>
              </div>
            </div>

            {/* Career Summary */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center">
                <User className="w-5 h-5 text-orange-500 mr-2" />
                Career Summary
              </h3>
              <div className="mb-4">
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-2 sm:mb-3">
                  <span className="font-semibold">Career Goal:</span> Leverage
                  my expertise in full stack development to create seamless,
                  user-focused websites and applications while continuously
                  enhancing my skills in frontend technologies.
                </p>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                  I am a dedicated Full Stack Web Developer with proficiency in
                  frontend and backend technologies. I specialize in building
                  visually appealing, high-performance solutions, thrive in
                  collaborative settings, and stay ahead of industry trends to
                  deliver impactful results that drive business success.
                </p>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                Core Competencies
              </h3>
              <div className="flex flex-wrap gap-2">
                {coreCompetencies.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gradient-to-r from-orange-100 to-blue-100 dark:from-orange-900/20 dark:to-blue-900/20 text-orange-600 dark:text-orange-400 rounded-full text-base sm:text-lg font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 flex items-center">
              <Code className="w-6 h-6 text-orange-500 mr-3" />
              Technical Skills
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center">
                  <Code className="w-4 h-4 text-orange-500 mr-2" />
                  Languages
                </h4>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {technicalSkills.languages.map((lang, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-base sm:text-lg">
                      {lang}
                    </span>
                  ))}
                </div>

                <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center">
                  <Server className="w-4 h-4 text-orange-500 mr-2" />
                  Web Services
                </h4>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {technicalSkills.webServices.map((service, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-base sm:text-lg">
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center">
                  <Palette className="w-4 h-4 text-orange-500 mr-2" />
                  Frameworks & Libraries
                </h4>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {technicalSkills.frameworks.map((framework, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-base sm:text-lg">
                      {framework}
                    </span>
                  ))}
                </div>

                <h4 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3 flex items-center">
                  <Database className="w-4 h-4 text-orange-500 mr-2" />
                  Databases & Tools
                </h4>
                <div className="flex flex-wrap gap-2">
                  {[...technicalSkills.databases, ...technicalSkills.tools].map(
                    (tool, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-base sm:text-lg">
                        {tool}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Professional Experience */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 flex items-center">
              <Briefcase className="w-12 h-12 text-orange-500 mr-3" />
              Professional Experience
            </h2>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {index !== experiences.length - 1 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
                  )}

                  <div className="flex items-start space-x-4">
                    <div
                      className={`w-6 h-6 bg-gradient-to-br ${getExperienceColor(
                        exp.type
                      )} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      {getExperienceIcon(exp.type)}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2 sm:mb-3">
                        <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                          {exp.position}
                        </h3>
                        <span className="text-base sm:text-lg text-gray-500 dark:text-gray-400 font-medium">
                          {exp.duration}
                        </span>
                      </div>

                      <p className="text-lg sm:text-xl text-orange-600 dark:text-orange-400 font-medium mb-1 sm:mb-2">
                        {exp.company}
                      </p>
                      <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400 mb-3 flex items-center">
                        <MapPin className="w-3 h-3 mr-1" />
                        {exp.location}
                        {exp.type && (
                          <span className="ml-2 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-sm capitalize">
                            {exp.type.replace("-", " ")}
                          </span>
                        )}
                      </p>

                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li
                            key={idx}
                            className="flex items-start space-x-2 text-base sm:text-lg text-gray-600 dark:text-gray-300">
                            <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 text-orange-500 mr-3" />
              Education
            </h2>

            <div className="flex items-start space-x-4">
              <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white mb-1 sm:mb-2">
                  {education.degree} in {education.field}
                </h3>
                <p className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-medium mb-1 sm:mb-2">
                  {education.institution}
                </p>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between text-base sm:text-lg text-gray-500 dark:text-gray-400">
                  <p className="flex items-center mb-1 md:mb-0">
                    <MapPin className="w-3 h-3 mr-1" />
                    {education.location}
                  </p>
                  <p>{education.duration}</p>
                </div>
                {education.gpa && (
                  <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mt-2 sm:mt-3">
                    <span className="font-semibold">CGPA:</span> {education.gpa}{" "}
                    (Grading Scale: F to A)
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 flex items-center">
              <Award className="w-6 h-6 text-orange-500 mr-3" />
              Certifications
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-4 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <p className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                      {cert.name}
                    </p>
                    <p className="text-base sm:text-lg text-gray-500 dark:text-gray-400">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages & References */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Languages */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 flex items-center">
                <Languages className="w-6 h-6 text-orange-500 mr-3" />
                Languages
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                English (Fluent)
              </p>
            </div>

            {/* References */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 border border-gray-200 dark:border-gray-700">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6 sm:mb-8 flex items-center">
                <ExternalLink className="w-6 h-6 text-orange-500 mr-3" />
                References
              </h2>
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
                Available on request.
              </p>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center mt-8">
            <button
              onClick={openModal}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </button>
          </div>

          {/* Download Confirmation Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center">
                  Confirm Download
                </h3>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 text-center">
                  Are you sure you want to download your resume?
                </p>
                <div className="flex justify-center space-x-4">
                  <button
                    onClick={closeModal}
                    className="px-6 py-2 bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg hover:bg-gray-400 dark:hover:bg-gray-600 transition-colors">
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      handleDownload();
                      closeModal();
                    }}
                    className="px-6 py-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    Download
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Resume;
