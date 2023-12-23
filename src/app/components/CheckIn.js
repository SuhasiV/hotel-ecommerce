"use client";

import React, { useState } from "react";
import styles from "@/app/styles/checkIn.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PlaceIcon from "@mui/icons-material/Place";
import Dropdown from "./DropDown";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

import { useRouter } from "next/navigation";
import Link from "next/link";
import { CheckinCheckout } from "./CheckinCheckout";

const CheckIn = () => {
  const [destination, setDestination] = useState("");

  const [option, setOption] = useState({
    adult: 1,
    room: 1,
  });
  const handleOption = (name, operation) => {
    setOption((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? option[name] + 1 : option[name] - 1,
      };
    });
  };
  const [optionOpen, setOptionOpen] = useState(false);
  const handleDoneButtonClick = () => {
    event.stopPropagation();
    setOptionOpen(false);
  };

  const [children, setChildren] = useState(0);

  const childrenOptions = [1, 2, 3, 4];

  const handleAdultChange = (value) => {
    setAdults(value);
  };
  const handleChildrenChange = (value) => {
    setChildren(value);
  };

  const router = useRouter();
  //const handleCheckinSearch = () => {
  //  // Use router.push() to navigate to a different page
  //  router.push("/hotels");
  //};
  //const handleCheckinSearch = () => {
  //  console.log("Navigating to hotels page with parameters:", {
  //    destination,
  //    startDate: date[0].startDate,
  //    endDate: date[0].endDate,
  //    children,
  //    adult: option.adult,
  //    room: option.room,
  //  });
  //  const createQueryString = (name, value) => {
  //    const params = new URLSearchParams();
  //    params.set(name, value);
  //
  //    return params.toString();
  //  };
  //  router.push({
  //    pathname: "hotels",
  //    query: { destination },
  //  });
  //};

  return (
    <div className={styles.header}>
      <div className={styles.container}>
        <div className={styles.location}>
          <PlaceIcon />
          <input
            type="text"
            placeholder="Where you heading?"
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className={styles.checkIn}>
          <CheckinCheckout type="checkin" />
          <div className={styles.icon}>
            <CalendarMonthIcon />
          </div>
        </div>

        <div className={styles.adults}>
          <div
            className={styles.dropdownLabel}
            onClick={() => setOptionOpen(true)}
          >
            Adults
          </div>
          <div
            className={styles.lableValue}
            onClick={() => setOptionOpen(true)}
          >{`${option.adult}`}</div>
          {optionOpen && (
            <div className={styles.options}>
              <div className={styles.optionItem}>
                <button
                  disabled={option.adult <= 1}
                  className={styles.optionCount}
                  onClick={() => handleOption("adult", "d")}
                >
                  -
                </button>
                <span className={styles.optionNum}>{`${option.adult}`}</span>
                <button
                  className={styles.optionCount}
                  onClick={() => handleOption("adult", "i")}
                >
                  +
                </button>
              </div>
              <div
                className={styles.doneButton}
                onClick={(event) => handleDoneButtonClick(event)}
              >
                Confirm
              </div>
            </div>
          )}
        </div>
        <div className={styles.children}>
          <div className={styles.dropdownLabel}>Children</div>
          <Dropdown
            label={children}
            options={childrenOptions}
            selectedOption={children}
            onSelectOption={handleChildrenChange}
          />
        </div>
        <div className={styles.room}>
          <div className={styles.dropdownLabel}>Room</div>
          {`${option.room}`}
          <div className={styles.options}>
            <div className={styles.optionItem}>
              <button
                className={styles.optionCount}
                disabled={option.room <= 1}
                onClick={() => handleOption("room", "d")}
              >
                -
              </button>
              <span className={styles.optionNum}>{`${option.room}`}</span>
              <button
                className={styles.optionCount}
                onClick={() => handleOption("room", "i")}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className={styles.checknow}>
          <Link
            href={{
              pathname: "/hotels",
              query: { destination: "D", age: "67" },
            }}
          >
            Check Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CheckIn;
