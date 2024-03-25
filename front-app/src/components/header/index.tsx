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
    <div className="fixed flex backdrop-blur-md w-[100%] h-[60px] sm:h-[80px] md:h-[100px] z-10 text-white p-2 text-[10px] sm:text-[16px] justify-center">
      <div className="header flex md:gap-64 lg:gap-96 sm:gap-30 text-red-500 justify-evenly items-center">
        <span className="flex font-bold size-12 items-center mr-[48px] sm:mr-[96px]  sm:text-lg">
          CENTRAL CINEMA
        </span>
        <ul className="flex font-semibold text-white items-center gap-4 sm:gap-8 lg:gap-12">
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
