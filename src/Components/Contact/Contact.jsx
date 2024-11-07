import React from "react";
import { motion } from "framer-motion";
import "./contact.css";

const Contact = () => {
  return (
    <div className="contactOverall" id="contact">
      <div className="contactHeader">
        <h3>Contact</h3>
        <h4>Looking for a frontEnd dev or want to work together?</h4>
      </div>
      <div className="contact">
        <motion.form
          action="https://formsubmit.co/dariolulana@gmail.com"
          method="POST"
          initial={{ width: 0, opacity: 0 }}
          // animate={{ width: "100%", transition: { duration: 1 } }}
          whileInView={{
            width: "100%",
            opacity: 1,
            transition: { duration: 1 },
          }}
          viewport={{ amount: 1, once: true }}
        >
          <div class="text">
            <input
              type="text"
              name="name"
              id="text"
              placeholder="Name"
              required
            />
            <i class="uil uil-user"></i>
          </div>
          <div class="email">
            <input type="email" name="email" placeholder="Email" required />
            <i class="uil uil-envelope"></i>
          </div>

          <textarea
            rows="5"
            cols="40"
            name="message"
            placeholder="Message"
            required
          ></textarea>
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for contacting me. I will be with you shortly😁😁"
          />
          <button type="submit">Send</button>
        </motion.form>
      </div>
      <footer id="footer">
        <div className="contactLinks">
          <motion.div
            className="links"
            whileHover={{
              scale: 1.2,
              transition: {
                yoyo: Infinity,
              },
            }}
          >
            <a href="https://www.linkedin.com/in/dari-olulana/">
              <i class="uil uil-linkedin"></i>
            </a>
          </motion.div>
          <motion.div
            className="links"
            whileHover={{
              scale: 1.2,
              transition: {
                yoyo: Infinity,
              },
            }}
          >
            <a href="https://github.com/DrizzyD1717">
              <i class="uil uil-github"></i>
            </a>
          </motion.div>
          <motion.div
            className="links"
            whileHover={{
              scale: 1.2,
              transition: {
                yoyo: Infinity,
              },
            }}
          >
            <a href="https://t.me/D_Revolver">
              <i class="uil uil-telegram"></i>
            </a>
          </motion.div>
          <motion.div
            className="links"
            whileHover={{
              scale: 1.2,
              transition: {
                yoyo: Infinity,
              },
            }}
          >
            <a href="https://wa.link/65pcs2">
              <i class="uil uil-whatsapp"></i>
            </a>
          </motion.div>
        </div>
        <div className="owner">
          Olulana Dari <span>© 2024</span>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
