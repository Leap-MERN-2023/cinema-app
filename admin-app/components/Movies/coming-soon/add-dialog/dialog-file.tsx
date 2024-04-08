"use client";
import { Cloudinary } from "@/components/utils/cloudinary-next/upload";
import { InputField } from "@/components/utils/input-field";
import { useComingSoon, useMovie } from "@/context";
import React, { ChangeEvent } from "react";

type Props = {
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const DialogFile = ({ handleInputChange }: Props) => {
  const { setCast1, setCast2, setCast3, setLandOne, setLandTwo, setVertical } =
    useComingSoon();
  return (
    <div className=" ">
      <InputField
        desc="Трэйлер линк оруулна уу"
        label="Trailer"
        name="movie_trailer"
        type={"text"}
        onChange={handleInputChange}
      />
      <div className="flex flex-col gap-3">
        <p className="text-[13px] text-violet12">Poster {"(Vertical img)"}</p>
        <div className="border text-[15px] border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded ">
          {" "}
          <Cloudinary setFunction={setVertical} />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <p className="text-[13px] text-violet12">
          Poster {"(Landscape img 1)"}
        </p>
        <div className="border text-[15px] border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded">
          {" "}
          <Cloudinary setFunction={setLandOne} />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <p className="text-[13px] text-violet12">
          Poster {"(Landscape img 2)"}
        </p>
        <div className="border text-[15px] border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded">
          {" "}
          <Cloudinary setFunction={setLandTwo} />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <p className="text-[13px] text-violet12">Poster {"(Cast img 1)"}</p>
        <div className="border text-[15px] border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded">
          {" "}
          <Cloudinary setFunction={setCast1} />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <p className="text-[13px] text-violet12">Poster {"(Cast img 2)"}</p>
        <div className="border text-[15px] border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded">
          {" "}
          <Cloudinary setFunction={setCast2} />
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-3">
        <p className="text-[13px] text-violet12">Poster {"(Cast img 3)"}</p>
        <div className="border text-[15px] border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded">
          {" "}
          <Cloudinary setFunction={setCast3} />
        </div>
      </div>
    </div>
  );
};
