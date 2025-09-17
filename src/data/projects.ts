import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce solution with React and Node.js",
    longDescription: "A comprehensive e-commerce platform built with modern technologies including React, Node.js, MongoDB, and Stripe integration. Features include user authentication, product management, shopping cart, order processing, and admin dashboard.",
    image: "/placeholder.svg",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "TypeScript"],
    demoUrl: "https://demo.example.com",
    githubUrl: "https://github.com/example/ecommerce",
    price: 299,
    type: "paid",
    featured: true
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Simple and efficient task management with real-time updates",
    longDescription: "A clean and intuitive task management application that helps teams collaborate effectively. Built with React and Firebase, featuring real-time synchronization, drag-and-drop functionality, and team collaboration tools.",
    image: "/placeholder.svg",
    technologies: ["React", "Firebase", "Material-UI", "TypeScript"],
    demoUrl: "https://tasks.example.com",
    githubUrl: "https://github.com/example/tasks",
    type: "free"
  },
  {
    id: "3",
    title: "Portfolio Template",
    description: "Modern portfolio template for developers and designers",
    longDescription: "A beautiful, responsive portfolio template perfect for showcasing your work. Features smooth animations, dark/light mode, and easy customization. Built with React and Tailwind CSS.",
    image: "/placeholder.svg",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    demoUrl: "https://portfolio.example.com",
    githubUrl: "https://github.com/example/portfolio",
    type: "free",
    featured: true
  },
  {
    id: "4",
    title: "SaaS Dashboard",
    description: "Complete SaaS dashboard with analytics and user management",
    longDescription: "A full-featured SaaS dashboard template with user authentication, subscription management, analytics charts, and admin controls. Perfect for launching your SaaS product quickly.",
    image: "/placeholder.svg",
    technologies: ["Next.js", "Prisma", "PostgreSQL", "Stripe", "Recharts"],
    demoUrl: "https://saas.example.com",
    price: 499,
    type: "paid"
  }
];