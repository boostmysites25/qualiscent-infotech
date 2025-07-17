import React from "react";
import { companyDetails, logo } from "../../data/constant";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const LandingFooter = () => {
  return (
    <div className="relative bg-primary mt-[4rem]">
      <div className="wrapper text-white grid justify-center sm:justify-between sm:grid-cols-[30%_auto] gap-5">
        <div className=" w-full relative z-10 px-5 py-[2rem] flex flex-col gap-3 items-center">
          <div className="bg-white rounded-xl">
            <img src={logo} className="w-[10rem] object-contain" alt="Logo" />
          </div>
        </div>
        <div className="px-5 pb-[2rem] sm:pb-0 w-full flex flex-col justify-center items-center sm:items-end gap-4">
          <div className="flex gap-4">
            <Link
              to={companyDetails.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex hover:bg-secondary transition-all duration-200 justify-center items-center rounded-full border border-white"
            >
              <FaLinkedinIn className="fill-white" size={16} strokeWidth={1} />
            </Link>
            <Link
              to={companyDetails.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex hover:bg-secondary transition-all duration-200 justify-center items-center rounded-full border border-white"
            >
              <FaInstagram
                className="fill-white text-secondary"
                size={16}
                strokeWidth={1}
              />
            </Link>
            <Link
              to={companyDetails.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="w-7 h-7 flex hover:bg-secondary transition-all duration-200 justify-center items-center rounded-full border border-white"
            >
              <FaFacebookF className="fill-white" size={16} strokeWidth={1} />
            </Link>
            {/* <Link className="w-7 h-7 flex hover:bg-secondary transition-all duration-200 justify-center items-center rounded-full border border-white">
              <FaXTwitter className="fill-white" size={16} strokeWidth={1} />
            </Link> */}
          </div>
          <p className="text-center">
            Copyright © {new Date().getFullYear()}. All rights reserved
          </p>
        </div>
      </div>
      {/* <div className="h-[2rem] relative bottom-0 w-full bg-secondary"></div> */}
    </div>
  );
};

export default LandingFooter;
