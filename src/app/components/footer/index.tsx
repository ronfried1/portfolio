import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-zinc-800">
      <div className="container mx-auto py-6">
        <div className="flex flex-col gap-4 text-center justify-between items-center md:flex-row">
          <div className="text-white">
            {/* Your footer content, such as copyright information */}© 2023
            Designed & coded by Ron Fried. All rights reserved.
          </div>
          <ul className="flex space-x-4 text-white">
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
