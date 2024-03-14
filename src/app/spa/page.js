import React from "react";
import CheckInTry from "../components/checkIn/CheckInTry";
import SpasList from "../components/spaList/SpaList";

const page = () => {
  return (
    <div>
      <div style={{ paddingTop: "65px" }}></div>
      <CheckInTry type="spa" />
      <div>
        <SpasList />
      </div>
    </div>
  );
};

export default page;
