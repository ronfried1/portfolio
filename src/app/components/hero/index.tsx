import React from "react";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";
import Image from "next/image";
import LinkedinIcon from "../../../../public/images/social/linkedin.svg";
import FacebookIcon from "../../../../public/images/social/facebook.svg";
import InstagramIcon from "../../../../public/images/social/instagram.svg";
import GitIcon from "../../../../public/images/tools/git.svg";

type Props = {};

const Hero = (props: Props) => {
  return (
    // h-[calc(100vh-5rem)]
    <section className="flex flex-col flex-grow items-center xl:justify-center min-h-screen h-full relative">
      <div className="container mx-auto mb-16 xl:mb-28 flex flex-col xl:flex-row items-center justify-center xl:relative ">
        <div className=" hidden absolute xl:inline-flex  xl:left-auto xl:-right-[15rem]  xl:bottom-0 animate-slide-in">
          <div className={"custom-mask-image "}>
            <Image
              src={"/images/ron.png"}
              width={330}
              height={20}
              alt="Picture of the author"
              className="absolute -bottom-2 left-6"
            />
          </div>
        </div>
        <div className="xl:hidden flex flex-col gap-3 py-6 items-center animate-fade-in delay-300">
          <div className={`bg-gray-300 rounded-full w-[250px] h-[250px] `}>
            <Image
              src={"/images/ron.png"}
              alt={"alt"}
              width={200}
              height={200}
              className=" object-cover h-full w-full rounded-full "
            />
          </div>
        </div>

        <div className="xl:w-2/3">
          <CardTitle />
          <CardBody />
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center gap-8 mb-32">
        <div className="flex">
          <a
            href="/files/Ron-Fried-cv.pdf"
            target="_blank"
            className="h-12 font-bold rounded-md border border-zinc-600 p-3 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
          >
            Resume
          </a>
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/ron-fried/"
            className="rounded-md border border-zinc-600 p-3 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
          >
            <LinkedinIcon />
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
          <a
            href="https://github.com/ronfried1"
            className="rounded-md border border-zinc-600 p-3 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
          >
            <GitIcon />
          </a>
        </div>
      </div>
      <div className="custom-shape-divider-bottom-1693496676">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-violet-300"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
