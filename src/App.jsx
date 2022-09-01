import React from "react";
import Home from "./pages/Home";
import { Routes, Route, useLocation } from "react-router-dom";
import SharedLayouts from "./components/SharedLayouts";
import SingleRoom from "./pages/SingleRoom";
import Rooms from "./pages/Rooms";
import { AnimatePresence } from "framer-motion";
const App = () => {
  const location = useLocation();
  return (
    <AnimatePresence wait>
      <Routes key={location.pathname} location={location}>
        <Route path="/" element={<SharedLayouts />}>
          <Route index element={<Home />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="rooms/:id" element={<SingleRoom />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

export default App;
