import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import styles from "@/app/components/searchItem/searchItem.module.scss";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const SearchItem = ({ hotel }) => {
  const desc = hotel.desc;
  const slicedDesc = desc.slice(0, 1).join("");
  return (
    <div className={styles.hotel}>
      <div
        className={styles.left}
        style={{
          background: `url(/${hotel.photos[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className={styles.right}>
        <div className={styles.info}>
          <div className="title1" style={{ fontSize: "25px" }}>
            {hotel.name}
          </div>
          <div className={styles.review}>
            {Array.from({ length: hotel.rating }, (_, index) => (
              <StarIcon
                key={`${hotel.rating}-${index}`}
                style={{ color: "#9a8c98", fontSize: "20px" }}
              />
            ))}
          </div>
          <p style={{ display: "flex", alignItems: "center" }}>
            <LocationOnIcon />
            {hotel.address.join(", ")}
          </p>
          <div className={styles.desc}>{slicedDesc}...</div>
        </div>
        <hr />
        <div className={styles.price}>
          <div>
            <span style={{ fontWeight: "700", fontSize: "22px" }}>
              {hotel.cheapestPrice}
            </span>
            /night <small>(incl GST)</small>
            <Link href={`/hotels/${hotel._id}`}>
              <button className={styles.button}>View Hotel</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
