import React from "react";
import banner from "../assets/images/banners/blogs.jpeg";
import PageBanner from "../Components/Website/PageBanner";
import BlogItem from "../Components/Website/BlogItem";
import HrLine from "../Components/HrLine";
import ContactForm from "../Components/ContactForm";
import { blogs } from "../data/blog";
import { Helmet } from "react-helmet-async";

const Blogs = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>
          IT Insights & Tips for Small Business | Qualiscent Infotech Blog{" "}
        </title>
        <meta
          name="description"
          content="Technology insights, digital transformation tips, and IT guidance for small businesses in Gujarat. Expert advice on software, web development, and business growth."
        />
      </Helmet>
      <PageBanner
        banner={banner}
        title="Blogs"
        desc={`Explore a comprehensive hub of knowledge where technology meets creativity. Our blog delivers valuable insights, emerging tech trends, expert perspectives, and practical guidance across AI, web and app development, blockchain, RPA, and more. Whether you're a tech enthusiast, a business leader, or a curious learner, our content is designed to keep you informed, inspired, and ready to thrive in the ever-evolving digital world.`}
      />
      <div className="wrapper pt-[5rem] space-y-6">
        <div
          data-aos="fade-up"
          className="space-y-4 flex flex-col md:items-center md:text-center"
        >
          <p className="uppercase text-primary">Blogs</p>
          <h3 className="section-heading">
            Discover Cutting-Edge AI and IT Service Strategies
          </h3>
          <HrLine />
        </div>
        <div
          data-aos="fade-up"
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          {blogs.map((item) => (
            <BlogItem key={item} item={item} />
          ))}
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default Blogs;
