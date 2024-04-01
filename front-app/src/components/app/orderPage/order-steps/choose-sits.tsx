import { BiCameraMovie } from "react-icons/bi";
import { LiaWalletSolid } from "react-icons/lia";
import { MdOutlineChair } from "react-icons/md";
import { TfiTicket } from "react-icons/tfi";

export const ChooseSits = () => {
  return (
    <ul className=" dark:text-white flex justify-center mt-5  ">
      <div className="flex items-center ">
        <div className="flex-col  max-h-20 w-28">
          <button className="items-center ml-6 rounded-xl bg-red-500">
            <BiCameraMovie className="w-12 h-10  text-white" />
          </button>
          <li className=" text-white rounded-md pl-1">Кино театр</li>
        </div>
      </div>
      <div className="w-20 h-[1px] mt-8  bg-red-500"></div>
      <div className="flex items-center ">
        <div className="flex-col  max-h-20 w-28">
          <button className="items-center ml-9 rounded-xl bg-red-500">
            <MdOutlineChair className="w-12 h-10 text-white" />
          </button>
          <li className=" text-white w-32">Суудал сонголт</li>
        </div>
      </div>
      <div className="w-20 h-[1px] mt-8  bg-white"></div>
      <div className="flex items-center  ">
        <div className="flex-col  max-h-20 w-28">
          <button className="items-center  rounded-xl ml-9 bg-white">
            <LiaWalletSolid className="w-12 h-10  " />
          </button>
          <li className=" text-white w-32">Баталгаажуулах</li>
        </div>
      </div>
      <div className="w-20 h-[1px] mt-8  bg-white"></div>
      <div className="flex items-center ml-4 ">
        <div className="flex-col  max-h-20 w-28">
          <button className="items-center ml-1 rounded-xl bg-white">
            <TfiTicket className="w-12 h-10 " />
          </button>
          <li className=" text-white w-32">QR код</li>
        </div>
      </div>
    </ul>
  );
};
