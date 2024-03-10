"use client";

import CheckIn from "@/app/components/checkIn/CheckIn";
// import SingleHotelInfo from "@/app/components/SingleHotelInfo";
// import React from "react";
// import styles from "@/app/hotels/singleHotel.module.scss";
// import BookingBox from "@/app/components/BookingBox";
// import HotelGallery from "@/app/components/HotelGallery";
// import Image from "next/image";
// import WifiIcon from "@mui/icons-material/Wifi";
// import GroupsIcon from "@mui/icons-material/Groups";
// import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
// import RestaurantIcon from "@mui/icons-material/Restaurant";

// const page = ({ params }) => {
//   const roomType3 = [
//     {
//       id: 1,
//       name: "Classic Deluxe Room",
//       price: "Rs. 3700",
//       bed: "King-size bed",
//       img: "/img/roomDeluxe.jpg",
//       alt: "Classic Deluxe Room",
//       people: "1-2 Persons",
//     },
//     {
//       id: 2,
//       name: "Executive Suite",
//       price: "Rs. 3300",
//       bed: "Queen-size bed",
//       img: "/img/roomExecutive.jpg",
//       alt: "Executive Suite",
//       people: "1-2 Persons",
//     },
//     {
//       id: 3,
//       name: "Grand Family Suite",
//       price: "Rs. 5100",
//       bed: "King+twin beds",
//       img: "/img/roomFamily.jpg",
//       alt: "Grand Family Suite",
//       people: "3-4 Persons",
//     },
//   ];
//   const roomType2 = [
//     {
//       id: 4,
//       name: "Presidential Terrace Suite",
//       price: "Rs. 12,000",
//       bed: "King-size bed",
//       img: "/img/roomTerrace.jpg",
//       alt: "Presidential Terrace Suite",
//       people: "1-2 Persons",
//     },
//     {
//       id: 5,
//       name: "Imperial Royal Suite",
//       price: "Rs. 22,000",
//       bed: " Emperor-size bed",
//       img: "/img/roomRoyal.jpg",
//       alt: "Imperial Royal Suite",
//       people: "1-2 Persons",
//     },
//   ];

//   const hotelId = params.id;
//   return (
//     <div>
//       <div className={styles.container}>
//         <div className={styles.wrapper1}>
//           <div className={styles.left}>
//             <HotelGallery />
//             <SingleHotelInfo hotelId={hotelId} />
//           </div>

//           <div className={styles.right}>
//             <BookingBox
//               type="singleHotelPage"
//               roomTypes={{ roomType2, roomType3 }}
//             />
//           </div>
//         </div>
//         <div className={styles.wrapper2}>
//           <div className={styles.section}>
//             <div className={styles.heading}>Room Types:</div>
//             <div className={styles.roomSec1}>
//               {roomType3.map((item) => (
//                 <div className={styles.box1} key={item.id}>
//                   <div className={styles.image}>
//                     <Image
//                       src={item.img}
//                       fill={true}
//                       alt={item.alt}
//                       className={styles.roomImage}
//                     />
//                   </div>
//                   <div className={styles.roomBookNow}>Book Now</div>
//                   <div className={styles.boxInfo}>
//                     <div className={styles.boxHidden}>
//                       <div className={styles.boxPrice}>
//                         {item.price} <small>/ Night ({item.bed})</small>{" "}
//                       </div>
//                       <div className={styles.boxName}>{item.name}</div>
//                       <div></div>
//                       <div>
//                         {" "}
//                         <hr className={styles.roomHr} />
//                       </div>

//                       <div className={styles.roomList}>
//                         {" "}
//                         <div>
//                           <WifiIcon />
//                           Free Wifi
//                         </div>
//                         <div>
//                           <GroupsIcon />
//                           {item.people}
//                         </div>
//                         <div>
//                           <ConnectedTvIcon />
//                           Free Netflix
//                         </div>
//                         <div>
//                           <RestaurantIcon />
//                           Breakfast
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <div className={styles.roomSec1}>
//               {roomType2.map((item) => (
//                 <div className={styles.box1} key={item.id}>
//                   <div className={styles.image}>
//                     <Image
//                       src={item.img}
//                       fill={true}
//                       alt={item.alt}
//                       className={styles.roomImage}
//                     />
//                   </div>
//                   <div className={styles.roomBookNow}>Book Now</div>
//                   <div className={styles.boxInfo}>
//                     <div className={styles.boxHidden}>
//                       <div className={styles.boxPrice}>
//                         {item.price} <small>/ Night ({item.bed})</small>{" "}
//                       </div>
//                       <div className={styles.boxName}>{item.name}</div>
//                       <div></div>
//                       <div>
//                         {" "}
//                         <hr className={styles.roomHr} />
//                       </div>

//                       <div className={styles.roomList}>
//                         {" "}
//                         <div>
//                           <WifiIcon />
//                           Free Wifi
//                         </div>
//                         <div>
//                           <GroupsIcon />
//                           {item.people}
//                         </div>
//                         <div>
//                           <ConnectedTvIcon />
//                           Free Netflix
//                         </div>
//                         <div>
//                           <RestaurantIcon />
//                           Breakfast
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default page;

import styles from "@/app/hotels/singleHotel.module.scss";
import WifiIcon from "@mui/icons-material/Wifi";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import CoffeeMakerIcon from "@mui/icons-material/CoffeeMaker";
import WineBarIcon from "@mui/icons-material/WineBar";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import BathtubIcon from "@mui/icons-material/Bathtub";

import RoomCard from "@/app/components/roomCard/RoomCard";
import CheckInTry from "@/app/components/checkIn/CheckInTry";

const page = () => {
  const data = {
    name: "The Chapter Kyoto, a Tribute Portfolio Hotel",
    address:
      "Sumer nagar, radhe radhe chauraya, mansarovar, Jaipur, Rajasthan, 302030",
    review: "5",
    desc: "Discover our stylish Kyoto, Japan, hotel near Kawaramachi Street in the city center.Discover our stylish Kyoto, Japan, hotel near Kawaramachi Street in the city center.",
    img: "h.jpg",
    inRoomAmenities: {
      wifi: true,
      espressoMachine: true,
      miniBar: true,
      safe: true,
      airCondition: true,
      bathTub: true,
    },
    roomType: [
      {
        name: "Deluxe Room",
        price: "1999",
        people: "2",
        bed: "King size",
        img: ["hotel1.jpg", "hotel1.jpg", "hotel1.jpg", "hotel1.jpg"],
        available: true,
      },
      {
        name: "Twin Room",
        price: "1999",
        people: "2",
        bed: "2 single",
        img: ["hotel1.jpg", "hotel1.jpg", "hotel1.jpg", "hotel1.jpg"],
        available: true,
      },
      {
        name: "Business Suite",
        price: "1999",
        people: "2",
        bed: "King size",
        img: ["hotel1.jpg", "hotel1.jpg", "hotel1.jpg", "hotel1.jpg"],
        available: true,
      },
      {
        name: "Royale Suite",
        price: "1999",
        people: "4",
        bed: "King size",
        img: ["hotel1.jpg", "hotel1.jpg", "hotel1.jpg", "hotel1.jpg"],
        available: true,
      },
    ],
    facilities: {
      spa: {
        img: "spa.jpg",
        desc: "Discover our stylish Kyoto, Japan, hotel near Kawaramachi Street in the city center.Discover our stylish Kyoto, Japan, hotel near Kawaramachi Street in the city center.",
      },
      dining: {
        img: "spa.jpg",
        desc: "Discover our stylish Kyoto, Japan, hotel near Kawaramachi Street in the city center.Discover our stylish Kyoto, Japan, hotel near Kawaramachi Street in the city center.",
      },
    },
    contact: {
      email: "abc@gmail.com",
      phone: "1234567890",
    },
    checkIn: "11:00",
    checkOut: "2:00",
    pets: true,
    smoking: false,
  };

  const inRoomAmenities = [
    {
      icon: WifiIcon,
      name: "High Speed Wifi",
      available: data.inRoomAmenities.wifi,
    },
    {
      icon: CoffeeMakerIcon,
      name: "Espresso Machine",
      available: data.inRoomAmenities.espressoMachine,
    },
    {
      icon: WineBarIcon,
      name: "Mini Bar Fridge",
      available: data.inRoomAmenities.miniBar,
    },
    {
      icon: LockOpenIcon,
      name: "In Room Safe",
      available: data.inRoomAmenities.safe,
    },
    {
      icon: AcUnitIcon,
      name: "Air Condition",
      available: data.inRoomAmenities.airCondition,
    },
    {
      icon: BathtubIcon,
      name: "Bath Tub & Bath Robes",
      available: data.inRoomAmenities.bathTub,
    },
  ];

  return (
    <div className={styles.container}>
      <div style={{ paddingTop: "60px" }}></div>
      <div
        className={styles.title}
        style={{
          background: `url(/${data.img})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className={styles.overlay}>
          {" "}
          <div className="title1" style={{ color: "#fff", fontSize: "40px" }}>
            {data.name}
          </div>
        </div>{" "}
      </div>
      <CheckInTry />
      <div className={styles.wrapper}>
        <div className={styles.section}>
          {" "}
          <div className={styles.heading}>
            <div className={styles.line}></div>
            <div className={styles.head}>In Room Amenities</div>{" "}
            <div className={styles.line}></div>{" "}
          </div>
          <div className={styles.amenities}>
            {inRoomAmenities.map(
              (amenity) =>
                amenity.available && (
                  <div className={styles.amenity} key={`${amenity.name}`}>
                    <amenity.icon className={styles.icon} />
                    {amenity.name}
                  </div>
                )
            )}
          </div>
        </div>
        <div className={styles.section}>
          {" "}
          <div className={styles.heading}>
            <div className={styles.line}></div>
            <div className={styles.head}>Room Options</div>{" "}
            <div className={styles.line}></div>{" "}
          </div>
          {data.roomType.map((room) => (
            <div key={`${room.name}`}>
              {`${room.name}`}
              <RoomCard data={room} />
            </div>
          ))}
        </div>
        <div className={styles.section}>
          {" "}
          <div className={styles.heading}>
            <div className={styles.line}></div>
            <div className={styles.head}>Our Facities</div>{" "}
            <div className={styles.line}></div>{" "}
          </div>
          <div className={styles.info}>
            {data.facilities.spa ? (
              <div className={styles.facility}>
                {" "}
                <div
                  className={styles.left}
                  style={{
                    background: `url(/${data.facilities.spa.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {" "}
                </div>
                <div className={styles.right}>
                  {" "}
                  <div className="title1">Spa</div>
                  <p>{data.facilities.spa.desc}</p> <button>Know More</button>
                </div>{" "}
              </div>
            ) : null}
            {data.facilities.dining ? (
              <div className={styles.facility}>
                {" "}
                <div className={styles.right}>
                  {" "}
                  <div className="title1">Dining</div>
                  <p>{data.facilities.dining.desc}</p>{" "}
                  <button>Know More</button>
                </div>
                <div
                  className={styles.left}
                  style={{
                    background: `url(/${data.facilities.dining.img})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  {" "}
                </div>{" "}
              </div>
            ) : null}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.heading}>
            <div className={styles.line}></div>
            <div className={styles.head}>Hotel Information</div>{" "}
            <div className={styles.line}></div>{" "}
          </div>
          <br />
          <div className={styles.cols}>
            {" "}
            <div className={styles.col}>
              <ul>
                <li>
                  <b>Check In:</b> {data.checkIn}{" "}
                </li>
                <li>
                  <b>Check Out:</b> {data.checkOut}{" "}
                </li>
              </ul>
            </div>
            <div className={styles.col}>
              <ul>
                <li>
                  <b>Pets:</b>{" "}
                  {data.pets == true ? "Pets Allowed" : "No Pets Allowed"}{" "}
                </li>
                <li>
                  <b>Smoking:</b>{" "}
                  {data.smoking == true ? "Smoking Allowed" : "No Smoking Zone"}{" "}
                </li>
              </ul>
            </div>
            <div className={styles.col}>
              <ul>
                <li>
                  <b>Email:</b> {data?.contact?.email}
                </li>
                <li>
                  <b>Number:</b> {data?.contact?.phone}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
