import React from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdOutlineLocalMovies } from "react-icons/md";

export const TicketDialog = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <div className="flex items-center justify-between">
          <div className="flex items-center  my-1">
            <span className="mr-3 rounded-full color-white  w-8 h-8">
              <MdOutlineLocalMovies className="h-8 p-1 size-full" />
            </span>
            <h2 className="font-bold text-xl">Dune: Part 2</h2>
          </div>
        </div>
        <div className=" border-dashed border-b-2 pt-5">
          <div className="absolute rounded-full w-5 h-5 bg-slate-700 -mt-2 -left-2"></div>
          <div className="absolute rounded-full w-5 h-5 bg-slate-700 -mt-2 -right-2"></div>
        </div>
        <div className="flex items-center mt-5">
          <img
            src="https://pbs.twimg.com/media/GFLXqt4a8AAuI4n.jpg:large"
            className="rounded-md w-64"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="bg-slate-900 border-4 border-slate-800 text-slate-300 w-80 rounded-lg">
        <div className="flex flex-col  p-3 gap-4 text-sm">
          <h2 className="font-bold text-3xl">Dune: Part 2</h2>
          <div className="items-center flex gap-2">
            <span className="text-sm font-bold text-slate-400">Байршил:</span>
            <div className="font-semibold">Urgoo 2</div>
          </div>
          <div className="items-center flex gap-2">
            <span className="text-base font-bold text-slate-400">Хэзээ:</span>
            <div className="font-semibold">04/30/2024</div>
          </div>
          <div className="items-center flex gap-2">
            <span className="text-sm font-bold text-slate-400">Эхлэх цаг:</span>
            <div className="font-semibold">18:30</div>
          </div>
          <div className="items-center flex gap-2">
            <span className="text-sm font-bold text-slate-400">Танхим:</span>
            <div className="font-semibold">5</div>
          </div>
          <div className="flex items-center text-sm gap-2">
            <div className="text-sm font-bold text-slate-400">Тасалбар:</div>
            <div className="font-semibold border-2 p-1 rounded-md">2 том</div>
            <div className="font-semibold border-2 p-1 rounded-md">
              1 хүүхэд
            </div>
          </div>
          <div className="font-semibold flex-row flex gap-2">
            <div className="text-sm font-bold text-slate-400">Нийт төлбөр:</div>
            <span>15000₮</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
