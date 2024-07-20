import { nanoid } from "nanoid";
import { FaHtml5, FaJava, FaJsSquare, FaReact, FaBrain } from "react-icons/fa";

export const links = [
  { id: nanoid(), href: "/", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },

  { id: nanoid(), href: "#projects", text: "projects" },
];

export const skills = [
  {
    id: nanoid(),
    title: "HTML & CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences",
  },

  {
    id: nanoid(),
    title: "Java & Spring Boot",
    icon: <FaJava className="h-16 w-16 text-emerald-500" />,
    text: "Experienced in Java and Spring Boot, developing robust backend systems and RESTful APIs for scalable applications",
  },
  {
    id: nanoid(),
    title: "JavaScript & TypeScript",
    icon: <FaJsSquare className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in JavaScript and TypeScript, building dynamic and interactive web applications with a focus on code quality and performance",
  },
  {
    id: nanoid(),
    title: "React & Next.js",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in React and Next.js, creating modern, fast, and SEO-friendly web applications with seamless user interfaces",
  },
  {
    id: nanoid(),
    title: "Machine Learning & Deep Learning",
    icon: <FaBrain className="h-16 w-16 text-emerald-500" />,
    text: "Expert in Machine Learning and Deep Learning, leveraging data to build predictive models and intelligent systems",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: "/assets/project-1.jpg",
    url: "...",
    github: ",,,",
    title: "First Project",
    text: "My first full stack project bla bla",
  },
  {
    id: nanoid(),
    img: "/assets/project-2.jpg",
    url: "...",
    github: ",,,",
    title: "Second Project",
    text: "My first frontend project bla bla",
  },
  {
    id: nanoid(),
    img: "/assets/project-3.jpg",
    url: "...",
    github: ",,,",
    title: "Third Project",
    text: "My first data science bla bla",
  },
];
