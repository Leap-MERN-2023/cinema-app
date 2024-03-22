"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, useFormContext } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Label } from "../../../ui/label";
import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";

const formSchema = z.object({
  email: z.string().includes("@", {
    message: "И-мэйл хаягаа зөв оруулна уу?",
  }),
  phone: z.string().refine((value) => /^\d{8}$/.test(value), {
    message: "Утасны дугаар буруу байна",
  }),
  banknumber: z.string().refine((value) => /^\d{9}$/.test(value), {
    message: "Дансны дугаар буруу байна",
  }),
  cvv: z.string().refine((value) => /^\d{3}$/.test(value), {
    message: "CVV дугаар буруу байна",
  }),
});

export function Checkout({ changeStep }: any) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      phone: "",
      banknumber: "",
      cvv: "",
    },
  });
  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex justify-between w-[800px] max-h-[450px] bg-slate-900 px-8 py-12 rounded-xl my-10"
      >
        <div className="flex flex-col gap-6 h-full text-white">
          <h1 className="font-semibold ">Checkout</h1>
          <div>
            <p>1. Мэдээллээ оруулна уу</p>
            <div className="flex gap-5 mt-3">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    {/* <FormLabel className="p-0 text-[10px]">aaa</FormLabel> */}
                    <FormControl className="w-40 ">
                      <div>
                        <Label
                          className={`text-[10px] transition-opacity ${
                            field.value ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          И-мэйл хаяг
                        </Label>
                        <Input
                          placeholder="И-мэйл хаяг"
                          className="outline-none rounded-none mt-[-8px] border-t-0 border-r-0 border-l-0 border-slate-400 hover:border-white"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <div>
                      <FormMessage className="text-[10px] absolute" />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="w-40">
                      <div>
                        <Label
                          className={`text-[10px] transition-opacity ${
                            field.value ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          Утасны дугаар
                        </Label>
                        <Input
                          className="outline-none rounded-none mt-[-8px] border-t-0 border-r-0 border-l-0 border-slate-400 hover:border-white"
                          placeholder="Утасны дугаар"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <div>
                      <FormMessage className="text-[10px] absolute" />
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <p>2. Төлбөр төлөх сонголт</p>
            <div className="flex flex-wrap w-[400px]">
              {banks.map((e, i) => (
                <Button key={i} type="button">
                  <img
                    src={e.imgsrc}
                    width={"15px"}
                    style={{ marginRight: "4px" }}
                  />
                  {e.name}
                </Button>
              ))}
            </div>
            <div className="flex gap-5 mt-[-15px]">
              <FormField
                control={form.control}
                name="banknumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="w-40">
                      <div>
                        {" "}
                        <Label
                          className={`text-[10px] transition-opacity ${
                            field.value ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          Дансны дугаар
                        </Label>
                        <Input
                          className="outline-none rounded-none mt-[-8px] border-t-0 border-r-0 border-l-0 border-slate-400 hover:border-white"
                          placeholder="Дансны дугаар"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <div>
                      <FormMessage className="text-[10px] absolute" />
                    </div>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="cvv"
                render={({ field }) => (
                  <FormItem>
                    <FormControl className="w-[80px]">
                      <div>
                        <Label
                          className={`text-[10px] transition-opacity ${
                            field.value ? "opacity-100" : "opacity-0"
                          }`}
                        >
                          Утасны дугаар
                        </Label>
                        <Input
                          className="outline-none rounded-none mt-[-8px] border-t-0 border-r-0 border-l-0 border-slate-400 hover:border-white"
                          placeholder="CVV"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <div>
                      <FormMessage className="text-[10px] absolute" />
                    </div>
                  </FormItem>
                )}
              />
            </div>
          </div>
        </div>
        <div className="h-full w-[250px]">
          <div className="w-[250px] h-[140px] bg-red-100 rounded-sm relative text-white shadow-2xl transition-transform transform hover:scale-110 ">
            <img
              className="relative object-cover w-full h-full rounded-sm"
              src="https://i.imgur.com/kGkSg1v.png"
            />

            <div className="w-full px-4 absolute top-4">
              <div className="flex justify-between">
                <div className="">
                  <p className="text-[15px]">Бүртгэлтэй карт</p>
                </div>
              </div>
              <div className="flex gap-1 mt-3 ">
                <LuNfc width={"10px"} height={"10px"} />
                <FcSimCardChip width={"10px"} height={"10px"} color="white" />
              </div>

              <div className="flex items-end justify-between mt-3">
                <div>
                  <div className="mb-2">
                    <p className="font-medium text-[10px] flex gap-4 mt-2">
                      <span>4642</span>
                      <span>3489</span>
                      <span>9867</span>
                      <span>7632</span>
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-light text-[8px]">Дансны дугаар</p>
                    <p className="font-medium text-[8px]">123-45-67-890</p>
                  </div>
                </div>
                <div className="w-14 h-8">
                  <img
                    className="size-full bg-slate-100 px-2 py-[9px] rounded-sm"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center gap-1 ">
            <h1 className="text-slate-100 my-4 text-center">
              Guardians of the Galaxy Vol.3
            </h1>
            {ordersDetail.map((e, i) => {
              return (
                <div
                  key={i}
                  className="flex justify-between text-slate-100 text-[12px] w-[250px]"
                >
                  <p>
                    {e.name} <span> x{e.quantity}</span>
                  </p>
                  <p>{e.price}₮</p>
                </div>
              );
            })}
            <Button
              type="submit"
              className="w-full bg-red-600 mt-2 hover:bg-red-200"
              onClick={() => {
                if (form.formState.isValid) {
                  changeStep();
                } else {
                  console.log("Form contains errors. Cannot proceed.");
                }
              }}
            >
              Төлөх
            </Button>
          </div>
        </div>
      </form>
    </Form>
  );
}

const ordersDetail = [
  { name: "Том хүн", quantity: "2", price: "36000" },
  { name: "Хүүхэд", quantity: "1", price: "8000" },
  { name: "Карамел попкорн", quantity: "1", price: "6000" },
  { name: "Fanta", quantity: "2", price: "5000" },
  { name: "Classic Lays", quantity: "2", price: "10000" },
];

const banks = [
  { name: "Khan Bank", imgsrc: "/banklogos/khaanbank.png" },
  { name: "Khas Bank", imgsrc: "/banklogos/khasbank.png" },
  { name: "Social Pay", imgsrc: "/banklogos/socialpay.png" },
  { name: "TDB", imgsrc: "/banklogos/tdb.png" },
];
