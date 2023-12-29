"use client";

import React from "react";
import CheckIn from "../components/CheckIn";
import styles from "@/app/styles/hotels.module.css";
import { useRouter } from "next/navigation";

import { SearchItem } from "../components/SearchItem";
import BookingBox from "../components/BookingBox";

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
          <BookingBox type="hotelsPage" />
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
