"use client";
import { useContext, useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { FaUser } from "react-icons/fa6";
import { Login } from "./login";
import { Signup } from "./signup";

export function ProfileDrawer() {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleLinkClick = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <Sheet>
      <SheetTrigger asChild>
        <a className="text-white font-bold p-0 text-[16px] hover:text-red-400 cursor-pointer">
          <FaUser />
        </a>
      </SheetTrigger>
      <SheetContent className="flex justify-center items-center px-14 bg-[#000000] bg-opacity-50 border-none">
        {showSignIn && <Login handleLinkClick={handleLinkClick} />}
        {!showSignIn && <Signup handleLinkClick={handleLinkClick} />}
      </SheetContent>
    </Sheet>
  );
}
