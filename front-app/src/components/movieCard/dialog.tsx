import { CopyIcon } from "@radix-ui/react-icons";

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type ICardProps = {
  card: any;
};

export function DialogCloseButton({ card }: ICardProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-slate-900 border-none text-white"
        >
          Дэлгэрэнгүй
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-slate-700 transition ease-in duration-[150]">
        <DialogHeader>
          <DialogTitle>{card.title}</DialogTitle>
          <img src={card.horizontalPoster} />
          <DialogDescription>{card.description}</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2"></div>
        <DialogFooter className="sm:justify-center">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
