import React from "react";
import Link from "next/link";
import { LuPopcorn } from "react-icons/lu";

export default function NotFoundPage() {
  return (
    <div className=" flex items-center justify-center flex-col bg-slate-900">
      <div className="flex gap-[48px] mt-[480px]">
        <svg
          viewBox="0 0 32 32"
          id="brokenheart_Light"
          data-name="brokenheart/Light"
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          className="size-40"
        >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></g>
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path id="Path" d="M0,0H32V32H0Z" fill="#0f172a"></path>{" "}
            <path
              id="Path-2"
              data-name="Path"
              d="M6,0h4V2h2V4h2v8H12v2H10v4h4v2h2v4H14v4H12V26H10V24H8V22H6V20H4V18H2V14H0V6H2V4H4V2H6Z"
              transform="translate(2 2)"
              fill="#d15864"
            ></path>{" "}
            <path
              id="Path-3"
              data-name="Path"
              d="M4,0H8V2h2V4h2V6h2v8H12v4H10v4H8v2H6v2H4v2H2V24H4V18H2V16H0V14H2V12H4V8H2V2H4Z"
              transform="translate(16 2)"
              fill="#d15864"
            ></path>{" "}
          </g>
        </svg>
        <div>
          <h1 className="text-[#fc6f7d] font-mono font-bold text-9xl">404</h1>
          <h1 className="text-[#fc6f7d] font-mono font-bold text-4xl">
            ЮУ Ч ОЛДСОНГҮЙ.
          </h1>
        </div>
      </div>
      <div className="text-[#d15864] font-mono font-medium text-xl mt-[300px] tracking-tighter">
        Туслалцаа хэрэгтэй бол 93983873, 83737363 утсанд холбогдоно уу.
      </div>
      <Link href="/">
        <div className="text-[#fc6f7d] font-mono font-medium text-2xl mt-[24px] underline">
          Буцахад энд дарна уу!
        </div>
      </Link>
      <div className="text-[#fc6f7d] font-mono font-bold text-[800px] mt-[-1048px] opacity-5 pointer-events-none">
        404
      </div>
    </div>
  );
}
