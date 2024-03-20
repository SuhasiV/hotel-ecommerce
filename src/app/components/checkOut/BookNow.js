"use client";
import styles from "./checkOut.module.scss";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const BookNow = ({ roomId, roomIdsToUpdate, allDates, price }) => {
  const router = useRouter();
  const [user, setUser] = useState({});

  useEffect(() => {
    if (typeof localStorage !== "undefined") {
      const loggedInUser = localStorage.getItem("LoggedInUser");
      if (loggedInUser) {
        const userDetails = JSON.parse(loggedInUser);
        setUser(userDetails);
      }
    }
  }, []);

  const handleBookNow = async () => {
    try {
      const response = await axios.put(`/api/rooms/${roomId}`, {
        roomIdsToUpdate,
        allDates: allDates,
      });
      const data = await axios.post(`/api/razorpay`, {
        user: user.id,
        email: user.email,
        price,
        roomIdsToUpdate,
      });
      console.log(data);
      var options = {
        key: process.env.RAZORPAY_KEY_ID, // Enter the Key ID generated from the Dashboard
        amount: data.order.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        currency: "INR",
        name: "Imperial Hotels", //your business name
        description: "Test Transaction",
        image: "/img/logo_full.jpg",
        order_id: data.order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        callback_url: "https://eneqd3r9zrjok.x.pipedream.net/",
        prefill: {
          //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
          name: "Gaurav Kumar", //your customer's name
          email: "gaurav.kumar@example.com",
          contact: "9000090000", //Provide the customer's phone number for better conversion rates
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
      var rzp1 = new Razorpay(options);
      if (response.status == 200 && data.status == 200) {
        router.push("/profile/success");
      }
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
    </>
  );
};

export default BookNow;
