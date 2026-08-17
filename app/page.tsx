import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">

          <a href="#" className="text-xl font-bold tracking-tight">
            R<span className="text-cyan-400">.</span>
          </a>

          <div className="hidden gap-8 text-sm text-gray-400 md:flex">
            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#skills" className="transition hover:text-white">
              Skills
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="#contact"
            className="rounded-full border border-white/20 px-5 py-2 text-sm transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Let's Talk
          </a>

        </div>
      </nav>


      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">

        {/* Background glow */}
        <div className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl" />

        <div className="mx-auto grid w-full max-w-6xl items-center gap-16 md:grid-cols-2">

          {/* Left */}
          <div>

            <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
              Computer Science Engineering Student
            </p>

            <h1 className="text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
              Hi, I'm
              <br />
              <span className="text-cyan-400">Rabi Paul.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-400">
              I&apos;m an aspiring software developer passionate about building
              useful applications, solving problems with code, and constantly
              improving my skills.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <a
                href="#projects"
                className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black transition hover:bg-cyan-300"
              >
                View My Projects
              </a>

              <a
                href="#contact"
                className="rounded-full border border-white/20 px-7 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
              >
                Contact Me
              </a>

            </div>


            {/* Social Links */}
<div className="mt-10 flex gap-6 text-sm text-gray-500">

  <a
    href="https://github.com/tech-rabi-7"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-white"
  >
    GitHub ↗
  </a>

  <a
    href="https://www.linkedin.com/in/rabi-paul-07-/"
    target="_blank"
    rel="noopener noreferrer"
    className="transition hover:text-white"
  >
    LinkedIn ↗
  </a>

  <a
    href="#"
    className="transition hover:text-white"
  >
    Resume ↗
  </a>

</div>

          </div>


          {/* Right - Profile Photo */}
          <div className="flex justify-center">

            <div className="relative h-[420px] w-[340px] overflow-hidden rounded-3xl border border-cyan-400/30 bg-white/[0.03] shadow-2xl shadow-cyan-500/10">

              <Image
                src="/picture.png"
                alt="Rabi Paul"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 340px"
                className="object-cover"
              />

              <div className="pointer-events-none absolute inset-4 rounded-2xl border border-cyan-400/20" />

            </div>

          </div>

        </div>

      </section>


      {/* About */}
<section
  id="about"
  className="border-t border-white/10 px-6 py-28"
>
  <div className="mx-auto max-w-6xl">

    <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
      01 / About Me
    </p>

    <div className="mt-6 grid gap-12 md:grid-cols-[1.2fr_0.8fr]">

      {/* About Text */}
      <div>
        <h2 className="text-4xl font-bold leading-tight sm:text-5xl">
          Turning curiosity into
          <span className="text-cyan-400"> code.</span>
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-400">
          I&apos;m Rabi Paul, a Computer Science Engineering student with a
          strong interest in software development, problem solving and
          technology.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-400">
          I enjoy learning new technologies, practicing Data Structures and
          Algorithms, and building projects that turn ideas into practical
          solutions.
        </p>

        <p className="mt-5 text-lg leading-8 text-gray-400">
          My goal is to grow into a skilled software developer by continuously
          improving my programming fundamentals, development skills and
          problem-solving ability.
        </p>
      </div>

      {/* Quick Info */}
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30">
          <p className="text-sm text-gray-500">Education</p>
          <p className="mt-2 font-semibold">
            B.Tech in Computer Science & Engineering
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30">
          <p className="text-sm text-gray-500">Graduation</p>
          <p className="mt-2 font-semibold">
            2027
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30">
          <p className="text-sm text-gray-500">Focus</p>
          <p className="mt-2 font-semibold">
            Software Development & DSA
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/30">
          <p className="text-sm text-gray-500">Currently Learning</p>
          <p className="mt-2 font-semibold">
            Java • Python • Web Development
          </p>
        </div>

      </div>

    </div>
  </div>
</section>

     {/* Skills */}
<section
  id="skills"
  className="border-t border-white/10 px-6 py-28"
>
  <div className="mx-auto max-w-6xl">

    <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
      02 / Skills
    </p>

    <div className="mt-6">
      <h2 className="text-4xl font-bold sm:text-5xl">
        My Technical <span className="text-cyan-400">Toolkit.</span>
      </h2>

      <p className="mt-5 max-w-2xl text-lg leading-8 text-gray-400">
        Technologies and tools I use while learning, building projects and
        solving programming problems.
      </p>
    </div>

    {/* Skill Cards */}
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

      {/* Programming */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
        <div className="text-3xl">{"</>"}</div>

        <h3 className="mt-5 text-xl font-semibold">
          Programming Languages
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {["C", "C++", "Java", "Python", "JavaScript"].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Web Development */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
        <div className="text-3xl">{"{}"}</div>

        <h3 className="mt-5 text-xl font-semibold">
          Web Development
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {["HTML", "CSS", "JavaScript", "React", "Next.js"].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* CS Fundamentals */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
        <div className="text-3xl">◈</div>

        <h3 className="mt-5 text-xl font-semibold">
          CS Fundamentals
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {["DSA", "DBMS", "Operating Systems", "Computer Networks"].map(
            (skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-gray-300"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>

      {/* Database */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
        <div className="text-3xl">⌘</div>

        <h3 className="mt-5 text-xl font-semibold">
          Database
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {["MySQL", "SQL"].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Tools */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
        <div className="text-3xl">⚙</div>

        <h3 className="mt-5 text-xl font-semibold">
          Tools & Platforms
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {["Git", "GitHub", "VS Code", "Vercel"].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Problem Solving */}
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
        <div className="text-3xl">⚡</div>

        <h3 className="mt-5 text-xl font-semibold">
          Problem Solving
        </h3>

        <div className="mt-5 flex flex-wrap gap-2">
          {["Algorithms", "Data Structures", "Logical Thinking", "Debugging"].map(
            (skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 px-3 py-1.5 text-sm text-gray-300"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Projects */}
      <section
        id="projects"
        className="min-h-screen border-t border-white/10 px-6 py-32"
      >
        <div className="mx-auto max-w-6xl">

          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
            03 / Projects
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Featured Projects
          </h2>

        </div>
      </section>


      {/* Contact */}
<section
  id="contact"
  className="border-t border-white/10 px-6 py-28"
>
  <div className="mx-auto max-w-6xl">

    <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">
      04 / Contact
    </p>

    <div className="mt-6 grid gap-12 md:grid-cols-2">

      {/* Left */}
      <div>
        <h2 className="text-4xl font-bold sm:text-5xl">
          Let&apos;s build something{" "}
          <span className="text-cyan-400">together.</span>
        </h2>

        <p className="mt-6 max-w-lg text-lg leading-8 text-gray-400">
          I&apos;m always open to discussing opportunities, projects,
          collaborations, or simply connecting with fellow developers.
        </p>
      </div>

      {/* Contact Info */}
      <div className="space-y-4">

        <a
  href="mailto:hello.rabi.paul.tech@gmail.com"
  className="block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40"
>
  <p className="text-sm text-gray-500">Email</p>
  <p className="mt-2 font-medium">
    hello.rabi.paul.tech@gmail.com
  </p>
</a>

        <a
          href="https://github.com/tech-rabi-7"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40"
        >
          <p className="text-sm text-gray-500">GitHub</p>
          <p className="mt-2 font-medium">
            github.com/tech-rabi-7 ↗
          </p>
        </a>

        <a
          href="https://www.linkedin.com/in/rabi-paul-07-/"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-cyan-400/40"
        >
          <p className="text-sm text-gray-500">LinkedIn</p>
          <p className="mt-2 font-medium">
            linkedin.com/in/rabi-paul-07- ↗
          </p>
        </a>

      </div>

    </div>
  </div>
</section>
{/* Footer */}
<footer className="border-t border-white/10 px-6 py-8">
  <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-gray-500 sm:flex-row">

    <p>
      © {new Date().getFullYear()} Rabi Paul. All rights reserved.
    </p>

    <div className="flex gap-6">
      <a
        href="https://github.com/tech-rabi-7"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-white"
      >
        GitHub
      </a>

      <a
        href="https://www.linkedin.com/in/rabi-paul-07-/"
        target="_blank"
        rel="noopener noreferrer"
        className="transition hover:text-white"
      >
        LinkedIn
      </a>

      <a
        href="mailto:hello.rabi.paul.tech@gmail.com"
        className="transition hover:text-white"
      >
        Email
      </a>
    </div>

  </div>
</footer>
    </main>
  );
}