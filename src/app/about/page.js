"use client";

import { useState } from "react";

export default function Page() {
  useState(() => {
    console.log("in useState");
  });

  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "up") {
      console.log("up");
    } else {
      console.log("down");
    }
  };
  return (
    <div>
      <div onClick={() => handleClick("up")}>up</div>
      <div onClick={() => handleClick("down")}>down</div>
    </div>
  );
}
