import React from "react";
import "./hero.css";
import { delay, motion } from "framer-motion";

const parentVariant = {
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

const childrenVariant = {
  hidden: {
    opacity: "0",
  },
  visible: {
    opacity: 1,
  },
};

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <div class="hero-text">
        <motion.h1
          variants={childrenVariant}
          transition={{ delay: 0.5, duration: 0.5 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          Hey, I am <span>Olulana Dari</span>
        </motion.h1>
        <motion.h3
          variants={childrenVariant}
          transition={{ delay: 1, duration: 0.5 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
        >
          A professional frontEnd dev specialized in building Elegant and
          responsive
          <br />
          websites that focus around customers needs.
        </motion.h3>
      </div>
    </div>
  );
};

export default Hero;
