import React from "react";
import Image from "next/image";
import OneIcon from "../../../../public/images/numbers/1.svg";
import TwoIcon from "../../../../public/images/numbers/2.svg";
import ThreeIcon from "../../../../public/images/numbers/3.svg";
import Link from "next/link";

type Props = {};

const Content = (props: Props) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-24 mb-[4rem]  ">
      <div className="flex flex-col mx-24 gap-5 text-xl xl:text-2xl leading-relaxed xl:flex-row text-gray-600">
        <div className="flex flex-grow flex-1 flex-col gap-4 items-center ">
          <OneIcon
            width={"2rem"}
            height={"2rem"}
            className={"hidden xl:block"}
          />
          <p>
            {"I'm"} <strong>Ron</strong>, a dynamic
            <strong>full-stack developer </strong>
            with a unique journey bridging music, entrepreneurship, and
            technology.
            <br />
            From <strong>founding</strong> and <strong>owning</strong> a vibrant
            Tel Aviv <strong>bar</strong>, {"I've"} mastered communication and
            leadership skills.
            <br />
            Transitioning to tech, I now thrive in crafting end-to-end digital
            solutions.
          </p>
        </div>
        <div className="flex flex-grow flex-1 flex-col gap-4 items-center ">
          <TwoIcon
            width={"2rem"}
            height={"2rem"}
            className={"hidden xl:block"}
          />
          <p>
            Music has taught me the art of creativity, a skill I channel into
            coding.
            <br />
            With two years of hands-on experience, I excel at developing
            seamless user experiences.
            <br />
            While I also excel at crafting WordPress websites, my primary focus
            is on leveraging code to create innovative digital solutions.
          </p>
        </div>
        <div className="flex flex-grow flex-1 flex-col gap-4 items-center">
          <ThreeIcon
            width={"2rem"}
            height={"2rem"}
            className={"hidden xl:block"}
          />
          <p>
            {"I'm"} on a mission to merge my diverse background with tech
            expertise to compose meaningful digital experiences.
            <br />
            {"Let's"} collaborate and make an impact together.
          </p>
        </div>
      </div>
      ;
      <div className="group mt-22">
        <Link
          href={`/contact`}
          className="bg-blue-500 text-white text-xl font-bold py-4 px-6 border-b-4 border-blue-700 rounded transition-transform transform-gpu group-hover:animate-bounce"
        >
          Lets Talk
        </Link>
      </div>
    </div>
  );
};

export default Content;
