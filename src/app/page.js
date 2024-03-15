// Home.js
import React, { Suspense } from "react";
import styles from "./page.module.css";
import CheckIn from "./components/checkIn/CheckIn";
import NewHotels from "./components/newHotels/NewHotels";
import DestinationCard from "./components/destinationSlider/DestinationSlider";
import Banner from "./components/banner/Banner";
import HomeSlider from "./components/homeSlider/HomeSlider";
import CheckInTry from "./components/checkIn/CheckInTry";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <main className={styles.main}>
        <HomeSlider />
        <CheckInTry type="hotel" />
        <div className={styles.wrapper}>
          <NewHotels />
          <DestinationCard type="isFeatured" />
        </div>
        <Banner />
        <div className={styles.wrapper}>
          <DestinationCard type="isPopular" />
        </div>
      </main>
    </Suspense>
  );
}
