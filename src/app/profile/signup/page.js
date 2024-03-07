import SignupForm from "../../components/loginForm/SignupForm";
import styles from "../general.module.scss";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flex}></div>
      <div className={styles.flex}>
        <h1 className="title1">Signup Page</h1>
        <SignupForm />
      </div>
    </div>
  );
};

export default page;
