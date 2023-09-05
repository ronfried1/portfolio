import React from "react";
import "../../globals.css";

type Props = {};

const CardTitle = (props: Props) => {
  return (
    <div className="font-bold text-white mb-4">
      <h1 className={"animate-slide-in-right text-4xl xl:text-7xl"}>
        Hi, my
        <br className="hidden xl:block" /> name is
        <br className=" xl:hidden" />
        <b> Ron</b>
        <span className={"text-lime-200"}>.</span>
      </h1>
    </div>
  );
};

export default CardTitle;
