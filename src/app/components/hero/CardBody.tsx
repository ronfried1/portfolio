import React from "react";
import LinkedinIcon from "../../../../public/images/social/linkedin.svg";
import FacebookIcon from "../../../../public/images/social/facebook.svg";
import InstagramIcon from "../../../../public/images/social/instagram.svg";
import GitIcon from "../../../../public/images/tools/git.svg";

type Props = {};

const CardBody = (props: Props) => {
  return (
    <div
      className={
        " flex flex-col gap-12 animate-fade-in mt-12 delay-700 text-white text-lg"
      }
    >
      <p className="text-xl font-bold xl:text-4xl">
        {"I'm"} a{" "}
        <span className="text-rose-500 px-2 pt-1 pb-2 relative border-t-4 border-r-4  border-rose-500">
          Full stack developer
          <span className="absolute top-0 left-0 w-1 h-[25%] bg-rose-500" />
          <span className="absolute bottom-0 right-0 w-[20%] h-1 bg-rose-500" />
        </span>
        <br />
        from Tel Aviv, Israel.
      </p>
      <div className="flex flex-row items-center gap-4 mb-32">
        <a
          href="/files/Ron-Fried-cv.pdf"
          target="_blank"
          className="h-12 leading-snug font-bold rounded-md border border-zinc-600 p-3 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
        >
          CV
        </a>
        <a
          href="https://www.linkedin.com/in/ron-fried/"
          className="rounded-md border border-zinc-600 p-3 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
        >
          <LinkedinIcon />
        </a>
        <a
          href="https://github.com/ronfried1"
          className="rounded-md border border-zinc-600 p-3 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
        >
          <GitIcon />
        </a>
        <a
          href="https://www.facebook.com/ron.fried.3/"
          className="rounded-md border border-zinc-600 p-3 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
        >
          <FacebookIcon />
        </a>
        <a
          href="https://www.facebook.com/ron.fried.3/"
          className="rounded-md border border-zinc-600 p-3 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
        >
          <InstagramIcon />
        </a>
      </div>
    </div>
  );
};

export default CardBody;
// 18181a
// 1f1f21

// 18181b
// bg-gray-900 bg-zinc-800
