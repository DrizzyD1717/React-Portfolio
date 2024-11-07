import React from "react";
import "./skills.css";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      className="skills"
      initial={{ x: 0, opacity: 0 }}
      whileInView={{
        x: ["-100vw", 0],
        opacity: 1,
        duration: 3,
      }}
      viewport={{ once: true, amount: 1 }}
    >
      <h3>Skills</h3>
      <div className="skill html">
        <div className="skillLevel">
          <div className="skillName">HTML</div>
        </div>
      </div>
      <div className="skill css">
        <div className="skillLevel">
          <div className="skillName">CSS</div>
        </div>
      </div>
      <div className="skill javascript">
        <div className="skillLevel">
          <div className="skillName">JavaScript</div>
        </div>
      </div>
      <div className="skill react">
        <div className="skillLevel">
          <div className="skillName">React</div>
        </div>
      </div>
      <div className="skill framerMotion">
        <div className="skillLevel">
          <div className="skillName">Framer Motion</div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
