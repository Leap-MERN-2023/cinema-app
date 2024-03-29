"use client";
import { useContext, useState } from "react";

import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PasswordInput } from "../ui/passwordinput";
import { Separator } from "@/components/ui/separator";
import { CiFacebook } from "react-icons/ci";
import { FaUser } from "react-icons/fa6";
import { CgMail } from "react-icons/cg";
import { AuthContext } from "..";
import { Login } from "./login";
import { Signup } from "./signup";
import Profile from "./profile";

export function ProfileDrawer() {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleLinkClick = () => {
    setShowSignIn(!showSignIn);
  };

  const { user } = useContext(AuthContext);

  return (
    <Sheet>
      <SheetTrigger asChild>
        <a className="text-white font-bold p-0 text-[16px] hover:text-red-400 cursor-pointer">
          <FaUser />
        </a>
      </SheetTrigger>
      <SheetContent className="flex justify-center items-center bg-[#000000] bg-opacity-50 border-none">
        {user == null ? (
          <div>
            {showSignIn ? (
              <Login handleLinkClick={handleLinkClick} />
            ) : (
              <Signup handleLinkClick={handleLinkClick} />
            )}
          </div>
        ) : (
          <div>
            <Profile user={user} />
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
