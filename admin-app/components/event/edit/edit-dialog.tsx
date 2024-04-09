"use client";
import { ChangeEvent, useState, Fragment } from "react";

import * as Tabs from "@radix-ui/react-tabs";
import { DialogText } from "./dialog-text";
import { DialogFile } from "./dialog-file";
import { Dialog, Transition } from "@headlessui/react";
import { useEvent } from "@/context";
import { DeleteDialog } from "@/components/utils";

export const EventEdit = ({ event }: any) => {
  const { setFile, isLoading, deleteEvent, updateEvent } = useEvent();
  const [dataEvent, setEventData] = useState({
    name: "",
    date: "",
    link: "",
    about: "",
    location: "",
    addition: "",
    image: "",
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleChange = (name: string, value: string) => {
    setEventData({ ...dataEvent, [name]: value });
  };

  const handleAdd = () => {
    updateEvent(dataEvent, event._id);
    setIsOpen(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className=" inset-0  ">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-green-200 px-4 py-2 text-sm font-medium text-green-700 hover:bg-green-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          Edit
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" aria-hidden="true" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" max-w-xxl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Add movie
                  </Dialog.Title>
                  <Tabs.Root
                    className="flex flex-col w-full "
                    defaultValue="tab1"
                  >
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
                        Add event name, date, about, location, addition here.
                      </p>
                      <DialogText
                        event={event}
                        handleInputChange={handleInputChange}
                      />
                    </Tabs.Content>
                    <Tabs.Content
                      className="grow p-5 bg-white rounded-b-md outline-none"
                      value="tab2"
                    >
                      <p className="mb-5 text-mauve11 text-[15px] leading-normal">
                        Add event image, facebook link here.
                      </p>
                      <DialogFile
                        handleInputChange={handleInputChange}
                        setFile={setFile}
                        event={event}
                      />
                    </Tabs.Content>
                  </Tabs.Root>
                  <div className="mt-4 flex gap-4">
                    <button className=" text-red-500 bg-red-300 hover:bg-red-400 focus:shadow-red-300 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none">
                      <DeleteDialog
                        event={event}
                        handleDelete={deleteEvent}
                        title={"Event устгах"}
                        label={"Эвентийг устгахдаа итгэлтэй байна уу?"}
                      />
                    </button>

                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      disabled={isLoading}
                      onClick={handleAdd}
                    >
                      update event
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};