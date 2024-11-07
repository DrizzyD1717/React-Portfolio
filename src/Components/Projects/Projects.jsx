import React from "react";
import { motion } from "framer-motion";
import { projects } from "../../projects";
import "./projects.css";

const Projects = () => {
  return (
    <div className="projectsOverall" id="projects">
      <h2>Projects</h2>
      <div className="projects">
        {projects.map((project) => {
          const { name, id, img, site } = project;
          return (
            <motion.div
              className="project"
              initial={{ opacity: 0 }}
              whileInView={{
                opacity: 1,
                y: ["200px", 0],
                transition: {
                  duration: 1.5,
                },
              }}
              viewport={{ once: true, amount: 1 }}
            >
              <div className="image">
                <img src={img} alt={name} />
              </div>
              <div className="projectDetails">
                <a href={site}>
                  <h3>{name}</h3>
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
