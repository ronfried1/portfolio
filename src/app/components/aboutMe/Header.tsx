import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="flex flex-col items-center mx-4">
      <h1 className="text-3xl mb-4 font-bold text-amber-100 ">About me</h1>
      <h1 className="text-4xl xl:text-5xl mb-10 font-bold text-sky-600">
        How is Ron?
      </h1>
    </div>
  );
};

export default Header;
