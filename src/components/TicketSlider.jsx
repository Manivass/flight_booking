import { useSelector } from "react-redux";
import { ArrowIcon } from "../../utils/constant";
import { BsThreeDots } from "react-icons/bs";
const TicketSlider = () => {
  const flights = useSelector((store) => store.availableFlight.flights);
  const available = flights[flights.length - 1];
  console.log(available);

  return (
    <div >
      {available?.map((items,index) => {
        return (
          <div className="w-[90%] h-42 bg-white rounded-lg mx-auto border">
            <div className="flex flex-row ">
              <div className="flex flex-col">
                <time>345</time>
                <div className="flex flex-row">

                </div>

              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};
export default TicketSlider;
