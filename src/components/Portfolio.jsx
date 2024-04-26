import React from "react";
import shoping1 from "../assets/shoping1.png";
import caretech from "../assets/caretech.png";
// import shegerpark from "../assets/shegerpark.png";
// import gofershoe from "../assets/gofershoe.png";
import guragezone from "../assets/guragezone.png";
// import todoapp from "../assets/todoapp.png";
// import { Link } from "react-scroll";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: shoping1,
      href:'https://onlineshoping-frontend.vercel.app/',
      link:"https://github.com/abdirehim/onlineshoping-frontend"
    },
    {
      id: 2,
      src: caretech,
      href:'https://ab-caretech-solution.vercel.app/',
      link:'https://github.com/abdirehim/ab-caretech-solution'
    },
    {
      id: 3,
      src: guragezone,
      href:'',
      link:''
    },
    // {
    //   id: 4,
    //   src: guragezone,
    //   href:'https://github.com/abdirehim/',
    //   link:"https://github.com/abdirehim/"
    // },
    // {
    //   id: 5,
    //   src: caretech,
    //   href:'',
    //   link:''
    // },
    // {
    //   id: 6,
    //   src: todoapp,
    //   href:'',
    //   link:''
    // },
  ];
  //  const Demo=()=>{
    

  //     g
    
  
  
  // }

   

   


  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full  text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="
        ">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href,link}) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div key={id} className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                
                //  onClick={()=>Demo()}
                >
                  
                 
                  <li key={id} className="list-none"><a href={href} target="_blank"  rel="noreferrer" >Demo</a></li>
                </button>
               
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                <li key={id} className="list-none"><a href={link} target="_blank"  rel="noreferrer" >Code</a></li>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
