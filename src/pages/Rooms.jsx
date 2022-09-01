import React from "react";
import { Link } from "react-router-dom";
import RoomsFilter from "../components/RoomsFilter";
import RoomsList from "../components/RoomsList";
import img from "../images/room-9.jpeg";
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
const Rooms = () => {
  return (
    <motion.section className="rooms">
      <motion.div
        variants={bannerVariants}
        initial="hidden"
        animate="visible"
        className="header"
        style={{ background: `url(${img})` }}
      >
        <motion.div variants={containerVariants} className="header-container">
          <h1>Our Rooms</h1>
          <div className="line"></div>
          <Link to="/">
            <button className="btn">return home</button>
          </Link>
        </motion.div>
      </motion.div>
      <RoomsFilter />
      <RoomsList />
    </motion.section>
  );
};

export default Rooms;
