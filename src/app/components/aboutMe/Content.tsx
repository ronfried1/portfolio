import React, { ReactElement } from "react";
import Image from "next/image";
import OneIcon from "../../../../public/images/numbers/1.svg";
import TwoIcon from "../../../../public/images/numbers/2.svg";
import ThreeIcon from "../../../../public/images/numbers/3.svg";
import Link from "next/link";

interface ContentProps {}

const Content = (props: ContentProps): ReactElement => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-24 mb-[4rem]">
      <div className="flex flex-col mx-8 lg:mx-24 gap-5 text-xl xl:text-2xl leading-relaxed xl:flex-row text-gray-600">
        {renderContentBlock(
          <OneIcon />,
          <>
            {"I'm "}
            <strong>Ron</strong>, a dynamic
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
          </>
        )}
        {renderContentBlock(
          <TwoIcon />,
          <>
            Music has taught me the art of creativity, a skill I channel into
            coding.
            <br />
            With two years of hands-on experience, I excel at developing
            seamless user experiences.
            <br />
            While I also excel at crafting WordPress websites, my primary focus
            is on leveraging code to create innovative digital solutions.
          </>
        )}
        {renderContentBlock(
          <ThreeIcon />,
          <>
            {"I'm"} on a mission to merge my diverse background with tech
            expertise to compose meaningful digital experiences.
            <br />
            {"Let's"} collaborate and make an impact together.
          </>
        )}
      </div>
      <div className="group mt-22">
        <div className="bg-blue-500 text-white text-xl font-bold py-4 px-6 border-b-4 border-blue-700 rounded transition-transform transform-gpu group-hover:animate-bounce">
          <Link href="/contact">{"Let's Talk"}</Link>
        </div>
      </div>
    </div>
  );
};

interface ContentBlockProps {
  icon: React.ReactElement;
  text: React.ReactNode;
}

const renderContentBlock = (
  icon: React.ReactElement,
  text: React.ReactNode
): ReactElement => (
  <div className="flex flex-grow flex-1 flex-col gap-4 items-center">
    {icon &&
      React.cloneElement(icon, {
        width: "2rem",
        height: "2rem",
        className: "hidden xl:block",
      })}
    <p>{text}</p>
  </div>
);

export default Content;
