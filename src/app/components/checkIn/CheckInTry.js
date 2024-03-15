"use client";

import React, { useContext, useState } from "react";
import styles from "@/app/components/checkIn/checkIn.module.scss";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import Link from "next/link";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import BedroomParentIcon from "@mui/icons-material/BedroomParent";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useUrlData } from "@/app/helpers/useData";
import { SearchContext } from "@/app/context/SearchContext";

const CheckInTry = ({ type }) => {
  console.log(type);
  const searchParams = useSearchParams();
  const router = useRouter();
  // const { selectedQuery, setSelectedQuery } = useSelectedQuery();

  // Parse the query string
  const query = searchParams.toString();
  const params = new URLSearchParams(query);
  const destinationFromQuery = params.get("dest");
  const startDateFromQuery = params.get("startDate");
  const endDateFromQuery = params.get("endDate");
  const roomFromQuery = params.get("room");

  // Set initial state values based on the query string
  const [destination, setDestination] = useState(destinationFromQuery || "");
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: startDateFromQuery ? new Date(startDateFromQuery) : new Date(),
      endDate: endDateFromQuery ? new Date(endDateFromQuery) : null,
      key: "selection",
    },
  ]);
  const [option, setOption] = useState({
    room: roomFromQuery || "1",
  });

  const [openOption, setOpenOption] = useState(false);

  // Update the query string whenever state values change
  const queryFromState = useUrlData(destination, date, option);

  const handleOption = (name, operation) => {
    setOption((prev) => {
      const newValue = operation === "i" ? +prev[name] + 1 : +prev[name] - 1;
      return {
        ...prev,
        [name]: newValue < 0 ? 0 : newValue, // Ensure the value is not negative
      };
    });
  };

  const { state, dispatch } = useContext(SearchContext);

  const handleClick = () => {
    // setSelectedQuery({ destination, date, option });
    dispatch({ type: "NEW_SEARCH", payload: { destination, date, option } });
    router.push(`/hotels?${queryFromState}`);
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.section}>
          <LocationOnIcon className={styles.icons} />
          <input
            type="text"
            placeholder={destination ? destination : "Enter Destination"}
            onChange={(e) => setDestination(e.target.value)}
          />
          <div className={styles.sectionData}>
            <span className={styles.largeText}></span>
          </div>
        </div>
        <div
          className={styles.section}
          onClick={() => {
            setOpenDate(!openDate);
          }}
        >
          <CalendarMonthIcon className={styles.icons} />

          <span className={styles.largeText}>
            {`${
              date[0].startDate
                ? format(date[0].startDate, "dd/MM/yyyy")
                : "Check In"
            } - ${
              date[0].endDate
                ? format(date[0].endDate, "dd/MM/yyyy")
                : "Check Out"
            }`}
          </span>
          {openDate && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className={styles.dateRange}
              minDate={new Date()}
            />
          )}
        </div>
        {type === "hotel" ? (
          <div className={styles.section}>
            <BedroomParentIcon className={styles.icons} />
            {openOption && (
              <div className={styles.options}>
                <div className={styles.subOption}>
                  <div className={styles.optionLabel}>Room:</div>
                  <div className={styles.optionValue}>
                    <button
                      disabled={option.room <= 1}
                      onClick={() => handleOption("room", "d")}
                    >
                      -
                    </button>
                    <span>{option.room}</span>
                    <button onClick={() => handleOption("room", "i")}>+</button>
                  </div>
                </div>
              </div>
            )}

            <div
              className={styles.sectionData}
              onClick={() => {
                setOpenOption(!openOption);
              }}
            >
              <span className={styles.largeText}>{option.room}</span> Room
            </div>
          </div>
        ) : (
          ""
        )}

        <div className={styles.section} onClick={handleClick}>
          <div className={styles.sectionButton}>
            <div className={styles.button}>Check Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckInTry;

// "use client";

// import React, { useEffect, useState } from "react";
// import styles from "@/app/components/checkIn/checkIn.module.scss";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRange } from "react-date-range";
// import { format } from "date-fns";
// import Link from "next/link";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import BedroomParentIcon from "@mui/icons-material/BedroomParent";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useUrlData } from "@/app/helpers/useData";
// import { useSelectedQuery } from "@/app/helpers/selectedSearchQuery";

// const CheckInTry = () => {
//   const searchParams = useSearchParams();
//   const router = useRouter();
//   const { selectedQuery, setSelectedQuery } = useSelectedQuery();

//   // Parse the query string
//   const query = searchParams.toString();
//   const params = new URLSearchParams(query);
//   const destinationFromQuery = params.get("dest");
//   const startDateFromQuery = params.get("startDate");
//   const endDateFromQuery = params.get("endDate");
//   const roomFromQuery = params.get("room");

//   // Set initial state values based on the query string
//   const [destination, setDestination] = useState(destinationFromQuery || "");
//   const [openDate, setOpenDate] = useState(false);
//   const [date, setDate] = useState([
//     {
//       startDate: startDateFromQuery ? new Date(startDateFromQuery) : new Date(),
//       endDate: endDateFromQuery ? new Date(endDateFromQuery) : null,
//       key: "selection",
//     },
//   ]);
//   const [option, setOption] = useState({
//     room: roomFromQuery || "1",
//   });

//   const [openOption, setOpenOption] = useState(false);

//   // Update the query string whenever state values change
//   const queryFromState = useUrlData(destination, date, option);

//   const handleOption = (name, operation) => {
//     setOption((prev) => {
//       const newValue = operation === "i" ? +prev[name] + 1 : +prev[name] - 1;
//       return {
//         ...prev,
//         [name]: newValue < 0 ? 0 : newValue, // Ensure the value is not negative
//       };
//     });
//   };

//   const handleClick = () => {
//     setSelectedQuery({ destination, date, option });
//     router.push(`/hotels?${queryFromState}`);
//   };

//   return (
//     <div className={styles.container}>
//       <div className={styles.wrapper}>
//         <div className={styles.section}>
//           <LocationOnIcon className={styles.icons} />
//           <input
//             type="text"
//             placeholder={destination ? destination : "Enter Destination"}
//             onChange={(e) => setDestination(e.target.value)}
//           />
//           <div className={styles.sectionData}>
//             <span className={styles.largeText}></span>
//           </div>
//         </div>
//         <div
//           className={styles.section}
//           onClick={() => {
//             setOpenDate(!openDate);
//           }}
//         >
//           <CalendarMonthIcon className={styles.icons} />

//           <span className={styles.largeText}>
//             {`${
//               date[0].startDate
//                 ? format(date[0].startDate, "dd/MM/yyyy")
//                 : "Check In"
//             } - ${
//               date[0].endDate
//                 ? format(date[0].endDate, "dd/MM/yyyy")
//                 : "Check Out"
//             }`}
//           </span>
//           {openDate && (
//             <DateRange
//               editableDateInputs={true}
//               onChange={(item) => setDate([item.selection])}
//               moveRangeOnFirstSelection={false}
//               ranges={date}
//               className={styles.dateRange}
//               minDate={new Date()}
//             />
//           )}
//         </div>
//         <div className={styles.section}>
//           <BedroomParentIcon className={styles.icons} />
//           {openOption && (
//             <div className={styles.options}>
//               <div className={styles.subOption}>
//                 <div className={styles.optionLabel}>Room:</div>
//                 <div className={styles.optionValue}>
//                   <button
//                     disabled={option.room <= 1}
//                     onClick={() => handleOption("room", "d")}
//                   >
//                     -
//                   </button>
//                   <span>{option.room}</span>
//                   <button onClick={() => handleOption("room", "i")}>+</button>
//                 </div>
//               </div>
//             </div>
//           )}

//           <div
//             className={styles.sectionData}
//             onClick={() => {
//               setOpenOption(!openOption);
//             }}
//           >
//             <span className={styles.largeText}>{option.room}</span> Room
//           </div>
//         </div>

//         <div className={styles.section} onClick={handleClick}>
//           <div className={styles.sectionButton}>
//             <div className={styles.button}>Check Now</div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CheckInTry;
