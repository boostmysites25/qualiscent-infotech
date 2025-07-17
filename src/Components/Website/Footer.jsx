import React from "react";
import {
  companyDetails,
  logo,
  services,
  serviceslist1,
  serviceslist2,
} from "../../data/constant";
import { websiteLinks } from "./Header";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="relative bg-primary mt-[4rem]">
      <div className="wrapper text-white grid lg:grid-cols-[30%_auto] gap-5">
        <div className=" w-full relative z-10 px-5 py-[2rem] flex flex-col gap-3 items-start">
          <div className="bg-white rounded-xl">
            <img src={logo} className="w-[10rem] object-contain" alt="Logo" />
          </div>
          <p className="text-white max-w-sm">
            Empowering businesses with innovative solutions and unmatched
            expertise to drive growth and success in the digital age.
          </p>
          <div className="flex gap-4 lg:justify-end">
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
        </div>
        <div className="px-5 pt-[2rem] pb-[2rem] grid lg:grid-cols-3 gap-10 lg:gap-0">
          <div className="space-y-3">
            <h5 className="text-lg font-bold">Quick Links</h5>
            <ul className="space-y-2">
              {websiteLinks.map((item) => (
                <li>
                  <Link
                    to={item.path}
                    className="hover:text-secondary transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 ">
            <h5 className="text-lg font-bold">Services</h5>
            <ul className="space-y-2  ">
              {serviceslist1.map((item) => (
                <li key={item.link}>
                  <Link
                    to={`/services/${item.link}`}
                    className="hover:text-secondary h-fit transition-all duration-200 "
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-3 ">
            {/* <h5 className="text-lg font-bold hidden h-[28px]">Services</h5> */}
            <ul className="space-y-2  mt-[2.5rem]">
              {serviceslist2.map((item) => (
                <li key={item.link}>
                  <Link
                    to={`/services/${item.link}`}
                    className="hover:text-secondary h-fit transition-all duration-200 "
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* <div className="h-[2rem] relative bottom-0 w-full bg-secondary"></div> */}
    </div>
  );
};

export default Footer;
