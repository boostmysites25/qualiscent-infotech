import React from "react";
import PageBanner from "../Components/Website/PageBanner";
import banner from "../assets/images/banners/blogs.jpeg";
import BlogItem from "../Components/Website/BlogItem";
import HrLine from "../Components/HrLine";
import { Link, useParams } from "react-router-dom";
import { blogs } from "../data/blog";

const BlogDetails = () => {
  const { title } = useParams();

  const blog = blogs.find((item) => item.slug === `${title}`);
  console.log(title, blog, "thiasdfasdf");
  return (
    <>
      <PageBanner
        banner={banner}
        title="Blogs"
        desc={`Explore a comprehensive hub of knowledge where technology meets creativity. Our blog delivers valuable insights, emerging tech trends, expert perspectives, and practical guidance across AI, web and app development, blockchain, RPA, and more. Whether you're a tech enthusiast, a business leader, or a curious learner, our content is designed to keep you informed, inspired, and ready to thrive in the ever-evolving digital world.`}
      />
      <div className="wrapper pt-[5rem]">
        <img
          src={blog.thumbnail}
          alt="Blog"
          className="md:aspect-video bg-top lg:aspect-[13/6] object-cover rounded-lg"
        />
        <div className="pt-[2rem] space-y-4">
          <h2 className="section-heading">{blog.title}</h2>
          <div className="flex gap-4 justify-between">
            <HrLine />
            <HrLine />
          </div>
          <p>{blog.summary}</p>
          <div
            className="text-base leading-relaxed space-y-4"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
        <hr className="border-primary/30 my-[3rem]" />
        <div className="space-y-6">
          <div className="space-y-4">
            <h3 className="section-heading">Recent Blogs</h3>
            <HrLine />
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {blogs
              .filter((item) => item.slug !== title)
              // .slice(0, 3)
              .map((item) => (
                <BlogItem key={item.slug} item={item} />
              ))}
          </div>

          <div className="pt-[2rem]">
            <Link to="/blogs" className="w-fit mx-auto primary-btn">
              Explore More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetails;
