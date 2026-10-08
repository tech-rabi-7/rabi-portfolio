"use client";

import React, { useState } from "react";
import Image from "next/image";
import JarvisCore from "./components/JarvisCore";
import { GithubIcon, LinkedinIcon } from "./components/Icons";
import {
  Mail,
  ExternalLink,
  Copy,
  Check,
  FileText,
  Terminal,
  Code2,
  Cpu,
  Layers,
  Award,
  ChevronRight,
  Sparkles,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [copied, setCopied] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("hello.rabi.paul.tech@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const experiences = [
    {
      role: "Software Engineering Intern",
      organization: "Simpsoft Solutions",
      period: "2026 — Present",
      location: "Kolkata, India",
      description:
        "Contributing as a Software Engineering Intern to enterprise software development, backend systems, database optimization, and high-performance application features.",
      achievements: [
        "Developing scalable backend modules, RESTful API endpoints, and clean application logic",
        "Collaborating on code reviews, system debugging, and database schema refinement",
        "Implementing reliable software design patterns following engineering best practices",
      ],
      tags: ["Software Engineering", "Full-Stack", "REST APIs", "SQL / Database", "Git"],
    },
    {
      role: "Software Engineer & Lead Developer",
      organization: "RouteRanker • Transit Optimization Engine",
      period: "2026",
      location: "India",
      description:
        "Architected an algorithmic public transit optimization engine for Indian metropolitan networks (Delhi DTC, Bengaluru BMTC, Mumbai BEST, Pune PMPML, Hyderabad TSRTC). Ingests GTFS feeds, constructs Jaccard corridor overlap matrices to eliminate redundant routes, and powers real-time interactive GIS analytics.",
      achievements: [
        "Modeled capacity utilization & congestion indices across 23+ Indian urban networks",
        "Trained XGBoost (100% test accuracy) & Random Forest (84.6% accuracy) classifiers",
        "Developed Folium GIS interactive maps and real-time What-If simulation dashboard in Streamlit",
        "Projected 15–22% daily vehicle-km reduction and 450+ tons annual CO₂ emissions saved",
      ],
      tags: ["Python", "Algorithms", "XGBoost", "Streamlit", "GTFS", "Folium GIS"],
    },
    {
      role: "B.Tech Computer Science & Engineering",
      organization: "Dr. Sudhir Chandra Sur Institute of Technology (SurTech) • MAKAUT",
      period: "2023 — 2027 (Passout)",
      location: "Kolkata, India",
      description:
        "Pursuing Bachelor of Technology in Computer Science and Engineering. Solid foundations in Data Structures & Algorithms, Object-Oriented Software Design, Operating Systems, Computer Networks, and Database Management Systems.",
      achievements: [
        "Core coursework: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks",
        "Active competitive programmer and open-source software contributor",
      ],
      tags: ["Java", "C++", "C", "DSA", "DBMS", "Operating Systems", "OOP"],
    },
    {
      role: "MERN Full-Stack Development",
      organization: "Full Stack Academy",
      period: "2025",
      location: "Virtual",
      description:
        "Completed comprehensive development program in MERN stack architecture. Designed modern responsive interfaces, server-side REST APIs, and database schemas.",
      achievements: [
        "Built responsive SPAs with React, component lifecycle management, and client routing",
        "Architected Express & Node.js backend services connected to MongoDB database collections",
        "Earned verified MERN Full Stack certification credential",
      ],
      tags: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"],
      certificateLink: "/certificates/MERN%20Full%20stack.pdf",
    },
    {
      role: "Python Full Stack Intern",
      organization: "Full Stack Training Institute",
      period: "2025",
      location: "Virtual",
      description:
        "10-week intensive program covering Python web development, Django, RESTful API design, database schemas, and modern frontend integration.",
      achievements: [
        "Developed end-to-end full stack web applications with Django and SQL databases",
        "Built and tested RESTful endpoints with secure authentication and CRUD operations",
        "Practiced Git version control, branch management, and collaborative development",
      ],
      tags: ["Python", "Django", "SQL", "REST APIs", "Git"],
      certificateLink: "/Internships/python-fullstack.pdf",
    },
    {
      role: "Applied Computing & AI Systems",
      organization: "IBM SkillsBuild",
      period: "2025 — 2026",
      location: "Virtual",
      description:
        "Specialization in applied computing, generative models, enterprise systems, and prompt engineering architecture.",
      achievements: [
        "Engineered prompt templates and automated computational workflows",
        "Studied ethical AI considerations, bias mitigation, and enterprise data governance",
        "Earned verified IBM Applied AI credential and completion badge",
      ],
      tags: ["Applied AI", "Prompt Engineering", "Enterprise Systems", "IBM Watson"],
      certificateLink: "/Internships/Completion%20Certificate%20_%20SkillsBuild_page-0001.jpg",
    },
    {
      role: "Machine Learning & Analytics Intern",
      organization: "EduSkills / AICTE",
      period: "Oct — Dec 2025",
      location: "Virtual",
      description:
        "10-week technical internship in predictive analytics, classification algorithms, and feature engineering on complex real-world datasets.",
      achievements: [
        "Implemented supervised & unsupervised algorithms with Scikit-learn and NumPy",
        "Preprocessed high-dimensional datasets with Pandas and feature normalization pipelines",
        "Evaluated performance using ROC-AUC, precision-recall, and cross-validation",
      ],
      tags: ["Machine Learning", "Scikit-Learn", "Data Analytics", "Python"],
      certificateLink: "/Internships/ai-ml.pdf",
    },
    {
      role: "Cyber Defense & Security Intern",
      organization: "Cyber Defense Program",
      period: "2025",
      location: "Virtual",
      description:
        "Hands-on cybersecurity and network security training covering vulnerability assessment, penetration testing, and security fundamentals.",
      achievements: [
        "Conducted vulnerability assessments using network scanning and analysis tools",
        "Explored OWASP Top 10 vulnerabilities, authentication bypasses, and mitigation strategies",
        "Deepened understanding of cryptographic protocols and secure network architectures",
      ],
      tags: ["Cybersecurity", "Network Security", "Vulnerability Assessment", "Linux"],
      certificateLink: "/Internships/ethical-hacking.pdf",
    },
  ];

  const skillCategories = [
    {
      title: "SOFTWARE & WEB ENGINEERING",
      subtitle: "Scalable Full-Stack Architecture & Modern Interfaces",
      description:
        "Building responsive, high-performance web applications with React, Next.js, TypeScript, modern CSS, and clean RESTful API integration.",
      tools: [
        "React",
        "Next.js",
        "TypeScript",
        "JavaScript (ES6+)",
        "Tailwind CSS",
        "Node.js",
        "Express.js",
        "HTML5 / CSS3",
        "Three.js / WebGL",
        "REST APIs",
      ],
      icon: <Layers className="w-6 h-6 text-cyan-400" />,
    },
    {
      title: "CORE PROGRAMMING & CS FOUNDATIONS",
      subtitle: "Object-Oriented Design, Data Structures & Algorithms",
      description:
        "Solid algorithmic foundation with rigorous problem-solving skills, memory management, and clean object-oriented software development.",
      tools: [
        "Java",
        "C++",
        "C",
        "Python",
        "Data Structures",
        "Algorithms",
        "OOP Design",
        "DBMS / SQL",
        "Operating Systems",
        "Computer Networks",
      ],
      icon: <Code2 className="w-6 h-6 text-emerald-400" />,
    },
    {
      title: "DATA SYSTEMS & MACHINE LEARNING",
      subtitle: "Predictive Analytics, Transit Algorithms & Processing",
      description:
        "Designing algorithmic optimization pipelines, machine learning classifiers (XGBoost, Random Forest), and spatial analytics with GIS tools.",
      tools: [
        "Python",
        "XGBoost",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "Streamlit",
        "Folium GIS",
        "GTFS Processing",
        "Data Analytics",
      ],
      icon: <Cpu className="w-6 h-6 text-violet-400" />,
    },
    {
      title: "DEVELOPER TOOLS & INFRASTRUCTURE",
      subtitle: "Version Control, Deployment, Linux & Engineering Workflows",
      description:
        "Professional version control with Git, collaborative development on GitHub, Linux terminal environments, and automated cloud deployments.",
      tools: [
        "Git",
        "GitHub",
        "VS Code",
        "Vercel",
        "Linux / Zsh",
        "Postman",
        "MySQL",
        "MongoDB",
        "Jupyter Notebook",
      ],
      icon: <Terminal className="w-6 h-6 text-amber-400" />,
    },
  ];

  const projects = [
    {
      title: "RouteRanker",
      category: "Public Transit Optimization & GIS",
      featured: true,
      description:
        "Public transit route optimization engine modeling networks across 23 Indian metropolitan cities (Delhi DTC, Bengaluru BMTC, Mumbai BEST, Pune PMPML, Hyderabad TSRTC). Ingests raw GTFS transit feeds, calculates Jaccard corridor overlap matrices to eliminate redundant routes, and predicts overcrowding with 100% XGBoost accuracy. Features interactive Folium GIS maps and what-if simulation dashboard in Streamlit.",
      technologies: ["Python", "Algorithms", "GTFS", "XGBoost", "Streamlit", "Folium GIS"],
      liveUrl: "https://github.com/tech-rabi-7/RouteRanker",
      githubUrl: "https://github.com/tech-rabi-7/RouteRanker",
      stats: "100% Accuracy • 23 Cities • 450T CO₂ Saved",
    },
    {
      title: "J.A.R.V.I.S. Desktop System Assistant",
      category: "System Automation & Voice Controls",
      featured: true,
      description:
        "Desktop system automation assistant engineered in Python. Integrates voice recognition, natural language query processing, operating system automations, application controllers, and automated workflow scripts.",
      technologies: ["Python", "Automation", "Speech Recognition", "OS Controls", "NLP"],
      githubUrl: "https://github.com/tech-rabi-7",
      stats: "Voice Activated • System Automation • Scripting",
    },
    {
      title: "Interactive 3D Engineering Portfolio",
      category: "Next.js • Three.js WebGL",
      featured: false,
      description:
        "Personal developer portfolio built with Next.js (App Router), TypeScript, Tailwind CSS, and Three.js. Features an interactive procedural 3D J.A.R.V.I.S. Arc Reactor holographic canvas with mouse parallax, cybernetic HUD telemetry, and responsive glassmorphism.",
      technologies: ["Next.js", "React", "Three.js", "TypeScript", "Tailwind CSS"],
      liveUrl: "https://rabi-portfolio-eight.vercel.app",
      githubUrl: "https://github.com/tech-rabi-7/rabi-portfolio",
      stats: "Modern WebGL • Zero Lag • Fully Responsive",
    },
    {
      title: "Data Structures & Algorithms Repository",
      category: "Core Algorithms & Problem Solving",
      featured: false,
      description:
        "Algorithmic repository containing clean, optimized implementations of Data Structures & Algorithms in Java, C++, and Python. Covers graph traversals, dynamic programming, binary trees, sorting algorithms, and competitive problem solving.",
      technologies: ["Java", "C++", "Python", "DSA", "Graph Theory", "Dynamic Programming"],
      githubUrl: "https://github.com/tech-rabi-7/basic-java-projects",
      stats: "Clean Implementations • Time/Space Optimized",
    },
    {
      title: "Python Software & Engineering Suite",
      category: "Web Systems & Utility Applications",
      featured: false,
      description:
        "Collection of practical Python applications, automation utilities, full-stack web prototypes, and data processing scripts developed across academic and independent projects.",
      technologies: ["Python", "Django", "SQL", "REST APIs", "Automation"],
      githubUrl: "https://github.com/tech-rabi-7/Python-Projects",
      stats: "Modular Code • Practical Implementations",
    },
  ];

  const certificates = [
    {
      title: "MERN Full Stack Development",
      issuer: "Full Stack Academy",
      category: "Web Development",
      file: "/certificates/MERN%20Full%20stack.pdf",
      highlight: "MongoDB, Express.js, React, Node.js",
    },
    {
      title: "Python Full Stack Internship",
      issuer: "Professional Development Institute",
      category: "Full Stack Development",
      file: "/Internships/python-fullstack.pdf",
      highlight: "Python, Django, SQL & REST APIs",
    },
    {
      title: "Java Programming Credential",
      issuer: "Computer Science Institute",
      category: "Core Languages",
      file: "/certificates/java.pdf",
      highlight: "OOP, Concurrency & Collections",
    },
    {
      title: "C Programming Credential",
      issuer: "Computer Science Foundation",
      category: "Core Languages",
      file: "/certificates/c.pdf",
      highlight: "Low-Level Memory & Pointers",
    },
    {
      title: "Application Development Certification",
      issuer: "Mobile Development",
      category: "Development",
      file: "/certificates/app_devolopment.pdf",
      highlight: "Application Architecture & UI/UX",
    },
    {
      title: "Python Programming Credential",
      issuer: "Programming Academy",
      category: "Core Languages",
      file: "/certificates/python.png",
      highlight: "Data Structures, Scripting & Automation",
    },
    {
      title: "Machine Learning & Analytics Intern",
      issuer: "EduSkills / AICTE",
      category: "Data Systems",
      file: "/Internships/ai-ml.pdf",
      highlight: "10-Week Intensive Predictive Analytics Program",
    },
    {
      title: "Applied Computing & Enterprise Systems",
      issuer: "IBM SkillsBuild",
      category: "Enterprise Systems",
      file: "/Internships/Completion%20Certificate%20_%20SkillsBuild_page-0001.jpg",
      highlight: "Generative AI & Enterprise Computing",
    },
    {
      title: "Cyber Defense & Security Intern",
      issuer: "Cyber Defense Program",
      category: "Cybersecurity",
      file: "/Internships/ethical-hacking.pdf",
      highlight: "Penetration Testing & Security Fundamentals",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#050509] text-gray-100 font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Background Cybernetic Ambient Mesh */}
      <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden">
        <div className="absolute top-[-10%] left-[20%] w-[550px] h-[550px] rounded-full bg-cyan-600/10 blur-[140px]" />
        <div className="absolute top-[40%] right-[-10%] w-[600px] h-[600px] rounded-full bg-violet-600/10 blur-[160px]" />
        <div className="absolute bottom-[-10%] left-[10%] w-[500px] h-[500px] rounded-full bg-blue-600/10 blur-[150px]" />
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      {/* FIXED LEFT SOCIAL RAIL (Style like Redoyanul's) */}
      <aside className="fixed left-6 bottom-0 z-40 hidden lg:flex flex-col items-center gap-5">
        <a
          href="https://github.com/tech-rabi-7"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-white/[0.05] transition-all duration-300 hover:scale-110"
          title="GitHub // tech-rabi-7"
        >
          <GithubIcon className="w-5 h-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/rabi-paul-07-/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-white/[0.05] transition-all duration-300 hover:scale-110"
          title="LinkedIn // rabi-paul-07-"
        >
          <LinkedinIcon className="w-5 h-5" />
        </a>
        <a
          href="mailto:hello.rabi.paul.tech@gmail.com"
          className="p-2.5 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-white/[0.05] transition-all duration-300 hover:scale-110"
          title="Email Rabi Paul"
        >
          <Mail className="w-5 h-5" />
        </a>
        <a
          href="https://github.com/tech-rabi-7/RouteRanker"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2.5 rounded-full text-gray-400 hover:text-cyan-400 hover:bg-white/[0.05] transition-all duration-300 hover:scale-110"
          title="RouteRanker (Featured Project)"
        >
          <Terminal className="w-5 h-5" />
        </a>
        <div className="w-[1px] h-24 bg-gradient-to-b from-white/20 to-transparent mt-2" />
      </aside>

      {/* FLOATING BOTTOM-RIGHT RESUME BUTTON */}
      <aside className="fixed right-6 bottom-6 z-40">
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-[#0a0a14]/90 backdrop-blur-xl border border-cyan-400/30 hover:border-cyan-400 text-xs font-mono tracking-wider text-cyan-300 shadow-xl shadow-cyan-950/40 hover:shadow-cyan-500/20 transition-all duration-300 hover:-translate-y-1"
        >
          <FileText className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
          <span className="font-semibold">RESUME</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </a>
      </aside>

      {/* TOP NAVIGATION HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-[#050509]/85 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo / Monogram */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            title="Rabi Paul — Software Engineer"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-violet-500/20 border border-cyan-400/40 flex items-center justify-center font-mono font-bold text-base text-cyan-300 group-hover:border-cyan-300 transition-all shadow-lg shadow-cyan-500/10">
              RP
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-sm font-semibold tracking-wide text-white group-hover:text-cyan-300 transition-colors">
                RABI PAUL
              </span>
              <span className="text-[10px] font-mono text-cyan-400/90 tracking-widest uppercase">
                SOFTWARE ENGINEER
              </span>
            </div>
          </a>

          {/* Current Status Badge */}
          <div className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-400/30 text-xs font-mono text-cyan-300 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span>Software Intern @ Simpsoft Solutions • 2027 Passout</span>
          </div>

          {/* Center Email Capsule with One-Click Copy */}
          <div className="hidden md:flex items-center">
            <button
              onClick={copyEmail}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.03] hover:bg-white/[0.07] border border-white/[0.08] hover:border-cyan-400/40 text-xs font-mono text-gray-300 hover:text-white transition-all group shadow-sm"
              title="Click to copy email"
            >
              <Mail className="w-3.5 h-3.5 text-cyan-400" />
              <span>hello.rabi.paul.tech@gmail.com</span>
              {copied ? (
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              ) : (
                <Copy className="w-3 h-3 text-gray-500 group-hover:text-cyan-300 transition-colors" />
              )}
              {copied && (
                <span className="text-[10px] text-emerald-400 font-sans font-medium ml-1 animate-pulse">
                  Copied!
                </span>
              )}
            </button>
          </div>

          {/* Right Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-mono tracking-widest text-gray-400">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              ABOUT
            </a>
            <a href="#career" className="hover:text-cyan-400 transition-colors">
              CAREER
            </a>
            <a href="#skills" className="hover:text-cyan-400 transition-colors">
              SKILLS
            </a>
            <a href="#work" className="hover:text-cyan-400 transition-colors">
              WORK
            </a>
            <a href="#certificates" className="hover:text-cyan-400 transition-colors">
              CERTIFICATES
            </a>
            <a
              href="#contact"
              className="px-4 py-2 rounded-full border border-cyan-400/40 text-cyan-300 hover:bg-cyan-400 hover:text-black font-semibold transition-all duration-300"
            >
              CONTACT
            </a>
          </nav>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg bg-white/[0.05] border border-white/10 text-gray-300"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#070712]/95 backdrop-blur-2xl px-6 py-6 flex flex-col gap-4 text-sm font-mono tracking-wider">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-cyan-400 py-1"
            >
              // ABOUT
            </a>
            <a
              href="#career"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-cyan-400 py-1"
            >
              // CAREER & EXPERIENCE
            </a>
            <a
              href="#skills"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-cyan-400 py-1"
            >
              // TECHNICAL SKILLS
            </a>
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-cyan-400 py-1"
            >
              // FEATURED WORK
            </a>
            <a
              href="#certificates"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-300 hover:text-cyan-400 py-1"
            >
              // CERTIFICATES
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-cyan-400 font-semibold py-1"
            >
              // CONTACT ME
            </a>
            <div className="pt-2 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-gray-400">hello.rabi.paul.tech@gmail.com</span>
              <button
                onClick={copyEmail}
                className="text-xs text-cyan-400 underline font-semibold"
              >
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>
        )}
      </header>

      {/* MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-28 pb-20">
        {/* ======================================================== */}
        {/* HERO / ABOUT SECTION (Redoyanul layout with J.A.R.V.I.S.) */}
        {/* ======================================================== */}
        <section id="about" className="min-h-[85vh] flex items-center py-12 lg:py-20">
          <div className="w-full grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* LEFT COLUMN: 3D J.A.R.V.I.S. INTERACTIVE HOLOGRAM */}
            <div className="lg:col-span-6 flex flex-col items-center justify-center relative">
              <JarvisCore />
              <p className="mt-4 text-[11px] font-mono text-gray-400 tracking-wider flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                INTERACTIVE 3D J.A.R.V.I.S. CORE • MOVE CURSOR TO ROTATE
              </p>
            </div>

            {/* RIGHT COLUMN: ABOUT ME (Matching Redoyanul's Typography & Layout) */}
            <div className="lg:col-span-6 flex flex-col justify-center">
              {/* Monospace Section Tag */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-xs font-mono tracking-[0.4em] uppercase text-cyan-400 font-bold">
                  S O F T W A R E &nbsp; E N G I N E E R
                </span>
                <span className="w-12 h-[1px] bg-cyan-400/40" />
              </div>

              {/* Bold Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-[1.2] tracking-tight">
                Software Intern at{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                  Simpsoft Solutions
                </span>{" "}
                &amp; B.Tech CSE (2027 Passout).
              </h1>

              {/* Main Bio Paragraph */}
              <div className="mt-6 space-y-4 text-base sm:text-lg text-gray-300 font-normal leading-relaxed">
                <p>
                  I engineer scalable web platforms, backend services, and high-performance software
                  systems with clean code, solid Data Structures & Algorithms, and modern frameworks.
                  My core focus spans{" "}
                  <strong className="text-white font-semibold">
                    Software Engineering, Full-Stack Architecture, REST APIs, and Algorithmic Optimization
                  </strong>{" "}
                  with Java, Python, C++, React, and SQL.
                </p>
                <p>
                  Currently working as a{" "}
                  <strong className="text-cyan-300 font-semibold">Software Engineering Intern at Simpsoft Solutions</strong>,
                  while actively architecting{" "}
                  <a
                    href="#work"
                    className="text-cyan-400 font-semibold underline underline-offset-4 hover:text-cyan-300 transition-colors"
                  >
                    RouteRanker
                  </a>
                  —an algorithmic transit optimization engine modeling GTFS transit networks across 23
                  Indian metropolitan centers to eliminate route redundancies and minimize urban congestion.
                </p>
                <p className="text-gray-400 text-sm sm:text-base">
                  Studying Computer Science &amp; Engineering at Dr. Sudhir Chandra Sur Institute of Technology (SurTech • MAKAUT).
                  Driven by analytical problem solving, clean system design, and building reliable software for real-world impact.
                </p>
              </div>

              {/* Key Quick Stats Cards */}
              <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-cyan-500/20 backdrop-blur-md">
                  <div className="text-xl font-bold font-mono text-cyan-300">Simpsoft</div>
                  <div className="text-[11px] font-mono text-gray-400 uppercase mt-0.5">
                    Software Intern
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-md">
                  <div className="text-xl font-bold font-mono text-violet-300">2027</div>
                  <div className="text-[11px] font-mono text-gray-400 uppercase mt-0.5">
                    CSE Passout
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-md">
                  <div className="text-xl font-bold font-mono text-emerald-300">23+</div>
                  <div className="text-[11px] font-mono text-gray-400 uppercase mt-0.5">
                    Cities Modeled
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/[0.07] backdrop-blur-md">
                  <div className="text-xl font-bold font-mono text-amber-300">9+</div>
                  <div className="text-[11px] font-mono text-gray-400 uppercase mt-0.5">
                    Verified Certs
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="#work"
                  className="px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 hover:to-sky-400 text-black font-semibold text-sm transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <span>Explore Featured Works</span>
                  <ChevronRight className="w-4 h-4" />
                </a>

                <a
                  href="#contact"
                  className="px-6 py-3 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/[0.12] hover:border-cyan-400/40 text-gray-200 hover:text-white font-medium text-sm transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
                >
                  <Mail className="w-4 h-4 text-cyan-400" />
                  <span>Get In Touch</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ======================================================== */}
        {/* CAREER & EXPERIENCE TIMELINE (Redoyanul "My career & experience") */}
        {/* ======================================================== */}
        <section id="career" className="py-24 border-t border-white/[0.06]">
          <div className="flex flex-col mb-16">
            <span className="text-xs font-mono tracking-[0.4em] uppercase text-cyan-400 font-bold mb-3">
              C A R E E R &nbsp; &amp; &nbsp; E X P E R I E N C E
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              My Career <span className="text-cyan-400">&amp;</span> Experience.
            </h2>
            <p className="mt-4 max-w-2xl text-gray-400 text-base leading-relaxed">
              Hands-on engineering experience across machine learning transit systems, artificial
              intelligence specializations, full-stack software development, and computer science
              academics.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="relative border-l border-white/10 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Glowing Timeline Dot */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#050509] border-2 border-cyan-400 group-hover:bg-cyan-400 group-hover:scale-125 transition-all duration-300 shadow-md shadow-cyan-500/50" />

                {/* Card Container */}
                <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-cyan-400/35 hover:bg-white/[0.04] backdrop-blur-xl transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-3 text-xs font-mono text-cyan-400/90">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 text-gray-400">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-cyan-400/90 mb-4 flex items-center gap-2">
                    <Briefcase className="w-4 h-4" />
                    {exp.organization}
                  </p>

                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Bullet achievements */}
                  <ul className="space-y-2 mb-5">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Tags & Optional Certificate Button */}
                  <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/[0.06]">
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {exp.certificateLink && (
                      <a
                        href={exp.certificateLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-300 hover:text-cyan-200 underline underline-offset-4"
                      >
                        <span>View Verified Certificate</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* TECHNICAL TOOLKIT / SKILLS (Redoyanul's Categorized Cards) */}
        {/* ======================================================== */}
        <section id="skills" className="py-24 border-t border-white/[0.06]">
          <div className="flex flex-col mb-16">
            <span className="text-xs font-mono tracking-[0.4em] uppercase text-cyan-400 font-bold mb-3">
              T E C H N I C A L &nbsp; T O O L K I T
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Skills <span className="text-cyan-400">&amp;</span> Competencies.
            </h2>
            <p className="mt-4 max-w-2xl text-gray-400 text-base leading-relaxed">
              Curated technical stack and toolset utilized across artificial intelligence systems,
              predictive models, full-stack platforms, and competitive algorithmic challenges.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((cat, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/[0.07] hover:border-cyan-400/40 hover:bg-white/[0.035] backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                      // {cat.title}
                    </span>
                    <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 group-hover:scale-110 transition-transform">
                      {cat.icon}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {cat.subtitle}
                  </h3>

                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                <div>
                  <div className="text-xs font-mono text-gray-400 mb-3 tracking-wider">
                    KEY TECHNOLOGIES &amp; TOOLS:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1.5 rounded-lg bg-black/40 border border-white/10 hover:border-cyan-400/50 text-xs font-mono text-gray-300 hover:text-cyan-200 transition-colors"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* FEATURED WORKS / PROJECTS (Redoyanul "My Works") */}
        {/* ======================================================== */}
        <section id="work" className="py-24 border-t border-white/[0.06]">
          <div className="flex flex-col mb-16">
            <span className="text-xs font-mono tracking-[0.4em] uppercase text-cyan-400 font-bold mb-3">
              F E A T U R E D &nbsp; P R O J E C T S
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Selected <span className="text-cyan-400">Works.</span>
            </h2>
            <p className="mt-4 max-w-2xl text-gray-400 text-base leading-relaxed">
              Showcase of machine learning architectures, autonomous agent assistants, and modern
              web engineering platforms engineered from the ground up.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl bg-white/[0.02] border border-white/[0.08] hover:border-cyan-400/40 p-8 sm:p-9 flex flex-col justify-between group backdrop-blur-2xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Glowing aura on hover */}
                <div className="absolute inset-0 -z-10 rounded-3xl bg-cyan-500/0 group-hover:bg-cyan-500/[0.03] transition-all duration-500 pointer-events-none" />

                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="text-xs font-mono tracking-widest text-cyan-400 uppercase font-semibold">
                      {proj.category}
                    </span>
                    {proj.featured && (
                      <span className="px-3 py-1 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-[10px] font-mono text-cyan-300 uppercase tracking-widest flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-cyan-400" />
                        FLAGSHIP ML
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white group-hover:text-cyan-300 transition-colors mb-3">
                    {proj.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
                    {proj.description}
                  </p>

                  {/* Highlights Banner */}
                  {proj.stats && (
                    <div className="mb-6 p-3 rounded-xl bg-black/40 border border-cyan-500/20 font-mono text-xs text-cyan-300 flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
                      <span>{proj.stats}</span>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {proj.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/10 text-xs font-mono text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/[0.06]">
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-xs font-mono tracking-wider transition-all flex items-center gap-1.5"
                    >
                      <span>VIEW LIVE DEMO</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 hover:border-cyan-400/40 text-gray-200 text-xs font-mono tracking-wider transition-all flex items-center gap-1.5"
                    >
                      <GithubIcon className="w-3.5 h-3.5 text-gray-400" />
                      <span>SOURCE CODE</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* CERTIFICATIONS & CREDENTIALS */}
        {/* ======================================================== */}
        <section id="certificates" className="py-24 border-t border-white/[0.06]">
          <div className="flex flex-col mb-16">
            <span className="text-xs font-mono tracking-[0.4em] uppercase text-cyan-400 font-bold mb-3">
              C E R T I F I C A T I O N S
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
              Verified Credentials <span className="text-cyan-400">&amp;</span> Diplomas.
            </h2>
            <p className="mt-4 max-w-2xl text-gray-400 text-base leading-relaxed">
              Official certifications, virtual internships, and technical qualifications completed
              across AI, Full-Stack Development, Cyber Defense, and Core Programming.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/[0.07] hover:border-cyan-400/40 hover:bg-white/[0.04] backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-wider font-semibold">
                      {cert.category}
                    </span>
                    <Award className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">
                    {cert.title}
                  </h3>

                  <p className="text-xs font-mono text-gray-400 mb-3">{cert.issuer}</p>

                  <p className="text-xs text-gray-400 leading-relaxed mb-6">
                    {cert.highlight}
                  </p>
                </div>

                <a
                  href={cert.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full px-3.5 py-2 rounded-xl bg-white/[0.03] hover:bg-cyan-400/10 border border-white/10 hover:border-cyan-400/40 text-xs font-mono text-cyan-300 hover:text-cyan-200 transition-all"
                >
                  <span>View Verified Document</span>
                  <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* ======================================================== */}
        {/* CONTACT SECTION (Matching Redoyanul's Direct Contact) */}
        {/* ======================================================== */}
        <section id="contact" className="py-24 border-t border-white/[0.06]">
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-white/[0.03] to-white/[0.01] border border-white/[0.08] p-8 sm:p-14 text-center backdrop-blur-2xl relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-cyan-500/10 blur-[120px] pointer-events-none" />

            <span className="text-xs font-mono tracking-[0.4em] uppercase text-cyan-400 font-bold mb-4 inline-block">
              C O N T A C T &nbsp; M E
            </span>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
              Let&apos;s Build Something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-violet-400">
                Extraordinary Together.
              </span>
            </h2>

            <p className="max-w-xl mx-auto text-gray-300 text-base sm:text-lg leading-relaxed mb-10">
              I am open to software engineering internships, AI/ML roles, research opportunities,
              and exciting collaborative ventures. Have a question or project in mind? Reach out!
            </p>

            {/* Email Box with Copy Option */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-lg mx-auto mb-10">
              <a
                href="mailto:hello.rabi.paul.tech@gmail.com"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-semibold text-sm font-mono tracking-wider transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4" />
                <span>SEND DIRECT EMAIL</span>
              </a>

              <button
                onClick={copyEmail}
                className="w-full sm:w-auto px-6 py-3.5 rounded-full bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-cyan-400/40 text-gray-200 text-sm font-mono tracking-wider transition-all flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-cyan-400" />}
                <span>{copied ? "COPIED TO CLIPBOARD" : "COPY ADDRESS"}</span>
              </button>
            </div>

            {/* Social Connectivity Grid */}
            <div className="pt-8 border-t border-white/[0.06] flex flex-wrap items-center justify-center gap-6 text-sm font-mono text-gray-400">
              <a
                href="https://github.com/tech-rabi-7"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub (tech-rabi-7)</span>
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/rabi-paul-07-/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn (rabi-paul-07-)</span>
              </a>
              <span>•</span>
              <a
                href="https://github.com/tech-rabi-7/RouteRanker"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-cyan-400 transition-colors flex items-center gap-1.5"
              >
                <Terminal className="w-4 h-4" />
                <span>RouteRanker ML</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.06] bg-[#030306] py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>
              &copy; {new Date().getFullYear()} RABI PAUL • ENGINEERED WITH NEXT.JS &amp; THREE.JS
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#about" className="hover:text-cyan-400 transition-colors">
              BACK TO TOP ↑
            </a>
            <a
              href="https://github.com/tech-rabi-7/rabi-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              REPO SOURCE
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}