import styles from "@/app/hotels/hotels.module.scss";
import HotelsList from "../components/hotelsList/HotelsList";
import CheckInTry from "../components/checkIn/CheckInTry";
import { Suspense } from "react";

const page = () => {
  return (
    <div className={styles.container}>
      <Suspense fallback={<div>Loading...</div>}>
        <div style={{ paddingTop: "65px" }}></div>
        <CheckInTry className={styles.checkIn} type="hotel" />
        <div className={styles.wrapper}>
          <HotelsList />
        </div>
      </Suspense>
    </div>
  );
};

export default page;
