import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Skills from "./Skills";

type Props = {};

const SkillsAndTools = (props: Props) => {
  return (
    <div className="box-border flex-grow min-h-screen bg-zinc-800 relative ">
      <div className=" container w-fit  flex flex-col items-center mt-32 justify-center mx-auto  xl:mx-auto">
        <h1 className="text-2xl mb-16 font-bold  w-fit text-rose-500 border-4 border-rose-500 p-2">
          SKILLS & TOOLS
        </h1>
        <Skills />
        <Footer />
      </div>
      <div className="custom-shape-divider-bottom-1693505602">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            fill="#18181b"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SkillsAndTools;
