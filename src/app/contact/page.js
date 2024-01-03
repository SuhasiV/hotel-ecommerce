import styles from "@/app/contact/contact.module.css";
import ContactForm from "../components/ContactForm";
import CallIcon from "@mui/icons-material/Call";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.pageHeading}>
          <div className={styles.subHeading}>Get in touch</div>
          <div className={styles.heading}>Contact Us</div>
        </div>
        <div className={styles.info}>
          <div className={styles.left}>
            <div className={styles.title}>Imperial Hotels</div>
            <br />
            <span>
              Hotel ut nisl quam nestibulum ac quam nec odio elementum sceisue
              the aucan ligula. Orci varius natoque penatibus et magnis dis
              parturient monte nascete ridiculus mus nellentesque habitant
              morbine.
            </span>
            <div>
              <CallIcon className={styles.icon} />
              <div className={styles.subInfo}>
                <span>Reservation</span>
                <span>855 100 4444</span>
              </div>
            </div>
            <div>
              <CallIcon className={styles.icon} />
              <div className={styles.subInfo}>
                <span>Reservation</span>
                <span>855 100 4444</span>
              </div>
            </div>{" "}
            <div>
              <CallIcon className={styles.icon} />
              <div className={styles.subInfo}>
                <span>Reservation</span>
                <span>855 100 4444</span>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <span>Get in touch</span>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
