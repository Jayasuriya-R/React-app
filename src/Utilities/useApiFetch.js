import { useEffect,useState } from "react";
import { resObj } from "./mockdata";


const useApiFetch = () =>{

 
  const fetchData = async () => {

    const response = await fetch("https://www.swiggy.com/mapi/restaurants/list/v5?lat=11.0168445&lng=76.9558321&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&carousel=true&third_party_vendor=1");
    const data = await response.json();
    const filteredData = data?.data?.cards.filter((x, index) => index > 2);
    //console.log(filteredData)
    setValues(filteredData)
  }
}
export default useApiFetch;