"use client";
import styles from "./checkOut.module.scss";
import axios from "axios";
import { useRouter } from "next/navigation";

const BookNow = ({ roomId, roomIdsToUpdate, allDates, price }) => {
  const router = useRouter();

  const handleBookNow = async () => {
    try {
      const response = await axios.put(`/api/rooms/${roomId}`, {
        roomIdsToUpdate,
        allDates: allDates,
      });

      router.push("/profile/success");
    } catch (err) {
      console.log(err.message);
    }
  };
  return (
    <>
      {" "}
      <button className={styles.bookNowButton} onClick={handleBookNow}>
        Book Now
      </button>
      <button id="rzp-button1">Pay</button>
    </>
  );
};

export default BookNow;
