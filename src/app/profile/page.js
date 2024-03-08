import Link from "next/link";
import UserProfile from "../components/UserProfile";
import styles from "./profile.module.scss";

const page = () => {
  return (
    <div>
      <div>
        <h1>User Profile Details</h1>
        <UserProfile />
      </div>
      <div>
        <h3>Buttons</h3>

        <button>
          <Link href="/profile/logout">logout</Link>
        </button>
      </div>
    </div>
  );
};

export default page;
