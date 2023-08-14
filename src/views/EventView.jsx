import MainCard from "../components/Reusable/MainCard";
import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import EventImg from "../assets/golf/event-image.jpg";
import EventHeader from "../assets/golf/event-header.jpg";
import VenueImg from "../assets/golf/venue.jpg";
const EventView = () => {
  return (
    <div>
      <MiniHeader heading={"EventS"} subHeading={""} image={EventHeader} />
      <div className="bg-contain bg-no-repeat bg-center bg-[#162649]  pt-6">
        <div className="p-8 grid grid-cols-1 gap-6 w-full mx-auto">
          <MainCard
            Img={VenueImg}
            header={"VENUE"}
            body={
              "Our versatile event spaces are ready to host your memorable moments, whether it's a birthday party, corporate event, or any other celebration. Our dedicated team will ensure every detail is taken care of, leaving you free to enjoy the festivities."
            }
            button={"Book Now"}
          />
          <MainCard
            Img={EventImg}
            header={"EVENTS"}
            body={
              "Our banquet room is 1800 sq ft & can fit 125 guests."
            }
            button={"Request Information"}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EventView;
