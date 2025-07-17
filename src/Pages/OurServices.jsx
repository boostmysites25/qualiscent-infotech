import React from "react";
import PageBanner from "../Components/Website/PageBanner";
import banner from "../assets/images/banners/services.jpeg";
import Services from "../Components/Services";
import { services } from "../data/constant";
import Testimonials from "../Components/Testimonials";
import ContactForm from "../Components/ContactForm";
import { Helmet } from "react-helmet-async";

const OurServices = () => {
  return (
    <div>
      <Helmet>
        <title>
          IT Services for Small Business Gujarat | Software & Digital Solutions
        </title>
        <meta
          name="description"
          content="Comprehensive IT services for Gujarat SMBs. Custom software development, web solutions, app development, and digital transformation. Affordable packages for small business."
        />
      </Helmet>
      <PageBanner
        banner={banner}
        title="Our Services"
        desc="Explore our wide range of tailored IT solutions designed to drive innovation, efficiency, and sustainable growth. From web and mobile development to AI, blockchain, and RPA, we deliver technology that transforms businesses.

"
      />
      <Services
        data={services}
        title="Our Services"
        heading="Custom IT Solutions for Your Successful Business"
      />
      {/* <Testimonials /> */}
      <ContactForm />
    </div>
  );
};

export default OurServices;
