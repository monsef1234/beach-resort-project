import React from "react";
import Banner from "../components/Banner";
import Featured from "../components/Featured";
import Services from "../components/Services";
import { motion } from "framer-motion";
// My Menu will disappear if i do this animation
const homeVariants = {
  hidden: {
    x: "100vw",
  },
  visible: {
    x: "0",
    transition: {
      dutation: 0.5,
    },
  },
  exit: {
    x: "-100vw",
  },
};
const Home = () => {
  return (
    <motion.div>
      <Banner />
      <Services />
      <Featured />
    </motion.div>
  );
};

export default Home;
