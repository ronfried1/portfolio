import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import the carousel styles
import Links from "./Links";

type Props = { stack: string[]; gitHub?: string; website?: string };

const Stack = ({ stack, gitHub, website }: Props) => {
  return (
    <div className="flex flex-wrap flex-col xl:flex-row justify-between gap-16 mx-4 ">
      <div className="flex flex-col gap-2 flex-wrap">
        <div className="text-2xl font-bold">Stack</div>
        <div className="flex gap-4 flex-wrap">
          {stack.map((item, index) => (
            <div
              className="h-12 leading-4 font-bold p-3.5 rounded-md border border-zinc-600  "
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stack;
