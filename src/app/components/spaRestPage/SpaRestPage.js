"use client";

import { useEffect, useState } from "react";
import styles from "./spaRestPage.module.scss";
import axios from "axios";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";

const SpaRestPage = ({ params }) => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const url = window.location.href;
  const parts = url.split("/");
  const dataType = parts[parts.length - 2];

  useEffect(() => {
    const getData = async () => {
      const url =
        dataType === "spa"
          ? `spa/hotel?id=${params.id}`
          : `restraunt/hotel?id=${params.id}`;
      try {
        setLoading(true);
        const response = await axios.get(`/api/${url}`);
        console.log(response?.data?.spa);
        dataType == "spa"
          ? setData(response?.data?.spa)
          : setData(response?.data?.rest);
        // setData(response.data.hotel);
        setLoading(false);
        setError(false);
      } catch (err) {
        setError(true);
        console.error("Error fetching hotel data by id", err);
      }
    };

    getData();
  }, [dataType, params.id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data);

  return (
    <div className={styles.container}>
      <div
        className={styles.left}
        style={{
          background:
            data && data?.photos && data?.photos.length > 0
              ? `url(/${data?.photos[0]})`
              : "",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className={styles.right}>
        <div className="title1" style={{ textTransform: "capitalize" }}>
          {data?.name} {dataType}
        </div>
        <br />
        <div>
          {" "}
          {Array.from({ length: data?.rating }, (_, index) => (
            <StarIcon
              key={`${data?.rating}-${index}`}
              style={{ color: "#9a8c98", fontSize: "20px" }}
            />
          ))}
        </div>
        <br />
        <div className={styles.address}>
          <LocationOnIcon />
          {data?.address}
        </div>
        <br />
        <div className={styles.section}>{data?.desc}</div>

        <div className={styles.section}>
          <div
            className="title2"
            style={{ textTransform: "uppercase", fontWeight: "600" }}
          >
            Features
          </div>
          <div className={styles.info}>
            {" "}
            {data?.features.map((item) => (
              <div className={styles.subInfo} key={item}>
                <CheckIcon />
                {item}
              </div>
            ))}
          </div>
        </div>
        {dataType === "spa" ? (
          <Link href="/contact" className="link">
            <button className="buttonBookNow">CONTACT US</button>
          </Link>
        ) : (
          <Link href="/" className="link">
            <button className="buttonDarkBlue">BOOK YOUR TABLE NOW !!!</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default SpaRestPage;
