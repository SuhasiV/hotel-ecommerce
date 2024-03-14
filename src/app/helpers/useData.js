import { useEffect, useState } from "react";

export const useUrlData = (destination, date, room) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const dest = destination ? destination : "null";
    const startDate = date[0].startDate;
    const endDate = date[0].endDate;

    const stringStartDate = startDate.toISOString();

    const tomorrow = new Date(new Date().getTime() + 24 * 60 * 60 * 1000);
    const stringTomorrow = tomorrow.toISOString();

    const finalEndDate =
      endDate == null || undefined ? stringTomorrow : endDate.toISOString();

    const newQuery = `dest=${dest}&startDate=${stringStartDate}&endDate=${finalEndDate}&room=${room.room}`;
    setQuery(newQuery);
  }, [destination, date, room]);

  return query;
};

// const {
//   dest,
//   startDate: startD,
//   endDate: endD,
//   room,
// } = Object.fromEntries(searchParams.entries());
