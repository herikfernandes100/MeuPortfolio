import React from "react";
import {
  FaGithub,
  FaReact,
  FaFigma,
  FaBootstrap,
  FaCode,
} from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { RiTailwindCssFill, RiNextjsLine } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io5";
import {
  SiAltiumdesigner,
  SiFirebase,
  SiTypescript,
  SiJavascript,
  SiMongodb,
} from "react-icons/si";

export const portfolio = {
  name: "Abdullah",
  fullName: "Muhammad Abdullah", // Used for the document title
  headline: {
    fWord: "SOFTWARE",
    lWord: "ENGINEER",
  },
  heroDescription: "Passionate about creating intuitive and engaging user experiences. Specialize in transforming ideas into beautifully crafted products.",
  
  sidebar: {
    avatarUrl: "Media.jpg",
    bio: (
      <>
        A <span className="text-white/80">Software Engineer</span> who has developed countless innovative solutions.
      </>
    ),
    cvUrl: "/Muhammad_Abdullah.pdf",
    cvLabel: "Download CV",
    isAvailable: true,
    availableText: "Available for Work",
  },

  socialLinks: [
    {
      Icon: FaGithub,
      href: "https://github.com/Abdullah-warraich-ch",
      hoverColor: "#e6edf3",
    },
    {
      Icon: CiLinkedin,
      href: "https://www.linkedin.com/in/muhammad-abdullah-949b26195/",
      hoverColor: "#0A66C2",
    },
  ],

  stats: [
    { count: "1+", label: "YEARS OF EXPERIENCE" },
    { count: "3+", label: "PROJECTS COMPLETED" },
    { count: "2+", label: "CLIENTS WORLDWIDE" },
  ],

  stackCards: [
    {
      title: "Design Stack",
      subtitle: (
        <>
          Figma, PhotoShop <br /> & Canva Specialist
        </>
      ),
      Icon: SiAltiumdesigner,
      widthClass: "md:w-[45%]",
      cardHoverClass: "hover:border-orange-500/40 hover:bg-orange-500/[0.03] hover:shadow-[0_20px_40px_-15px_rgba(249,115,22,0.15)]",
      glowClass: "bg-orange-500/10 group-hover:bg-orange-500/20 animate-float",
      iconClass: "bg-orange-500/10 border-orange-500/20 text-orange-500 group-hover:bg-orange-500 group-hover:text-white",
      btnClass: "border-white/20 bg-white text-orange-600 hover:bg-orange-500 hover:text-white hover:border-orange-500"
    },
    {
      title: "Development Stack",
      subtitle: (
        <>
          React, Next, Tailwind, <br /> Bootstrap & JQuery
        </>
      ),
      Icon: FaCode,
      widthClass: "md:w-[55%]",
      cardHoverClass: "hover:border-green-400/40 hover:bg-green-400/[0.03] hover:shadow-[0_20px_40px_-15px_rgba(74,222,128,0.15)]",
      glowClass: "bg-green-400/10 group-hover:bg-green-400/20 animate-float delay-1000",
      iconClass: "bg-green-400/10 border-green-400/20 text-green-500 group-hover:bg-green-400 group-hover:text-black",
      btnClass: "border-black/20 bg-white text-green-600 hover:bg-green-400 hover:text-white hover:border-green-400"
    }
  ],

  skills: [
    { logo: <FaReact />, title: "React JS", disc: "UI Library", color: "#61DAFB" },
    { logo: <FaFigma />, title: "Figma", disc: "Design Tool", color: "#F24E1E" },
    { logo: <RiTailwindCssFill />, title: "TailWind", disc: "Utility-First CSS", color: "#06B6D4" },
    { logo: <RiNextjsLine />, title: "Next JS", disc: "React Framework", color: "#FFFFFF" },
    { logo: <IoLogoJavascript />, title: "JavaScript", disc: "Client-side scripting", color: "#F7DF1E" },
    { logo: <FaGithub />, title: "Github", disc: "Code collaboration", color: "#E6EDF3" },
    { logo: <FaBootstrap />, title: "BootStrap", disc: "CSS Framework", color: "#7952B3" },
    { logo: <IoLogoCss3 />, title: "CSS", disc: "Responsive styling", color: "#264DE4" },
  ],

  projects: [
    {
      id: 1,
      link: "https://rehloo.vercel.app/",
      pic: "staysafe.png",
      heading: "Reloo, Find A Hostel",
      discr: "A Hostel Booking System",
      tags: [
        { name: "Mongo", icon: <SiMongodb color="#47A248" /> },
        { name: "Nextjs", icon: <RiNextjsLine color="#FFFFFF" /> },
        { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
      ],
    },
    {
      id: 2,
      link: "https://quiz-sooty-sigma-47.vercel.app/homepage",
      pic: "project2.png",
      heading: "Quiz App",
      discr: "A Simple Quiz Application",
      tags: [
        { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
      ],
    },
    {
      id: 3,
      link: "https://university-portal-rouge.vercel.app/admin",
      pic: "image.png",
      heading: "University Portal",
      discr: "VU University Portal",
      tags: [
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "Firebase", icon: <SiFirebase color="#FFCA28" /> },
      ],
    },
    {
      id: 4,
      link: "https://ramadan-time-two.vercel.app/",
      pic: "ramadan.png",
      heading: "Ramadan Time",
      discr: "GPS-powered Ramadan companion app.",
      tags: [
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
      ],
    },
    {
      id: 5,
      link: "https://e-commerce-product-page-beta-sand.vercel.app/",
      pic: "project1.png",
      heading: "Simple E-Commerce Page",
      discr: "Product Listing + Add to Cart",
      tags: [
        { name: "React", icon: <FaReact color="#61DAFB" /> },
        { name: "Tailwind", icon: <RiTailwindCssFill color="#06B6D4" /> },
        { name: "JS", icon: <SiJavascript color="#F7DF1E" /> },
      ],
    }
  ],

  experience: [
    {
      heading: "Junior Frontend Developer",
      para: "Currently working as a Frontend Developer at a software house, contributing to the development of responsive user interfaces using HTML, CSS, JavaScript, React, and Next.js.",
      date: "April, 2026 – Present",
      active: true,
    },
    {
      heading: "React JS Intern",
      para: "Previously worked as a Frontend Intern at a software house, contributing to the development of responsive user interfaces using HTML, CSS, JavaScript, and React.",
      date: "Dec , 2025 – April, 2026",
    },
    {
      heading: "IT Intern",
      para: "Worked as an IT Intern at StormFiber, assisting with daily IT operations including system setup, basic network support, and troubleshooting hardware and software issues.",
      date: "June 15, 2025 – Dec 21, 2025",
    },
  ],

  contact: {
    formspreeActionUrl: "https://formspree.io/f/xnjbebqr",
    title: {
      fWord: "LET'S WORK",
      lWord: "TOGETHER",
    },
    labels: {
      name: "Your Full Name",
      email: "Email Address",
      subject: "Subject of Interest",
      message: "Message",
      submit: "Send Message",
    },
    placeholders: {
      name: "John Doe",
      email: "john@example.com",
      message: "Tell me about your project...",
    },
    subjects: [
      { value: "freelance", label: "Freelance Project" },
      { value: "job", label: "Job Opportunity" },
      { value: "hi", label: "Just Saying Hi!" },
    ],
  },

  footer: {
    text: "Developed by ",
    developerName: "GTechSources",
  }
};
