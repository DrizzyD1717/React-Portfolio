import React from "react";
import "./about.css";
import { motion } from "framer-motion";
import Skills from "./Skills/Skills";

const About = () => {
  return (
    <div className="about" id="about">
      <h2>About</h2>
      <motion.div className="attributes">
        <motion.div
          className="individualAttribute"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 3,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="pentagon">
            <i class="uil uil-tachometer-fast"></i>
          </div>
          <h3>Fast</h3>
          <p>Fast load times and lag free interaction, my highest priority.</p>
        </motion.div>
        <motion.div
          className="individualAttribute"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 3,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="pentagon">
            <i class="uil uil-laptop"></i>
          </div>
          <h3>Responsive</h3>
          <p>My layouts will work on any device, big or small.</p>
        </motion.div>
        <motion.div
          className="individualAttribute"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 3,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="pentagon">
            <i class="uil uil-lightbulb-alt"></i>
          </div>
          <h3>Intuitive</h3>
          <p>Strong preference for easy to use, intuitive UX/UI.</p>
        </motion.div>
        <motion.div
          className="individualAttribute"
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            transition: {
              duration: 3,
            },
          }}
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="pentagon">
            <i class="uil uil-rocket"></i>
          </div>
          <h3>Dynamic</h3>
          <p>
            Websites don't have to be static, I love making pages come to life.
          </p>
        </motion.div>
      </motion.div>
      <Skills></Skills>
    </div>
  );
};

export default About;
