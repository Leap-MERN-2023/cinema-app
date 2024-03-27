"use client";
import React, { useContext } from "react";

import { useFormik } from "formik";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { PasswordInput } from "../ui/passwordinput";
import { AuthContext } from "..";
import * as yup from "yup";

type Props = {
  handleLinkClick: any;
};

// const validationSchema = yup.object({
//   email: yup
//     .string()
//     .max(100, "100 тэмдэгтээс урт байж болохгүй")
//     .required("Email талбарыг заавал бөглөнө үү")
//     .email("Бүртгэлтэй хаяг оруулна уу"),
//   password: yup
//     .string()
//     .required("Нууц үгийн талбарыг заавал бөглөнө үү")
//     .min(6, "Хамгийн багадаа 6 тэмдэгт байх ёстой"),
// });

export const Signup = ({ handleLinkClick }: Props) => {
  const { signup } = useContext(AuthContext);
  const formik = useFormik({
    onSubmit: ({ email, password }) => {
      signup(email, password);
    },
    initialValues: { email: "", password: "", rePassword: "" },
    validateOnChange: false,
    validateOnBlur: false,
    // validationSchema,
  });
  return (
    <div>
      <SheetHeader>
        <SheetTitle className="text-white">Бүртгүүлэх</SheetTitle>
      </SheetHeader>
      <div className="grid gap-4 py-4">
        <Input
          id="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          placeholder="Е-майл хаяг"
          className="bg-white"
        />
        <PasswordInput
          id="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          className=" bg-white"
          placeholder="Нууц үг"
        />
        <PasswordInput
          id="rePassword"
          name="rePassword"
          value={formik.values.rePassword}
          onChange={formik.handleChange}
          className=" bg-white"
          placeholder="Нууц үг давтах"
        />
      </div>
      <SheetClose asChild>
        <Button
          type="button"
          onClick={() => {
            formik.handleSubmit();
          }}
          className="w-full py-4 mt-6 bg-[#1f4682]"
        >
          Бүртгүүлэх
        </Button>
      </SheetClose>
      <div className="mt-14 text-end">
        <a
          className=" text-white text-[13px] cursor-pointer"
          onClick={handleLinkClick}
        >
          Нэвтрэх хэсэгрүү буцах
        </a>
      </div>
    </div>
  );
};
