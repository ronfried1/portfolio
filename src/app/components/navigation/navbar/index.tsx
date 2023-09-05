import React from "react";
import Link from "next/link";
import NavItem from "./NavItem";
import Button from "./Button";
import Logo from "./Logo";
// import Logo from "./Logo";
// import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-20 bg-zinc-800/95 sticky top-0 z-50">
        <div className="container flex justify-around mx-auto  h-full">
          <div className="flex justify-around items-center w-full h-full">
            {/* <Logo /> */}
            <ul className="flex justify-evenly w-full max-w-[900px]">
              <NavItem title={"About"} href={"/"} />
              <NavItem title={"Projects"} href={"projects"} />
              <NavItem title={"Contact"} href={"contact"} />
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
