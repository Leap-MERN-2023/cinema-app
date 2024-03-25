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
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cinemas } from "./cinemas";
import { useRouter } from "next/navigation";

type ICardProps = {
  card: any;
};

export function DialogOpen({ card }: ICardProps) {
  const router = useRouter();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-slate-900 w-4 h-8 rounded-2xl font-medium md:text-[14px] text-white shadow-none mt-[-22px] mr-[-198px] sm:mr-[-312px] lg:mr-[-256px] hover:bg-red-500">
          ?
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-slate-700 max-h-[800px] min-w-[1200px] border-none overflow-auto">
        <div className="">
          <div className="flex backdrop-blur-md p-6 gap-40">
            <section className="flex justify-center gap-4 z-10">
              <div className="rounded-lg overflow-hidden w-[400px] flex justify-center items-center">
                <img src={card.movieImages} alt={card.title + " image"} />
              </div>
            </section>
            <section className="flex flex-col text-white z-20">
              <h1 className="text-6xl font-bold mt-10">{card.title}</h1>
              <div className="flex gap-6 items-center mt-10">
                <p className="text-2xl font-bold">Найруулагч:</p>
                <div className="text-2xl">{card.director}</div>
              </div>
              <div className="flex gap-6 items-center mt-10">
                <p className="text-2xl font-bold">Төрөл:</p>
                <div className="text-2xl">Action, Drama</div>
              </div>
              <div className="flex mt-20 gap-10">
                <Button className="bg-white px-10 text-black h-12 hover:text-white">
                  Трейлер
                </Button>
                <Button
                  className="bg-rose-500 px-10 h-12"
                  onClick={() => router.push("/order")}
                >
                  Захиалах
                </Button>
              </div>
            </section>
          </div>
          <div className="absolute -z-10 top-0">
            <img src={card.horizontalPoster} alt="" width="1500px" />
          </div>
          <div className="bg-gradient-to-b from-black to-zinc-600 text-white m-0 pl-10 pt-10">
            <p className="text-4xl font-bold">Тухай: </p>
            <div className="text-3xl font-light mt-4">{card.description}</div>
            <p className="text-4xl font-bold mt-4">Дүрүүдэд: </p>
            <div className="flex gap-10 mt-10">
              {card.casting.map((cast: any) => {
                return (
                  <div className="flex flex-col gap-4">
                    <Avatar className="rounded-md w-20 h-20">
                      <AvatarImage src={cast.image} alt="@shadcn" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p>{cast.actor}</p>
                  </div>
                );
              })}
            </div>
            <p className="text-4xl font-bold mt-4">Кино театрууд:</p>
            <div className="flex gap-10 mt-10 pb-10">
              {cinemas.map((cinema: any) => {
                return (
                  <div className="flex rounded-lg w-[100px] h-[100px] overflow-hidden justify-center items-center">
                    <img src={cinema.img} alt={cinema.name} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
