"use client";

import Link from "next/link";

interface Props {
  title: string;
  href: string;
  selected: boolean;
  onClick: () => void;
}
const NavItem = ({ title, href, selected, onClick }: Props) => {
  return (
    <li
      className={
        selected ? "transition ease-in-out delay-150" : "text-gray-400"
      }
      onClick={onClick}
    >
      <Link href={`/${href}`}>
        <p>{title}</p>
      </Link>
    </li>
  );
};

export default NavItem;
