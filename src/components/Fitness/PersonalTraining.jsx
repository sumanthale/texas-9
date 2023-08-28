import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";

const PersonalTraining = () => {
  return (
    <div>
      <MiniHeader heading={"Personal Training"} subHeading={""} />

      <div className="bg-contain bg-no-repeat bg-center bg-lime-950 text-slate-100 pt-6">
        <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mx-auto">
          <div className="sticky top-0">
            <img
              src="https://media.istockphoto.com/id/675179390/photo/muscular-trainer-writing-on-clipboard.jpg?s=612x612&w=0&k=20&c=9NKx1AwVMpPY0YBlk5H-hxx2vJSCu1Wc78BKRM9wFq0="
              alt="hyoga"
            />
          </div>
          <div className="">
            <h1 className="uppercase tracking-wide text-2xl font-primary font-semibold font-bold text-green-600 ">
              Personal Training
            </h1>
            <h1 className="tracking-wide text-md font-primary font-semibold  my-3 ">
              Achieve your fitness goals faster and with personalized guidance
              through our exceptional Personal Training program. Our certified
              trainers will design tailored workout routines, provide expert
              coaching, and offer ongoing support, empowering you to maximize
              your potential and reach new levels of strength, endurance, and
              overall fitness. Elevate your training experience and unlock your
              fitness potential with our dedicated Personal Training sessions.
            </h1>
            <h1 className="uppercase tracking-wide my-3 text-2xl font-primary font-semibold font-bold text-green-600">
              BENEFIT
            </h1>
            <h1 className=" my-4 tracking-wide text-xl font-primary font-semibold font-bold ">
              Pre-Workout Mobility & Stretching | Resistance-Balance-Performance
              Training | Cooldown & Massage Therapy
            </h1>

            <div className="flex flex-col justify-between bg-lime-800 rounded-lg border-2 border-gray-400 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-100 font-bold mb-3">
                  A typical Personal Training
                </h4>
                <p className="text-gray-100 text-sm">
                  Embark on a transformative fitness journey with our
                  personalized Personal Training sessions, tailored to your
                  specific goals, providing expert guidance, and maximizing your
                  potential for success.
                </p>
                {/* <p className="text-gray-100 text-sm">
                  Probabo, inquit, sic agam, ut labore et voluptatem sequi
                  nesciunt, neque porro quisquam est, quid malum, sensu
                  iudicari, sed ut alterum.
                </p>
                <p className="text-gray-100 text-sm">
                  Probabo, inquit, sic agam, ut labore et voluptatem sequi
                  nesciunt, neque porro quisquam est, quid malum, sensu
                  iudicari, sed ut alterum.
                </p> */}
              </div>
              {/* <div>
                <div className="flex items-center justify-between text-gray-800">
                  <p className="text-sm dark:text-gray-100">March 28, 2020</p>

                  <div className="border  bg-greens border-gray-300 h-8 w-24 mb-4 md:mb-0 rounded-full flex items-center justify-center">
                    <div className="flex items-center">
                      <div className="h-1 w-1 rounded-full bg-greens mr-1" />
                      <span className="text-xs font-normal text-white">
                        Book
                      </span>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PersonalTraining;
