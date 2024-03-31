import { Button } from "@/components";
import { ShowtimeContext } from "@/components/contexts/showtime";
import { Armchair } from "lucide-react";
import React, { useContext, useState } from "react";
import { Seats } from "../seats";

type Props = {
  changeStep: any;
};

const dateNow = new Date();

const date = [
  {
    month: dateNow.getMonth() + 2,
    day: "29",
  },
  {
    month: dateNow.getMonth() + 2,
    day: "2",
  },
  {
    month: dateNow.getMonth() + 2,
    day: "3",
  },
  {
    month: dateNow.getMonth() + 2,
    day: "4",
  },
  {
    month: dateNow.getMonth() + 2,
    day: "5",
  },
];

export const TicketInfo = ({ changeStep }: Props) => {
  const { showtimes } = useContext(ShowtimeContext);
  const [showtimeByDay, setShowtimeByDay] = useState<any>([]);
  const [showtimeByTime, setShowtimeByTime] = useState<any>([]);
  const [isActiveDate, setIsActiveDate] = useState("");
  const [isActiveTime, setIsActiveTime] = useState("");
  const [adultCount, setAdultCount] = useState(0);
  const [kidsCount, setKidsCount] = useState(0);
  // const [total, setTotal] = useState(10);
  const [total, setTotal] = useState(1);
  const func = (length: any) => {
    setTotal(length);
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
              <p>{date.month}</p>
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
              <input
                type="button"
                value="-"
                onClick={() => {
                  setAdultCount(adultCount !== 0 ? adultCount - 1 : adultCount);
                }}
              />
              <input
                type="text"
                className="w-10 bg-transparent border-2 rounded-md"
                value={adultCount}
              />
              <input
                type="button"
                value="+"
                onClick={() => {
                  setAdultCount(
                    adultCount + kidsCount < total ? adultCount + 1 : adultCount
                  );
                }}
              />
            </div>
            <p>18000 ₮</p>
          </div>
          <div className="flex gap-5 bg-slate-500 border-2 py-3 px-5 rounded-lg items-center">
            <p>Хүүхэд</p>
            <div className="flex gap-2">
              <input
                type="button"
                value="-"
                onClick={() => {
                  // setKidsCount(kidsCount > 0 ? kidsCount - 1 : kidsCount);
                }}
              />
              <input
                type="text"
                className="w-10 bg-transparent border-2 rounded-md"
                value={total - adultCount > 0 ? total - adultCount : 0}
              />
              <input
                type="button"
                value="+"
                onClick={() => {
                  // setKidsCount(
                  //   kidsCount + adultCount < total ? kidsCount + 1 : kidsCount
                  // );
                }}
              />
            </div>
            <p>10000 ₮</p>
          </div>
        </div>
        <div className="flex gap-16">
          <p>Тасалбарын үнэ</p>
          <p>{adultCount * 18000 + (total - adultCount) * 10000}₮</p>
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
      <Seats showtimes={showtimeByTime} func={func} />
    </div>
  );
};
