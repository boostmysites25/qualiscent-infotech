import React from "react";
import banner from "../assets/images/banners/aboutus.jpeg";
import PageBanner from "../Components/Website/PageBanner";
import HrLine from "../Components/HrLine";
import { Link } from "react-router-dom";
import { companyDetails } from "../data/constant";
import visionImg from "../assets/images/vision.webp";
import missionImg from "../assets/images/mission.webp";
import { ImPhone } from "react-icons/im";
import Testimonials from "../Components/Testimonials";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>
          About Qualiscent Infotech - Trusted IT Partner for Gujarat SMBs
        </title>
        <meta
          name="description"
          content="Meet our expert team dedicated to helping small businesses in Gujarat grow through technology. Years of experience in affordable IT solutions and remote support."
        />
      </Helmet>

      <PageBanner
        banner={banner}
        title="About Us"
        desc="At Qualiscent Infotech LLP, we turn visionary ideas into transformative digital solutions. With a mission rooted in innovation and a vision focused on global impact, we partner with businesses to lead the future of technology."
      />
      <section className="pt-[5rem] wrapper grid md:grid-cols-2 gap-7">
        <div data-aos="fade-up" className="space-y-4">
          <p className="uppercase text-primary text-start">Our Vision</p>
          <h3 className="section-heading">
            Transforming Ideas into Digital Success.
          </h3>
          <HrLine />
          <p>
            At Qualiscent Infotech LLP, our vision is to be the global leader in
            providing innovative IT solutions that drive digital transformation
            and business growth. We aim to empower businesses worldwide by
            delivering cutting-edge technologies that unlock new opportunities,
            enhance efficiency, and create sustainable success. By fostering a
            culture of continuous innovation and excellence, we strive to be the
            go-to partner for organizations seeking to stay ahead in a rapidly
            evolving digital landscape.
          </p>
          <div className="flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 pt-5">
            <Link to="/contact-us" className="primary-btn sm:w-fit w-full">
              Request A Quote
            </Link>
            <div className="flex gap-3 sm:justify-center sm:w-fit w-full">
              <div className="bg-primary rounded-xl h-full aspect-square flex justify-center items-center p-3">
                <ImPhone size={25} className="text-white" />
              </div>
              <div className="flex flex-col capitalize">
                <p className="">Call to ask any question</p>
                <Link
                  to={`tel:${companyDetails.phone}`}
                  className="font-semibold"
                >
                  {companyDetails.phone}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" className="w-full h-full">
          <img
            src={visionImg}
            className="w-full h-full object-cover object-bottom rounded-xl"
            alt="Our-Vision"
          />
        </div>
      </section>
      <section className="pt-[5rem] wrapper grid md:grid-cols-2 gap-7">
        <div data-aos="fade-up" className="md:block hidden w-full h-full">
          <img
            src={missionImg}
            className="w-full h-full object-cover rounded-xl"
            alt="Our-Mission"
          />
        </div>
        <div data-aos="fade-up" className="space-y-4">
          <p className="uppercase text-primary text-center">Our Mission</p>
          <h3 className="section-heading">
            Innovating Today for a Smarter Tomorrow.
          </h3>
          <HrLine />
          <div
            data-aos="fade-up"
            className="block md:hidden w-full aspect-square"
          >
            <img
              src={missionImg}
              className="w-full h-full object-cover rounded-lg"
              alt="Our-Mission"
            />
          </div>
          <p>
            At Qualiscent Infotech LLP, our mission is to drive digital
            excellence by providing businesses with innovative, reliable, and
            tailored IT solutions. We strive to bridge the gap between
            technology and business success, empowering organizations to achieve
            their goals through cutting-edge advancements in AI, web
            development, mobile applications, and more. By fostering
            collaboration, embracing innovation, and maintaining a client-first
            approach, we aim to transform challenges into opportunities,
            enabling our clients to thrive in a fast-paced, ever-evolving
            digital world.
          </p>
          <div className="flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 pt-5">
            <Link to="/contact-us" className="primary-btn sm:w-fit w-full">
              Request A Quote
            </Link>
            <div className="flex gap-3 sm:justify-center sm:w-fit w-full">
              <div className="bg-primary rounded-xl h-full aspect-square flex justify-center items-center p-3">
                <ImPhone size={25} className="text-white" />
              </div>
              <div className="flex flex-col capitalize">
                <p className="">Call to ask any question</p>
                <Link
                  to={`tel:${companyDetails.phone}`}
                  className="font-semibold"
                >
                  {companyDetails.phone}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <Testimonials /> */}
    </>
  );
};

export default AboutUs;
