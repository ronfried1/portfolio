import React from "react";
import Link from "next/link";
import ContactForm from "../contactForm/ContactForm";

const Footer = () => {
  return (
    <footer id="contact" className="bg-zinc-800">
      <div className="container flex flex-col gap-16 mx-auto py-6">
        <div className="flex gap-4 mx-4 justify-between md:flex-row h-full">
          <div className="flex flex-col w-full max-w-xl gap-16">
            <h1 className="text-4xl font-bold xl:text-end mt-8">
              Get In Touch{" "}
            </h1>
            <div className=" h-full relative border-t-8 border-r-8  text-rose-500  border-rose-500">
              <div className="absolute bottom-0 right-0 w-[20%] h-2 bg-rose-500" />
            </div>
          </div>
          <ContactForm />
        </div>
        <div className="text-white text-center mt-4">
          © 2023 Ron Fried. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
