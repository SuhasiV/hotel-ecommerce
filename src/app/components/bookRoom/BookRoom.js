"use client";
import { useContext, useEffect, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import styles from "@/app/components/bookRoom/bookroom.module.scss";
import { SearchContext } from "@/app/context/SearchContext";
import { dateRange } from "@/app/helpers/dateRange";

const BookRoom = () => {
  const {
    destination,
    date: contextDate,
    option: contextOption,
    dispatch,
  } = useContext(SearchContext);

  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: contextDate[0]?.startDate
        ? contextDate[0]?.startDate
        : new Date(),
      endDate: contextDate[0]?.endDate
        ? contextDate[0]?.endDate
        : new Date(new Date().getTime() + 24 * 60 * 60 * 1000),
      key: "selection",
    },
  ]);
  const [option, setOption] = useState({
    room: contextOption.room ? contextOption.room : 1,
  });
  const [numberOfDays, setNumberOfDays] = useState();

  useEffect(() => {
    const days = dateRange(date);
    setNumberOfDays(days.length);
  }, [date]);

  const handleRoomChange = (e) => {
    const inputValue = e.target.value;
    if (inputValue === "" || parseInt(inputValue) >= 1) {
      setOption({
        room: inputValue,
      });
    }
  };

  const handleRoomCheck = () => {
    if (date[0].endDate === null) {
      alert("Please choose date range for your stay.");
    }
    if (option.room === "") {
      alert("Please enter a valid room number");
    }

    dispatch({ type: "NEW_SEARCH", payload: { destination, date, option } });
  };
  return (
    <div className={styles.container}>
      <div className={styles.stayDetail}>Select Your Stay Details</div>

      <div className={styles.section}>
        <span className={styles.nights} style={{}}>
          {numberOfDays - 1} Night Stay
        </span>
        <div
          className={styles.input}
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
        <div className={styles.input}>
          <input
            type="text"
            placeholder={
              option.room ? `${option.room} Room` : "Enter Number Of Room"
            }
            onChange={(e) => handleRoomChange(e)}
          />
        </div>
        <button className={styles.checkNow} onClick={handleRoomCheck}>
          Check Now
        </button>
      </div>
    </div>
  );
};

export default BookRoom;

// "use client";
// import { useState } from "react";
// import "react-date-range/dist/styles.css"; // main style file
// import "react-date-range/dist/theme/default.css"; // theme css file
// import { DateRange } from "react-date-range";
// import { format } from "date-fns";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
// import styles from "@/app/components/bookRoom/bookroom.module.scss";
// import { useSelectedQuery } from "@/app/helpers/selectedSearchQuery";

// const BookRoom = () => {
//   const { selectedQuery, setSelectedQuery } = useSelectedQuery();
//   const [openDate, setOpenDate] = useState(false);
//   const [date, setDate] = useState([
//     {
//       startDate: selectedQuery?.date[0].startDate
//         ? selectedQuery.date[0].startDate
//         : new Date(),
//       endDate: selectedQuery?.date[0].endDate
//         ? selectedQuery.date[0].endDate
//         : null,
//       key: "selection",
//     },
//   ]);
//   const [room, setRoom] = useState(
//     selectedQuery?.option?.room ? selectedQuery.option.room : null
//   );

//   const handleRoomChange = (e) => {
//     const inputValue = e.target.value;
//     if (inputValue === "" || parseInt(inputValue) >= 1) {
//       setRoom(inputValue);
//     }
//   };

//   const handleRoomCheck = () => {
//     if (date[0].endDate === null) {
//       alert("Please choose date range for your stay.");
//     }
//     if (room === "") {
//       alert("Please enter a valid room number");
//     }
//   };
//   return (
//     <div className={styles.container}>
//       <div className={styles.stayDetail}>Select Your Stay Details</div>
//       <div className={styles.section}>
//         <div
//           className={styles.input}
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
//         <div className={styles.input}>
//           <input
//             type="text"
//             placeholder={room ? room : "Enter Number Of Room"}
//             onChange={(e) => handleRoomChange(e)}
//           />
//         </div>
//         <button className={styles.checkNow} onClick={handleRoomCheck}>
//           Check Now
//         </button>
//       </div>
//     </div>
//   );
// };

// export default BookRoom;
