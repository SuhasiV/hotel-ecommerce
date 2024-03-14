import HotelData from "@/app/components/hotelData/HotelData";
import styles from "@/app/hotels/singleHotel.module.scss";

const page = ({ params }) => {
  console.log(params.id);
  return (
    <div className={styles.container}>
      <div style={{ paddingTop: "60px" }}></div>
      <HotelData id={params.id} />
    </div>
  );
};

export default page;
