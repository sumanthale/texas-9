import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import RangeImg from "../assets/golf/range2.jpg";
import TeeTimesImg from "../assets/golf/TEE-TIMES-MINI-HEADER.jpg";
import { useEffect } from "react";
import AllCards from "../components/Reusable/AllCards";
import MainCard from "../components/Reusable/MainCard";

const Tsheet = () => {
  //REMOVE TSHEET
  useEffect(() => {
    document.getElementById("t-sheet-widget").style.display = "block";

    return () => {
       document.getElementById("t-sheet-widget").style.display = "none";
    };
  }, []);
  //REMOVE TSHEET
  return (
    <div>
      <MiniHeader heading={"Tee Times"} subHeading={""} image={TeeTimesImg} />
      <div className="p-5 md:p-16 bg-[#162649]">
        <MainCard
          Img={RangeImg}
          header={"RESERVE YOUR RELAXATION"}
          body={
            "Minimize the wait and schedule your next visit on our executive course. Anticipated play is 90 minutes on a lush course with serene views. Afterwards enjoy our comfortable clubhouse with modern amenities."
          }
          footer="*Tee Times are recommended, but not required"
        />
        <AllCards />
      </div>
      <Footer />
    </div>
  );
};

export default Tsheet;
