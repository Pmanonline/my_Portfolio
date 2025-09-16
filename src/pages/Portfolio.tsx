import React, { useState } from "react";
import {
  ExternalLink,
  Github,
  Eye,
  Filter,
  LayoutGrid,
  List,
  Calendar,
  Tag,
  Star,
  Heart,
  Share2,
  Download,
  Code,
  Palette,
  Smartphone,
  Globe,
  Database,
  Server,
  ArrowRight,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import edirectImage1 from "../assets/images/edirect1.png";
import edirectImage2 from "../assets/images/edirect2.png";
import edirectImage3 from "../assets/images/edirect3.png";
// Credulen
import Credulen1 from "../assets/images/credulen1.png";
import Credulen2 from "../assets/images/credulen2.png";
import Credulen3 from "../assets/images/credulen3.png";
// Evenue
import Evenue1 from "../assets/images/evenue1.png";
import Evenue2 from "../assets/images/evenue2.png";
import Evenue3 from "../assets/images/evenue3.png";

// theAutograph
import Autograph1 from "../assets/images/autograph1.png";
import Autograph2 from "../assets/images/autograph2.png";
import Autograph3 from "../assets/images/autograph3.png";

interface Category {
  id: string;
  label: string;
  count: number;
}

interface Technology {
  name: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
  technologies: string[];
  images: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  status: string;
  date: string;
  client: string;
  duration: string;
  likes: number;
  shares: number;
  color: string;
}

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const [viewMode, setViewMode] = useState<string>("grid");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  const categories: Category[] = [
    { id: "all", label: "All Projects", count: 12 },
    { id: "web", label: "Web Apps", count: 6 },
    { id: "frontend", label: "Frontend", count: 3 },
    { id: "ui-ux", label: "UI/UX", count: 2 },
    { id: "fullstack", label: "Full Stack", count: 4 },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Direct",
      description:
        "eDirect.ng is a Nigerian online business directory and networking platform that connects users with verified businesses and professionals across various industries. It helps individuals quickly find trusted local services—ranging from artisans and vendors to corporate providers—while giving businesses increased visibility and access to potential customers. The platform emphasizes trust by verifying listings and providing detailed profiles, making it easier for millions of Nigerians each month to discover, evaluate, and connect with reliable service providers nationwide.",
      category: "frontend",
      technologies: [
        "React",
        "Tailwind CSS",
        "Redux",
        "Firebase",
        "Laravel",
        "MySQL",
      ],
      images: [edirectImage2, edirectImage3, edirectImage1],
      liveUrl: "https://www.edirect.ng/",
      githubUrl: "https://github.com/pmanonline/edirect",
      featured: true,
      status: "completed",
      date: "2025-03-15",
      client: "Business Directories",
      duration: "3 months",
      likes: 42,
      shares: 12,
      color: "from-red-700 to-red-900",
    },
    {
      id: 3,
      title: "Credulen",
      description:
        "Credulen is a Nigerian-based technology education and solutions company focused on helping individuals and organizations leverage emerging technologies like AI, data science, and blockchain.",
      category: "fullstack",
      technologies: [
        "React",
        "vite",
        "Tailwind CSS",
        "Redux Toolkit",
        "Node js",
        "Express js",
        "MongoDB",
      ],
      images: [Credulen1, Credulen2, Credulen3],
      liveUrl: "https://www.credulen.com/",
      githubUrl: "https://github.com/credulen/credulen_FE",
      featured: false,
      status: "Completed",
      date: "2024-09-02",
      client: "Digital Solution",
      duration: "4 months",
      likes: 35,
      shares: 15,
      color: "from-blue-900 to-green-500",
    },
    {
      id: 2,
      title: "Evenue",
      description:
        "eVenue is a Nigerian events/venue service platform that lets users book venues, hire event-services, and plan events more easily. It offers features like venue search, service matching, and tools to coordinate event components under one roof, to make organizing events more seamless.",
      category: "fullstack",
      technologies: [
        "React",
        "vite",
        "Tailwind CSS",
        "Redux Toolkit",
        "Node js",
        "Express js",
        "MongoDB",
        "TypeScript",
        "Socket.io",
        "GoodleOAuth",
      ],
      images: [Evenue1, Evenue2, Evenue3],
      liveUrl: "https://evenue.ng/home",
      githubUrl: "https://github.com/Pmanonline/E-venue_Frontend.git",
      featured: false,
      status: "completed",
      date: "2025-08-20",
      client: "Event Services",
      duration: "3 months",
      likes: 28,
      shares: 8,
      color: "from-green-500 to-teal-500",
    },
    {
      id: 4,
      title: "The Autograph Magazine",
      description:
        "The Autograph Collections is a Nigerian digital magazine/blog that publishes lifestyle-oriented content across various topics such as fashion, travel, leadership, wellness, and productivity. The Autograph Collections Its articles include tips (e.g. beginner tips for travel photography), trend overviews (fashion, morning routines), features on mental well-being, relationship/social life, home décor, and more",
      category: "fullstack",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite", "MDX"],
      images: [Autograph1, Autograph2, Autograph3],
      liveUrl: "https://theautographcollections.ng/",
      githubUrl: "https://github.com/Pmanonline/AutograhpFE.git",
      featured: false,
      status: "completed",
      date: "2024-12-10",
      client: "Digital Magazine",
      duration: "2 month",
      likes: 52,
      shares: 20,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 5,
      title: "8thGear partners",
      description:
        "Restaurant management dashboard with order tracking, inventory management, analytics, staff scheduling, and customer relationship management system.",
      category: "web",
      technologies: [
        "React",
        "TypeScript",
        "Chart.js",
        "Material-UI",
        "Node.js",
      ],
      images: [
        "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: false,
      status: "completed",
      date: "2023-12-05",
      client: "Restaurant Chain",
      duration: "2 months",
      likes: 31,
      shares: 9,
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 6,
      title: "MindAfrik",
      description:
        "Cross-platform fitness app with workout tracking, progress visualization, social features, nutrition logging, and AI-powered personal training recommendations.",
      category: "mobile",
      technologies: [
        "React Native",
        "Redux",
        "SQLite",
        "Chart.js",
        "Health Kit",
      ],
      images: [
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop",
      ],
      liveUrl: "https://example.com",
      githubUrl: "https://github.com",
      featured: true,
      status: "completed",
      date: "2023-11-20",
      client: "Fitness Startup",
      duration: "3 months",
      likes: 47,
      shares: 18,
      color: "from-teal-500 to-blue-500",
    },
  ];

  const filteredProjects: Project[] =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const nextImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === selectedProject.images.length - 1 ? 0 : prev + 1
      );
    }
  };

  const prevImage = () => {
    if (selectedProject) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProject.images.length - 1 : prev - 1
      );
    }
  };

  const getStatusColor = (status: string): string => {
    switch (status) {
      case "completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/20 dark:text-green-400";
      case "in-progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/20 dark:text-blue-400";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900/20 dark:text-gray-400";
    }
  };

  const getCategoryIcon = (category: string): React.ComponentType => {
    switch (category) {
      case "web":
        return Globe;
      case "mobile":
        return Smartphone;
      case "ui-ux":
        return Palette;
      case "fullstack":
        return Server;
      default:
        return Code;
    }
  };

  return (
    <section
      id="portfolio"
      className="relative pb-12  bg-gray-50 dark:bg-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/8 to-blue-500/8 dark:from-orange-500/4 dark:to-blue-500/4 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-blue-500/8 to-orange-500/8 dark:from-blue-500/4 dark:to-orange-500/4 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-orange-500/4 to-blue-500/4 dark:from-orange-500/2 dark:to-blue-500/2 rounded-full blur-3xl" />

        {/* Hexagonal grid pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-500/3 to-transparent dark:via-blue-500/2 opacity-40">
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
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center space-x-3 mb-6">
            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full"></div>
            <span className="text-orange-500 dark:text-orange-400 text-xs md:text-sm font-bold tracking-widest uppercase">
              Portfolio
            </span>
            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full"></div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-800 via-orange-500 to-blue-500 dark:from-blue-200 dark:via-orange-400 dark:to-blue-300 bg-clip-text text-transparent">
              My Featured Work
            </span>
          </h2>

          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent projects, ranging from web applications to
            mobile solutions
          </p>
        </div>

        {/* Filter and View Controls */}
        <div className="flex flex-col lg:flex-row justify-between items-center mb-12 gap-6">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center space-x-2 ${
                  activeFilter === category.id
                    ? "bg-orange-500 text-white shadow-lg scale-105"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-orange-50 dark:hover:bg-gray-700 hover:text-orange-500 border border-gray-200 dark:border-gray-700"
                }`}
                aria-label={`Filter by ${category.label}`}>
                <span>{category.label}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${
                    activeFilter === category.id
                      ? "bg-white/20 text-white"
                      : "bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                  }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center bg-white dark:bg-gray-800 rounded-lg p-1 border border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === "grid"
                    ? "bg-orange-500 text-white"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
                aria-label="Switch to grid view">
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === "list"
                    ? "bg-orange-500 text-white"
                    : "text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                }`}
                aria-label="Switch to list view">
                <List className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid/List */}
        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              : "space-y-8"
          } mb-12`}>
          {filteredProjects.map((project, index) => {
            const CategoryIcon = getCategoryIcon(
              project.category
            ) as React.ComponentType<React.SVGProps<SVGSVGElement>>;

            if (viewMode === "list") {
              return (
                <div
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 overflow-hidden hover:scale-[1.02]"
                  role="article">
                  <div className="flex flex-col lg:flex-row">
                    {/* Project Image */}
                    <div
                      className="lg:w-2/5 relative group cursor-pointer"
                      onClick={() => handleProjectClick(project)}
                      role="button"
                      aria-label={`View details for ${project.title}`}>
                      <img
                        loading="lazy"
                        src={project.images[0]}
                        alt={project.title}
                        className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Eye className="w-8 h-8 text-white" />
                      </div>
                      {project.featured && (
                        <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-current" />
                          <span>Featured</span>
                        </div>
                      )}
                    </div>

                    {/* Project Content */}
                    <div className="lg:w-3/5 p-6 lg:p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div
                              className={`w-8 h-8 bg-gradient-to-br ${project.color} rounded-lg flex items-center justify-center`}>
                              <CategoryIcon className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                              {project.category.replace("-", " ")}
                            </span>
                          </div>
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              project.status
                            )}`}>
                            {project.status.replace("-", " ")}
                          </span>
                        </div>

                        <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-3 hover:text-orange-500 dark:hover:text-orange-400 transition-colors cursor-pointer">
                          {project.title}
                        </h3>

                        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies
                            .slice(0, 4)
                            .map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium">
                                {tech}
                              </span>
                            ))}
                          {project.technologies.length > 4 && (
                            <span className="px-3 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
                              +{project.technologies.length - 4} more
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                        <div className="flex items-center space-x-2">
                          <a
                            href={project.liveUrl}
                            className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-medium transition-all duration-200 flex items-center space-x-1 hover:scale-105"
                            aria-label="View live project">
                            <span>View Live</span>
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Grid view
            return (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-105"
                role="article">
                {/* Project Image */}
                <div
                  className="relative cursor-pointer"
                  onClick={() => handleProjectClick(project)}
                  role="button"
                  aria-label={`View details for ${project.title}`}>
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Eye className="w-8 h-8 text-white" />
                  </div>
                  {project.featured && (
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-current" />
                      <span>Featured</span>
                    </div>
                  )}
                  <span
                    className={`absolute top-4 right-4 px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                      project.status
                    )}`}>
                    {project.status.replace("-", " ")}
                  </span>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <div
                      className={`w-6 h-6 bg-gradient-to-br ${project.color} rounded-md flex items-center justify-center`}>
                      <CategoryIcon className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                      {project.category.replace("-", " ")}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 hover:text-orange-500 dark:hover:text-orange-400 transition-colors cursor-pointer">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-md text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-md text-xs font-medium">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-1">
                      <a
                        href={project.liveUrl}
                        className="px-3 py-1.5 bg-orange-500 hover:bg-orange-600 text-white rounded-md text-xs font-medium transition-all duration-200 flex items-center space-x-1 hover:scale-105"
                        aria-label="View live project">
                        <span>View Live</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Load More Button */}
        <div className="text-center mb-12">
          <button
            className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center space-x-2 mx-auto"
            aria-label="Load more projects">
            <span>Load More Projects</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
          role="dialog"
          aria-label="Project details modal">
          <div
            className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 flex items-center justify-between">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {selectedProject.title}
              </h3>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Close modal">
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Image Gallery */}
            <div className="relative">
              <img
                src={selectedProject.images[currentImageIndex]}
                alt={selectedProject.title}
                className="w-full h-64 md:h-80 object-cover"
              />

              {selectedProject.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    aria-label="Previous image">
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
                    aria-label="Next image">
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {selectedProject.images.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          idx === currentImageIndex ? "bg-white" : "bg-white/50"
                        }`}
                        aria-label={`Switch to image ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Modal Content */}
            <div className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {selectedProject.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-4 space-y-4">
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Client
                      </span>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {selectedProject.client}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Duration
                      </span>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {selectedProject.duration}
                      </p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Status
                      </span>
                      <span
                        className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          selectedProject.status
                        )}`}>
                        {selectedProject.status.replace("-", " ")}
                      </span>
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        Completed
                      </span>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {new Date(selectedProject.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col space-y-3">
                    <a
                      href={selectedProject.liveUrl}
                      className="flex items-center justify-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                      aria-label="View live project">
                      <ExternalLink className="w-4 h-4" />
                      <span>View Live Project</span>
                    </a>
                    <a
                      href={selectedProject.githubUrl}
                      className="flex items-center justify-center space-x-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:border-gray-400 dark:hover:border-gray-500 px-4 py-3 rounded-lg font-medium transition-all duration-200 hover:scale-105"
                      aria-label="View source code">
                      <Github className="w-4 h-4" />
                      <span>View Source Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Hexagonal Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              width: Math.random() * 12 + 8,
              height: Math.random() * 12 + 8,
              background:
                i % 2 === 0
                  ? `rgba(249, 115, 22, ${Math.random() * 0.2 + 0.1})`
                  : `rgba(59, 130, 246, ${Math.random() * 0.2 + 0.1})`,
              clipPath:
                "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${12 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
