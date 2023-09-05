// "use client";
import React from "react";
import ContactForm from "../components/contactForm/ContactForm";

type Props = {};

const Contacts = (props: Props) => {
  return (
    <div className="p-4 max-w-5xl mx-auto my-16 animation-fade-in">
      <ContactForm />
    </div>
  );
};

export default Contacts;
