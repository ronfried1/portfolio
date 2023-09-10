import Navbar from "./navbar";
import LinkedinIcon from "../../../../public/images/social/linkedin.svg";
import FacebookIcon from "../../../../public/images/social/facebook.svg";
import InstagramIcon from "../../../../public/images/social/instagram.svg";
import GitIcon from "../../../../public/images/tools/git.svg";
import Link from "next/link";

const Navigation = () => {
  return (
    <>
      <div className="navbar bg-zinc-800  sticky top-0 z-50 ">
        <div className="navbar-start ml-4">
          <a
            href="/"
            className="btn btn-ghost normal-case text-xl text-rose-500 border-4 border-rose-500"
          >
            RON FRIED
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-bold px-1">
            <li>
              <a className="hover:text-white" href="/about">
                ABOUT
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="/#projects">
                PORTFOLIO
              </a>
            </li>
          </ul>
        </div>
        <div className="navbar-end mr-4">
          <div className=" hidden lg:flex flex-col md:flex-row items-center gap-4 ">
            <a
              href="/files/Ron-Fried-cv.pdf"
              target="_blank"
              className="h-12 font-bold rounded-md  border-zinc-600 p-3 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
            >
              CV
            </a>
            <a
              href="https://www.linkedin.com/in/ron-fried/"
              className="rounded-md  border-zinc-600 p-3 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
            >
              <LinkedinIcon />
            </a>
            <a
              href="https://github.com/ronfried1"
              className="rounded-md  border-zinc-600 p-3 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
            >
              <GitIcon />
            </a>
            <a
              href="https://www.facebook.com/ron.fried.3/"
              className="rounded-md  border-zinc-600 p-3 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com/ron.fried/"
              className="rounded-md  border-zinc-600 p-3 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
            >
              <InstagramIcon />
            </a>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm font-bold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/about">ABOUT</a>
              </li>
              <li>
                <a href="/#projects">PORTFOLIO</a>
              </li>
              <div className="divider"></div>
              <a
                href="/files/Ron-Fried-cv.pdf"
                target="_blank"
                className="h-12 font-bold rounded-md  border-zinc-600 p-3 hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
              >
                MY CV
              </a>
              <div className="divider"></div>
              <li>
                <a>SOCIAL</a>
                <ul className="p-2">
                  <li>
                    <a href="https://www.linkedin.com/in/ron-fried/">
                      <LinkedinIcon />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/ronfried1">
                      <GitIcon />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/ron.fried.3/">
                      <FacebookIcon />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/ron.fried/">
                      <InstagramIcon />
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigation;
