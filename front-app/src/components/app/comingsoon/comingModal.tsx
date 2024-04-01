import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cinemas } from "./cinemas";
import { Resizable } from "./resizeImage";
import { useState } from "react";

type ICardProps = {
  card: any;
};

export function ComingModal({ card }: ICardProps) {
  const [openVideo, setOpenvideo] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-slate-900 border-none text-white absolute mt-20"
        >
          Дэлгэрэнгүй
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-slate-700 max-h-[800px] min-w-[1200px] border-none overflow-auto">
        <div className="">
          <div className="flex backdrop-blur-md p-6 gap-40">
            <section className="flex justify-center gap-4 z-10">
              <div className="rounded-lg overflow-hidden w-[400px] flex justify-center items-center">
                <img src={card.poster.vertical} alt={card.title + " image"} />
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
              <div className="flex mt-20 gap-10 flex-col">
                <Button
                  onClick={() => {
                    setOpenvideo(true);
                    // console.log("clicked");
                  }}
                  className="bg-white px-10 text-black h-12 hover:text-white"
                >
                  Трейлер
                </Button>
                {openVideo && (
                  <div className="bg-black ">
                    <Button
                      className="bg-black"
                      onClick={() => {
                        setOpenvideo(false);
                      }}
                    >
                      Close
                    </Button>
                    <iframe
                      src={card.movie_trailer}
                      width={575}
                      height={320}
                      allowFullScreen
                      loading="lazy"
                      title={card.synopsis}
                    />
                  </div>
                )}
              </div>
            </section>
          </div>
          <div className="absolute -z-10 top-0">
            <img src={card.poster.lands.land1} alt="" width="1500px" />
          </div>
          <div className="bg-gradient-to-b from-black to-zinc-600 text-white m-0 pl-10 pt-10">
            <p className="text-4xl font-bold">Тухай: </p>
            <div className="text-3xl font-light mt-4">{card.synopsis}</div>
            <p className="text-4xl font-bold mt-4">Дүрүүдэд: </p>
            <div className="flex gap-10 mt-10">
              {card.cast.map((cast: any) => {
                return (
                  <div
                    key={cast._id}
                    className="flex flex-col items-center gap-4 max-w-20 font-light"
                  >
                    <Avatar className="rounded-md w-20  items-center h-20">
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
              {cinemas.map((cinema: any, i: any) => {
                return (
                  <div
                    key={i}
                    className="flex rounded-lg w-[100px] h-[100px] overflow-hidden justify-center items-center"
                  >
                    <img src={cinema.img} alt={cinema.name} />
                  </div>
                );
              })}
            </div>
            <Resizable card={card} />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
