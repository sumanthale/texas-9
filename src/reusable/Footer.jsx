import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoImg from "../assets/golf/white-logo.png";
// import Lightbox from "react-image-lightbox";
import FaceBookIcon from "../assets/logos/facebook.png";
import InstagramIcon from "../assets/logos/instagram.png";
// import PrivacyPolicyDoc from "../assets/documents/privacy-policy.docx"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = () => {
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };
  return (
    <div className="bg-[#162649] text-white ">
      <div className="max-w-[92vw] p-4 lg:ml-16 lg:mr-20">
        <div className="grid grid-cols-1 md:grid-cols-4 mx-auto  gap-y-4">
          <div className="">
            {/* <h1 className="font-primary text-white text-2xl tracking-wide">
              Quick Links
            </h1> */}
            <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col space-y-2 mt-4 text-white">
              <Link to="/golf/memberships">Memberships</Link>
              <Link to="/golf/rates">Rates</Link>
              <Link to="/about">About Us</Link>
              <Link to="https://www.google.com/maps/place/Texas+9+Golf/@32.7636731,-97.1563432,19z/data=!4m6!3m5!1s0x864e7c150bddb88d:0xfde02fba666ba711!8m2!3d32.7636731!4d-97.1556995!16s%2Fg%2F1tq8jzdh?entry=ttu">
                Plan Your Visit
              </Link>
              <Link to="/tee-times" className="items-center rounded-lg  ">
                <span
                  className="text-sm font-medium  px-4 py-2"
                  style={{ backgroundColor: "#7DA33F", color: "#FFF" }}
                >
                  BOOK A TEE TIME
                </span>
              </Link>
            </div>
            </div>
          </div>

          <div className="col-span-1 md:col-span-2 md:px-4 w-100 md:w-4/5 mx-auto">
            <img src={LogoImg} alt="Logo" style={{}} className="mx-auto h-40" />
          </div>
          <div className="place-content-start lg:place-self-end">
           <div className="flex flex-col items-center justify-center h-full">
            <div className="flex flex-col space-y-2  mt-4 text-white">
              <a href="tel:+1-817-303-4370"> 817-303-4370</a>
              <a href="mailto:contact@texas9.com">contact@texas9.com</a>
              <a
                href="https://goo.gl/maps/iPceoCQZ3R8JjvR58"
                target={"_blank"}
                rel="noreferrer"
              >
                <span>
                  8940 Creek Run Rd <br />
                  Fort Worth, TX 76120
                </span>
              </a>
            </div>

            <div className="flex space-x-1 my-4 items-center">
              <a
                href="https://www.facebook.com/texas9golf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={FaceBookIcon} alt="icons" className="h-10" />
              </a>

              <a
                href="https://www.instagram.com/texas_9_golf/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={InstagramIcon} alt="icons" className="h-10" />
              </a>
              <p>@texas_9_golf</p>
            </div>
          </div>
          </div>
        </div>

        <p className="text-sm text-center  space-x-4 relative hidden sm:block">
          <span className="dots">
            Copyright {new Date().getFullYear()} Texas 9
          </span>
          <span className="dots">All Rights Reserved</span>
          <span className="dots">Privacy</span>
          <span className="">Terms of Use</span>
        </p>
        <p className="text-sm text-center  space-x-2 relative block sm:hidden ">
          <span className="">Copyright {new Date().getFullYear()} Texas 9</span>
          .<span className="">All Rights Reserved</span> .
          <button onClick={openLightbox} className="cursor-pointer">
          Privacy
        </button>
          <span className="">Terms of Use</span>
        </p>
      </div>
      {lightboxOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-4 max-w-3xl rounded-lg">
           
            {/* <iframe
              src={`https://docs.google.com/viewer?url=${PrivacyPolicyDoc}&embedded=true`}
              title="Privacy Policy"
              className="w-full h-screen-70"
            ></iframe> */}
             {/* <a
          href={PrivacyPolicyDoc}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          Privacy
        </a> */}
            <button
              onClick={closeLightbox}
              className="mt-4 px-4 py-2 bg-gray-300 rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
