"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Moon,
  Sun,
  Menu,
  X,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  ExternalLink,
  User,
  Code,
  Briefcase,
  GraduationCap,
  MessageSquare,
} from "lucide-react"
import { video } from "framer-motion/client"

function App() {
  const [mounted, setMounted] = useState(false)
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") || "light"
    }
    return "light"
  })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")

  // Refs for each section
  const sectionRefs = {
    hero: useRef(null),
    about: useRef(null),
    projects: useRef(null),
    skills: useRef(null),
    experience: useRef(null),
    education: useRef(null),
    contact: useRef(null),
  }

  // Ensure theme component doesn't render until mounted on client
  useEffect(() => {
    setMounted(true)

    // Apply theme to document
    document.documentElement.classList.remove("light", "dark")
    document.documentElement.classList.add(theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  // Handle intersection observer for sections
  useEffect(() => {
    const observers = []
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-80px 0px -80px 0px",
    }

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }

    // Create observer for each section
    Object.entries(sectionRefs).forEach(([id, ref]) => {
      if (ref.current) {
        const observer = new IntersectionObserver(observerCallback, observerOptions)
        observer.observe(ref.current)
        observers.push(observer)
      }
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [mounted])

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false)
    const section = sectionRefs[sectionId]?.current
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  const navItems = [
    { id: "about", label: "About", icon: <User size={18} /> },
    { id: "projects", label: "Projects", icon: <Code size={18} /> },
    { id: "skills", label: "Skills", icon: <Code size={18} /> },
    { id: "experience", label: "Experience", icon: <Briefcase size={18} /> },
    { id: "education", label: "Education", icon: <GraduationCap size={18} /> },
    { id: "contact", label: "Contact", icon: <MessageSquare size={18} /> },
  ]

  const projects = [
    {
      title: "Restaurant Website",
      description: "A responsive restaurant website built with React",
      image: "https://via.placeholder.com/350x200",
      video: "https://www.youtube.com/embed/5xlAztfMaTg",
      github: "https://github.com/AtulmishraIT/user-restaurant",
      demo: "#",
      tags: ["React", "tailwindCSS", "Node.js", "MongoDB"],
    },
    {
      title: "Snake Game",
      description: "A fun snake game built with HTML, CSS, and JavaScript",
      image: "https://via.placeholder.com/350x200",
      video: "https://www.youtube.com/embed/g_LdkhWYs0k",
      github: "https://github.com/AtulmishraIT/SnakeGame",
      demo: "https://snakegame-atulmishra.netlify.app/",
      tags: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Currency Converter",
      description: "A currency converter app built with HTML, CSS, and JavaScript",
      video: "https://www.youtube.com/embed/iFdsrdmazAk",
      image: "https://via.placeholder.com/350x200",
      github: "https://github.com/AtulmishraIT/Currency-Converter",
      demo: "https://currency-converter-atulmishra.netlify.app/",
      tags: ["Next.js", "Stripe", "Tailwind CSS"],
    },
  ]

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "tailwindCSS", level: 75 },
    { name: "Next.js", level: 80 },
  ]

  const experiences = [
    {
      title: "No Experience",
      company: "",
      period: "",
      description:
        "Searching for Good Company to start my career as a Frontend Developer. I am a quick learner and eager to contribute to a dynamic team.",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Information Technology",
      institution: "University of Mumbai",
      period: "2022 - 2025",
      description: "Graduated with honors. Specialized in web development and Frontend Devolper.",
    },
    {
      degree: "HSC",
      institution: "New English School",
      period: "2019-2021",
      description: "Advanced course in modern web development technologies and practices.",
    },
    {
      degree: "SSC",
      institution: "Shiv Shambhu hindi vidyalay",
      period: "2018-2019",
      description: "Completed secondary education with a focus on science and mathematics.",
    },
  ]

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemFade = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const skillBarVariant = (level) => ({
    hidden: { width: 0 },
    visible: {
      width: `${level}%`,
      transition: { duration: 1, ease: "easeInOut" },
    },
  })

  return (
    <div className={`${theme === "dark" ? "dark **:bg-black **:text-white" : "light"} min-h-screen transition-colors duration-300`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen transition-colors duration-300">
        {/* Navigation */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-300">
          <div className="container mx-auto px-4 py-4">
            <div className="flex justify-between items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="flex items-center"
              >
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                  Atul Mishra
                </h1>
              </motion.div>

              {/* Desktop Navigation */}
              <motion.nav
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="hidden md:flex items-center space-x-6"
              >
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-md transition-colors ${
                      activeSection === item.id
                        ? "text-blue-600 dark:text-blue-400 font-medium"
                        : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </motion.button>
                ))}

                {/* Theme Toggle */}
                {mounted && (
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    aria-label="Toggle theme"
                  >
                    {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                  </motion.button>
                )}
              </motion.nav>

              {/* Mobile Menu Button */}
              <div className="flex items-center md:hidden space-x-4">
                {mounted && (
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                    aria-label="Toggle theme"
                  >
                    {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
                  </motion.button>
                )}

                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={toggleMenu}
                  className="p-2 rounded-md text-gray-700 dark:text-gray-300"
                  aria-label="Toggle menu"
                >
                  {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </motion.button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden bg-white dark:bg-gray-800 shadow-lg"
              >
                <div className="container mx-auto px-4 py-4">
                  <motion.nav
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col space-y-2"
                  >
                    {navItems.map((item) => (
                      <motion.button
                        key={item.id}
                        variants={itemFade}
                        onClick={() => scrollToSection(item.id)}
                        className={`flex items-center space-x-2 px-4 py-3 rounded-md transition-colors ${
                          activeSection === item.id
                            ? "bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-medium"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700/50"
                        }`}
                      >
                        {item.icon}
                        <span>{item.label}</span>
                      </motion.button>
                    ))}
                  </motion.nav>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main className="pt-16">
          {/* Hero section */}
          <section
            ref={sectionRefs.hero}
            id="hero"
            className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-blue-900/30 overflow-hidden"
          >
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
              >
                {/* Background pattern */}
                <svg
                  className="w-full h-full opacity-10 dark:opacity-5"
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                      <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
              </motion.div>
            </div>

            <div className="container mx-auto px-4 z-10">
              <div className="max-w-4xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8 }}
                  className="mb-8 relative"
                >
                  <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
                    <img
                      src="/Atul.jpg  "
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                    {theme == "dark" ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 0 }}
                      transition={{ delay: 1, duration: 1 }}
                      className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-purple-500/20"
                    />
                    ) : (
                      <motion.div
                        initial={{ opacity: 1 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1, duration: 1 }}
                        className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10"
                      />
                    )}
                  </div>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                >
                  Atul Mishra
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-8"
                >
                  Frontend Developer & UI/UX Enthusiast
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                  className="flex flex-wrap justify-center gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection("contact")}
                    className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Contact Me
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection("projects")}
                    className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
                  >
                    View Projects
                  </motion.button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.2 }}
                  className="mt-12"
                >
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Number.POSITIVE_INFINITY, duration: 2 }}
                    className="mx-auto w-8 h-8 flex items-center justify-center cursor-pointer"
                    onClick={() => scrollToSection("about")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                    </svg>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* About section */}
          <motion.section
            ref={sectionRefs.about}
            id="about"
            className="py-20 bg-white dark:bg-gray-900"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="container mx-auto px-4">
              <div className="max-w-3xl mx-auto">
                <motion.div variants={fadeIn} className="text-center mb-12">
                  <h2 className="text-3xl font-bold mb-2">About Me</h2>
                  <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
                </motion.div>

                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  className="space-y-6"
                >
                  <motion.p variants={itemFade} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    I am a passionate Frontend Developer with expertise in building responsive and user-friendly web
                    applications. With a strong foundation in modern JavaScript frameworks and libraries, I create
                    engaging digital experiences that solve real-world problems.
                  </motion.p>

                  <motion.p variants={itemFade} className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    My approach combines technical excellence with creative problem-solving. I'm constantly learning new
                    technologies and techniques to stay at the forefront of web development.
                  </motion.p>

                  <motion.div variants={itemFade} className="flex flex-wrap justify-center gap-3 pt-4">
                    {["React", "JavaScript", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion"].map((tech) => (
                      <motion.span
                        key={tech}
                        whileHover={{ scale: 1.05 }}
                        className="px-4 py-2 bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Projects section */}
          <motion.section
            ref={sectionRefs.projects}
            id="projects"
            className="py-20 bg-gray-50 dark:bg-gray-800"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="container mx-auto px-4">
              <motion.div variants={fadeIn} className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">Projects</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              </motion.div>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    variants={itemFade}
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg transition-all"
                  >
                    <div className="relative h-48 overflow-hidden">
                      {project.video ? (
                        <iframe
                          src={project.video}
                          title={project.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      ) : (
                        <img
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                        />
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex justify-between">
                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          <Github size={20} className="mr-1" />
                          <span>Code</span>
                        </motion.a>

                        <motion.a
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                        >
                          <ExternalLink size={20} className="mr-1" />
                          <span>Demo</span>
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.section>

          {/* Skills section */}
          <motion.section
            ref={sectionRefs.skills}
            id="skills"
            className="py-20 bg-white dark:bg-gray-900"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="container mx-auto px-4">
              <motion.div variants={fadeIn} className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">Skills</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              </motion.div>

              <div className="max-w-3xl mx-auto">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {skills.map((skill) => (
                    <motion.div key={skill.name} variants={itemFade} className="mb-4">
                      <div className="flex justify-between mb-2">
                        <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                        <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                      </div>
                      <div className="w-full h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          variants={skillBarVariant(skill.level)}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600"
                        ></motion.div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Experience section */}
          <motion.section
            ref={sectionRefs.experience}
            id="experience"
            className="py-20 bg-gray-50 dark:bg-gray-800"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="container mx-auto px-4">
              <motion.div variants={fadeIn} className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">Experience</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              </motion.div>

              <div className="max-w-3xl mx-auto">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="relative border-l-2 border-blue-500 dark:border-blue-400 pl-8 ml-4"
                >
                  {experiences.map((exp, index) => (
                    <motion.div key={index} variants={itemFade} className="mb-12 relative">
                      <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[2.55rem] top-1.5 border-4 border-white dark:border-gray-800"></div>
                      <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                        <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                          <Briefcase size={16} className="mr-2" />
                          <span>{exp.company}</span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{exp.period}</p>
                        <p className="text-gray-700 dark:text-gray-300">{exp.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Education section */}
          <motion.section
            ref={sectionRefs.education}
            id="education"
            className="py-20 bg-white dark:bg-gray-900"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="container mx-auto px-4">
              <motion.div variants={fadeIn} className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">Education</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              </motion.div>

              <div className="max-w-3xl mx-auto">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="space-y-8"
                >
                  {education.map((edu, index) => (
                    <motion.div
                      key={index}
                      variants={itemFade}
                      className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-l-4 border-blue-500"
                    >
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{edu.degree}</h3>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 mb-2">
                        <GraduationCap size={16} className="mr-2" />
                        <span>{edu.institution}</span>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{edu.period}</p>
                      <p className="text-gray-700 dark:text-gray-300">{edu.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* Contact section */}
          <motion.section
            ref={sectionRefs.contact}
            id="contact"
            className="py-20 bg-gray-50 dark:bg-gray-800"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            <div className="container mx-auto px-4">
              <motion.div variants={fadeIn} className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-2">Contact Me</h2>
                <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
              </motion.div>

              <div className="max-w-3xl mx-auto">
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  className="bg-white dark:bg-gray-900 rounded-xl shadow-xl overflow-hidden"
                >
                  <div className="grid md:grid-cols-2">
                    <div className="p-8 bg-gradient-to-br from-blue-600 to-indigo-700 text-white">
                      <motion.h3 variants={itemFade} className="text-2xl font-bold mb-6">
                        Get In Touch
                      </motion.h3>

                      <motion.p variants={itemFade} className="mb-6 opacity-90">
                        I'm always open to new opportunities and collaborations. Feel free to reach out!
                      </motion.p>

                      <motion.div variants={staggerContainer} className="space-y-4">
                        <motion.a
                          variants={itemFade}
                          href="mailto:hello@example.com"
                          className="flex items-center opacity-90 hover:opacity-100 transition-opacity"
                        >
                          <Mail className="mr-3" size={20} />
                          <span>theatulmishra7@gmail.com</span>
                        </motion.a>

                        <motion.div variants={itemFade} className="flex space-x-4 pt-4">
                          <motion.a
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://github.com/AtulMishraIT"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                          >
                            <Github size={20} />
                          </motion.a>

                          <motion.a
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://www.linkedin.com/in/atul-mishra-b05668308/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                          >
                            <Linkedin size={20} />
                          </motion.a>

                          <motion.a
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                          >
                            <Twitter size={20} />
                          </motion.a>

                          <motion.a
                            whileHover={{ scale: 1.2, rotate: 5 }}
                            whileTap={{ scale: 0.9 }}
                            href="https://instagram.com/atulmish.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                          >
                            <Instagram size={20} />
                          </motion.a>
                        </motion.div>
                      </motion.div>
                    </div>

                    <div className="p-8">
                      <motion.form variants={staggerContainer} className="space-y-4">
                        <motion.div variants={itemFade}>
                          <label
                            htmlFor="name"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Name
                          </label>
                          <input
                            type="text"
                            id="name"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                            placeholder="Your name"
                          />
                        </motion.div>

                        <motion.div variants={itemFade}>
                          <label
                            htmlFor="email"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                            placeholder="Your email"
                          />
                        </motion.div>

                        <motion.div variants={itemFade}>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                          >
                            Message
                          </label>
                          <textarea
                            id="message"
                            rows={4}
                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                            placeholder="Your message"
                          ></textarea>
                        </motion.div>

                        <motion.button
                          variants={itemFade}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                          type="submit"
                          className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-md shadow-md hover:shadow-lg transition-all"
                        >
                          Send Message
                        </motion.button>
                      </motion.form>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>
        </main>

        {/* Footer */}
        <footer className="py-8 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0"
              >
                © {new Date().getFullYear()} Atul Mishra. All rights reserved.
              </motion.p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex space-x-4"
              >
                <a
                  href="https://github.com/AtulMishraIT"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/atul-mishra-b05668308/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  <Twitter size={20} />
                </a>
              </motion.div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
