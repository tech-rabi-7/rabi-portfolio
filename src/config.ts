export const config = {
    developer: {
        name: "Rabi",
        fullName: "Rabi Paul",
        title: "Software Engineer",
        description: "Software Intern at Simpsoft Solutions & B.Tech CSE (2027 Passout at SurTech / MAKAUT). Focused on software engineering, scalable web platforms, backend systems, and algorithmic optimization."
    },
    social: {
        github: "tech-rabi-7",
        email: "hello.rabi.paul.tech@gmail.com",
        location: "Kolkata, India"
    },
    about: {
        title: "About Me",
        description: "I am a Computer Science Engineering student and Software Engineer from India. Currently working as a Software Engineering Intern at Simpsoft Solutions, and pursuing B.Tech in CSE (2027 Passout) at Dr. Sudhir Chandra Sur Institute of Technology (SurTech • MAKAUT). I build scalable software platforms, clean RESTful services, and robust algorithmic solutions. My core foundation includes Java, Python, C++, React, SQL, and Data Structures & Algorithms. Currently engineering RouteRanker—an algorithmic public transit optimization engine modeling GTFS transit networks across 23 Indian cities to eliminate route redundancies and minimize urban congestion."
    },
    experiences: [
        {
            position: "Software Engineering Intern",
            company: "Simpsoft Solutions",
            period: "2026 - Present",
            location: "Kolkata, India",
            description: "Contributing as a Software Engineering Intern to enterprise software development, backend systems, database optimization, and high-performance application features.",
            responsibilities: [
                "Developing scalable backend modules, RESTful API endpoints, and clean application logic",
                "Collaborating on code reviews, system debugging, and database schema refinement",
                "Implementing reliable software design patterns following engineering best practices"
            ],
            technologies: ["Software Engineering", "Full-Stack", "REST APIs", "SQL / Database", "Git"]
        },
        {
            position: "Software Engineer & Lead Developer",
            company: "RouteRanker • Transit Optimization Engine",
            period: "2026",
            location: "India",
            description: "Architected an algorithmic public transit route optimization engine for Indian metropolitan networks (Delhi DTC, Bengaluru BMTC, Mumbai BEST, Pune PMPML, Hyderabad TSRTC). Ingests GTFS feeds, calculates Jaccard corridor overlap matrices to eliminate redundant routes, and achieves 100% classification accuracy with XGBoost.",
            responsibilities: [
                "Modeled capacity utilization & congestion indices across 23+ Indian urban networks",
                "Trained XGBoost (100% test accuracy) and Random Forest classifiers",
                "Developed interactive Folium GIS maps and real-time What-If simulation dashboard in Streamlit",
                "Projected 15-22% daily vehicle-km reduction and 450+ tons annual CO₂ saved"
            ],
            technologies: ["Python", "Algorithms", "XGBoost", "Streamlit", "GTFS", "Folium GIS"]
        },
        {
            position: "B.Tech Computer Science & Engineering",
            company: "Dr. Sudhir Chandra Sur Institute of Technology (SurTech) • MAKAUT",
            period: "2023 - 2027",
            location: "Kolkata, India",
            description: "Pursuing Bachelor of Technology in Computer Science and Engineering. Solid foundations in Data Structures & Algorithms, Object-Oriented Software Design, Operating Systems, Computer Networks, and Database Management Systems.",
            responsibilities: [
                "Core coursework: Data Structures, Algorithms, DBMS, Operating Systems, Computer Networks",
                "Active competitive programmer and open-source software contributor",
                "2027 Passout engineering graduate"
            ],
            technologies: ["Java", "C++", "C", "DSA", "DBMS", "Operating Systems", "OOP"]
        },
        {
            position: "MERN Full-Stack Development",
            company: "Full Stack Academy",
            period: "2025",
            location: "Virtual",
            description: "Completed comprehensive development program in MERN stack architecture. Designed modern responsive interfaces, server-side REST APIs, and database schemas.",
            responsibilities: [
                "Built responsive SPAs with React, component lifecycle management, and client routing",
                "Architected Express & Node.js backend services connected to MongoDB database collections",
                "Earned verified MERN Full Stack certification credential"
            ],
            technologies: ["MongoDB", "Express.js", "React", "Node.js", "JavaScript"]
        },
        {
            position: "Python Full Stack Intern",
            company: "Full Stack Training Institute",
            period: "2025",
            location: "Virtual",
            description: "10-week intensive program covering Python web development, Django, RESTful API design, database schemas, and modern frontend integration.",
            responsibilities: [
                "Developed end-to-end full stack web applications with Django and SQL databases",
                "Built and tested RESTful endpoints with secure authentication and CRUD operations",
                "Practiced Git version control, branch management, and collaborative development"
            ],
            technologies: ["Python", "Django", "SQL", "REST APIs", "Git"]
        },
        {
            position: "Applied Computing & Enterprise Systems",
            company: "IBM SkillsBuild",
            period: "2025 - 2026",
            location: "Virtual",
            description: "Specialization in applied computing, enterprise systems, and prompt engineering architecture.",
            responsibilities: [
                "Engineered computational workflows and automated system tasks",
                "Studied ethical AI considerations, bias mitigation, and enterprise data governance",
                "Earned verified IBM Applied AI credential and completion badge"
            ],
            technologies: ["Applied AI", "Prompt Engineering", "Enterprise Systems", "IBM Watson"]
        },
        {
            position: "Machine Learning & Analytics Intern",
            company: "EduSkills / AICTE",
            period: "Oct - Dec 2025",
            location: "Virtual",
            description: "10-week technical internship in predictive analytics, classification algorithms, and feature engineering on complex real-world datasets.",
            responsibilities: [
                "Implemented supervised & unsupervised algorithms with Scikit-learn and NumPy",
                "Preprocessed high-dimensional datasets with Pandas and feature normalization pipelines",
                "Evaluated performance using ROC-AUC, precision-recall, and cross-validation"
            ],
            technologies: ["Machine Learning", "Scikit-Learn", "Data Analytics", "Python"]
        },
        {
            position: "Cyber Defense & Security Intern",
            company: "Cyber Defense Program",
            period: "2025",
            location: "Virtual",
            description: "Hands-on cybersecurity and network security training covering vulnerability assessment, penetration testing, and security fundamentals.",
            responsibilities: [
                "Conducted vulnerability assessments using network scanning and analysis tools",
                "Explored OWASP Top 10 vulnerabilities, authentication bypasses, and mitigation strategies",
                "Deepened understanding of cryptographic protocols and secure network architectures"
            ],
            technologies: ["Cybersecurity", "Network Security", "Vulnerability Assessment", "Linux"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "RouteRanker",
            category: "Public Transit Optimization & GIS",
            technologies: "Python, Algorithms, GTFS, XGBoost, Streamlit, Folium GIS",
            image: "/images/RouteRanker.png",
            description: "Public transit route optimization engine modeling networks across 23 Indian metropolitan cities (Delhi DTC, Bengaluru BMTC, Mumbai BEST, Pune PMPML, Hyderabad TSRTC). Ingests raw GTFS transit feeds, calculates Jaccard corridor overlap matrices to eliminate redundant routes, and predicts overcrowding with 100% XGBoost accuracy. Features interactive Folium GIS maps and what-if simulation dashboard in Streamlit.",
            link: "https://github.com/tech-rabi-7/RouteRanker"
        },
        {
            id: 2,
            title: "J.A.R.V.I.S. Desktop Assistant",
            category: "System Automation & Voice Controls",
            technologies: "Python, Speech Recognition, Automation, System Controls, NLP",
            image: "/images/Phoenix3.0.png",
            description: "A desktop system automation assistant engineered in Python. Integrates speech recognition, natural language query resolution, system automation scripts, application controllers, and automated workflow routines.",
            link: "https://github.com/tech-rabi-7"
        },
        {
            id: 3,
            title: "3D Engineering Portfolio",
            category: "WebGL / Creative Web",
            technologies: "React, Three.js, TypeScript, Vite, TailwindCSS, GSAP",
            image: "/images/Drishti.png",
            description: "Ultra-modern portfolio platform featuring an interactive 3D J.A.R.V.I.S. Arc Reactor holographic canvas with mouse parallax, cybernetic HUD telemetry, and smooth scroll animations.",
            link: "https://rabi-portfolio-eight.vercel.app"
        },
        {
            id: 4,
            title: "Data Structures & Algorithms Repository",
            category: "Core Algorithms & Problem Solving",
            technologies: "Java, C++, Python, DSA, Graph Theory, Dynamic Programming",
            image: "/images/RedxChess.png",
            description: "Algorithmic repository containing clean, optimized implementations of Data Structures & Algorithms in Java, C++, and Python. Covers graph traversals, dynamic programming, binary trees, sorting algorithms, and competitive programming problems.",
            link: "https://github.com/tech-rabi-7/basic-java-projects"
        },
        {
            id: 5,
            title: "Python Software & Engineering Suite",
            category: "Web Systems & Utility Applications",
            technologies: "Python, Django, SQL, REST APIs, Automation",
            image: "/images/PythonSuite.png",
            description: "Collection of practical Python applications, automation utilities, full-stack web prototypes, and data processing scripts developed across academic and independent projects.",
            link: "https://github.com/tech-rabi-7/Python-Projects"
        }
    ],
    contact: {
        email: "hello.rabi.paul.tech@gmail.com",
        github: "https://github.com/tech-rabi-7",
        linkedin: "https://www.linkedin.com/in/rabi-paul-07-/",
        twitter: "https://github.com/tech-rabi-7",
        facebook: "https://github.com/tech-rabi-7",
        instagram: "https://github.com/tech-rabi-7"
    },
    skills: {
        develop: {
            title: "SOFTWARE & WEB ENGINEERING",
            description: "Scalable Full-Stack Architecture & Modern Interfaces",
            details: "Building responsive, high-performance web applications with React, TypeScript, modern CSS, and clean RESTful API integration.",
            tools: ["React", "TypeScript", "JavaScript", "TailwindCSS", "Node.js", "Express.js", "HTML5/CSS3", "REST APIs", "Three.js", "Git"]
        },
        design: {
            title: "CORE PROGRAMMING & CS FOUNDATIONS",
            description: "Object-Oriented Design, Data Structures & Algorithms",
            details: "Solid algorithmic foundation with rigorous problem-solving skills, memory management, and clean object-oriented software development.",
            tools: ["Java", "C++", "C", "Python", "Data Structures", "Algorithms", "OOP Design", "DBMS / SQL", "Operating Systems", "Computer Networks"]
        }
    }
};
