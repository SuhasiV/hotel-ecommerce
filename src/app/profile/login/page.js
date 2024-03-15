import LoginForm from "../../components/loginForm/LoginForm";
import styles from "../general.module.scss";

const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.flex}></div>
      <div className={styles.flex}>
        <h1 className="title1">Login page</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default page;
