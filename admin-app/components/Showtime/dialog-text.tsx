import React, { useState } from "react";
import { Listbox } from "@headlessui/react";
import { useCinema, useMovie, useShowtime } from "@/context";
import { ChevronDown } from "lucide-react";
import { InputField } from "../utils/input-field";
import * as Dialog from "@radix-ui/react-dialog";

type Props = {};

const DialogText = (props: Props) => {
  const { movies } = useMovie();
  const { cinemas } = useCinema();
  const { createShowtime } = useShowtime();
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);
  const [selectedCinema, setSelectedCinema] = useState(cinemas[0]);
  const [selectedBranch, setSelectedBranch] = useState("");

  const [showtimeData, setShowtimeData] = useState({
    movieId: "",
    cinemaId: "",
    branch: "",
    screen: "",
    date: "",
  });

  const func = (selectedMovie: any) => {
    setShowtimeData({ ...showtimeData, movieId: selectedMovie._id });
  };
  const func1 = (selectedCinema: any) => {
    setShowtimeData({ ...showtimeData, cinemaId: selectedCinema._id });
  };
  const func2 = (selectedBranch: any) => {
    setShowtimeData({ ...showtimeData, branch: selectedBranch.name });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    handleChange(name, value);
    console.log("working");
  };

  const handleChange = (name: string, value: string) => {
    setShowtimeData({ ...showtimeData, [name]: value });
  };
  return (
    <div className="flex justify-evenly w-full">
      <div>
        <fieldset className="mb-[15px] w-[250px] flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="title"
          >
            Кино
          </label>
          <Listbox value={selectedMovie} onChange={setSelectedMovie}>
            <Listbox.Button className="flex justify-between px-2 rounded-sm py-2 text-start shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none leading-none text-violet11">
              <div>{selectedMovie.title}</div>
              <ChevronDown />
            </Listbox.Button>
            <Listbox.Options className="bg-violet4">
              {movies.map((movie, i) => (
                <Listbox.Option
                  key={i}
                  value={movie}
                  onClick={() => {
                    setSelectedMovie(movie);
                    func(movie);
                  }}
                  className="hover:cursor-pointer rounded-lg shadow-violet7 h-[35px] hover:bg-violet7 focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none leading-none text-violet11"
                >
                  {movie.title}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </fieldset>
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="synopsis"
          >
            Кино театр
          </label>
          <Listbox value={selectedCinema} onChange={setSelectedCinema}>
            <Listbox.Button className="flex justify-between px-2 rounded-sm py-2 text-start shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none leading-none text-violet11">
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
        <fieldset className="mb-[15px] w-full flex flex-col justify-start">
          <label
            className="text-[13px] leading-none mb-2.5 text-violet12 block"
            htmlFor="synopsis"
          >
            Салбар
          </label>
          <Listbox value={selectedBranch} onChange={setSelectedBranch}>
            <Listbox.Button className="flex justify-between px-2 rounded-sm py-2 text-start shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none leading-none text-violet11">
              <div>{selectedCinema.branches[0].name}</div>
              <ChevronDown />
            </Listbox.Button>
            <Listbox.Options className="bg-violet4">
              {selectedCinema.branches.map((branch: any, i) => (
                <Listbox.Option
                  key={i}
                  value={branch.name}
                  onClick={() => {
                    setSelectedBranch(branch);
                    func2(branch);
                  }}
                  className="hover:cursor-pointer rounded-lg shadow-violet7 h-[35px] hover:bg-violet7 focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none leading-none text-violet11"
                >
                  {branch.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Listbox>
        </fieldset>
      </div>
      <div className="flex flex-col">
        <InputField
          label="Танхим"
          desc="Танхим оруулна уу..."
          onChange={handleInputChange}
          name="screen"
          type="text"
        />
        <InputField
          label="Цаг"
          onChange={handleInputChange}
          name="date"
          type="datetime-local"
        />
        <Dialog.Close asChild>
          <button
            className="mt-6 bg-teal-400 text-green11 hover:bg-green5 focus:shadow-green7 inline-flex h-[35px] items-center justify-center rounded-[4px] px-[15px] font-medium leading-none focus:shadow-[0_0_0_2px] focus:outline-none"
            onClick={() => {
              createShowtime(showtimeData);
            }}
          >
            Add Showtime
          </button>
        </Dialog.Close>
      </div>
    </div>
  );
};

export default DialogText;
