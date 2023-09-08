import React from "react";
import "../../globals.css";

type Props = {};

const CardTitle = (props: Props) => {
  return (
    <div className="text-white mb-4">
      <h1 className={"animate-fade-in text-4xl xl:text-6xl"}>
        {` Hey!, I'm Ron Fried `}
        <span className={"text-rose-500"}>.</span>
      </h1>
    </div>
  );
};

export default CardTitle;
