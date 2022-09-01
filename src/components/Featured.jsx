import React from "react";
import { useGlobalCtx } from "./Context";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const featuredVariants = {
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
const roomVariants = {
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
const Featured = () => {
  const { deluxeRooms, scrollToTop } = useGlobalCtx();

  return (
    <section className="featured-rooms">
      <motion.div
        className="container"
        variants={featuredVariants}
        initial="hidden"
        whileInView="visible"
        viewport="viewport"
      >
        <div className="special-header">
          <h2>featured rooms</h2>
          <div className="line"></div>
        </div>
        <motion.div
          className="rooms-container"
          transition={{ staggerChildren: 0.3 }}
        >
          {deluxeRooms.map((room) => {
            const {
              fields: { name, images, price, slug },
            } = room;
            const {
              fields: {
                file: { url },
              },
            } = images[0];
            return (
              <motion.div className="room" key={name} variants={roomVariants}>
                <div className="img">
                  <img src={url} alt="" />
                  <div className="price">
                    <span>$ {price}</span>
                    <small>per night</small>
                  </div>
                  <div className="overlay">
                    <Link to={`rooms/${slug}`}>
                      <button className="btn">features</button>
                    </Link>
                  </div>
                </div>
                <h4>{name}</h4>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Featured;
