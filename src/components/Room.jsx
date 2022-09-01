import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const roomVariants = {
  hidden: {
    scale: 0,
  },
  visible: {
    scale: 1,
  },
};
const Room = ({ room }) => {
  const {
    fields: { name, price, slug, images },
  } = room;
  const {
    fields: {
      file: { url },
    },
  } = images[0];
  return (
    <motion.div variants={roomVariants} className="room">
      <div className="img">
        <img src={url} alt={name} />
        <div className="price">
          <span>$ {price}</span>
          <small>per night</small>
        </div>
        <div className="overlay">
          <Link to={`${slug}`}>
            <button className="btn">features</button>
          </Link>
        </div>
      </div>
      <h4>{name}</h4>
    </motion.div>
  );
};

export default Room;
