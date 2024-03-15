import styles from "@/app/components/cardType1/cardType1.module.scss";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Link from "next/link";
import { useRouter } from "next/navigation";
const CardType1 = ({ city, state, id, photo }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/hotels/${id}`);
  };

  return (
    <div
      className={styles.container}
      onClick={handleClick}
      style={{
        background: `url(/${photo})`,

        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {" "}
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
