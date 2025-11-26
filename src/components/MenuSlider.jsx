import { logo } from "../../utils/constant";
import { FaHome } from "react-icons/fa";
import { LuTicketSlash } from "react-icons/lu";
import { AiTwotoneSchedule } from "react-icons/ai";
import { GoHistory } from "react-icons/go";
import { IoMdSettings } from "react-icons/io";
import { SlSupport } from "react-icons/sl";
const MenuSlider = () => {
  return (
    <div className="w-[12%] bg-gray-50 h-screen flex flex-col gap-3 p-4">
      <img src={logo} className="w-[70%] mx-auto" />
      <ul className="flex flex-col gap-4 mx-auto w-full">
        <li className=" text-lg font-semibold cursor-pointer hover:bg-sky-500 duration-500  px-2 py-0.5 hover:text-white ">
          <div className="flex flex-row gap-1 justify-center">
            <FaHome className="translate-y-1 " />
            <h2 className="">Home</h2>
          </div>
        </li>
        <li className=" text-lg font-semibold cursor-pointer hover:bg-sky-500 duration-500  px-2 py-0.5 hover:text-white ">
          <div className="flex flex-row gap-1 justify-center">
            <LuTicketSlash className="translate-y-1" />
            <h2 className="">Tickets</h2>
          </div>
        </li>
        <li className=" text-lg font-semibold cursor-pointer hover:bg-sky-500 duration-500  px-2 py-0.5 hover:text-white ">
          <div className="flex flex-row gap-1 justify-center">
            <AiTwotoneSchedule className="translate-y-1 text-lg" />
            <h2 className="">Schedule</h2>
          </div>
        </li>
        <li className=" text-lg font-semibold cursor-pointer hover:bg-sky-500 duration-500  px-2 py-0.5 hover:text-white ">
          <div className="flex flex-row gap-1 justify-center">
            <GoHistory className="translate-y-1" />
            <h2 className="">History</h2>
          </div>
        </li>
        <li className=" text-lg font-semibold cursor-pointer hover:bg-sky-500 duration-500  px-2 py-0.5 hover:text-white ">
          <div className="flex flex-row gap-1 justify-center">
            <SlSupport className="translate-y-1" />
            <h2 className="">Support</h2>
          </div>
        </li>
      </ul>
      <div className="absolute bottom-2 left-8 text-lg font-semibold cursor-pointer hover:text-sky-800 duration-500  px-2 py-0.5 hover:underline ">
        <div className=" flex flex-row gap-1 justify-center">
          <IoMdSettings className="translate-y-1 text-lg" />
          <h2 className="">Settings</h2>
        </div>
      </div>
    </div>
  );
};
export default MenuSlider;
