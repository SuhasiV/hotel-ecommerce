"use client";
import { format } from "date-fns";
import { useSearchParams } from "next/navigation";
import React, { useState } from "react";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

const Try2 = () => {
  const searchParams = useSearchParams();
  const startDateParam = searchParams.get("startDate");
  const endDateParam = searchParams.get("endDate");

  const initialStartDate = startDateParam
    ? new Date(startDateParam)
    : new Date();
  const initialEndDate = endDateParam ? new Date(endDateParam) : null;

  const [date, setDate] = useState([
    {
      startDate: initialStartDate,
      endDate: initialEndDate,
      key: "selection",
    },
  ]);

  return (
    <div>
      <h1>try2</h1>
      {`${
        date[0].startDate ? format(date[0].startDate, "dd/MM/yyyy") : "Check In"
      } - ${
        date[0].endDate ? format(date[0].endDate, "dd/MM/yyyy") : "Check Out"
      }`}
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}
        minDate={new Date()}
      />

      <br />
    </div>
  );
};

export default Try2;
