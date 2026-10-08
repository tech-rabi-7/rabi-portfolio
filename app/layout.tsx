import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rabi Paul — Software Engineer | Simpsoft Solutions Intern | 2027 Passout",
  description:
    "Portfolio of Rabi Paul, Software Engineer and Software Intern at Simpsoft Solutions. B.Tech CSE 2027 Passout at SurTech / MAKAUT. Explore software projects, RouteRanker, system engineering, and verified credentials.",
  keywords: [
    "Rabi Paul",
    "Software Engineer",
    "Simpsoft Solutions",
    "SurTech",
    "MAKAUT",
    "2027 Passout",
    "RouteRanker",
    "Full-Stack Developer",
    "Next.js",
    "Java",
    "Python",
  ],
  authors: [{ name: "Rabi Paul", url: "https://github.com/tech-rabi-7" }],
  openGraph: {
    title: "Rabi Paul — Software Engineer",
    description:
      "Software Intern at Simpsoft Solutions | B.Tech CSE 2027 Passout. Engineering scalable software, transit optimization engines, and modern applications.",
    url: "https://rabi-portfolio-eight.vercel.app",
    siteName: "Rabi Paul Portfolio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}
    >
      <body className="min-h-screen bg-[#050509] text-gray-100 font-sans antialiased selection:bg-cyan-500/30 selection:text-cyan-200">
        {children}
      </body>
    </html>
  );
}
