"use client";
import React, { useState } from "react";
import NavItem from "./NavItem";
import LinkedinIcon from "../../../../../public/images/social/linkedin.svg";
import FacebookIcon from "../../../../../public/images/social/facebook.svg";
import InstagramIcon from "../../../../../public/images/social/instagram.svg";
import GitIcon from "../../../../../public/images/tools/git.svg";
import Link from "next/link";
import Logo from "./Logo";

interface Props {
  toggle: () => void;
  selected: string | null;
  handleItemClick: (item: string) => void;
}

const Navbar = ({ toggle, selected, handleItemClick }: Props) => {
  return (
    <div className=" bg-zinc-800/95 sticky top-0 z-50">
      <div className="flex justify-between box-border items-center mx-4 xl:mx-8  h-20">
        <div className="flex w-full">
          <Logo handleItemClick={handleItemClick} />
          <ul className="hidden md:flex items-center justify-evenly w-full max-w-xl">
            <NavItem
              title={"ABOUT ME"}
              href={"about"}
              selected={selected === "About"}
              onClick={() => handleItemClick("About")}
            />
            <NavItem
              title={"PROJECTS"}
              href={"#projects"}
              selected={selected === "Projects"}
              onClick={() => handleItemClick("Projects")}
            />
          </ul>
        </div>
        <button
          type="button"
          className="inline-flex items-center md:hidden"
          onClick={toggle}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
          </svg>
        </button>

        <div className=" hidden md:flex flex-col md:flex-row items-center gap-4 ">
          <Link
            href="/files/Ron-Fried-cv.pdf"
            target="_blank"
            className="h-12 font-bold rounded-md  border-zinc-600 p-3 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
          >
            CV
          </Link>
          <Link
            href="https://www.linkedin.com/in/ron-fried/"
            className="rounded-md  border-zinc-600 p-3 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
          >
            <LinkedinIcon />
          </Link>
          <Link
            href="https://github.com/ronfried1"
            className="rounded-md  border-zinc-600 p-3 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
          >
            <GitIcon />
          </Link>
          <Link
            href="https://www.facebook.com/ron.fried.3/"
            className="rounded-md  border-zinc-600 p-3 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
          >
            <FacebookIcon />
          </Link>
          <Link
            href="https://www.instagram.com/ron.fried/"
            className="rounded-md  border-zinc-600 p-3 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
          >
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
