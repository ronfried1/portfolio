import React from "react";
import Header from "./Header";
import Content from "./Content";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <div className="  min-h-screen  bg-emerald-500 w-full relative ">
      <div className="flex flex-col w-full justify-center py-32 m-auto max-h-full">
        <Header />
        <Content />
      </div>
      <div className="custom-shape-divider-bottom-1693505602"></div>
    </div>
  );
};

export default AboutMe;
