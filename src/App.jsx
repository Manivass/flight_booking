import { Provider } from "react-redux";
import FlightSlider from "./components/FlightSlider";
import MenuSlider from "./components/MenuSlider";
import Store from "../Redux/Store";

const App = () => {
  return (
    <div className="flex flex-row gap-3 bg-gray-100">
      <Provider store={Store}>
        <MenuSlider />
        <FlightSlider />
      </Provider>
    </div>
  );
};
export default App;
