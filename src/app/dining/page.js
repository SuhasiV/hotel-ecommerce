import React, { Suspense } from "react";
import CheckInTry from "../components/checkIn/CheckInTry";
import RestList from "../components/restList/RestList";

const page = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <div style={{ paddingTop: "65px" }}></div>
        <CheckInTry type="rest" />
        <div>
          <RestList />
        </div>
      </Suspense>
    </div>
  );
};

export default page;
