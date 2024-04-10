"use client";

import { Button, Flex, Separator, Text, TextField } from "@radix-ui/themes";
import Breadcrumb from "../Breadcrumbs/Breadcrumb";
import React, { useContext } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { CinemaCard } from "./CinemaCard";
import { CinemaContext } from "@/context";

const Cinema = () => {
  const { cinemas } = useContext(CinemaContext);
  return (
    <>
      <div className="">
        <Breadcrumb pageName="Cinema" />
        <Flex gap="5" className=" mb-5 text-lg">
          <span className="text-red-400"> Өргөө</span>

          <Separator orientation="vertical" />
          <span className="text-red-400"> Тэнгис</span>
          <Separator orientation="vertical" />
          <span className="text-red-400"> Гэгээнтэн</span>
          <Separator orientation="vertical" />
          <span className="text-red-400"> Prime</span>
          <Separator orientation="vertical" />
          <span className="text-red-400"> Хүннү</span>
        </Flex>
        <div className="ml-16 mb-3">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button className="inline-flex h-[35px] items-center justify-center rounded-[4px] bg-red-500 text-white px-[15px] font-medium leading-none focus:shadow-black focus:outline-none">
                Add Cinema
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
              <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <Dialog.Title className="text-mauve12 m-0 text-[17px] font-medium">
                  Add Cinema
                </Dialog.Title>
                <Dialog.Description className="text-mauve11 mt-[10px] mb-5 text-[15px] leading-normal">
                  Кино театрын нэмэхийг хүсвэл нэмэж болно. Гэхдээ ганцхан admin
                  ууд Үнэнбатаас өөр хүн хийж болкүүдээ хэхэ TvT.
                </Dialog.Description>
                <fieldset className="mb-[15px] flex items-center gap-5">
                  <label
                    className=" w-[90px] text-right text-[15px]"
                    htmlFor="name"
                  >
                    Кино театрын нэр
                  </label>
                  <input
                    className="inline-flex h-[35px] w-full flex-1 items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px]"
                    id="name"
                    defaultValue="Өргөө"
                  />
                </fieldset>
                <div className="mt-[25px] flex justify-end">
                  <Dialog.Close asChild>
                    <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                      Хадгалах
                    </button>
                  </Dialog.Close>
                </div>
                <Dialog.Close asChild>
                  <button
                    className=" hover:bg-violet4 focus: absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                    aria-label="Close"
                  >
                    <Cross2Icon />
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
      <div>
        <div className="flex flex-wrap gap-5">
          <CinemaCard cinemas={cinemas} />
        </div>
      </div>
    </>
  );
};

export default Cinema;
