import MiniHeader from "../../layout/MainLayout/MiniHeader";
import Footer from "../../reusable/Footer";

const MassageTherapy = () => {
  return (
    <div>
      <MiniHeader heading={"Massage Therapy"} subHeading={""} />

      <div className="bg-contain bg-no-repeat bg-center bg-lime-950 text-slate-100 pt-6">
        <div className="p-8 grid grid-cols-1 lg:grid-cols-2 gap-6 w-full mx-auto">
          <div className="sticky top-0">
            <img
              src="https://holisticbillingservices.com/wp-content/uploads/2021/08/AdobeStock_217627988.jpg"
              alt="hMassageTherapy"
            />
          </div>
          <div className="">
            <h1 className="uppercase tracking-wide text-2xl font-primary font-semibold font-bold text-green-600 ">
              Massage Therapy
            </h1>
            <h1 className="tracking-wide text-md font-primary font-semibold  my-3 ">
              Indulge in the ultimate relaxation and rejuvenation with our
              exquisite Massage Therapy sessions, tailored to release tension,
              alleviate muscle soreness, and promote overall physical and mental
              well-being.
            </h1>
            <h1 className="uppercase tracking-wide my-3 text-2xl font-primary font-semibold font-bold text-green-600">
              BENEFIT
            </h1>
            <h1 className=" my-4 tracking-wide text-xl font-primary font-semibold font-bold ">
              Muscle Tension Relief | Improved Posture and Alignment | Enhanced
              Immune Function{" "}
            </h1>

            <div className="flex flex-col justify-between bg-lime-800 rounded-lg border-2 border-gray-400 mb-6 py-5 px-4">
              <div>
                <h4 className="text-gray-100 font-bold mb-3">
                  A typical MassageTherapy session
                </h4>
                <p className="text-gray-100 text-sm">
                  Embark on a blissful journey of relaxation and healing with
                  our signature Massage Therapy session, combining skilled
                  hands-on techniques, soothing aromatherapy, and tranquil
                  ambiance for a truly rejuvenating experience.
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

export default MassageTherapy;
