import React, { Suspense } from "react";
import CheckInTry from "../components/checkIn/CheckInTry";
import SpasList from "../components/spaList/SpaList";

const page = () => {
  return (
    <div>
      <div style={{ paddingTop: "65px" }}></div>
      <Suspense fallback={<div>Loading...</div>}>
        <CheckInTry type="spa" />
        <div>
          <SpasList />
        </div>
      </Suspense>
    </div>
  );
};

export default page;
