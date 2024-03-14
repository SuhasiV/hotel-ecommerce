import styles from "@/app/hotels/hotels.module.scss";
import HotelsList from "../components/hotelsList/HotelsList";
import CheckInTry from "../components/checkIn/CheckInTry";

const page = () => {
  return (
    <div className={styles.container}>
      <div style={{ paddingTop: "65px" }}></div>
      <CheckInTry className={styles.checkIn} type="hotel" />
      <div className={styles.wrapper}>
        <HotelsList />
      </div>
    </div>
  );
};

export default page;
