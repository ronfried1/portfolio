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
    <div className="flex flex-col flex-2 gap-4 items-center lg:items-start w-full max-w-lg  ">
      <div className="flex lg:flex-row  gap-16 mt-8 w-full">
        <div className="w-full ">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-4">
              <label htmlFor="name" className="block font-semibold text-white">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full py-2 px-3 bg-zinc-900  rounded-lg text-white placeholder-gray-400  "
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
                className="w-full py-2 px-3 bg-zinc-900  rounded-lg text-white placeholder-gray-400   "
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
                className="w-full py-2 px-3 bg-zinc-900  rounded-lg text-white placeholder-gray-400  resize-none  "
                placeholder="Your Message"
              ></textarea>
            </div>
            <div className="text-center mt-4">
              <button
                type="submit"
                disabled={state.submitting}
                className="w-full bg-zinc-900 text-white font-semibold py-2 px-4 rounded-lg hover:bg-rose-500 focus:outline-none focus:bg-gray-800 disabled:bg-gray-400 disabled:text-gray-100 transform transition-transform hover:scale-105 active:bg-gray-600  "
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
