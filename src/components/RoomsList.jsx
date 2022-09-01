import React from "react";
import Room from "./Room";
import { useGlobalCtx } from "./Context";
import { motion } from "framer-motion";
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};
const RoomsList = () => {
  const { sorted } = useGlobalCtx();
  return (
    <section className="rooms-list">
      <div className="container">
        {sorted.length === 0 ? (
          <div
            style={{
              textAlign: "center",
              marginBottom: "5rem",
              fontSize: "1.6rem",
              fontWeight: 800,
            }}
          >
            No Rooms Matched with your choices
          </div>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="room-container"
          >
            {sorted.map((room, index) => {
              return <Room key={index} room={room} />;
            })}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default RoomsList;
