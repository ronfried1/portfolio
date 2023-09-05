import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="max-w-full">
      <h1 className="text-2xl mb-4 font-bold text-amber-100">Skills & Tools</h1>
      <h1 className="text-4xl mb-8 font-bold text-sky-600">
        My Toolbox & Things I Can Do
      </h1>
      <p className="text-xl mb-16 text-gray-700">
        The skills, tools and technologies I use to bring your products to life:
      </p>
    </div>
  );
};

export default Header;
