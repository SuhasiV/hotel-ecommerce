import React from "react";
import WifiIcon from "@mui/icons-material/Wifi";
import styles from "@/app/styles/singleHotel.module.css";

const Wifi = () => {
  return (
    <div>
      <WifiIcon className={styles.facilitiesIcon} />
    </div>
  );
};

export default Wifi;
