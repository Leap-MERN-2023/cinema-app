import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

type Props = {
  trailers: string;
};

export default function Trailermodal({ trailers }: Props) {
  const [trailerClose, setTrailerClose] = useState(true);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-24 h-6 text-[12px] md:w-28 md:h-9 font-medium md:text-[14px] text-black bg-white">
          Трейлер
        </Button>
      </DialogTrigger>
      {trailerClose && (
        <DialogContent className=" bg-black border-black  rounded-none max-w-[650px] max-h-full">
          <Button
            className="bg-black"
            onClick={() => {
              setTrailerClose(false);
            }}
          >
            X
          </Button>

          <iframe
            src={trailers}
            width={600}
            height={350}
            allowFullScreen
            loading="lazy"
          />
        </DialogContent>
      )}
    </Dialog>
  );
}
