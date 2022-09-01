import React from "react";
import { RiGobletFill, RiWalkLine, RiBus2Fill } from "react-icons/ri";
import { FaBeer } from "react-icons/fa";
import { motion } from "framer-motion";
const servicesVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.3,
    },
  },
  viewport: {
    ounce: false,
    amount: 1,
  },
};
const serviceVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
    transition: {
      type: "tween",
    },
  },
};
const Services = () => {
  return (
    <motion.section className="services">
      <motion.div
        variants={servicesVariants}
        initial="hidden"
        whileInView="visible"
        viewport="viewport"
        className="container"
      >
        <div className="special-header">
          <h2>services</h2>
          <div className="line"></div>
        </div>
        <div className="services-container">
          <motion.div className="service" variants={serviceVariants}>
            <div className="icon">
              <RiGobletFill />
            </div>
            <h3>free cocktails</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              repellendus possimus iure illo saepe, aspe
            </p>
          </motion.div>
          <motion.div className="service" variants={serviceVariants}>
            <div className="icon">
              <RiWalkLine />
            </div>
            <h3>endless hiking</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              repellendus possimus iure illo saepe, aspe
            </p>
          </motion.div>
          <motion.div className="service" variants={serviceVariants}>
            <div className="icon">
              <RiBus2Fill />
            </div>
            <h3>free shuttle</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              repellendus possimus iure illo saepe, aspe
            </p>
          </motion.div>
          <motion.div className="service" variants={serviceVariants}>
            <div className="icon">
              <FaBeer />
            </div>
            <h3>strongest beer</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga
              repellendus possimus iure illo saepe, aspe
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
