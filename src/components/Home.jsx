import React from "react";
import HeroImage1 from "../assets/heroImage1.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-2xl sm:text-5xl font-bold text-white">
         I'm a full-stack developer 
          </h2>
          <p className="text-gray-500 py-4 max-w-md ">
            Dedicated and motivated  full stack developer,
            seeking a challenging position to contribute my skills and knowledge in web and mobile application development.
            I love to work on web application using technologies like
            React, Tailwind, django Rest-FrameWork and Css Html javascript.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage1}
            alt="my profile"
            className="rounded-2x1 mx-auto w-2/3  md:w-half "
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
