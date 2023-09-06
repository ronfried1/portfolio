"use client";
import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import FacebookIcon from "../../../../public/images/social/facebook.svg";
import LinkedinIcon from "../../../../public/images/social/linkedin.svg";
import InstagramIcon from "../../../../public/images/social/instagram.svg";
import GitIcon from "../../../../public/images/tools/git.svg";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("meqbkrap");
  if (state.succeeded) {
    return (
      <div className="p-6 max-w-md mx-auto bg-zinc-800 rounded-xl shadow-md space-y-6">
        Thanks! Lets stay in touch.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 items-center lg:items-start ">
      <h2 className="text-2xl font-bold  text-white max-w-md  ">CONTACT</h2>
      <h3 className="text-2xl font-bold text-yellow-100 max-w-md">
        Get In Touch
      </h3>
      <div className="flex flex-col lg:flex-row  gap-16 mt-8">
        <div className="max-w-md  ">
          <p className="text-lg mb-4 ">
            Dropping a line to say g’day, ask for my resume or see if we can
            build something amazing together? I’d love to hear from you!
          </p>
          <p className="text-lg mb-4 ">
            Fill in your info in the form below and I look forward to hearing
            from you!
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-8 ">
            <div className="flex flex-col gap-4">
              <label htmlFor="name" className="block font-semibold text-white">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full py-2 px-3 bg-gray-700  rounded-lg text-white placeholder-gray-400 shadow-lg shadow-blue-500/50 "
                placeholder="Your Name"
              />
              <ValidationError
                prefix="Name"
                field="name"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label htmlFor="email" className="block font-semibold text-white">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full py-2 px-3 bg-gray-700  rounded-lg text-white placeholder-gray-400 shadow-lg shadow-blue-500/50  "
                placeholder="Your Email"
              />
              <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
              />
            </div>
            <div className="flex flex-col gap-4">
              <label
                htmlFor="message"
                className="block font-semibold text-white "
              >
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full py-2 px-3 bg-gray-700  rounded-lg text-white placeholder-gray-400  resize-none shadow-lg shadow-blue-500/50 "
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="text-center mt-4">
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-gray-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-gray-800 focus:outline-none focus:bg-gray-800 disabled:bg-gray-400 disabled:text-gray-100 transform transition-transform hover:scale-105 active:bg-gray-600 shadow-lg shadow-blue-500/50 "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col gap-4 items-center lg:pt-52 lg:items-start ">
          <p className="bold max-w-[15rem] text-center lg:text-start ">
            Feeling social? Find me on these online spaces too!
          </p>
          <div className="flex w-full justify-between">
            <a
              href="https://www.facebook.com/ron.fried.3/"
              className="transform hover:scale-125 transition-transform"
            >
              <FacebookIcon className={"fill-blue-500 hover:fill-gray-100"} />
            </a>
            <a
              href="https://www.instagram.com/ron.fried/"
              className="transform hover:scale-125 transition-transform"
            >
              <InstagramIcon className={"fill-blue-500 hover:fill-gray-100"} />
            </a>
            <a
              href="https://www.linkedin.com/in/ron-fried/"
              className="transform hover:scale-125 transition-transform"
            >
              <LinkedinIcon className={"fill-blue-500 hover:fill-gray-100"} />
            </a>
            <a
              href="https://github.com/ronfried1"
              className="transform hover:scale-125 transition-transform"
            >
              <GitIcon className={"fill-blue-500 hover:fill-gray-100"} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
