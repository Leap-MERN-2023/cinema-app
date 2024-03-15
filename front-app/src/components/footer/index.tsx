import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <div className="mt-[-40px]">
      <div className="flex items-center justify-center w-full bg-[#262330] h-[400px] text-[#d3cfe6] relative ">
        <div className="flex justify-center flex-col gap-4">
          <div className="text-2xl">Central Cinema</div>
          <div className="">Бүх кино театарыг нэг доороос!</div>
          <div className="flex items-center gap-8 ml-12">
            <FaFacebookF className="size-6" />
            <FaInstagram className="size-7" />
            <FaTwitter className="size-6" />
          </div>
        </div>

        <div className="flex justify-center flex-col gap-4 ml-[160px]">
          <div className="text-2xl mb-6">Түгээмэл асуулт</div>
          <div className="flex items-center gap-2">
            <FaLocationDot className="size-5" />
            <div className="">
              Сүхбаатар дүүрэг, 8-р хороо, EyeCandy Tower, 5-н давхар
            </div>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <FaPhone className="size-4" />
              <div className="">99487463, 83837632</div>
            </div>
            <div className="flex items-center gap-2">
              <IoMdMail className="size-5" />
              <div className="">eyecandy@business.com</div>
            </div>
          </div>
          <div className="ml-6">Copyright © 2024 | EYECANDY</div>
        </div>

        <div>
          <img src="./qr/Untitled.svg" className="size-48 ml-[160px]" />
        </div>

        <div className="flex items-center justify-center flex-col ml-[40px]">
          <img
            src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
            className="size-64 "
          />
          <img
            src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
            className="size-64 mt-[-160px]"
          />
        </div>
      </div>
    </div>
  );
};
