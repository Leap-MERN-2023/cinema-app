"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { PasswordInput } from "../ui/passwordinput";
import { Separator } from "@/components/ui/separator";
import { CiFacebook } from "react-icons/ci";
import { CgMail } from "react-icons/cg";
import { useState } from "react";

export function ProfileDrawer() {
  const [showSignIn, setShowSignIn] = useState(true);

  const handleLinkClick = () => {
    setShowSignIn(!showSignIn);
  };
  return (
    <Sheet>
      <SheetTrigger asChild>
        <a className="text-white font-bold p-0 text-[16px] hover:text-red-400 cursor-pointer">
          Profile
        </a>
      </SheetTrigger>
      <SheetContent className="flex justify-center items-center px-14 bg-[#000000] bg-opacity-50 border-none">
        {showSignIn && (
          <div>
            <SheetHeader>
              <SheetTitle className="text-white">Нэвтрэх</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="flex items-center gap-2">
                <Input id="zipnumber" value="+976" className="w-16 bg-white" />
                <Input
                  id="phonenumber"
                  placeholder="Утасны дугаар"
                  className="bg-white"
                />
              </div>
              <PasswordInput
                id="current_password"
                className=" bg-white"
                placeholder="Нууц үг"
              />
              <a className="text-white text-end text-[13px]">Нууц үг мартсан</a>
            </div>
            <SheetClose asChild>
              <Button type="submit" className="w-full py-4 bg-[#1f4682]">
                Нэвтрэх
              </Button>
            </SheetClose>
            <div className="flex items-center my-4 gap-1 justify-between">
              <Separator className="w-[100px]" />
              <p className="text-white">Эсвэл</p>
              <Separator className="w-[100px]" />
            </div>
            <div className="">
              <Button className="w-full py-4 mb-2">
                <div className="w-[20px] mr-1">
                  <CiFacebook className="h-full w-full" />
                </div>
                Facebook-ээр нэвтрэх
              </Button>
              <Button className="w-full py-4 mb-2">
                <div className="w-[20px] mr-1">
                  <CgMail className="h-full w-full" />
                </div>
                Gmail-ээр нэвтрэх
              </Button>
            </div>
            <div className="flex justify-between mt-14">
              <p className="text-white text-[14px]">Шинэ хэрэглэгч үү?</p>
              <a
                onClick={handleLinkClick}
                className="text-white text-end text-[13px] cursor-pointer"
              >
                Бүртгүүлэх
              </a>
            </div>
          </div>
        )}
        {!showSignIn && (
          <div>
            <SheetHeader>
              <SheetTitle className="text-white">Бүртгүүлэх</SheetTitle>
            </SheetHeader>
            <div className="grid gap-4 py-4">
              <div className="flex items-center gap-2">
                <Input id="zipnumber" value="+976" className="w-16 bg-white" />
                <Input
                  id="phonenumber"
                  placeholder="Утасны дугаар"
                  className="bg-white"
                />
              </div>
              <PasswordInput
                id="password"
                className=" bg-white"
                placeholder="Нууц үг"
              />
              <PasswordInput
                id="rePassword"
                className=" bg-white"
                placeholder="Нууц үг давтах"
              />
            </div>
            <SheetClose asChild>
              <Button type="submit" className="w-full py-4 mt-6 bg-[#1f4682]">
                Бүртгүүлэх
              </Button>
            </SheetClose>
            <div className="mt-14 text-end">
              <a
                className=" text-white text-[13px] cursor-pointer"
                onClick={() => {
                  setShowSignIn(!showSignIn);
                }}
              >
                Нэвтрэх хэсэгрүү буцах
              </a>
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
}
