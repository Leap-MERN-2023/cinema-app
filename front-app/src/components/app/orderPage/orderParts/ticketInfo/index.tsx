import { Button, CinemaContext, MovieContext } from "@/components";
import { ShowtimeContext } from "@/components/contexts/showtime";
import { Armchair } from "lucide-react";
import React, { useContext, useState } from "react";
import { Seats } from "../seats";

type Props = {
  handleForwardStep: () => void;
  handleBackwardStep: () => void;
};

const dateNow = new Date();

const date = [
  {
    month: dateNow.getMonth() + 1,
    day: "29",
  },
  {
    month: dateNow.getMonth() + 1,
    day: "2",
  },
  {
    month: dateNow.getMonth() + 1,
    day: "3",
  },
  {
    month: dateNow.getMonth() + 1,
    day: "4",
  },
  {
    month: dateNow.getMonth() + 1,
    day: "5",
  },
];

export const TicketInfo = ({
  handleForwardStep,
  handleBackwardStep,
}: Props) => {
  const { showtimes, sendShowtime } = useContext(ShowtimeContext);
  const { selectedMovieId } = useContext(MovieContext);
  const { selectedCinema, selectedBranch } = useContext(CinemaContext);
  const [showtimeByDay, setShowtimeByDay] = useState<any>([]);
  const [showtimeByTime, setShowtimeByTime] = useState<any>([]);
  const [isActiveDate, setIsActiveDate] = useState("");
  const [isActiveTime, setIsActiveTime] = useState("");
  const [isActiveMonth, setIsActiveMonth] = useState("4");
  const [adultCount, setAdultCount] = useState(0);
  const [kidsCount, setKidsCount] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [total, setTotal] = useState(selectedSeats.length);

  const send = () => {
    sendShowtime(
      selectedMovieId,
      selectedBranch,
      adultCount,
      kidsCount,
      selectedSeats,
      isActiveMonth,
      isActiveDate,
      isActiveTime
    );
    handleForwardStep();
  };
  const func = (length: any) => {
    setTotal(length);
  };
  const clear = () => {
    setSelectedSeats([]);
    setAdultCount(0);
    setKidsCount(0);
    setTotal(0);
  };
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-4 justify-center items-center bg-slate-800 text-white">
        <div className="flex gap-4">
          {date.map((date, i) => (
            <Button
              key={i}
              className={`flex flex-col gap-1 h-full ${
                isActiveDate === date.day ? "bg-[#111729]" : "bg-slate-500"
              }`}
              onClick={() => {
                setIsActiveDate(date.day);
                setShowtimeByDay(
                  showtimes.filter(
                    (showtime: any) => showtime.startTime.date.day === date.day
                  )
                );
              }}
            >
              <p>{date.month + " сар"}</p>
              <p className={`bg-slate-50 text-black rounded-full p-1 px-2`}>
                {date.day}
              </p>
            </Button>
          ))}
        </div>
        <div className="flex gap-4">
          {showtimes.map((time, i) => (
            <Button
              key={i}
              className={`${
                isActiveTime === time.startTime.time
                  ? "bg-[#111729]"
                  : "bg-slate-500"
              }`}
              onClick={() => {
                setIsActiveTime(time.startTime.time);
                setShowtimeByTime(
                  showtimeByDay.filter(
                    (showtime: any) =>
                      showtime.startTime.time === time.startTime.time
                  )
                );
                clear();
              }}
            >
              {time.startTime.time}
            </Button>
          ))}
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex gap-5 bg-slate-500 border-2 py-3 px-5 rounded-lg items-center">
            <p>Том хүн</p>
            <div className="flex gap-2">
              <Button
                className="bg-transparent m-o p-0 text-white"
                onClick={() => {
                  setAdultCount(total - kidsCount > 0 ? total - kidsCount : 0);
                }}
              >
                -
              </Button>
              <input
                type="text"
                className="w-10 bg-transparent text-center border-2 rounded-md"
                value={total - kidsCount}
              />
              <Button
                className="bg-transparent m-o p-0 text-white"
                onClick={() => {
                  setAdultCount(
                    adultCount + kidsCount < total ? adultCount + 1 : adultCount
                  );
                }}
              >
                +
              </Button>
            </div>
            <p>18000 ₮</p>
          </div>
          <div className="flex gap-5 bg-slate-500 border-2 py-3 px-5 rounded-lg items-center">
            <p className="mr-2">Хүүхэд</p>
            <div className="flex gap-2">
              <Button
                className="bg-transparent m-o p-0 text-white"
                onClick={() => {
                  setKidsCount(kidsCount > 0 ? kidsCount - 1 : 0);
                }}
              >
                -
              </Button>
              <input
                type="text"
                className="w-10 text-center bg-transparent border-2 rounded-md"
                value={kidsCount}
              />
              <Button
                className="bg-transparent m-o p-0 text-white"
                onClick={() => {
                  setKidsCount(
                    kidsCount + adultCount < total ? kidsCount + 1 : kidsCount
                  );
                }}
              >
                +
              </Button>
            </div>
            <p>10000 ₮</p>
          </div>
        </div>
        <div className="flex gap-16">
          <p>Тасалбарын үнэ</p>
          <p>{(total - kidsCount) * 18000 + kidsCount * 10000}₮</p>
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

          <Button
            className="bg-red-500 "
            onClick={() => {
              send();
            }}
          >
            Тасалбар захиалах
          </Button>
          <Button onClick={handleBackwardStep}>Go Back</Button>
        </div>
      </div>
      <Seats
        showtimes={showtimeByTime}
        func={func}
        selectedSeats={selectedSeats}
        setSelectedSeats={setSelectedSeats}
        clear={clear}
      />
    </div>
  );
};
