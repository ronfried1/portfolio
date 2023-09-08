import Link from "next/link";
import LinkedinIcon from "../../../../../public/images/social/linkedin.svg";
import FacebookIcon from "../../../../../public/images/social/facebook.svg";
import InstagramIcon from "../../../../../public/images/social/instagram.svg";
import GitIcon from "../../../../../public/images/tools/git.svg";

const Sidebar = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}): JSX.Element => {
  return (
    <>
      <div
        className="sidebar-container fixed w-1/2 h-full overflow-hidden justify-center bg-zinc-700/50 grid  right-0 z-10"
        style={{
          top: ` ${isOpen ? "5rem" : "-100%"}`,
        }}
      >
        <div className="flex flex-col gap-16 text-center mt-16 leading-relaxed ">
          <Link
            href="/files/Ron-Fried-cv.pdf"
            target="_blank"
            className="font-bold rounded-md  border-zinc-600 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
          >
            CV
          </Link>

          <Link
            href="https://www.linkedin.com/in/ron-fried/"
            className="rounded-md  border-zinc-600 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
          >
            <LinkedinIcon />
          </Link>

          <Link
            href="https://github.com/ronfried1"
            className="rounded-md  border-zinc-600 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
          >
            <GitIcon />
          </Link>

          <Link
            href="https://www.facebook.com/ron.fried.3/"
            className="rounded-md  border-zinc-600 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
          >
            <FacebookIcon />
          </Link>

          <Link
            href="https://www.facebook.com/ron.fried.3/"
            className="rounded-md  border-zinc-600 text-white hover:bg-[#333333] hover:border-[#333333] hover:shadow-xl  duration-300 transform hover:scale-125 transition-transform"
          >
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;

// <button className="absolute right-0 p-5" onClick={toggle}>
// {/* Close icon */}
// <svg
//   xmlns="http://www.w3.org/2000/svg"
//   width="48"
//   height="48"
//   viewBox="0 0 24 24"
// >
//   <path
//     fill="currentColor"
//     d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z"
//   />
// </svg>
// </button>
