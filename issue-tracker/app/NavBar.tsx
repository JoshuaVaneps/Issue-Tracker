"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import { link } from "fs";
import classnames from "classnames";

const NavBar = () => {
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

  const currentPath = usePathname();
  console.log(currentPath);

  return (
    <nav className="flex space-x-6 h-14 border-b px-5 items-center">
      <Link href={"/"}>
        <AiFillBug />
      </Link>
      <ul className="flex space-x-6 text-center ">
        {links.map((link) => {
          return (
            <li
              key={link.href}
              // calling classnames this way makes code cleaner
              className={classnames({
                "text-zinc-900": link.href === currentPath,
                "text-zinc-500": link.href !== currentPath,
                // renders at all times
                "hover: text-zinc-900 transition-colors": true,
              })}
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
