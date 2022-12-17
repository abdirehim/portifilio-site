import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          My name is Abdrehim i am astudent of inforamation system
          in gonder university. iam ajunior full stack developer 
          with a diverse range of skills including React, , Python, Java,
         c# ,php ,html and javascript.

        </p>

        <br />

        <p className="text-xl">
        Sometimes an online resume is all you really need. 
        Clean typography and a straightforward, to-the-point, single-scroll
         homepage help place broad technical skills front and center.
          
        </p>
      </div>
    </div>
  );
};

export default About;
