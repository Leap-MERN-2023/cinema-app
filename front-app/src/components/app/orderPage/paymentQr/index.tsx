import React from "react";

export const PaymentQr = () => {
  return (
    <div className="px-6 my-10 py-4 flex items-center justify-center flex-col bg-slate-900">
      <div className="flex justify-center items-center flex-col">
        <div className="flex justify-center font-mono text-white text-6xl mt-[40px] font-bold mb-[48px]">
          Төлбөр амжилттай хийгдээ!
        </div>
        <div className="font-mono text-slate-400 mb-[48px]">
          Төлбөрийн мэдээлэл болон тасалбарын QR-кодыг таны бүртгүүлсэн EMAIL
          хаяг руу илгээлээ.
        </div>
        <div className="flex flex-col  justify-center items-center border-2 border-dotted border-[#a82839] size-[720px] p-[48px]">
          <div className="font-mono text-2xl mb-[56px] mt-[-48px] text-slate-200">
            Та кино эхлэхээс өмнө тасалбар шалгагч дээр энэхүү QR-кодыг үзүүлж
            шууд орох боломжтой. Эсвэл KIOSK төхөөрөмжөөс баримтаа хэвлэж авж
            болно.
          </div>
          <img src="./qr/Untitled.svg" className="size-[440px]" />
        </div>
      </div>
    </div>
  );
};
