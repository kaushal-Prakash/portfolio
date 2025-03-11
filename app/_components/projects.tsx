"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectCursor from "./ui/project-cursor";
import styles from "@/app/_styles/projects.module.css";

const projectData = [
  {
    title: "Crave",
    description:
      "Crave is a full-stack recipe-sharing platform that enables users to create, share, and explore recipes. Built with Express.js and MySQL, it ensures secure data management and user authentication. The Next.js frontend offers a smooth, responsive experience with a rich text editor for detailed recipe descriptions. The platform also supports media uploads and interactive UI elements, enhancing user engagement.",
    tags: ["Next", "MySQL", "Express","Tailwind"],
    image: "/images/crave.png",
    alt: "Crave App",
    link: "https://github.com/kaushal-Prakash/crave",
  },{
    title: "Spotify Clone",
    description:
      "Designed and developed a functional Spotify clone that allows users to upload, manage, and display album images and songs seamlessly. Built using Next.js and React for a dynamic user interface, integrated cloud-based storage solutions for efficient media management, and implemented a secure backend for handling user authentication and data storage.",
    tags: ["Next", "MongoDb","Tailwind","Cloudinary"],
    image: "/images/spotify-clone.png",
    alt: "Spotify Clone App",
    link: "https://github.com/kaushal-Prakash/spotify-clone",
  },{
    title: "Attendly",
    description:
      "Imagine an app that flawlessly merges aesthetic appeal with functionality. Attendly achieves this beautifully. Realized through Next.jsand MongoDB, it provides a smooth, user-centric experience.",
    tags: ["Next", "MongoDb","Tailwind"],
    image: "/images/attendly.png",
    alt: "Attendly App",
    link: "https://github.com/kaushal-Prakash/NIEAttendly",
  },
  {
    title: "Community App",
    description:
      "Developed using React and Appwrite, our community webapp enables students to seamlessly share and access important updates, fostering real-time collaboration and engagement.",
    tags: ["Appwrite", "React", "Tailwind"],
    image: "/images/community.png",
    alt: "Nie community app",
    link: "https://nie-community.vercel.app/",
  },
];

const Projects = () => {
  const [isActive, setIsActive] = useState(false);

  const handleCursor = (value: boolean) => {
    setIsActive(value);
  };

  return (
    <section id="projects" className={styles.projects}>
      <div className="heading">
        <h2>Recent Work</h2>
        <div className="wrapper">
          <p className="subtitle">
            Here are some of my recent projects, showcasing my front-end
            development and UI design skills. These projects reflect my
            commitment to delivering high-quality, user-friendly solutions using
            modern technologies.
          </p>
        </div>
      </div>

      {/* Project Content */}
      <div className={styles.content}>
        {projectData.map((project, index) => (
          <div key={index} className={styles.project}>
            <div
              className={styles.image}
              onClick={() => window.open(project.link, "_blank")}
              onMouseEnter={() => handleCursor(true)}
              onMouseLeave={() => handleCursor(false)}
            >
              <Image
                src={project.image}
                width={768}
                height={768}
                alt={project.alt}
              />
            </div>

            <div className={styles.description}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={`tags ${styles.tech}`}>
                {project.tags.map((tag, index) => (
                  <p key={index}>{tag}</p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Project Cursor */}
      <ProjectCursor isActive={isActive} />
    </section>
  );
};

export default Projects;
