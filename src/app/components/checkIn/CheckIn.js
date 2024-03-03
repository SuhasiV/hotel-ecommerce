"use client";

import React, { useState } from "react";
import styles from "@/app/components/checkIn/checkIn.module.scss";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import Link from "next/link";

const CheckIn = () => {
  const [destination, setDestination] = useState();
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: "selection",
    },
  ]);
  const [option, setOption] = useState({
    adult: "1",
    children: "0",
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

  const queryParams = `dest=${encodeURIComponent(
    destination
  )}&startDate=${encodeURIComponent(
    date[0].startDate
  )}&endDate=${encodeURIComponent(date[0].endDate)}`;
  const optionParams = new URLSearchParams(option).toString();

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Destination</div>
          <div className={styles.sectionData}>
            <span className={styles.largeText}>
              <input
                type="text"
                placeholder="Delhi"
                onChange={(e) => setDestination(e.target.value)}
              />
            </span>
          </div>
        </div>
        <div
          className={styles.section}
          onClick={() => {
            setOpenDate(!openDate);
          }}
        >
          <div className={styles.sectionLabel}>Checkin & Checkout</div>
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
          <div className={styles.sectionData}>
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
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.sectionLabel}>Rooms & Guests</div>
          {openOption && (
            <div className={styles.options}>
              <div className={styles.subOption}>
                <div className={styles.optionLabel}>Adults:</div>
                <div className={styles.optionValue}>
                  <button
                    disabled={option.adult <= 1}
                    onClick={() => handleOption("adult", "d")}
                  >
                    -
                  </button>
                  <span> {option.adult}</span>
                  <button onClick={() => handleOption("adult", "i")}>+</button>
                </div>
              </div>
              <div className={styles.subOption}>
                <div className={styles.optionLabel}>Children:</div>
                <div className={styles.optionValue}>
                  <button
                    disabled={option.children <= 1}
                    onClick={() => handleOption("children", "d")}
                  >
                    -
                  </button>
                  <span>{option.children}</span>
                  <button onClick={() => handleOption("children", "i")}>
                    +
                  </button>
                </div>
              </div>
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
            <span className={styles.largeText}>{option.adult}</span> Adults{" "}
            <span className={styles.largeText}>{option.children}</span> Children{" "}
            <span className={styles.largeText}>{option.room}</span> Room
          </div>
        </div>

        <div className={styles.section} style={{ background: "#333" }}>
          <Link href={`/hotels?${queryParams}&${optionParams}`}>
            <div className={styles.sectionButton}>Check Now</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckIn;
