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
       My name is Abdrehim Shemsu,a full-stack developer specializing in React.js, React Native, Django Rest Framework, and Python. I graduated from Gondar University with a degree in Information Systems.

       Passionate about creating innovative software solutions, I enjoy building responsive web interfaces and developing RESTful APIs. I thrive in collaborative, agile environments and have experience working on team projects.

       Constantly learning and staying updated with the latest technologies, I'm dedicated to creating user-centric applications that make a positive impact. Detail-oriented and a problem solver, I'm excited to contribute my skills to cutting-edge projects.


        </p>

        <br />

        <p className="text-xl">
        I'm actively seeking opportunities to join a dynamic team where I can grow and further expand my expertise. Thank you for visiting my portfolio, and I invite you to explore my projects. Feel free to reach out for potential collaborations or opportunities.

          
        </p>
      </div>
    </div>
  );
};

export default About;
