import { useSelector } from "react-redux";


const SecondCard = () => {
  const destination = useSelector((store) => store.searching.destination);
  const depature = useSelector((store) => store.searching.depature);
  
  
  return (
    <div className="p-3">
      <ul className="flex justify-between">
        <li className="my-2.5">
          <h2 className="text-2xl font-semibold">From</h2>
          <h3 className="text-4xl">{depature}</h3>
        </li>
        <li className="w-2/3 mx-auto relative">
          <div className="aeroplane absolute items-center translate-y-2"></div>
        </li>
        <li className="mt-5">
          <h2 className="text-2xl font-semibold">To</h2>
          <h3 className="text-4xl">{destination}</h3>
          
        </li>
      </ul>
    </div>
  );
};
export default SecondCard;
