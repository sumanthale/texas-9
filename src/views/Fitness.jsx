import MiniHeader from "../layout/MainLayout/MiniHeader";
import Footer from "../reusable/Footer";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import Fitness1 from "../assets/golf/fitness1.png";
import Fitness2 from "../assets/golf/fitness2.png";
import Fitness3 from "../assets/golf/fitness3.png";
import Yoga from "../assets/golf/yoga.png";
import Training from "../assets/golf/training.png";

const Fitness = () => {
  return (
    <>
      <MiniHeader heading={"Fitness"} subHeading={""} />
      <div className="grid grid-cols-1  md:grid-cols-12 gap-6 gap-x-10  pt-6  lg:pr-10 pb-6">
        <div className="md:col-span-4 md:order-last mb-2 pr-4  pl-4 ">
          <p className="block md:hidden text-justify mb-6">
            Discover the ultimate full-service fitness center that's all about
            you! Get ready to achieve your fitness dreams with top-notch gym
            equipment, fun exercise classes, and personalized training plans.
            And guess what? We're more than just a gym! Treat yourself to
            relaxing spa services, learn about healthy eating with expert
            advice, and find your zen in our calming relaxation areas. Join a
            friendly community of fitness pros and friends who will cheer you on
            every step of the way. Your wellness adventure starts here - come on
            over and let's make healthy happen, together!
          </p>
          <div className="border-4  gap-4 p-5 border-[#7da33f]">
            <h1 className="text-[#7da33f] font-bold text-2xl text-center">
              PERSONAL TRAINING
            </h1>
            <div className="px-2">
              <p className="text-left  my-4">
                Schedule an opportunity to talk to our physical trainer. Jake is
                a trainer, coach, group fitness instructor and massage therapist
                of 20+ years. A veteran of the US Navy, he began his fitness
                journey helping fellow crew members on a ballistic missile
                submarine while underway during patrols. After his time in the
                service, it was a seamless transition to becoming a fitness
                professional and health advocate. His perspective about health
                and our body is that it is a gift and should not be taken for
                granted. He believes balance, functionality, mobility, and
                strength are paramount to any fitness regimen. So whatever your
                health and fitness goals, let Jake help you to create and
                execute a plan to achieve them
              </p>

              <img
                src={Training}
                alt="Golf Course"
                className="object-fill my-4"
                style={{ width: "100%", height: "auto", maxHeight: "350px" }}
              />

              <button className="uppercase outline outline-2 px-2 text-[#7da33f] w-full text-xl my-3 mb-0 tracking-wider  outline-[#7da33f] font-semibold">
                <Link to="/tee-times" className="block w-full h-full">
                  CONTACT US
                </Link>
              </button>
            </div>

            <div className="px-2"></div>
          </div>
        </div>

        <div className="md:col-span-8">
          <div className="pl-4 lg:pl-14">
            <p className="hidden md:block text-justify ">
              Discover the ultimate full-service fitness center that's all about
              you! Get ready to achieve your fitness dreams with top-notch gym
              equipment, fun exercise classes, and personalized training plans.
              And guess what? We're more than just a gym! Treat yourself to
              relaxing spa services, learn about healthy eating with expert
              advice, and find your zen in our calming relaxation areas. Join a
              friendly community of fitness pros and friends who will cheer you
              on every step of the way. Your wellness adventure starts here -
              come on over and let's make healthy happen, together!
            </p>
            <div className="py-4 pr-4 lg:pr-0 ">
              <Carousel
                autoPlay
                infiniteLoop
                swipeable={false}
                showArrows={false}
                showStatus={false}
                showThumbs={false}
                showIndicators={false}
                interval={10000}
                stopOnHover={false}
                className="carousel"
                style={{ maxHeight: "100%", maxWidth: "60%", margin: "0 auto" }}
              >
                <div
                  className="w-full carousel-image-item h-96 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Fitness1})`,
                  }}
                ></div>
                <div
                  className="w-full carousel-image-item h-96 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Fitness2})`,
                  }}
                ></div>
                <div
                  className="w-full carousel-image-item h-96 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${Fitness3})`,
                  }}
                ></div>
              </Carousel>
            </div>
          </div>

          <div
            className="bg-red-800 p-6 text-white relative grid-cols-1 grid lg:grid-cols-2 justify-items-center"
            style={{ marginTop: "20px" }}
          >
            <img src={Yoga} alt="Etiquette" className="max-w-xs " />
            <div className=" pt-4 md:pl-4">
              <h1 className="text-3xl font-bold mb-3">GET YOUR ZEN ON</h1>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, consequatur amet quam ad tenetur ipsam earum. Quae
              officiis maiores quis alias numquam molestiae. Facilis sapiente,
              dolorum natus voluptatem dolores a? Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Temporibus, consequatur amet quam ad
              tenetur ipsam earum. Quae officiis maiores quis alias numquam
            </div>
          </div>
        </div>
      </div>

      {/* <LeaveAMessage /> */}
      <Footer />
    </>
  );
};

export default Fitness;
