import React from "react";
import LinkedinIcon from "../../../../public/images/social/linkedin.svg";

type Props = { gitHub?: string; website?: string };

const Links = ({ gitHub, website }: Props) => {
  return (
    <div className="flex items-end justify-center gap-4 box-border">
      {gitHub && (
        <a
          href={gitHub}
          className="h-12 leading-4 font-bold p-3.5 rounded-md border border-zinc-600 hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl transition duration-300 transform hover:scale-105 text-white"
        >
          <span className="relative inline-block group">
            Github Repo
            <span className="absolute w-full h-0.5 bg-[#333333] left-0 transform scale-x-0 group-hover:scale-x-100 bottom-0 transition-transform duration-300"></span>
          </span>
        </a>
      )}
      {website && (
        <a
          href={website}
          className="h-12 leading-4 font-bold p-3.5 rounded-md border border-zinc-600 hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl transition duration-300 transform hover:scale-105 text-white"
        >
          <span className="relative inline-block group">
            View Here
            <span className="absolute w-full h-0.5 bg-[#333333] left-0 transform scale-x-0 group-hover:scale-x-100 bottom-0 transition-transform duration-300"></span>
          </span>
        </a>
      )}
    </div>
  );
};

export default Links;
