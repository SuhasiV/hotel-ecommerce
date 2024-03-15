import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import styles from "@/app/components/searchItem/searchItem.module.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const SearchItem = ({ data }) => {
  const desc = data.desc;
  return (
    <div className={styles.hotel}>
      <div
        className={styles.left}
        style={{
          background: `url(/${data.photos[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className={styles.right}>
        <div className={styles.info}>
          <div className="title1" style={{ fontSize: "25px" }}>
            {data.name}
          </div>
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
            {data.address.join(", ")}
          </p>
          <div className={styles.desc}>{desc}...</div>
        </div>
        <hr />
        <div className={styles.price}>
          <div>
            {data.inRoomAmenities ? (
              <div>
                {" "}
                <span style={{ fontWeight: "700", fontSize: "22px" }}>
                  {data.cheapestPrice}
                </span>
                /night <small>(incl GST)</small>
                <Link href={`/hotels/${data._id}`}>
                  <button className={styles.button}>View Details</button>
                </Link>
              </div>
            ) : data.spaNumbers ? (
              <Link href={`/spa/${data._id}`}>
                <button className={styles.button}>View Details</button>
              </Link>
            ) : (
              <Link href={`/dining/${data._id}`}>
                <button className={styles.button}>View Details</button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
