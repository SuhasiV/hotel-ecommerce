import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";
import Link from "next/link";
import EastIcon from "@mui/icons-material/East";
import styles from "@/app/components/searchItem/searchItem.module.scss";

const SearchItem = ({ hotel }) => {
  return (
    <div className={styles.hotel}>
      <div
        className={styles.left}
        style={{
          background: `url(/${hotel.photos[0]})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <Image alt={hotel.name} src={hotel.img[0]} width={300} height={200} /> */}
      </div>
      <div className={styles.right}>
        <div className={styles.info}>
          <div className="title1" style={{ fontSize: "25px" }}>
            {hotel.name}
          </div>
          <div className={styles.review}>
            {Array.from({ length: hotel.ratings }, (_, index) => (
              <StarIcon
                key={`${hotel.ratings}-${index}`}
                style={{ color: "#9a8c98", fontSize: "18px" }}
              />
            ))}
          </div>
          <div className={styles.desc}>{hotel.desc}</div>
          <div className={styles.detailButton}>
            {" "}
            <Link href="/" className={styles.link}>
              View Hotel Details
            </Link>
            <EastIcon className={styles.icon} />
          </div>
        </div>
        <hr />
        <div className={styles.price}>
          {hotel.available == true ? (
            <div>
              <span style={{ fontWeight: "700", fontSize: "22px" }}>
                {hotel.price}
              </span>
              /night <small>(incl GST)</small>
              <button className={styles.button}>View Other Dates</button>
              <button className={styles.button}>Book Now</button>
            </div>
          ) : (
            <div>
              <span>Sold Out</span>

              <button className={styles.button}>View Other Dates</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
