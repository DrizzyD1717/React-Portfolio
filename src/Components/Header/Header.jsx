import React from "react";
import "./header.css";
import { motion } from "framer-motion";

const headerVariant = {
  hidden: {
    x: "-100px",
  },
  visible: {
    x: 0,
    transition: {
      duration: 1,
      when: "beforeChildren",
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

const Header = () => {
  return (
    <motion.header variants={headerVariant} initial="hidden" animate="visible">
      <motion.div class="logo" variants={childrenVariant}>
        <i class="uil uil-shutter"></i>
      </motion.div>
      <motion.nav variants={childrenVariant}>
        <a href="#hero">
          <i class="fa fa-home" aria-hidden="true"></i>
        </a>
        <a href="#about">
          <i class="uil uil-user"></i>
        </a>
        <a href="#projects">
          <i class="uil uil-images"></i>
        </a>
        <a href="#contact">
          <i class="uil uil-setting"></i>
        </a>
        <a href="#footer">
          <i class="uil uil-heart"></i>
        </a>
      </motion.nav>
    </motion.header>
  );
};

export default Header;
