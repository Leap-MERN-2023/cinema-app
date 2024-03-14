import React from "react";

const Header = () => {
  return (
    <div className="fixed w-[100%] z-10 text-white ml-36 mx-5">
      <div className="header w-[80%] gap-96 flex py-5  text-red-500">
        <span className="font-semibold text-lg">CENTRAL CINEMA</span>

        <ul className="flex font-semibold gap-16 text-white">
          <li className=" text-red-500 ">
            <a href="#">Cinema</a>
          </li>
          <li className=" hover:text-red-400">
            <a href="#">Coming soon</a>
          </li>
          <li className=" hover:text-red-400">
            <a href="#">Event</a>
          </li>
          <li className=" hover:text-red-400">
            <a href="#">Ticket</a>
          </li>
          <li className=" hover:text-red-400">
            <a href="#">Profile</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
