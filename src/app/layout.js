import Head from "next/head";

import "./globals.css";
import { Nav } from "./components/nav/Nav";
import { Footer } from "./components/footer/Footer";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata = {
  title: "Imperial Hotel",
  description: "Generated by Imperial Hotel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={raleway.className}>
      <Head></Head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
