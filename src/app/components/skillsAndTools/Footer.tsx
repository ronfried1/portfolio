import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="flex flex-col mx-4 mb-[7rem] gap-4">
      <p className="text-gray-600 text-xl text-center">
        {`There's some Skills that just don't have a specific Icon`}
        <a
          href="/#contact"
          aria-label="open link to social."
          className="transition-bg duration-200 hover:bg-blue-500 text-blue-600 hover:text-white visited:text-rose-500 px-1"
        >
          {`Let's Find them together`}
        </a>
        .
      </p>
    </div>
  );
};

export default Footer;
