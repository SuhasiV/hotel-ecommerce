import React from "react";
import CheckInTry from "../components/checkIn/CheckInTry";
import RestList from "../components/restList/RestList";

const page = () => {
  return (
    <div>
      <div style={{ paddingTop: "65px" }}></div>
      <CheckInTry type="rest" />
      <div>
        <RestList />
      </div>
    </div>
  );
};

export default page;
