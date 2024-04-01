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
import { cinemas } from "../movieCard/cinemas";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { MovieContext } from "..";
import { Resizable } from "./resizeImage";

type ICardProps = {
  movie: any;
};

export function DialogOpen({ movie }: ICardProps) {
  const router = useRouter();
  const { setSelectedMovieId } = useContext(MovieContext);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-24 h-6 text-[12px] md:w-28 md:h-9 font-medium md:text-[14px] text-white bg-red-500">
          Дэлгэрэнгүй
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-slate-700 max-h-[800px] min-w-[1200px] border-none overflow-auto">
        <div className="">
          <div className="flex backdrop-blur-md p-6 justify-center gap-40">
            <section className="flex justify-center gap-4 z-10">
              <div className="rounded-lg overflow-hidden w-[400px] flex justify-center items-center">
                <img src={movie.poster.vertical} alt={movie.title + " image"} />
              </div>
            </section>
            <section className="flex flex-col text-white z-20">
              <h1 className="text-6xl font-bold mt-10">{movie.title}</h1>
              <div className="flex gap-6 items-center mt-10">
                <p className="text-2xl font-bold">Найруулагч:</p>
                <div className="text-2xl">{movie.director}</div>
              </div>
              <div className="flex gap-6 items-center mt-10">
                <p className="text-2xl font-bold">Төрөл</p>
                <div className="text-2xl">{movie.genre}</div>
              </div>
              <div className="flex mt-20 gap-10">
                <Button
                  className="bg-rose-500 px-10 w-96 h-12"
                  onClick={() => {
                    router.push("/order"), setSelectedMovieId(movie._id);
                  }}
                >
                  Захиалах
                </Button>
              </div>
            </section>
          </div>
          <div className="absolute -z-10 top-0">
            <img
              src={movie.poster.vertical}
              alt=""
              width="1000px"
              height="500px"
            />
          </div>
          <div className="bg-gradient-to-b from-black to-zinc-600 text-white m-0 pl-10 pt-10">
            <p className="text-4xl font-bold">Тухай: </p>
            <div className="text-3xl font-light mt-4">{movie.synopsis}</div>
            <p className="text-4xl font-bold mt-4">Дүрүүдэд: </p>
            <div className="flex gap-10 mt-10">
              {movie.cast.map((cast: any) => {
                return (
                  <div className="flex flex-col gap-4 overflow-hidden max-w-20 font-light text-center">
                    <Avatar className="rounded-md w-20 items-center h-20">
                      <AvatarImage
                        src={cast.img}
                        className="object-cover"
                        alt="@shadcn"
                      />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p>{cast.name}</p>
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
            <Resizable card={movie} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
