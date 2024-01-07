import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <button>
        <Link href="/login">Login</Link>
      </button>
      <button>
        <Link href="/signup">Signup</Link>
      </button>
      <button>
        <Link href="/logout">logout</Link>
      </button>
    </div>
  );
};

export default page;
