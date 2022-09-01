import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const bannerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      when: "beforeChildren",
      duration: 0.5,
    },
  },
};
const containerVariants = {
  hidden: {
    rotate: 0,
    opacity: 0,
  },
  visible: {
    rotate: [0, 1, 0, 1, 0],
    opacity: 1,
  },
};
const Banner = () => {
  return (
    <motion.section
      className="banner"
      variants={bannerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div className="banner-container" variants={containerVariants}>
        <h1>luxurious rooms</h1>
        <div className="line"></div>
        <p>deluxe rooms starting at $299</p>
        <Link to="/rooms">
          <button className="btn">our rooms</button>
        </Link>
      </motion.div>
    </motion.section>
  );
};

export default Banner;
