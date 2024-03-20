import SuccessButton from "@/app/components/successButton/SuccessButton";
import styles from "../general.module.scss";
import { useContext } from "react";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        {" "}
        <div className={styles.success}>
          <span className="title1" style={{ color: "red" }}>
            Payment Failed
          </span>

          <span className="title2" style={{ color: "#4a4e69" }}>
            Please try again after sometime or contact us.
          </span>
          <SuccessButton type="failed" />
        </div>
      </div>
    </div>
  );
};

export default page;
