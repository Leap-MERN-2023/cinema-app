import React from "react";
import { MdOutlineLocalMovies } from "react-icons/md";
import { CiBarcode } from "react-icons/ci";

export const MovieTicket = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-20 text-slate-300">
      <div className="max-w-[600px] w-full h-full mx-auto z-10 bg-slate-600 rounded-3xl">
        <div className="flex flex-col">
          <div className="bg-slate-900 relative drop-shadow-2xl  rounded-3xl p-4 m-4">
            <div className="flex-none sm:flex">
              <div className="flex-auto justify-evenly">
                <div className="flex items-center justify-between">
                  <div className="flex items-center  my-1">
                    <span className="mr-3 rounded-full color-white  w-8 h-8">
                      <MdOutlineLocalMovies className="h-8 p-1 size-full" />
                    </span>
                    <h2 className="font-medium ">Movie Tickets</h2>
                  </div>
                  {/* <div className="ml-auto text-blue-800">A380</div> */}
                </div>
                <div className=" border-dashed border-b-2 my-5 border-b-slate-100"></div>
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="flex-auto text-lg text-gray-400 my-1 font-bold">
                      Dune: Part Two
                    </div>

                    <div className="text-lg mt-4">Urgoo 2</div>
                  </div>
                  <div className="ml-auto w-[360px] h-[150px] ">
                    <img
                      src="https://pbs.twimg.com/media/GFLXqt4a8AAuI4n.jpg:large"
                      className="size-full box-border object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className=" border-dashed border-b-2 my-5 pt-5">
                  <div className="absolute rounded-full w-5 h-5 bg-slate-600 -mt-2 -left-2"></div>
                  <div className="absolute rounded-full w-5 h-5 bg-slate-600 -mt-2 -right-2"></div>
                </div>
                <div className="flex items-center mb-5 p-5 text-sm">
                  <div className="flex flex-col">
                    <span className="text-sm">Хэзээ:</span>
                    <div className="font-semibold">04/30/2024</div>
                  </div>
                  <div className="flex flex-col ml-auto">
                    <span className="text-sm">Эхлэх цаг:</span>
                    <div className="font-semibold">18:30</div>
                  </div>
                  <div className="flex flex-col ml-auto">
                    <span className="text-sm">Танхим:</span>
                    <div className="font-semibold">5</div>
                  </div>
                </div>
                <div className="flex items-center  mb-4 px-5">
                  <div className="flex items-center text-sm gap-4">
                    <span className="">Нийт тасалбар:</span>
                    <div className="font-semibold border-2 px-2 py-1 rounded-md">
                      2 том хүн
                    </div>
                    <div className="font-semibold border-2 px-2 py-1 rounded-md">
                      1 хүүхэд
                    </div>
                  </div>
                  <div className="font-semibold ml-auto">
                    Нийт төлбөр: <span>15000₮</span>
                  </div>
                </div>
                <div className=" border-dashed border-b-2 my-5 pt-5">
                  <div className="absolute rounded-full w-5 h-5 bg-slate-600 -mt-2 -left-2"></div>
                  <div className="absolute rounded-full w-5 h-5 bg-slate-600 -mt-2 -right-2"></div>
                </div>
                <div className="flex flex-col  px-5 pt-3 text-sm gap-2">
                  <div className="flex justify-between w-full">
                    <p className="w-[100px] text-start">Том карамел</p>
                    <p>1 ширхэг</p>
                    <p>8000₮</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="w-[100px] text-start">Fanta</p>
                    <p>2 ширхэг</p>
                    <p>10000₮</p>
                  </div>
                  <div className="flex justify-between w-full">
                    <p className="w-[100px]  text-start">Classic Layes</p>
                    <p>1 ширхэг</p>
                    <p>6000₮</p>
                  </div>
                </div>
                <div className="pt-5 w-20 mx-auto ">
                  <CiBarcode className="size-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const EventTicket = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-20 text-slate-300">
      <div className="max-w-[600px] w-full h-full mx-auto z-10 bg-slate-600 rounded-3xl ">
        <div className="flex flex-col ">
          <div className="bg-slate-900 relative drop-shadow-2xl  rounded-3xl p-4 m-4 border-dashed border-b-2">
            <div className="flex-none sm:flex">
              <div className="flex-auto justify-evenly">
                <div className="flex items-center justify-between">
                  <div className="flex items-center  my-1">
                    <span className="mr-3 rounded-full color-white  w-8 h-8">
                      <MdOutlineLocalMovies className="h-8 p-1 size-full" />
                    </span>
                    <h2 className="font-medium ">Event Tickets</h2>
                  </div>
                  {/* <div className="ml-auto text-blue-800">A380</div> */}
                </div>
                <div className=" border-dashed border-b-2 my-5 border-b-slate-100"></div>
                <div className="flex items-center">
                  <div className="flex flex-col">
                    <div className="flex-auto text-lg text-gray-400 my-1 font-bold">
                      Ойн цоорхой дахь
                    </div>

                    <div className="text-lg mt-4"></div>
                  </div>
                  <div className="ml-auto w-[360px] h-[150px] ">
                    <img
                      src="https://img.freepik.com/premium-vector/music-event-horizontal-poster-flyer-template-with-gradient-colorful-design_85212-212.jpg"
                      className="size-full box-border object-cover rounded-lg"
                    />
                  </div>
                </div>
                <div className=" border-dashed border-b-2 my-5 pt-5">
                  <div className="absolute rounded-full w-5 h-5 bg-slate-600 -mt-2 -left-2"></div>
                  <div className="absolute rounded-full w-5 h-5 bg-slate-600 -mt-2 -right-2"></div>
                </div>
                <div className="flex items-center mb-5 p-5 text-sm px-14">
                  <div className="flex flex-col">
                    <span className="text-sm">Хэзээ:</span>
                    <div className="font-semibold">04/30/2024</div>
                  </div>
                  <div className="flex flex-col ml-auto">
                    <span className="text-sm">Эхлэх цаг:</span>
                    <div className="font-semibold">18:30</div>
                  </div>
                </div>
                <div className="flex items-center  mb-4 px-5">
                  <div className="flex items-center text-sm gap-4">
                    <span className="">Нийт тасалбар:</span>
                    <div className="font-semibold border-2 px-2 py-1 rounded-md">
                      2 том хүн
                    </div>
                    <div className="font-semibold border-2 px-2 py-1 rounded-md">
                      1 хүүхэд
                    </div>
                  </div>
                  <div className="font-semibold ml-auto">
                    Нийт төлбөр: <span>15000₮</span>
                  </div>
                </div>
                <div className="pt-5 w-20 mx-auto ">
                  <CiBarcode className="size-full" />
                </div>
                <div className="">
                  <div className="absolute rounded-full w-6 h-6 bg-slate-600 -mt-2 -left-2"></div>
                  <div className="absolute rounded-full w-6 h-6 bg-slate-600 -mt-2 -right-2"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
