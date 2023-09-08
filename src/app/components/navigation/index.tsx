"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Navigation = () => {
  // toggle sidebar
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item: string) => {
    setSelected(item);
  };
  return (
    <>
      <Sidebar
        handleItemClick={handleItemClick}
        isOpen={isOpen}
        toggle={toggle}
        selected={selected}
      />
      <Navbar
        selected={selected}
        handleItemClick={handleItemClick}
        toggle={toggle}
      />
    </>
  );
};

export default Navigation;
