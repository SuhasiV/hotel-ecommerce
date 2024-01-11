import React, { useState } from "react";
import styles from "@/app/styles/checkincheckout.module.css";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { DateRange } from "react-date-range";
import { format } from "date-fns";
import { useSearchParams } from "next/navigation";

export const CheckinCheckout = ({ type }) => {
  const searchParams = useSearchParams();
  const startDateParam = searchParams.get("startDate");
  const endDateParam = searchParams.get("endDate");

  const initialStartDate = startDateParam
    ? new Date(startDateParam)
    : new Date();
  const initialEndDate = endDateParam ? new Date(endDateParam) : null;

  const [date, setDate] = useState([
    {
      startDate: initialStartDate,
      endDate: initialEndDate,
      key: "selection",
    },
  ]);
  const [dateOpen, setDateOpen] = useState(false);

  return (
    <div>
      <div className={styles.checkin} onClick={() => setDateOpen(!dateOpen)}>
        <div>
          {dateOpen && (
            <DateRange
              editableDateInputs={true}
              onChange={(item) => setDate([item.selection])}
              moveRangeOnFirstSelection={false}
              ranges={date}
              className={
                type === "hotels" ? styles.dateHotels : styles.dateHome
              }
              minDate={new Date()}
            />
          )}
          {`${
            date[0].startDate
              ? format(date[0].startDate, "dd/MM/yyyy")
              : "Check In"
          } - ${
            date[0].endDate
              ? format(date[0].endDate, "dd/MM/yyyy")
              : "Check Out"
          }`}
        </div>
      </div>
    </div>
  );
};
