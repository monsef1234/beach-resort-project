import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGlobalCtx } from "../components/Context";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
// My Menu will disappear if i do this animation

const roomVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: "0",
    transition: {
      dutation: 5,
    },
  },
  exit: {
    x: "-100vw",
  },
};
const headerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      when: "beforeChildren",
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
const imgsVariants = {
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
const SingleRoom = () => {
  const { rooms } = useGlobalCtx();
  const { id } = useParams();
  const room = rooms.filter((room) => {
    const {
      fields: { slug },
    } = room;
    return slug === id;
  });
  return (
    <motion.section
      className="single-room"
      key={room}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      {room.map((item, index) => {
        const {
          fields: {
            name,
            images,
            price,
            size,
            capacity,
            pets,
            breakfast,
            description,
            extras,
          },
        } = item;
        const {
          fields: {
            file: { url },
          },
        } = images[0];
        return (
          <div key={index}>
            <motion.div
              variants={headerVariants}
              className="header"
              style={{ backgroundImage: `url(${url})` }}
            >
              <motion.div
                variants={containerVariants}
                className="header-container"
              >
                <h1>{name} room</h1>
                <div className="line"></div>
                <Link to="/">
                  <button className="btn">back to home</button>
                </Link>
              </motion.div>
            </motion.div>
            <div className="container">
              <motion.div
                className="about-room"
                variants={featuredVariants}
                initial="hidden"
                animate="visible"
                viewport="viewport"
              >
                <motion.div className="imgs">
                  {images.slice(1, images.length).map((img, index) => {
                    const {
                      fields: {
                        file: { url },
                      },
                    } = img;
                    return (
                      <motion.img
                        variants={imgsVariants}
                        src={url}
                        alt=""
                        key={index}
                      />
                    );
                  })}
                </motion.div>
                <div className="info">
                  <div className="details">
                    <h3>details</h3>
                    <p>{description}</p>
                  </div>
                  <div className="more-info">
                    <h4>info</h4>
                    <span>price: $ {price}</span>
                    <span>size: {size}</span>
                    <span>
                      max capacity:{" "}
                      {capacity > 1
                        ? `${capacity} people`
                        : `${capacity} person`}
                    </span>
                    <span>
                      {pets === false ? "pets not allowed" : "pets  allowed"}
                    </span>
                    <span>
                      {breakfast === false
                        ? "no free breakfast included"
                        : "free breakfast included"}
                    </span>
                  </div>
                </div>
                <div className="extras">
                  <h3>extras</h3>
                  <div className="list">
                    <div className="col">
                      <ul>
                        {extras.slice(0, 3).map((extra, index) => {
                          return <li key={index}>{extra}</li>;
                        })}
                      </ul>
                    </div>
                    <div className="col">
                      <ul>
                        {extras.slice(3, 5).map((extra, index) => {
                          return <li key={index}>{extra}</li>;
                        })}
                      </ul>
                    </div>
                    <div className="col">
                      <ul>
                        {extras.slice(5, extras.length).map((extra, index) => {
                          return <li key={index}>{extra}</li>;
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        );
      })}
    </motion.section>
  );
};

export default SingleRoom;
