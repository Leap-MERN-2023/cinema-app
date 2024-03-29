import { Button } from "@/components";
import { ShowtimeContext } from "@/components/contexts/showtime";
import { Armchair } from "lucide-react";
import React, { useContext, useState } from "react";

type Props = {
  changeStep: any;
};

const date = [
  {
    month: "03",
    day: "29",
  },
  {
    month: "03",
    day: "10",
  },
  {
    month: "03",
    day: "11",
  },
  {
    month: "03",
    day: "12",
  },
  {
    month: "03",
    day: "13",
  },
];
const time = ["15:20", "16:30", "19:40", "20:50", "21:20"];

export const TicketInfo = ({ changeStep }: Props) => {
  const { showtimes } = useContext(ShowtimeContext);
  const [selectedShowtime, setSelectedShowtime] = useState({
    month: "03",
    day: "29",
  });
  const handleDate = (date: any) => {
    setSelectedShowtime(date);
    console.log(date);
  };

  return (
    <div className="flex flex-col gap-8 justify-center items-center bg-slate-800 text-white">
      <div className="flex gap-4">
        {date.map((date, i) => (
          <Button
            key={i}
            className="flex flex-col gap-1 h-full bg-slate-500"
            onClick={() => {
              handleDate(date);
            }}
          >
            <p>{date.month}</p>
            <p className=" bg-slate-50 text-black rounded-full p-1 px-2">
              {date.day}
            </p>
          </Button>
        ))}
      </div>
      <div className="flex gap-4">
        {/* {showtimes.map((time, i) => (
          <Button key={i} className="bg-slate-500">
            {time.startTime.time}
          </Button>
        ))}  */}
        {showtimes
          .filter((el: any) => el.startTime === selectedShowtime)
          .map((showtime: any, i: any) => (
            <Button key={i} className="bg-slate-500">
              {showtime.startTime.time}
            </Button>
          ))}
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-5 bg-slate-500 border-2 py-3 px-5 rounded-lg items-center">
          <p>Том хүн</p>
          <div className="flex gap-2">
            <input type="button" value="-" />
            <input
              type="text"
              className="w-10 bg-transparent border-2 rounded-md"
            />
            <input type="button" value="+" />
          </div>
          <p>18000 ₮</p>
        </div>
        <div className="flex gap-5 bg-slate-500 border-2 py-3 px-5 rounded-lg items-center">
          <p>Хүүхэд</p>
          <div className="flex gap-2">
            <input type="button" value="-" />
            <input
              type="text"
              className="w-10 bg-transparent border-2 rounded-md"
            />
            <input type="button" value="+" />
          </div>
          <p>18000 ₮</p>
        </div>
      </div>
      <div className="flex gap-16">
        <p>Тасалбарын үнэ</p>
        <p>18000 ₮</p>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-5">
          <div className="flex gap-4">
            <Armchair />
            <p>Хоосон</p>
          </div>
          <div className="flex gap-4">
            <Armchair color="silver" />
            <p>Захиалагатай</p>
          </div>
          <div className="flex gap-4">
            <Armchair color="red" />
            <p>Сонгосон</p>
          </div>
        </div>

        <Button className="bg-red-500 " onClick={() => changeStep()}>
          Тасалбар захиалах
        </Button>
      </div>
    </div>
  );
};
