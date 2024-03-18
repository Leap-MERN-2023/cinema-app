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
import { Label } from "../ui/label";

const formSchema = z.object({
  email: z.string().includes("@", {
    message: "И-мэйл хаягаа зөв оруулна уу?",
  }),
  phone: z.string().refine((value) => /^\d{8}$/.test(value), {
    message: "Утасны дугаар буруу байна",
  }),
  banknumber: z.string().refine((value) => /^\d{16}$/.test(value), {
    message: "Дансны дугаар буруу байна",
  }),
  cvv: z.string().refine((value) => /^\d{3}$/.test(value), {
    message: "CVV дугаар буруу байна",
  }),
});

export function Checkout() {
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
        className="flex items-center justify-between w-[800px] max-h-[450px] bg-slate-900 px-8 py-12 rounded-xl"
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
              {banks.map((e) => (
                <Button type="button">
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
        <div className="h-full">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}

const banks = [
  { name: "Khaan Bank", imgsrc: "/banklogos/khaanbank.png" },
  { name: "Khas Bank", imgsrc: "/banklogos/khasbank.png" },
  { name: "Social Pay", imgsrc: "/banklogos/socialpay.png" },
  { name: "TDB", imgsrc: "/banklogos/tdb.png" },
];
