import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import dbConnect from "@/utils/dbConn";
import User from "@/models/User";
import axios from "axios";

//https://console.cloud.google.com/apis/credentials
//suhasiverma2022@

const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        const { name, email } = user;

        try {
          const response = await axios.post(`${process.env.URL}/api/signup`, {
            name,
            email,
            signUpType: "google",
            password: null,
          });
          if (response) {
            return user;
          }
        } catch (err) {
          console.log(err);
        }
      }
      return user;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
