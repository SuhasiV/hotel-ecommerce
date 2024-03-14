import SpaRestPage from "@/app/components/spaRestPage/SpaRestPage";
import styles from "@/app/spa/spa.module.scss";

const page = ({ params }) => {
  return (
    <div className={styles.container}>
      <div style={{ padding: "40px" }}></div>
      <div className={styles.wrapper}>
        <SpaRestPage params={params} />
      </div>
    </div>
  );
};

export default page;
