import { useEffect, useState } from "react";
const useTickets = () => {
    const [data,setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch("http://localhost:4000/Ticktes");
    const response = await data.json();
    setData(response)
  }
  return data ;
};

export default useTickets;
