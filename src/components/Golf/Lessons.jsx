import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";
import RangeImg from "../../assets/golf/Range.jpg";
import InstructorImg from "../../assets/golf/golf-instructor.jpg";
import GolfGripImg from "../../assets/golf/golf-grip.jpg";
import HeaderImg from "../../assets/golf/GOLF-LESSONS-HEADER.jpg";
import AllCards from "../Reusable/AllCards";
import MainCard from "../Reusable/MainCard";
const Lessons = () => {
  return (
    <div>
      <MiniHeader heading={"Lessons"} subHeading={""} image={HeaderImg}/>

      <div className="bg-contain bg-no-repeat bg-center bg-[#162649]  pt-6">
        <div className="p-8 grid grid-cols-1 gap-6 w-full mx-auto">
          <MainCard
            Img={GolfGripImg}
            header={"LEARN OR ELEVATE"}
            body={
              "Designed for different skill sets and abilities, swing your way to success with one-on-one or group lessons from a golf professional."
            }
          />
          <MainCard
            Img={InstructorImg}
            header={"Private Instruction"}
            body={
              "Shannon Kneisler is a LPGA Instructor with over fifteen years of experience. Shannon has trained players around the world, and has been featured on the LPGA Tour, Golf Channel, and Fox Sports. Shannon’s focus is helping golfers find their swing, centering on fundamentals that work with player’s bodies, not against their natural form. Shannon brought her talents to Texas 9 two years ago, providing instruction to members, guests, and top amateur players in the Texas and Oklahoma regions."
            }
          />
        </div>
        <AllCards />
      </div>

      <Footer />
    </div>
  );
};

export default Lessons;
