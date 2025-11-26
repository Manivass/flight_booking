import { useDispatch, useSelector } from "react-redux";
import useTickets from "../../utils/useTickets";
import { addItem } from "../../Redux/AvailableFlightSlice";
import { useEffect } from "react";

const SearchingCard = () => {

  const finaldepature = useSelector((Store) => Store.searching.depature);
  const finaldestination = useSelector((Store) => Store.searching.destination);
  const tickets = useTickets();
  const dispatch = useDispatch();
    useEffect(() => {
    if (!finaldepature || !finaldestination) return;

    const availableFlight = tickets.filter(
      (items) =>
        items.from.name.toLowerCase() === finaldepature.toLowerCase() &&
        items.to.name.toLowerCase() === finaldestination.toLowerCase()
    );

    dispatch(addItem(availableFlight));
  }, [finaldepature, finaldestination, tickets]); // dependency

};
export default SearchingCard;
