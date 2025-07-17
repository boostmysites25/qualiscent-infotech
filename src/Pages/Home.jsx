import React from "react";
import ReactPlayer from "react-player";
import bannerVid from "../assets/vid/banner.mp4";
import { Link } from "react-router-dom";
import CountUp from "react-countup";
import HrLine from "../Components/HrLine";
import { companyDetails, services } from "../data/constant";
import aboutImg from "../assets/images/about.webp";
import whyChooseImg from "../assets/images/whychooseus.webp";
import Services from "../Components/Services";
import ContactForm from "../Components/ContactForm";
import { FaAward, FaRegThumbsUp } from "react-icons/fa";
import { BsPersonArmsUp } from "react-icons/bs";
import { LuHeartHandshake } from "react-icons/lu";
import { GiCheckMark } from "react-icons/gi";
import { BiSupport } from "react-icons/bi";
import { FaPeopleGroup } from "react-icons/fa6";
import Testimonials from "../Components/Testimonials";
import BlogsSection from "../Components/Website/BlogsSection";
import PortfolioList from "../Components/Website/PortfolioList";
import homebanner from "../assets/images/banners/homebanner.jpeg";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <>
      <Helmet>
        <title>
          Affordable IT Solutions for Small Business Gujarat | Qualiscent
          Infotech
        </title>
        <meta
          name="description"
          content="Expert IT services for SMBs in Gujarat. Software development, digital solutions for small businesses. Remote support available. Affordable pricing. Free consultation."
        />
      </Helmet>
      <div className="pt-[5rem] sm:pt-[7rem] md:pt-[5rem]">
        <section
          className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat justify-center bg-black/30"
          style={{ backgroundImage: `url(${homebanner})` }}
        >
          <div className="absolute w-full h-full bg-black/40" />
          <div className="pt-[8rem] md:pt-[8rem] pb-[4rem]">
            <div
              data-aos="fade-up"
              className="wrapper flex flex-col text-center text-white gap-5 justify-center h-full"
            >
              <p className="section-heading">
                Welcome to Qualiscent Infotech LLP
              </p>
              <h1 className="heading">Your Ultimate IT Solution Provider</h1>
              <div className="flex sm:flex-row flex-col justify-center gap-5 mt-5">
                <Link to="/about-us" className="primary-btn">
                  Learn More
                </Link>
                <Link to="/contact-us" className="transparent-btn">
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          {/* <div className="">
          <ReactPlayer
            url={bannerVid}
            playing
            muted
            loop
            playsinline
            width="100%"
            height="100%"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
            config={{
              file: {
                attributes: {
                  style: {
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  },
                },
              },
            }}
          />
        </div> */}
        </section>
        <div className="wrapper pt-[3rem] md:pt-0  md:-translate-y-1/2">
          <div className="grid md:grid-cols-3 rounded-xl overflow-hidden">
            <div
              data-aos="fade-up"
              className="bg-primary w-full text-white flex gap-3 justify-center p-6"
            >
              <div className="bg-white rounded-xl h-full aspect-square flex justify-center items-center p-3">
                <BsPersonArmsUp size={50} className="text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-xl">Happy Clients</p>
                <h3 className="heading-2">
                  <CountUp
                    end={150}
                    suffix="+"
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h3>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="bg-[#EAF9FF] w-full text-primary flex gap-3 justify-center p-6"
            >
              <div className="bg-primary rounded-xl h-full aspect-square flex justify-center items-center p-3">
                <GiCheckMark size={45} className="text-white" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-xl">Projects Done</p>
                <h3 className="heading-2 text-secondary">
                  <CountUp
                    end={130}
                    suffix="+"
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h3>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="bg-primary w-full text-white flex gap-3 justify-center p-6"
            >
              <div className="bg-white rounded-xl h-full aspect-square flex justify-center items-center p-3">
                <FaPeopleGroup size={50} className="text-primary" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="font-semibold text-xl">Tech Experts</p>
                <h3 className="heading-2">
                  <CountUp
                    end={30}
                    suffix="+"
                    duration={3}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                </h3>
              </div>
            </div>
          </div>
        </div>

        <section className="pt-[5rem]">
          <div className="wrapper grid md:grid-cols-2 gap-7">
            <div data-aos="fade-up" className="space-y-4">
              <p className="uppercase text-primary text-center md:text-start">
                About us
              </p>
              <div className="md:hidden flex flex-col pb-3">
                <img
                  src={aboutImg}
                  alt="About-Us"
                  className="h-full w-full aspect-video object-cover rounded-xl"
                />
              </div>
              <h3 className="section-heading">
                Empowering Businesses Globally with Innovative IT Solutions
              </h3>
              <HrLine />
              <p>
                Qualiscent Infotech LLP is an Indian IT company that specializes
                in delivering end-to-end technology solutions to businesses
                across the globe. From strategy to implementation, we empower
                organizations with innovative, cutting-edge solutions that drive
                growth, efficiency, and digital transformation.
              </p>
              <div className="grid grid-cols-2 gap-5 pt-5">
                {[
                  "Award Winning",
                  "24/7 Support",
                  "Professional Staff",
                  "Fair Prices",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <GiCheckMark size={25} className="text-primary" />
                    <p>{item}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col-reverse sm:flex-row items-center gap-5 sm:gap-10 pt-5">
                <Link to="/about-us" className="primary-btn sm:w-fit w-full">
                  Know More
                </Link>
                <div className="flex gap-3 sm:justify-center sm:w-fit w-full">
                  <div className="bg-primary rounded-xl h-full aspect-square flex justify-center items-center p-3">
                    <BiSupport size={25} className="text-white" />
                  </div>
                  <div className="flex flex-col ">
                    <p className="">Call Us Now</p>
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
            <div data-aos="fade-up" className="hidden md:flex flex-col">
              <img
                src={aboutImg}
                alt="About-Us"
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          </div>
        </section>
        <section className="wrapper pt-[5rem]">
          <div
            data-aos="fade-up"
            className="space-y-4 flex flex-col sm:items-center sm:text-center max-w-2xl mx-auto"
          >
            <p className="uppercase text-primary">Why Choose Us</p>
            <h3 className="section-heading">
              We Are Here to Grow Your Business Exponentially
            </h3>
            <HrLine />
          </div>
          <div className="mt-[2rem] grid sm:grid-cols-2 md:grid-cols-3 gap-7">
            <div data-aos="fade-up" className="flex flex-col gap-7">
              <div className="space-y-3">
                <div className="bg-primary rounded-xl w-[3.5rem] aspect-square flex justify-center items-center p-3">
                  <FaRegThumbsUp size={30} className="text-white" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-lg">Best In Industry</p>
                  <p>
                    We are recognized as a leader in delivering top-notch IT
                    solutions, trusted by businesses worldwide for our
                    excellence and innovation.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-primary rounded-xl w-[3.5rem] aspect-square flex justify-center items-center p-3">
                  <FaAward size={30} className="text-white" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-lg">Award Winning</p>
                  <p>
                    With a proven track record of success, Qualiscent Infotech
                    LLP has been honored with multiple industry awards for
                    innovation and outstanding service.
                  </p>
                </div>
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="sm:row-span-2 md:row-span-1 w-full h-full aspect-[4/3] sm:aspect-auto md:aspect-square overflow-hidden rounded-xl"
            >
              <img
                src={whyChooseImg}
                alt="Why-Choose-Us"
                className="md:aspect-[2/3] w-full h-full object-cover object-bottom"
              />
            </div>
            <div data-aos="fade-up" className="flex flex-col gap-7">
              <div className="space-y-3">
                <div className="bg-primary rounded-xl w-[3.5rem] aspect-square flex justify-center items-center p-3">
                  <FaPeopleGroup size={30} className="text-white" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-lg">Professional Staff</p>
                  <p>
                    Our team of skilled professionals brings unmatched expertise
                    and dedication, ensuring every project exceeds expectations.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <div className="bg-primary rounded-xl w-[3.5rem] aspect-square flex justify-center items-center p-3">
                  <LuHeartHandshake size={30} className="text-white" />
                </div>
                <div className="space-y-1">
                  <p className="font-bold text-lg">24/7 Support</p>
                  <p>
                    Our dedicated support team is available around the clock to
                    ensure seamless operations and quick resolution of your
                    queries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Services
          title="our services"
          heading="Custom IT Solutions for Your Successful Business"
          data={services}
        />
        <PortfolioList />
        <ContactForm />
        {/* <Testimonials /> */}
        <BlogsSection />
      </div>
    </>
  );
};

export default Home;
