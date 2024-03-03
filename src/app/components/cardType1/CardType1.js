import styles from "@/app/components/cardType1/cardType1.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const CardType1 = ({ city, state }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        {" "}
        <div className={styles.title}>
          {city}, {state}
        </div>
        <ArrowForwardIosIcon className={styles.icon} />
      </div>
    </div>
  );
};

export default CardType1;
