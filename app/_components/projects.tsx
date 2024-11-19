"use client";

import { useState } from "react";
import Image from "next/image";
import ProjectCursor from "./ui/project-cursor";
import styles from "@/app/_styles/projects.module.css";

const projectData = [
  {
    title: "Attendly",
    description:
      "Imagine an app that flawlessly merges aesthetic appeal with functionality. Attendly achieves this beautifully. Realized through Next.jsand MongoDB, it provides a smooth, user-centric experience.",
    tags: ["Next", "MongoDb", "Express","Tailwind"],
    image: "/images/attendly.png",
    alt: "Attendly App",
    link: "https://nie-attendly.vercel.app/",
  },
  {
    title: "Astoneaone",
    description:
      "Astonraone is the official website for Diamond Group, a leading retail company offering a diverse range of high-quality products across multiple categories. Our platform ensures a seamless shopping experience, providing customers with a wide selection of items to meet their needs and preferences.",
    tags: ["Next","Nodemailer","Tailwind","Express"],
    image: "/images/astoneaone.png",
    alt: "Lakeview Apartments Website",
    link: "https://astoneaone.vercel.app/",
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
