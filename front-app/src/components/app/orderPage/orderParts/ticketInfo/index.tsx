import {
  AuthContext,
  Button,
  CinemaContext,
  MovieContext,
  useAuth,
} from "@/components";
import { ShowtimeContext } from "@/components/contexts/showtime";
import { Armchair } from "lucide-react";
import React, { useContext, useState } from "react";
import { Seats } from "../seats";
import { useToast } from "@/components/ui/use-toast";

type Props = {
  handleForwardStep: () => void;
  handleBackwardStep: () => void;
};

const date1 = new Date();
const date2 = new Date(+new Date() + 24 * 60 * 60 * 1000);
const date3 = new Date(+new Date() + 2 * 24 * 60 * 60 * 1000);
const date4 = new Date(+new Date() + 3 * 24 * 60 * 60 * 1000);
const date5 = new Date(+new Date() + 4 * 24 * 60 * 60 * 1000);

const date = [
  {
    month: (date1.getMonth() + 1).toString(),
    day: date1.getDate().toString(),
  },
  {
    month: (date2.getMonth() + 1).toString(),
    day: date2.getDate().toString(),
  },
  {
    month: (date3.getMonth() + 1).toString(),
    day: date3.getDate().toString(),
  },
  {
    month: (date4.getMonth() + 1).toString(),
    day: date4.getDate().toString(),
  },
  {
    month: (date5.getMonth() + 1).toString(),
    day: date5.getDate().toString(),
  },
];

export const TicketInfo = ({
  handleForwardStep,
  handleBackwardStep,
}: Props) => {
  const { showtimesByCinema, sendShowtime, showtimeByTime, setShowtimeByTime } =
    useContext(ShowtimeContext);
  const { selectedMovieId } = useContext(MovieContext);
  const { loginuser } = useAuth();
  const { selectedCinema, selectedBranch } = useContext(CinemaContext);
  const [showtimeByDay, setShowtimeByDay] = useState<any>([]);
  // const [showtimeByTime, setShowtimeByTime] = useState<any>([]);
  const [isActiveDate, setIsActiveDate] = useState("");
  const [isActiveTime, setIsActiveTime] = useState("");
  const [isActiveMonth, setIsActiveMonth] = useState("");
  const [adultCount, setAdultCount] = useState(0);
  const [kidsCount, setKidsCount] = useState(0);
  const [selectedSeats, setSelectedSeats] = useState<string[]>([]);
  const [total, setTotal] = useState(selectedSeats.length);
  const { toast } = useToast();

  const send = () => {
    try {
      if (loginuser === null) {
        toast({
          title: "Та заавал нэвтэрнэ үү",
          variant: "destructive",
          description:
            "Тасалбар захиалахын тулд та заавал нэвтэрсэн байх шаарлдлагатай.",
          duration: 1500,
        });
        return;
      } else {
        if (total - kidsCount === 0 && kidsCount === 0) {
          toast({
            title: "Алдаа гарлаа",
            variant: "destructive",
            description: `Бүх талбарыг бөглөнө үү`,
          });
          console.log("gag");
        } else {
          sendShowtime(
            selectedMovieId,
            selectedBranch,
            total - kidsCount,
            kidsCount,
            selectedSeats,
            isActiveMonth,
            isActiveDate,
            isActiveTime
          );
          handleForwardStep();
        }
      }
    } catch (error) {
      toast({
        title: "Алдаа гарлаа",
        variant: "destructive",
        description: `Бүх талбарыг бөглөнө үү`,
      });
    }
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
      <div className="flex flex-col gap-4 justify-center items-center bg-slate-800 text-white py-20">
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
                  showtimesByCinema.filter(
                    (showtime: any) => showtime.startTime.date.day === date.day
                  )
                );
                setIsActiveMonth(date.month);
                setShowtimeByTime([]);
                setIsActiveTime("");
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
          {showtimeByDay.length !== 0 &&
            showtimeByDay
              .map((showtime: any) => showtime.startTime.time)
              .sort()
              .map((time: any, i: number) => {
                if (
                  Number(time.slice(0, 2)) < date1.getHours() ||
                  (Number(time.slice(0, 2)) === date1.getHours() &&
                    Number(time.slice(3, 5)) <= date1.getMinutes())
                ) {
                  return (
                    <Button className="bg-slate-400" disabled>
                      {time}
                    </Button>
                  );
                } else {
                  return (
                    <Button
                      key={i}
                      className={`${
                        isActiveTime === time ? "bg-[#111729]" : "bg-slate-500"
                      }`}
                      onClick={() => {
                        setIsActiveTime(time);
                        setShowtimeByTime(
                          showtimeByDay.filter(
                            (showtime: any) => showtime.startTime.time === time
                          )
                        );
                        clear();
                        console.log("abababa", showtimeByDay);
                      }}
                    >
                      {time}
                    </Button>
                  );
                }
              })}
        </div>
        {showtimeByTime.length !== 0 && (
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-col gap-3">
              <div className="flex gap-5 bg-slate-500 border-2 py-3 px-5 rounded-lg items-center">
                <p>Том хүн</p>
                <div className="flex gap-2">
                  <Button
                    className="bg-transparent m-o p-0 text-white"
                    onClick={() => {
                      setAdultCount(
                        total - kidsCount > 0 ? total - kidsCount : 0
                      );
                    }}
                  >
                    -
                  </Button>
                  <div className="w-10 bg-transparent text-center border-2 rounded-md">
                    {total - kidsCount}
                  </div>
                  <Button
                    className="bg-transparent m-o p-0 text-white"
                    onClick={() => {
                      setAdultCount(
                        adultCount + kidsCount < total
                          ? adultCount + 1
                          : adultCount
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
                  <div className="w-10 text-center bg-transparent border-2 rounded-md">
                    {kidsCount}
                  </div>
                  <Button
                    className="bg-transparent m-o p-0 text-white"
                    onClick={() => {
                      setKidsCount(
                        kidsCount + adultCount < total
                          ? kidsCount + 1
                          : kidsCount
                      );
                    }}
                  >
                    +
                  </Button>
                </div>
                <p>10000 ₮</p>
              </div>
            </div>

            <div className="flex gap-16 py-10">
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
        )}
      </div>
      {showtimeByTime.length !== 0 && (
        <Seats
          showtimes={showtimeByTime}
          func={func}
          selectedSeats={selectedSeats}
          setSelectedSeats={setSelectedSeats}
          clear={clear}
        />
      )}
    </div>
  );
};
