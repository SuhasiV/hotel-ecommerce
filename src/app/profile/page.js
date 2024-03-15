import Link from "next/link";
import UserProfile from "../components/userprofile/UserProfile";
import styles from "./profile.module.scss";
import HotelCheckOut from "../components/checkOut/CheckOut";
import Logout from "../components/Logout";

const page = () => {
  return (
    <div className={styles.container}>
      <div style={{ padding: "20px" }}></div>
      <div className={styles.wrapper}>
        <div className={styles.profile}>
          <div className={styles.mainTitle}>
            <span className={styles.userTitle}>User Details</span>
            <hr />
            <UserProfile />
          </div>
          <div className={styles.logoutLast}>
            <Logout />
          </div>
        </div>
        <div className={styles.booking}>
          <HotelCheckOut />
        </div>
      </div>
    </div>
  );
};

export default page;
