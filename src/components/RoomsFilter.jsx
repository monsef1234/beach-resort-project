import React, { useEffect } from "react";
import { useGlobalCtx } from "./Context";
import { motion } from "framer-motion";
const getUnique = (items, value) => {
  return [...new Set([...items.map((item) => item.fields[value])])];
};
const filterVariants = {
  hidden: {
    x: "-100vh",
  },
  visible: {
    x: "0",
    transition: {
      type: "spring",
      bounce: 0.4,
    },
  },
  viewport: {
    once: false,
    amount: 1,
  },
};
const RoomsFilter = () => {
  const {
    maxPrice,
    minPrice,
    maxSize,
    minSize,
    rooms,
    price,
    changeValue,
    pets,
    breakfast,
  } = useGlobalCtx();
  let types = getUnique(rooms, "type");
  types = ["all", ...types];
  let people = getUnique(rooms, "capacity");
  return (
    <motion.section
      variants={filterVariants}
      initial="hidden"
      whileInView="visible"
      viewport="viewport"
      className="filter-container"
    >
      <div className="special-header">
        <h2>search room</h2>
        <div className="line"></div>
      </div>
      <div className="container">
        <form>
          <div className="box">
            <label htmlFor="type">room type</label>
            <select name="type" id="type" onChange={changeValue}>
              {types.map((type) => {
                return (
                  <option value={type} key={type}>
                    {type}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="box">
            <label htmlFor="capacity">Guests</label>
            <select name="capacity" id="capacity" onChange={changeValue}>
              {people.map((person) => {
                return (
                  <option value={person} key={person}>
                    {person}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="box">
            <label htmlFor="price">price {price}</label>
            <input
              type="range"
              name="price"
              id="price"
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={changeValue}
            />
          </div>
          <div className="box">
            <label htmlFor="size">room size</label>
            <div className="inputs">
              <input
                type="number"
                name="minSize"
                id="minSize"
                min="0"
                value={minSize}
                onChange={changeValue}
              />
              <input
                type="number"
                name="maxSize"
                id="maxSize"
                min="0"
                value={maxSize}
                onChange={changeValue}
              />
            </div>
          </div>
          <div className="box">
            <div className="input">
              <input
                type="checkbox"
                name="breakfast"
                id="breakfast"
                checked={breakfast}
                onChange={changeValue}
              />
              <label htmlFor="breakfast">breakfast</label>
            </div>
            <div className="input">
              <input
                type="checkbox"
                name="pets"
                id="pets"
                checked={pets}
                onChange={changeValue}
              />
              <label htmlFor="pets">pets</label>
            </div>
          </div>
        </form>
      </div>
    </motion.section>
  );
};

export default RoomsFilter;
