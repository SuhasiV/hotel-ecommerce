"use client";

import React, { useState } from "react";
import styles from "@/app/components/checkIn/checkIn.module.scss";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";

const CheckIn = () => {
  // const [destination, setDestination] = useState();
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [option, setOption] = useState({
    room: "1",
  });
  const [openOption, setOpenOption] = useState(false);

  const handleOption = (name, operation) => {
    setOption((prev) => {
      const newValue = operation === "i" ? +prev[name] + 1 : +prev[name] - 1;
      return {
        ...prev,
        [name]: newValue < 0 ? 0 : newValue, // Ensure the value is not negative
      };
    });
  };

  // const queryParams = `dest=${encodeURIComponent(
  //   destination
  // )}&startDate=${encodeURIComponent(
  //   date[0].startDate
  // )}&endDate=${encodeURIComponent(date[0].endDate)}`;
  // const optionParams = new URLSearchParams(option).toString();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.section}>
          <LocationOnIcon className={styles.icons} />
          <input
            type="text"
            placeholder="Select destination"
            onChange={(e) => setDestination(e.target.value)}
          />
          <div className={styles.sectionData}>
            <span className={styles.largeText}></span>
          </div>
        </div>
        <div
          className={styles.section}
          onClick={() => {
            setOpenDate(!openDate);
          }}
        >
          <CalendarMonthIcon className={styles.icons} />

          <span className={styles.largeText}>
            {`${
              date[0].startDate
                ? format(date[0].startDate, "dd/MM/yyyy")
                : "Check In"
            } - ${
              date[0].endDate
                ? format(date[0].endDate, "dd/MM/yyyy")
                : "Check Out"
            }`}
          </span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className={styles.dateRange}
              minDate={new Date()}
            />
          )}
        </div>
        <div className={styles.section}>
          <BedroomParentIcon className={styles.icons} />
          {openOption && (
            <div className={styles.options}>
              <div className={styles.subOption}>
                <div className={styles.optionLabel}>Room:</div>
                <div className={styles.optionValue}>
                  <button
                    disabled={option.room <= 1}
                    onClick={() => handleOption("room", "d")}
                  >
                    -
                  </button>
                  <span>{option.room}</span>
                  <button onClick={() => handleOption("room", "i")}>+</button>
                </div>
              </div>
            </div>
          )}

          <div
            className={styles.sectionData}
            onClick={() => {
              setOpenOption(!openOption);
            }}
          >
            <span className={styles.largeText}>{option.room}</span> Room
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionButton}>
            <Link
              href="/"
              // href={`/hotels?${queryParams}&${optionParams}`}
              className={styles.button}
            >
              Check Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckIn;
