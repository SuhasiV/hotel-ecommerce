import styles from "@/app/contact/contact.module.scss";
import CallIcon from "@mui/icons-material/Call";
import ContactForm from "../components/contact/ContactForm";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.info}>
          <div className={styles.left}>
            <div className={styles.pageHeading}>
              <div className={styles.subHeading}>Get in touch</div>
              <div className={styles.heading}>Contact Us</div>
            </div>
            <br />
            <span>
              Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue
              the aucan ligula. Orci varius natoque penatibus et magnis dis
              parturient monte nascete ridiculus mus nellentesque habitant
              morbine.
            </span>
            <div className={styles.icons}>
              <CallIcon className={styles.icon} />
              <div className={styles.subInfo}>
                <span>For Reservation - </span>
                <span>855 100 4444</span>
              </div>
            </div>
            <div className={styles.icons}>
              <CallIcon className={styles.icon} />
              <div className={styles.subInfo}>
                <span>Email - </span>
                <span>imperialHotels@gmail.com</span>
              </div>
            </div>{" "}
            <div className={styles.icons}>
              <CallIcon className={styles.icon} />
              <div className={styles.subInfo}>
                <span>Website - </span>
                <span>imperialHotels.com</span>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
