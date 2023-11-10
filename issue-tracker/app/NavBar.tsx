import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";

const links = [
  {
    label: "Dashboard",
    href: "/",
  },
  {
    label: "Issues",
    href: "/Issues",
  },
];

const NavBar = () => {
  return (
    <nav className="flex space-x-6 h-14 border-b px-5 items-center">
      <Link href={"/"}>
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6 text-center ">
        {links.map((links) => {
          return (
            <li
              key={links.href}
              className="text-zinc-600 hover:text-zinc-950 transition-colors"
            >
              <Link href={links.href}>{links.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
