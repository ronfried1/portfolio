import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Skills from "./Skills";

type Props = {};

const SkillsAndTools = (props: Props) => {
  return (
    <div className="box-border flex-grow min-h-screen bg-violet-300 relative ">
      <div className="mx-8 flex flex-col  pt-16 justify-center max-w-7xl xl:m-auto">
        <Header />
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
            className="fill-emerald-500"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default SkillsAndTools;
