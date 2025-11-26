import { FaPlaneDeparture } from "react-icons/fa";
import { MdOutlineModeStandby } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import AeroplaneImage from "../../utils/AeroplaneImage.jsx";
import { useState } from "react";
import SearchingCart from "./SearchingCard.jsx";
import { useDispatch } from "react-redux";
import { addDepature, addDestination } from "../../Redux/SearchingSlice.jsx";
const FirstCard = () => {
  const [depaturePlace, setDepaturePlace] = useState("");
  const [destinationPlace, setDestinationPlace] = useState("");
  // console.log("depature" + depaturePlace);
  // console.log("Destination" + destinationPlace);
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const handleChange = (e) => {
    e.target.name === "depature"
      ? setDepaturePlace(e.target.value)
      : setDestinationPlace(e.target.value);
  };

  const handleSubmit = () => {
    setShow(true);
    dispatch(addDepature(depaturePlace));
    dispatch(addDestination(destinationPlace));
  };

  return (
    <div className="w-full  h-84  p-5 bg-sky-100 flex flex-row gap-6 rounded-lg">
      <div className="relative flex  w-[50%] h-full items-center  overflow-hidden bg-white ">
        <div className="clouds"></div>
        <div className="clouds1"></div>
        <div className="clouds2"></div>
        <AeroplaneImage />
      </div>
      <div className="w-[50%] px-2 ">
        <ul className="flex flex-col   w-full h-full  justify-between ">
          <li className="flex flex-col gap-1">
            <h2 className="text-md font-semibold ">From</h2>
            <div className="flex flex-row gap-2">
              <FaPlaneDeparture className="text-2xl translate-y-1" />
              <input
                name="depature"
                type="text"
                className="w-full  bg-white outline-none py-1.5 px-2"
                placeholder="Enter Depature Place"
                value={depaturePlace}
                onChange={(e) => handleChange(e)}
              />
            </div>
          </li>
          <li className="flex flex-col gap-1">
            <h2 className="text-md font-semibold ">To</h2>
            <div className="flex flex-row gap-2">
              <MdOutlineModeStandby className="text-2xl translate-y-1" />
              <input
                name="destination"
                value={destinationPlace}
                type="text"
                className="w-full  bg-white outline-none outline-gray-200 py-1.5 px-2"
                placeholder="Enter Destination Place"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </li>
          <li className="flex flex-col gap-1">
            <h2 className="text-md font-semibold ">Date</h2>
            <div className="flex flex-row gap-3">
              <FaCalendarCheck className="text-xl translate-y-1" />
              <input
                type="date"
                className="w-full  text-blue-900 font-semibold bg-white outline-none outline-gray-200 py-1.5 px-2"
                placeholder="Enter Depature Place"
              />
            </div>
          </li>
          <li>
            <button
              className="bg-green-500 w-full p-2 text-md text-white rounded-lg font-semibold cursor-pointer "
              onClick={handleSubmit}
            >
              {show && <SearchingCart />}
              Search
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FirstCard;
