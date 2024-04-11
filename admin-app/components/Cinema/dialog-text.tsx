import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { useCinema, useMovie, useShowtime } from "@/context";
import { ChevronDown } from "lucide-react";
import { InputField } from "../utils/input-field";
import * as Dialog from "@radix-ui/react-dialog";
import { Cloudinary } from "../utils/cloudinary-next/upload";
import { toast } from "react-toastify";

type Props = {
  closeModal: () => void;
};

const DialogText = ({ closeModal }: Props) => {
  const { movies } = useMovie();
  const { cinemas, addCinema, setCinemaImg, cinemaImg } = useCinema();
  const { createShowtime } = useShowtime();

  const [selectedCinema, setSelectedCinema] = useState(cinemas[0]);

  const [cinemaData, setCinemaData] = useState<any>({
    cinemaId: "",
    branchName: "",
    branchLocation: "",
    image: "",
    opening: "",
    closing: "",
  });

  const func1 = (selectedCinema: any) => {
    setCinemaData({ ...cinemaData, cinemaId: selectedCinema._id });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
    console.log("working");
  };

  const handleChange = (name: string, value: string) => {
    setCinemaData({ ...cinemaData, [name]: value });
  };

  const handleAdd = () => {
    // setCinemaData({ ...cinemaData, image: cinemaImg });
    // console.log(cinemaImg, "cinemaImg");
    addCinema(cinemaData);
    closeModal();
  };
  //   console.log(cinemaData, "DATATATATA");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 justify-evenly w-full">
      <div>
        <div className="p-2">
          <fieldset className="mb-[15px] w-full flex flex-col justify-start">
            <label
              className="text-[13px] leading-none mb-2.5  block"
              htmlFor="synopsis"
            >
              Кино театр
            </label>
            <Listbox value={selectedCinema} onChange={setSelectedCinema}>
              <Listbox.Button className="flex justify-between px-2 rounded-sm py-2 text-start shadow-[0_0_0_1px] shadow-blue-500 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none leading-none text-violet11">
                <div>{selectedCinema.cinemaName}</div>
                <ChevronDown />
              </Listbox.Button>
              <Listbox.Options className="bg-violet4">
                {cinemas.map((cinema) => (
                  <Listbox.Option
                    key={cinema._id}
                    value={cinema}
                    onClick={() => {
                      setSelectedCinema(cinema);
                      func1(cinema);
                    }}
                    className="hover:cursor-pointer rounded-lg shadow-violet7 h-[35px] hover:bg-violet7 focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none leading-none text-violet11"
                  >
                    {cinema.cinemaName}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Listbox>
          </fieldset>

          <InputField
            label="Салбар"
            desc="Нэмэх салбарын нэр"
            onChange={handleInputChange}
            name="branchName"
            type="text"
          />
          <InputField
            label="Гудамж"
            desc="Хаяг"
            onChange={handleInputChange}
            name="branchLocation"
            type="text"
          />
        </div>
      </div>
      <div className="flex flex-col p-2">
        <InputField
          label="Нээх цаг"
          onChange={handleInputChange}
          name="opening"
          type="number"
        />
        <InputField
          label="Хаах цаг"
          onChange={handleInputChange}
          name="closing"
          type="number"
        />
        <div className="border text-[15px] border-violet11 text-violet11 shadow-violet7 px-3 py-2 rounded w-58 mt-6 leading-none mb-2.5  block">
          <Cloudinary setFunction={setCinemaImg} />
        </div>
      </div>
      <div className="flex flex-row items-cente gap-3">
        <button
          className=" py-2 bg-violet-200 text-violet12 hover:bg-violet11 focus:shadow-green7 rounded-[4px] px-[15px] font-medium"
          onClick={() => {
            if (
              cinemaData.cinemaId == "" ||
              cinemaData.branchName == "" ||
              cinemaData.branchLocation == "" ||
              cinemaData.opening == "" ||
              cinemaData.closing == ""
            ) {
              toast.warning("Бүх талбарыг бөглөнө үү");
            } else {
              console.log("worked");
              handleAdd();
            }
          }}
        >
          нэмэх
        </button>
        <button
          className="px-5 py-2 rounded-md bg-blue-200 text-blue-800"
          onClick={closeModal}
        >
          болих
        </button>
      </div>
    </div>
  );
};

export default DialogText;
