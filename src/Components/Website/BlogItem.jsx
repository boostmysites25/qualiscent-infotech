import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogItem = ({ item }) => {
  return (
    <Link
      to={`/blogs/${item.slug}`}
      key={item.id}
      className="keen-slider__slide space-y-2 border border-black/20 group rounded-xl overflow-hidden"
    >
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-full aspect-video group-hover:brightness-75 duration-200 transition-all"
      />
      <div className="px-5 py-4 space-y-2">
        <h6 className="text-lg font-semibold text-secondary line-clamp-2 group-hover:text-primary duration-200 transition-all">
          {item.title}
        </h6>
        <p className="line-clamp-3">{item.summary}</p>
        <Link
          to={`/blogs/${item.slug}`}
          className="text-primary flex items-center gap-2 group-hover:text-secondary w-fit"
        >
          Read More <FaArrowRight />
        </Link>
      </div>
    </Link>
  );
};

export default BlogItem;
