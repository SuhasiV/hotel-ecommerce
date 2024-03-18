"use client";

//Provider for NextAuth

import { SessionProvider } from "next-auth/react";

export const NextAuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
