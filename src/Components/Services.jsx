import React from "react";
import HrLine from "./HrLine";
import { Link } from "react-router-dom";
import { LuCircleArrowOutUpRight } from "react-icons/lu";

const Services = ({ title, heading, data }) => {
  return (
    <div id="services" className="wrapper pt-[5rem]">
      <div
        data-aos="fade-up"
        className="space-y-4 flex flex-col sm:items-center sm:text-center max-w-2xl mx-auto"
      >
        <p className="uppercase text-primary">{title}</p>
        <h3 className="section-heading">{heading}</h3>
        <HrLine />
      </div>
      <div
        data-aos="fade-up"
        className="mt-[2rem] grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7"
      >
        {data.map((item) => (
          <Link
            to={item.detailsPage && `/services/${item.link}`}
            key={item.id}
            className="relative overflow-hidden group bg-primary/10 px-5 py-10 flex flex-col items-center gap-2 rounded-xl hover:bg-primary/30 transition-all duration-200"
          >
            <div className="relative rotate-45 group-hover:rotate-0 transition-all duration-200 w-[4rem] h-[4rem] flex justify-center items-center bg-primary/10 rounded-xl">
              <item.icon className="w-[2.5rem] -rotate-45 group-hover:rotate-0 transition-all duration-200 !fill-black  text-white" />
            </div>
            <h1 className="mt-3 text-lg font-bold">{item.title}</h1>
            <p>{item.desc}</p>
            {item.detailsPage && (
              <Link
                className="absolute z-30 w-0 inset-0 group-hover:w-full group-hover:h-full bg-secondary/40 flex items-center justify-center transition-all duration-200"
                to={`/services/${item.link}`}
              >
                <LuCircleArrowOutUpRight className="text-3xl text-white" />
              </Link>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Services;
