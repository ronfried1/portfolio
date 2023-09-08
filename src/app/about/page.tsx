import React from "react";
import AboutMe from "../components/aboutMe";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="  min-h-screen w-full relative  max-w-7xl m-auto animate-fade-in ">
      <div className="flex flex-col w-full justify-center items-center py-32 m-auto max-h-full">
        <h1 className="text-2xl mb-16 font-bold  w-fit text-rose-500  border-4 border-rose-500 p-2 ">
          About me
        </h1>
        <AboutMe />
      </div>
      <div className="custom-shape-divider-bottom-1693505602"></div>
    </div>
  );
};

export default About;
