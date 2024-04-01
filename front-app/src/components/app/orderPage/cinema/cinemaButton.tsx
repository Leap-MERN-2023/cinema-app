"use client";

import { Button, CinemaContext } from "@/components";
import { useContext, useState } from "react";
import { CinemaSection } from "./cinemaSection";
type Props = {
  handleForwardStep: () => void;
  cinemas: any;
};

export const CinemaButton = ({ cinemas, handleForwardStep }: Props) => {
  const [click, setClick] = useState("66052ac321e966a4e977b24e");
  const { setSelectedCinema, loading } = useContext(CinemaContext);
  const [isActive, setIsActive] = useState("Өргөө");
  const [filteredCinema, setFilteredCinema] = useState([]);
  const handleClick = (cinameId: string, name: string) => {
    setClick(cinameId);
    setIsActive(name);
    setFilteredCinema(cinemas.filter((i: any) => cinameId === click));
    setSelectedCinema(cinameId);
  };

  if (loading) {
    return <div>Loading ...</div>;
  }

  return (
    <div className="flex flex-col">
      {loading && <div>Loading</div>}
      <div className="flex mt-10 gap-7 justify-center">
        {cinemas.map((cinema: any, i: any) => (
          <Button
            className={`font-bold w-32 h-16 border border-white transition-all duration-75  ${
              isActive === cinema.cinemaName
                ? "text-red-500"
                : "hover:text-red-400 "
            }`}
            key={i}
            onClick={() => {
              handleClick(cinema._id, cinema.cinemaName);
            }}
          >
            {cinema.cinemaName}
          </Button>
        ))}
      </div>
      <div>
        {cinemas
          .filter((i: any) => i._id === click)
          .map((e: any, i: any) => (
            <CinemaSection
              handleForwardStep={handleForwardStep}
              cinemas={e}
              key={i}
            />
          ))}
      </div>
    </div>
  );
};
