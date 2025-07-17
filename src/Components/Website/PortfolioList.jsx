import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosLink } from "react-icons/io";
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe } from "react-icons/fa";
import HrLine from "../HrLine";
import { portfolio } from "../../data/constant";

// Convert category names to match the keys in portfolio object
const categoryList = [
  { key: "all", name: "All", icon: <FaGlobe size={30} /> },
  {
    key: "appDevelopment",
    name: "App Development",
    icon: <AiFillAppstore size={30} />,
  },
  {
    key: "webDevelopment",
    name: "Web Development",
    icon: <FaGlobe size={30} />,
  },
];

const PortfolioList = () => {
  const [selectedCategory, setSelectedCategory] = useState(categoryList[1]);

  const getAllItems = () => {
    if (selectedCategory.key === "all") {
      return Object.values(portfolio).flatMap((category) => category.list);
    }
    return portfolio[selectedCategory.key]?.list || [];
  };

  return (
    <div className="wrapper pt-[5rem]">
      <div className="flex flex-col items-center gap-5">
        <div
          data-aos="fade-up"
          className="space-y-4 flex flex-col items-center text-center"
        >
          <p className="uppercase text-primary text-center md:text-start">
            Portfolio
          </p>
          <h3 className="section-heading">Few of our projects</h3>
          <HrLine />
        </div>

        {/* <h2 className="heading text-center mb-5">Some of Our Projects</h2> */}

        <div className="w-full mt-3">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categoryList.map((category) => (
              <button
                key={category.key}
                onClick={() => setSelectedCategory(category)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 ${
                  selectedCategory.key === category.key
                    ? "bg-primary text-white shadow-lg scale-105"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div
          data-aos="fade-up"
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 w-full"
        >
          {getAllItems().map((item) => (
            <div
              key={item.title}
              className="w-full flex flex-col items-center bg-primary hover:bg-secondary hover:scale-x-105 transition-all duration-300 text-white px-5 pt-5 pb-4 gap-3 rounded-xl"
            >
              <Link to={item.link} target="_blank" rel="noopener noreferrer">
                <img
                  src={item.img}
                  alt={item.title}
                  // className="rounded-xl max-h-[295px] sm:max-w-[325px] sm:max-h-[325px]  sm:min-h-[325px] object-cover"
                  className="rounded-xl aspect-square object-cover"
                />
              </Link>
              {/* {selectedCategory.icon} */}
              <Link
                to={item.link}
                className="text-lg font-medium text-center leading-none mt-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.title}
              </Link>
              {/* <Link
                target="_blank"
                to={item.link}
                className="flex items-center gap-2 hover:underline"
              >
                <IoIosLink /> <small>Visit</small>
              </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
