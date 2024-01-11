"use client";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { DateRange } from "react-date-range";

import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format } from "date-fns";
import Link from "next/link";
const Try = () => {
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);

  return (
    <div>
      <h2>
        {" "}
        {`${
          date[0].startDate
            ? format(date[0].startDate, "dd/MM/yyyy")
            : "Check In"
        } - ${
          date[0].endDate ? format(date[0].endDate, "dd/MM/yyyy") : "Check Out"
        }`}
      </h2>

      <br />
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setDate([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={date}
        minDate={new Date()}
      />
      <br />
      <Link
        href={`/try2?startDate=${encodeURIComponent(
          date[0].startDate
        )}&endDate=${encodeURIComponent(date[0].endDate)}`}
      >
        Send
      </Link>
    </div>
  );
};

export default Try;
