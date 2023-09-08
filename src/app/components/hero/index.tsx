import React from "react";
import CardTitle from "./CardTitle";
import CardBody from "./CardBody";
import Image from "next/image";
import LinkedinIcon from "../../../../public/images/social/linkedin.svg";
import FacebookIcon from "../../../../public/images/social/facebook.svg";
import InstagramIcon from "../../../../public/images/social/instagram.svg";
import GitIcon from "../../../../public/images/tools/git.svg";
import CardImage from "./CardImage";

type Props = {};

const Hero = (props: Props) => {
  return (
    <section className="flex flex-col  flex-grow items-center xl:justify-center min-h-screen h-full relative">
      <div className="container flex flex-col  relative ">
        <div className="flex flex-col items-center xl:items-start justify-center xl:justify-normal mb-32 xl:mb-32 ">
          <CardImage />
          <CardTitle />
          <CardBody />
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
            className="fill-zinc-800"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
