import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import styles from "./restAndSpaCard.module.scss";
const RestAndSpaCard = ({ data }) => {
  return (
    <div className={styles.facility}>
      {" "}
      <div
        className={styles.left}
        style={{
          background:
            data && data.photos && data.photos.length > 0
              ? `url(/${data.photos[0]})`
              : "",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {" "}
      </div>
      <div className={styles.right}>
        {" "}
        <div className="title1">{data?.name} Spa</div>
        <div className={styles.review}>
          {Array.from({ length: data.rating }, (_, index) => (
            <StarIcon
              key={`${data.rating}-${index}`}
              style={{ color: "#9a8c98", fontSize: "20px" }}
            />
          ))}
        </div>
        <p style={{ display: "flex", alignItems: "center" }}>
          <LocationOnIcon />
          {data.address}
        </p>
        <p>{data?.desc}</p> <button>Know More</button>
      </div>{" "}
    </div>
  );
};

export default RestAndSpaCard;
