"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ProfileDrawer } from "../profileDrawer";

const headers = [
  {
    header: "Cinema",
    href: "/",
  },
  {
    header: "Coming soon",
    href: "/comingsoon",
  },
  {
    header: "Event",
    href: "/event",
  },
  {
    header: "Ticket",
    href: "/ticket",
  },
];
const Header = () => {
  const isActive = usePathname();
  return (
    <div className="fixed  backdrop-blur-md w-[100%] z-10 text-white">
      <div className="header gap-80 flex py-5  text-red-500 justify-center items-center">
        <span className="font-semibold text-lg">CENTRAL CINEMA</span>
        <ul className="flex font-semibold gap-16 text-white items-center">
          {headers.map((header, i) => (
            <Link
              className={`font-bold transition-all duration-75  ${
                isActive === header.href
                  ? "text-red-500"
                  : "hover:text-red-400 "
              }`}
              key={i}
              href={header.href}
            >
              {header.header}
            </Link>
          ))}
          {<ProfileDrawer />}
        </ul>
      </div>
    </div>
  );
};

export default Header;
