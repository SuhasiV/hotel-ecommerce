"use client";

import { createContext, useState } from "react";

const BOOK_ROOM_DETAILS = {
  date: [],
  destination: undefined,
  room: undefined,
  hotelId: undefined,
  roomId: undefined,
};

export const BookRoomContext = createContext(BOOK_ROOM_DETAILS);

export const BookRoomContextProvider = ({ children }) => {
  const [bookedRoomDetails, setBookedRoomDetails] = useState(BOOK_ROOM_DETAILS);

  return (
    <BookRoomContext.Provider
      value={{
        date: bookedRoomDetails.date,
        destination: bookedRoomDetails.destination,
        room: bookedRoomDetails.room,
        hotelId: bookedRoomDetails.hotelId,
        roomId: bookedRoomDetails.roomId,
        setBookedRoomDetails,
      }}
    >
      {children}
    </BookRoomContext.Provider>
  );
};
