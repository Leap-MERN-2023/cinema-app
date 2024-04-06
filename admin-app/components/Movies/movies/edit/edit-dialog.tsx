import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as Tabs from "@radix-ui/react-tabs";

import { DialogText } from "../dialog-text";
import { DialogFile } from "../dialog-file";
import { Edit } from "lucide-react";
import { Flex } from "@radix-ui/themes";
import { DeleteDialog } from "@/components/utils";

export const EditDialog = ({ movie }: any) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="text-violet11 absolute mb-5 bottom-0 right-2 shadow-blackA4 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[100%] bg-white px-[5px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none">
          <Edit />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[650px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
          <Dialog.Title className="text-mauve12 mb-5 text-[17px] font-medium">
            Edit movie
          </Dialog.Title>

          <Tabs.Root className="flex flex-col w-full " defaultValue="tab1">
            <Tabs.List
              className="shrink-0 flex border-b border-mauve6"
              aria-label="Manage your account"
            >
              <Tabs.Trigger
                className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
                value="tab1"
              >
                Movie Text{" (step1)"}
              </Tabs.Trigger>
              <Tabs.Trigger
                className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
                value="tab2"
              >
                Movie File{" (step2)"}
              </Tabs.Trigger>
            </Tabs.List>
            <Tabs.Content
              className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
              value="tab1"
            >
              <p className="mb-5 text-mauve11 text-[15px] leading-normal">
                Add movie title, director, synopsis, casts, duration, genre,
                movie-type here.
              </p>
              <DialogText />
            </Tabs.Content>
            <Tabs.Content
              className="grow p-5 bg-white rounded-b-md outline-none"
              value="tab2"
            >
              <p className="mb-5 text-mauve11 text-[15px] leading-normal">
                Add movie trailer, vertical and landscape posters here.
              </p>
              <DialogFile />
            </Tabs.Content>
          </Tabs.Root>
          <div className="mt-[25px] flex gap-3 justify-end">
            <button className=" text-red-500 bg-red-300 hover:bg-red-400 focus:shadow-red-300 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
              <DeleteDialog
                title={"Кино устгах"}
                label={"Энэ киног устгахдаа итгэлтэй байна уу?"}
              />
            </button>

            <Dialog.Close asChild>
              <button className="bg-green4 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                Save
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
              aria-label="Close"
            >
              <Cross2Icon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
