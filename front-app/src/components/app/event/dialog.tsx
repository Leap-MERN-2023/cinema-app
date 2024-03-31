import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import { events } from "./data";

interface IEventProps {
  event: any;
}

export function DialogOpen({ event }: IEventProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="absolute bottom-0 right-0 mr-2 mb-2 w-24 h-6 text-[12px] md:w-28 md:h-9 font-medium md:text-[14px] text-white bg-slate-900 hover:bg-red-500">
          Дэлгэрэнгүй
        </Button>
      </DialogTrigger>
      <DialogContent className="w-[95%] h-[75%] md:h-[80%] h-max-[150%] rounded-lg bg-slate-800 border-none overflow-auto">
        <div className="w-full mt-6 flex flex-col items-center ">
          <img
            className="rounded-md shadow-2xl"
            src={event.image}
            alt="image"
          />
          <div className="text-gray-300 mt-4">
            <div>
              <h5 className="py-3 font-bold sm:text-xl lg:text-2xl">Тухай</h5>
              <p className="text-xs sm:text-sm text-wrap">{event.about}</p>
            </div>
            <div className="mt-4">
              <h5 className="py-3 font-bold sm:text-xl lg:text-2xl">
                Үйл ажиллагаа
              </h5>
              <p className="text-xs sm:text-sm text-wrap">{event.addition}</p>
            </div>
            <div className="mt-4">
              <h6 className="py-3 font-bold sm:text-xl lg:text-2xl">Байршил</h6>
              <p className="text-xs sm:text-sm text-wrap">{event.location}</p>
            </div>
          </div>
          <Button className="bg-red-500 mt-8">Тасалбар захиалах</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
