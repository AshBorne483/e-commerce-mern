import React from "react";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";

const NavBar = () => {
  return (
    <div className="h-[90px] bg-primary flex flex-col px-24 text-primary-fg">
      <div className="flex flex-row justify-between items-center">
        <div>
          <h1 className="flex flex-row items-center gap-2 text-md">
            Follow us on <FaFacebook className="text-xl" />
            <AiFillInstagram className="text-2xl" />
          </h1>
        </div>
        <div className="flex gap-4">
          <h1 className="flex flex-row items-center text-md">
            <IoIosNotificationsOutline /> Notifications
          </h1>
          <h1 className="font-bold">Signup | Login</h1>
        </div>
      </div>
      <div className="flex items-center gap-10 h-full">
        <h1 className="relative -top-0.5 text-3xl font-bold">
          E-Commerce MERN
        </h1>
        <div className="flex items-center text-black">
          <input
            type="text"
            className="border border-gray-300 bg-white rounded-3xl px-4 h-[35px] w-[58vw]"
            placeholder="Search..."
          />
          <div className="relative -left-[34px] bg-primary h-[30px] w-[30px] flex items-center justify-center text-secondary-fg rounded-full">
            <FaSearch />
          </div>
        </div>
        <TiShoppingCart className="relative -left-5 text-4xl" />
      </div>
    </div>
  );
};

export default NavBar;
