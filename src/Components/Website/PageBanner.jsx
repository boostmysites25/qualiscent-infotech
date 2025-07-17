import React from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-router-dom";

const PageBanner = ({ banner, title, desc }) => {
  return (
    <div className="pt-[5rem] md:pt-[7rem]">
      <div className="aspect-[6/5] md:aspect-[19/8] relative">
        <img
          src={banner}
          alt={title}
          className="w-full h-full object-cover object-center"
        />
        {title && (
          <div className="absolute inset-0 bg-secondary/70 z-10 w-full h-full flex flex-col items-center justify-center">
            <div
              data-aos="fade-up"
              className="flex text-white items-center text-xl gap-3"
            >
              {/* <Link
                to="/"
                className="hover:text-primary section-heading duration-200 transition-all"
              >
                Home
              </Link> */}
              {/* <MdOutlineArrowForwardIos className="-mt-1" /> */}
              {/* <p className="section-heading">{title}</p> */}
            </div>
            <p
              data-aos="fade-up"
              className="max-w-[40rem] sm:px-0 px-2 mt-3  sm:text-2xl text-white text-center"
            >
              {desc}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PageBanner;
