import FirstCard from "./FirstCard";
import SecondCard from "./SecondCard";
import ThirdCard from "./ThirdCard";

const FlightSlider = () => {
  return (
    <div className="bg-sky-50 w-[60%] h-screen my-4 ">
      <div className="p-4 flex flex-col gap-3 ">
        <FirstCard />
        <SecondCard />
        <ThirdCard />
      </div>
    </div>
  );
};
export default FlightSlider;
