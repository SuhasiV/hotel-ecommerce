"use client";

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
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";

const page = () => {
  const data = [
    {
      name: "The Chapter Kyoto, a Tribute Portfolio Hotel",
      review: "5",
      desc: "Discover our stylish Kyoto, Japan, hotel near Kawaramachi Street in the city center.",
      price: "4500",
      img: ["/hotel1.jpg", "/hotel1.jpg", "/hotel1.jpg", "/hotel1.jpg"],
      available: false,
    },
    {
      name: "The Chapter Kyoto, a Tribute Portfolio Hotel",
      review: "5",
      desc: "Discover our stylish Kyoto, Japan, hotel near Kawaramachi Street in the city center.",
      price: "4500",
      img: ["/hotel1.jpg", "/hotel1.jpg", "/hotel1.jpg", "/hotel1.jpg"],
      available: true,
    },
    {
      name: "The Chapter Kyoto, a Tribute Portfolio Hotel",
      review: "5",
      desc: "Discover our stylish Kyoto, Japan, hotel near Kawaramachi Street in the city center.",
      price: "4500",
      img: ["/hotel1.jpg", "/hotel1.jpg", "/hotel1.jpg", "/hotel1.jpg"],
      available: true,
    },
    {
      name: "The Chapter Kyoto, a Tribute Portfolio Hotel",
      review: "5",
      desc: "Discover our stylish Kyoto, Japan, hotel near Kawaramachi Street in the city center.",
      price: "4500",
      img: ["/hotel1.jpg", "/hotel1.jpg", "/hotel1.jpg", "/hotel1.jpg"],
      available: false,
    },
  ];

  var image = [];

  return (
    <div className={styles.container}>
      <div style={{ paddingTop: "65px" }}></div>
      <CheckIn className={styles.checkIn} />
      <div className={styles.wrapper}>
        <div className={styles.hotels}>
          {data.map((hotel, index) => (
            <div key={`${hotel.name}-${index}`} className={styles.hotel}>
              <div className={styles.left}>
                <Image
                  alt={hotel.name}
                  src={hotel.img[0]}
                  width={300}
                  height={200}
                />
              </div>
              <div className={styles.right}>
                <div className={styles.info}>
                  <div className="title1" style={{ fontSize: "25px" }}>
                    {hotel.name}
                  </div>
                  <div className={styles.review}>
                    {Array.from({ length: hotel.review }, (_, index) => (
                      <StarIcon
                        key={`${hotel.review}-${index}`}
                        style={{ color: "#9a8c98", fontSize: "18px" }}
                      />
                    ))}
                  </div>
                  <div className={styles.desc}>{hotel.desc}</div>
                  <div className={styles.detailButton}>
                    {" "}
                    <Link href="/" className={styles.link}>
                      View Hotel Details
                    </Link>
                    <EastIcon className={styles.icon} />
                  </div>
                </div>
                <hr />
                <div className={styles.price}>
                  {hotel.available == true ? (
                    <div>
                      <span style={{ fontWeight: "700", fontSize: "22px" }}>
                        {hotel.price}
                      </span>
                      /night <small>(incl GST)</small>
                      <button className={styles.button}>
                        View Other Dates
                      </button>
                      <button className={styles.button}>Book Now</button>
                    </div>
                  ) : (
                    <div>
                      <span>Sold Out</span>

                      <button className={styles.button}>
                        View Other Dates
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
