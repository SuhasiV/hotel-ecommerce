"use client";

import React from "react";
import CheckIn from "../components/CheckIn";
import styles from "@/app/styles/hotels.module.css";
import { useRouter } from "next/navigation";
import { CheckinCheckout } from "../components/CheckinCheckout";
import { SearchItem } from "../components/SearchItem";

const Page = () => {
  //const router = useRouter();
  //const { destination, age } = router.query;
  //const { destination, startDate, endDate, children, adult, room } =
  //  router.query;
  //console.log(destination, startDate);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.left}>
          <div className={styles.item}>
            <div className={styles.label}>Name</div>
            <input type="text" placeholder="Enter your destination" />
          </div>
          <div className={styles.item}>
            <div className={styles.label}>Check In - Check Out</div>
            <div className={styles.calender}>
              <CheckinCheckout type="hotels" />
            </div>
          </div>
          <div className={styles.item}>
            <div className={styles.label}>Options</div>{" "}
            <div className={styles.options}>
              <div className={styles.optionType}>
                <span>
                  Max Price <small> (per night)</small>
                </span>

                <input min={0} type="number" />
              </div>
              <div className={styles.optionType}>
                <span>
                  Min Price <small> (per night)</small>
                </span>

                <input min={0} type="number" />
              </div>
              <div className={styles.optionType}>
                <span>Adults</span>
                <input min={1} type="number" />
              </div>
              <div className={styles.optionType}>
                <span>Children</span>
                <input min={0} type="number" />
              </div>
              <div className={styles.optionType}>
                <span>Rooms</span>
                <input min={1} type="number" />
              </div>
            </div>
          </div>
          <div className={styles.search}>Search</div>
        </div>
        <div className={styles.right}>
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
          <SearchItem />
        </div>
      </div>
    </div>
  );
};

export default Page;
