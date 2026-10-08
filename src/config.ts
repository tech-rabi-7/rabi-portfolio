export interface ProjectItem {
    id: number;
    title: string;
    category: string;
    technologies: string;
    image: string;
    description: string;
    link?: string;
    type?: "project" | "certificate";
}

export const config = {
    developer: {
        name: "Rabi",
        fullName: "Rabi Paul",
        title: "Software Engineer",
        description: "Software Development Intern at Simpsoft Solutions & B.Tech CSE (2027 Passout at SurTech / MAKAUT). Focused on software engineering, distributed systems, backend architectures, and algorithmic optimization."
    },
    social: {
        github: "tech-rabi-7",
        email: "hello.rabi.paul.tech@gmail.com",
        location: "Kolkata, India"
    },
    about: {
        title: "About Me",
        description: "I am a Computer Science & Engineering student and Software Engineer from Kolkata, India. Currently contributing as a Software Development Intern at Simpsoft Solutions, and pursuing B.Tech in CSE (2027 Passout) at Dr. Sudhir Chandra Sur Institute of Technology (SurTech • MAKAUT). My core technical foundation is built on Java, Python, C++, SQL, Data Structures & Algorithms, and modern web architectures. I am passionate about engineering high-performance software, distributed systems, and real-world algorithmic solutions—like RouteRanker, an intelligent public transit route optimization engine modeling networks across 23 Indian cities."
    },
    experiences: [
        {
            position: "Software Development Intern",
            company: "Simpsoft Solutions",
            period: "2026 - Present",
            location: "Kolkata, India",
            description: "Working in a professional software engineering environment, translating client and product requirements into backend implementation tasks, developing RESTful APIs, optimizing database schemas, and practicing clean code and Git version control in a production setting.",
            responsibilities: [
                "Developing scalable backend modules, RESTful API endpoints, and clean application logic",
                "Collaborating on code reviews, system debugging, and database schema refinement",
                "Implementing reliable software design patterns following engineering best practices"
            ],
            technologies: ["Java", "Python", "SQL", "REST APIs", "Git", "System Design"]
        },
        {
            position: "Technical Internships & Programs",
            company: "EduSkills Academy • AICTE & IBM SkillsBuild",
            period: "2025 - 2026",
            location: "Virtual",
            description: "Completed intensive specialized training and hands-on modules in predictive analytics, enterprise computational workflows, applied systems, and ethical security practices.",
            responsibilities: [
                "Implemented predictive machine learning pipelines and classification models with Scikit-learn",
                "Engineered computational workflows, prompt templates, and data governance modules on IBM SkillsBuild",
                "Conducted hands-on cybersecurity vulnerability assessments and secure network analysis"
            ],
            technologies: ["Machine Learning", "Python", "Applied AI", "Enterprise Systems", "Cybersecurity"]
        },
        {
            position: "B.Tech Computer Science & Engineering",
            company: "Dr. Sudhir Chandra Sur Institute of Technology (SurTech) • MAKAUT",
            period: "2023 - 2027",
            location: "Kolkata, India",
            description: "Pursuing Bachelor of Technology in Computer Science and Engineering (2027 Passout). Rigorous academic focus on Data Structures & Algorithms, Operating Systems, DBMS, Computer Architecture, and Object-Oriented Software Design.",
            responsibilities: [
                "Core coursework: Data Structures, Algorithms, DBMS, Operating Systems, Computer Architecture",
                "Active problem solver practicing competitive programming and open-source software development",
                "Maintaining 7.00/10 CGPA in Computer Science & Engineering curriculum"
            ],
            technologies: ["Java", "C++", "C", "Data Structures", "Algorithms", "DBMS", "Operating Systems"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "RouteRanker",
            category: "Public Transit Optimization & GIS",
            technologies: "Python, GTFS, Algorithms, XGBoost, Streamlit, Folium GIS",
            image: "/images/RouteRanker.png",
            description: "Algorithmic public transit route optimization engine modeling networks across 23 Indian metropolitan cities (Delhi DTC, Bengaluru BMTC, Mumbai BEST, Pune PMPML, Hyderabad TSRTC). Ingests raw GTFS transit feeds, calculates Jaccard corridor overlap matrices to eliminate redundant routes, and achieves 100% classification accuracy with XGBoost.",
            link: "https://github.com/tech-rabi-7/RouteRanker",
            type: "project"
        },
        {
            id: 2,
            title: "Scalable Product Catalog & Search Service",
            category: "Backend REST Services & Performance",
            technologies: "Python, FastAPI, PostgreSQL, Redis Caching, Docker",
            image: "/images/Prodesk.png",
            description: "Multi-tier high-throughput REST service for catalog management, filtered queries, pagination, and database indexing. Implements Redis caching layer and request-level latency measurement.",
            link: "https://github.com/tech-rabi-7",
            type: "project"
        },
        {
            id: 3,
            title: "Fault-Tolerant Distributed Task Queue",
            category: "Distributed Systems & Async Processing",
            technologies: "Java, Spring Boot, Redis, PostgreSQL, Docker, Async Workers",
            image: "/images/Drishti.png",
            description: "Worker-based distributed task processing engine featuring asynchronous job distribution, retries with exponential backoff, dead-letter queuing, and idempotent execution.",
            link: "https://github.com/tech-rabi-7",
            type: "project"
        },
        {
            id: 4,
            title: "Data Structures & Algorithms Repository",
            category: "Core Algorithms & Problem Solving",
            technologies: "Java, C++, Python, Data Structures, Graph Theory, OOP",
            image: "/images/RedxChess.png",
            description: "Algorithmic repository containing clean, optimized implementations of Data Structures & Algorithms in Java, C++, and Python. Covers graph traversals, dynamic programming, binary trees, sorting algorithms, and complexity optimization.",
            link: "https://github.com/tech-rabi-7/basic-java-projects",
            type: "project"
        },
        {
            id: 5,
            title: "Python Software & Automation Suite",
            category: "Systems Scripting & Utility Applications",
            technologies: "Python, SQL, REST APIs, Automation, Scripting",
            image: "/images/PythonSuite.png",
            description: "Collection of practical Python applications, automation utilities, backend web prototypes, and data processing scripts developed across academic and independent projects.",
            link: "https://github.com/tech-rabi-7/Python-Projects",
            type: "project"
        },
        {
            id: 6,
            title: "MERN Stack Web Development",
            category: "Verified Credential • Ardent Computech",
            technologies: "MongoDB, Express.js, React, Node.js, JavaScript, REST APIs",
            image: "/images/cert-mern.png",
            description: "Comprehensive web engineering certification covering modern React components, Express REST APIs, Node.js runtime, and MongoDB database architecture.",
            link: "/certificates/MERN%20Full%20stack.pdf",
            type: "certificate"
        },
        {
            id: 7,
            title: "Java Programming Certification",
            category: "Verified Credential • Ardent Computech",
            technologies: "Java, Object-Oriented Design, Collections, Multithreading",
            image: "/images/cert-java.png",
            description: "Object-Oriented Programming, Java memory model, data structures, exception handling, and application development.",
            link: "/certificates/java.pdf",
            type: "certificate"
        },
        {
            id: 8,
            title: "C Systems Programming Certification",
            category: "Verified Credential • Ardent Computech",
            technologies: "C, Pointers, Memory Allocation, Data Structures",
            image: "/images/cert-c.png",
            description: "Foundational systems programming covering pointers, low-level memory allocation, bit manipulation, and algorithmic design.",
            link: "/certificates/c.pdf",
            type: "certificate"
        },
        {
            id: 9,
            title: "Python Programming Certification",
            category: "Verified Credential • Ardent Computech",
            technologies: "Python, OOP, Scripting, Automation, File Handling",
            image: "/images/cert-python.png",
            description: "Practical software development in Python covering scripting, modular software architecture, OOP design, and data structures.",
            link: "/certificates/python.png",
            type: "certificate"
        },
        {
            id: 10,
            title: "Mobile Application Development",
            category: "Verified Credential • Ardent Computech",
            technologies: "Android, Java, Mobile UI, SQLite, App Lifecycle",
            image: "/images/cert-app.png",
            description: "Native mobile application architecture, lifecycle handling, UI components, background services, and local persistence.",
            link: "/certificates/app_devolopment.pdf",
            type: "certificate"
        },
        {
            id: 11,
            title: "Artificial Intelligence & Machine Learning",
            category: "Technical Internship • EduSkills / AICTE",
            technologies: "AI / ML, Predictive Modeling, Scikit-learn, Python, Data Analytics",
            image: "/images/cert-aiml.png",
            description: "Government-recognized technical internship and certification covering predictive modeling, classification algorithms, and machine learning pipelines.",
            link: "/Internships/ai-ml.pdf",
            type: "certificate"
        },
        {
            id: 12,
            title: "Enterprise Computing & Applied AI",
            category: "Enterprise Credential • IBM SkillsBuild",
            technologies: "Enterprise Systems, Applied Computing, Cloud Foundations",
            image: "/images/cert-ibm.png",
            description: "Enterprise computing specialization covering applied computational workflows, cloud methodologies, and data governance.",
            link: "/Internships/Completion%20Certificate%20_%20SkillsBuild_page-0001.jpg",
            type: "certificate"
        },
        {
            id: 13,
            title: "Python Full Stack Development Internship",
            category: "Technical Internship • AICTE / EduSkills",
            technologies: "Python, Django, Web Services, SQL, REST APIs",
            image: "/images/cert-python-intern.png",
            description: "10-week intensive internship in Python backend engineering and database-backed web architectures.",
            link: "/Internships/python-fullstack.pdf",
            type: "certificate"
        },
        {
            id: 14,
            title: "Cybersecurity & Ethical Hacking",
            category: "Technical Internship • EduSkills / AICTE",
            technologies: "Cybersecurity, Network Defense, Vulnerability Scanning, Linux",
            image: "/images/cert-security.png",
            description: "Network defense, vulnerability identification, cryptographic security, and ethical testing standards.",
            link: "/Internships/ethical-hacking.pdf",
            type: "certificate"
        }
    ] as ProjectItem[],
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
            title: "SOFTWARE & SYSTEMS ENGINEERING",
            description: "High-Performance Architecture & Modern Web Applications",
            details: "Building responsive, high-performance web systems with React, TypeScript, Java, Python, and clean RESTful API integration.",
            tools: ["Java", "Python", "C++", "React", "TypeScript", "Node.js", "FastAPI", "Spring Boot", "SQL", "Git"]
        },
        design: {
            title: "CORE COMPUTER SCIENCE & ALGORITHMS",
            description: "Object-Oriented Design, Data Structures & Complexity Analysis",
            details: "Solid algorithmic foundation with rigorous problem-solving skills, memory management, and clean object-oriented software engineering.",
            tools: ["Data Structures", "Algorithms", "Graph Theory", "Dynamic Programming", "DBMS", "Operating Systems", "Computer Architecture", "OOP Design"]
        }
    }
};
