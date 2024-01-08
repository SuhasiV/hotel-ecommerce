import Link from "next/link";
import UserProfile from "../components/UserProfile";

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
          <Link href="/profile/login">Login</Link>
        </button>
        <button>
          <Link href="/profile/signup">Signup</Link>
        </button>
        <button>
          <Link href="/profile/logout">logout</Link>
        </button>
      </div>
    </div>
  );
};

export default page;
