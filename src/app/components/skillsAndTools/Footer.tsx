import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col mb-[7rem] gap-4">
      <h4 className="text-2xl font-bold text-yellow-100">
        Currently working on:
      </h4>
      <p className="text-gray-600 text-xl">
        Improving my skills in, and understanding of vanilla JavaScript and
        React. Also, having fun with Devops tools.
        <a
          href="https://twitter.com/anniebombanie_"
          target="_blank"
          aria-label="open link to social."
          className="transition-bg duration-200 hover:bg-blue-500 text-blue-600 hover:text-white visited:text-purple-600 px-1"
        >
          Follow my journey here
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
