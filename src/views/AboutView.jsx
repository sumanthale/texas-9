import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import LeaveAMessage from "../components/Home/LeaveAMessage";
import AboutImage from "../assets/images/about-image.jpg";
import LogoImg from "../assets/logos/Texas 9 Golf.png";
import AboutHeader from "../assets/golf/about-header.jpg";
const AboutView = () => {
  return (
    <div>
      <MiniHeader heading={"About Us"} subHeading={""} image={AboutHeader} />
      <div className=" bg-[#162649]  pt-6 font-primary">
        <div className="p-8 grid grid-cols-1 gap-6 w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 ">
            <div
              className=" bg-cover bg-center h-[300px] sm:h-[500px] lg:h-auto"
              style={{
                backgroundImage: `url(${AboutImage})`,
              }}
            ></div>
            <div className="bg-white p-10 flex flex-col items-center  relative">
              <h1 className="uppercase tracking-wide text-4xl font-primary font-bold  text-center mt-6">
                <img src={LogoImg} alt="hGolfMobility" className="h-24" />
              </h1>
              <p className="tracking-wide text-xl font-primary text-center font-semibold  my-3 ">
                Hailed as one of the best executive golf courses in DFW, our
                course was designed by Steven D. Plumber, ASGCA, and opened in
                1999. The course was created to be a public course, filling a
                niche in DFW so the greater community can have better access to
                the benefits of golf. Formerly known as Texas Golf Center, the
                course came under new management in 2023 with an explicit
                interest in adding new amenities and reinforcing the best
                aspects of the course.
              </p>
              <p className="tracking-wide text-xl font-primary text-center font-semibold  my-3 ">
                After 24 years of operating, the course remains a mainstay in
                the DFW area as a location for PGA training, annual tournaments,
                and golf enjoyed by all.
              </p>
            </div>
          </div>
          <div className="bg-[#7da33f] p-8">
            <h1 className="text-center text-4xl  font-medium  text-white mb-10">
              OUR TEAM
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center text-white">
              <div>
                <h1 className="text-xl font-semibold tracking-wide">
                  JOSH STUCKEY
                </h1>
                <h1 className="text-xl font-semibold tracking-wide">
                  General Manager
                </h1>
              </div>
              <div>
                <h1 className="text-xl font-semibold tracking-wide">
                  INGRID BORJAS
                </h1>
                <h1 className="text-xl font-semibold tracking-wide">
                  Operations Manager
                </h1>
              </div>
              <div>
                <h1 className="text-xl font-semibold tracking-wide">
                  CHRIS HUTCHINSON
                </h1>
                <h1 className="text-xl font-semibold tracking-wide">
                  Course Superintendent
                </h1>
              </div>
              <div>
                <h1 className="text-xl font-semibold tracking-wide">
                  VICKI MUSENGO
                </h1>
                <h1 className="text-xl font-semibold tracking-wide">
                  Event Coordinator
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LeaveAMessage header={"LEAVE A MESSAGE"} />
      <Footer />
    </div>
  );
};

export default AboutView;
