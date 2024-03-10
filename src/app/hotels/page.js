// import React, { useEffect, useState } from "react";
// import CheckIn from "../components/checkIn/CheckIn";
// import styles from "@/app/styles/hotels.module.css";
// import { useRouter } from "next/navigation";

// import { SearchItem } from "../components/SearchItem";
// import BookingBox from "../components/BookingBox";
// import axios from "axios";

// const Page = () => {
//   const [hotel, setHotel] = useState([]);
//   useEffect(() => {
//     const getHotel = async () => {
//       try {
//         const response = await axios.get("/api/hotels");
//         const hotelData = response.data.hotels;
//         setHotel(hotelData);
//       } catch (err) {
//         console.log("error fetching hotel data", err);
//       }
//     };
//     getHotel();
//   }, []);
//   return (
//     <div className={styles.container}>
//       <div className={styles.wrapper}>
//         <div className={styles.left}>
//           <BookingBox type="hotelsPage" />
//         </div>
//         <div className={styles.right}>
//           {hotel.map((hotel) => (
//             <SearchItem
//               key={hotel._id}
//               id={hotel._id}
//               name={hotel.name}
//               add={hotel.address}
//               desc={hotel.desc}
//               features={hotel.features}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

import styles from "@/app/hotels/hotels.module.scss";
import CheckIn from "../components/checkIn/CheckIn";
import HotelsList from "../components/hotelsList/HotelsList";
import CheckInTry from "../components/checkIn/CheckInTry";

const page = () => {
  return (
    <div className={styles.container}>
      <div style={{ paddingTop: "65px" }}></div>
      <CheckInTry className={styles.checkIn} />
      <div className={styles.wrapper}>
        <HotelsList />
      </div>
    </div>
  );
};

export default page;
