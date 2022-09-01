import React, { createContext, useContext, useEffect, useState } from "react";
import data from "../data";
const AppCtx = createContext();
const initialState = {
  rooms: [],
  type: "all",
  capacity: 1,
  price: 0,
  maxPrice: 0,
  minPrice: 0,
  maxSize: 0,
  minSize: 0,
  breakfast: false,
  pets: false,
};
const AppProvider = ({ children }) => {
  const [bigState, setBigState] = useState(initialState);
  const [showLinks, setShowLinks] = useState(false);
  const [sorted, setSorted] = useState([]);
  useEffect(() => {
    let rooms = data;
    let maxPrice = Math.max(
      ...rooms.map((room) => {
        return room.fields.price;
      })
    );
    let maxSize = Math.max(
      ...rooms.map((room) => {
        return room.fields.size;
      })
    );
    setBigState({ ...bigState, rooms, price: maxPrice, maxPrice, maxSize });
  }, []);

  // Deluxe Room Filter
  const deluxeRooms = bigState.rooms.filter((room) => {
    const { name } = room.fields;
    return name.includes("deluxe");
  });
  const closeLinks = () => {
    setShowLinks(false);
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const changeValue = (eo) => {
    let name = eo.target.name;
    let value =
      eo.target.type === "checkbox" ? eo.target.checked : eo.target.value;
    setBigState({ ...bigState, [name]: value });
  };
  const filterRooms = () => {
    const { rooms, type, capacity, price, breakfast, pets, minSize, maxSize } =
      bigState;
    let filterRooms = [...rooms];
    if (type !== "all") {
      filterRooms = filterRooms.filter((room) => room.fields.type === type);
    }
    if (Number(capacity) !== 1) {
      filterRooms = filterRooms.filter(
        (room) => room.fields.capacity === Number(capacity)
      );
    }
    filterRooms = filterRooms.filter(
      (room) => room.fields.price <= Number(price)
    );

    filterRooms = filterRooms.filter(
      (room) => room.fields.breakfast === breakfast
    );

    filterRooms = filterRooms.filter((room) => room.fields.pets === pets);

    filterRooms = filterRooms.filter(
      (room) =>
        room.fields.size >= Number(minSize) &&
        room.fields.size <= Number(maxSize)
    );
    setSorted(filterRooms);
  };
  useEffect(() => {
    filterRooms();
  }, [
    bigState.type,
    bigState.capacity,
    bigState.price,
    bigState.breakfast,
    bigState.pets,
    bigState.maxSize,
    bigState.minSize,
  ]);
  return (
    <AppCtx.Provider
      value={{
        deluxeRooms,
        showLinks,
        toggleLinks,
        ...bigState,
        closeLinks,
        scrollToTop,
        changeValue,
        sorted,
      }}
    >
      {children}
    </AppCtx.Provider>
  );
};
// Custom Hook
export const useGlobalCtx = () => {
  return useContext(AppCtx);
};
export { AppProvider };
