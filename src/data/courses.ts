import { Course } from "@/types";

export const courses: Course[] = [
  {
    id: "1",
    title: "Complete React Development",
    description: "Master React from basics to advanced concepts",
    longDescription: "A comprehensive React course covering everything from JSX and components to advanced patterns like Context API, custom hooks, and performance optimization. Includes real-world projects and best practices.",
    image: "/placeholder.svg",
    platform: "udemy",
    url: "https://udemy.com/course/react-complete",
    duration: "30 hours",
    level: "beginner",
    price: 89
  },
  {
    id: "2",
    title: "TypeScript for Beginners",
    description: "Learn TypeScript fundamentals and best practices",
    longDescription: "Start your TypeScript journey with this beginner-friendly course. Learn type annotations, interfaces, generics, and how to integrate TypeScript with popular frameworks.",
    image: "/placeholder.svg",
    platform: "youtube",
    url: "https://youtube.com/playlist?list=typescript-basics",
    duration: "8 hours",
    level: "beginner"
  },
  {
    id: "3",
    title: "Advanced Node.js Development",
    description: "Build scalable backend applications with Node.js",
    longDescription: "Take your Node.js skills to the next level. Learn about microservices, testing, security, performance optimization, and deployment strategies for production applications.",
    image: "/placeholder.svg",
    platform: "udemy",
    url: "https://udemy.com/course/nodejs-advanced",
    duration: "45 hours",
    level: "advanced",
    price: 129
  },
  {
    id: "4",
    title: "Full-Stack Web Development",
    description: "Complete web development with MERN stack",
    longDescription: "Build full-stack applications from scratch using MongoDB, Express.js, React, and Node.js. Includes authentication, database design, API development, and deployment.",
    image: "/placeholder.svg",
    platform: "youtube",
    url: "https://youtube.com/playlist?list=mern-fullstack",
    duration: "25 hours",
    level: "intermediate"
  }
];