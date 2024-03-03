import styles from "@/app/components/banner/banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.container}>
      <div className={styles.overlay}>
        <div className={styles.wrapper}>
          {" "}
          <div className={styles.heading}>
            <div
              className="title2"
              style={{
                color: "#22223b",
                fontWeight: "700",
                fontSize: "18px",
                letterSpacing: "1.5px",
              }}
            >
              ABOUT IMPERIAL HOTELS
            </div>
            <br />
            <div className="title1" style={{ color: "#22223b" }}>
              What’s the story of Imperial Hotels?
            </div>
          </div>
          <p>
            It’s about natural beauty that stops you in your tracks. Far flung,
            yet accessible locations. A sense of community with sustainability
            at its heart. A level of service that doesn’t just do the right
            thing, but that does it well, and with wellness in mind, so you feel
            the difference in your mind, body and soul.
          </p>
          <br />
          <div className="buttonBookNow">Read More</div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
