import SuccessButton from "@/app/components/successButton/SuccessButton";
import styles from "../general.module.scss";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.message}>
        {" "}
        <div className={styles.success}>
          <span className="title1">
            Thank you for choosing to book your stay with
            <br /> IMPERIAL HOTELS{" "}
          </span>

          <span className="title2" style={{ color: "#4a4e69" }}>
            Were delighted to have you as our guest and look forward to
            providing you with a memorable and comfortable experience
          </span>
          <SuccessButton />
        </div>
      </div>
    </div>
  );
};

export default page;
