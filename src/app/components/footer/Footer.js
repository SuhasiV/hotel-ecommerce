import styles from "@/app/components/footer/footer.module.scss";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import TwitterIcon from "@mui/icons-material/Twitter";
import Image from "next/image";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.over}>
          <div className={styles.logo}>
            <Image
              src="/img/logo_full.png"
              alt="logo"
              width={250}
              height={250}
            />
          </div>
          <div className={styles.sub}>
            <div className="title1" style={{ color: "#fff" }}>
              Subscribe to our newsletter to get updates to our latest offers.
            </div>
            <p>
              Get 20% off on your first booking just by subscribing to out
              newsletter.
            </p>
            <form>
              <input type="text" placeholder="Enter you email id" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
        <div className={styles.body}>
          <div className="title1">ImperialHotels</div>
          <div className="title2">
            Indulge in luxurious comfort and timeless elegance at Imperial
            Hotels.
          </div>
          <div style={{ color: "#4a4e69" }}>imperialhotel@gmail.com</div>
          <div className={styles.socials}>
            <InstagramIcon className={styles.social} />
            <FacebookIcon className={styles.social} />
            <TwitterIcon className={styles.social} />
            <FmdGoodIcon className={styles.social} />
          </div>
          <hr style={{ color: "#000", background: "#000" }} />
        </div>
      </div>
      <div className={styles.j}>
        Copyright by ImperialHotels. All rights reserved.
      </div>
    </div>
  );
};
