import React, { useEffect, useRef } from "react";
import logo from "../images/logo.svg";
import { RiMenu3Fill } from "react-icons/ri";
import { useGlobalCtx } from "./Context";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
const headerVariants = {
  hidden: {
    y: "-100vh",
  },
  visible: {
    y: "0",
    transition: {
      type: "spring",
      bounce: 0.3,
      when: "beforeChildren",
    },
  },
};
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const childrenVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};
const Header = () => {
  const { showLinks, toggleLinks, closeLinks } = useGlobalCtx();
  const linksContainer = useRef(null);
  const links = useRef(null);
  useEffect(() => {
    const linksHeight = links.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainer.current.style.height = `${linksHeight}px`;
    } else {
      linksContainer.current.style.height = `0px`;
    }
  }, [showLinks]);
  return (
    <motion.header variants={headerVariants} initial="hidden" animate="visible">
      <motion.div className="container" variants={containerVariants}>
        <motion.img src={logo} alt="Logo" variants={childrenVariants} />
        <motion.div
          className="links-container"
          ref={linksContainer}
          variants={childrenVariants}
        >
          <ul className="links" ref={links}>
            <Link to="/">
              <li className="link" onClick={closeLinks}>
                home
              </li>
            </Link>
            <Link to="/rooms">
              <li className="link" onClick={closeLinks}>
                rooms
              </li>
            </Link>
          </ul>
        </motion.div>
        <div className="bar-menu" onClick={toggleLinks}>
          <RiMenu3Fill />
        </div>
      </motion.div>
    </motion.header>
  );
};

export default Header;
