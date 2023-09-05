"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  title: string;
  href: string;
}
const NavItem = ({ title, href }: Props) => {
  const currentRoute = usePathname().substring(1).toLowerCase();

  return (
    <li
      className={
        currentRoute === href
          ? "transition ease-in-out delay-150"
          : "text-gray-400"
      }
    >
      <Link href={`/${href}`}>
        <p>{title}</p>
      </Link>
    </li>
  );
};

export default NavItem;
