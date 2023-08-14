import React from "react";

const About = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <div className="px-6 py-10 md:p-20 bg-stone-100">
        <div className="flex flex-col justify-center h-full text-left gap-5">
          <p className="text-sm md:text-lg font-bold">
            9-Hole Executive Golf Course:{" "}
            <span className="font-normal leading-relaxed">
            DFW’s best public course, perfect for golf enthusiasts of all levels.
            </span>
          </p>
          <p className="text-sm md:text-lg font-bold">
             Lighted Driving Range:{" "}
            <span className="font-normal leading-relaxed">
            Spanning over 10 acres is a golfer's paradise, allowing you to perfect your swing even after sunset.
            </span>
          </p>
          <p className="text-sm md:text-lg font-bold">
              Practice Greens:{" "}
            <span className="font-normal leading-relaxed">
            Practice your putting skills on our professionally designed putting green, or take on the challenge of our chipping practice green and sand bunker area.


            </span>
          </p>
          <p className="text-sm md:text-lg font-bold">
              Amenities & Services:{" "}
            <span className="font-normal leading-relaxed">
            Learn more about our membership packages, training, fitness center, and event venue.

            </span>
          </p>
        </div>
      </div>
      <div className="flex">
        <img
          src="https://images.pexels.com/photos/1325749/pexels-photo-1325749.jpeg"
          alt="img"
          className="mx-auto object-cover w-100 h-100"
        />
      </div>
    </div>
  );
};

export default About;
