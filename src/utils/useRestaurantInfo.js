import { MENU_URL } from "../utils/constants";
import { useState , useEffect } from "react";
const useRestaurantInfo = (resId)=>{
    const [resInfo ,setResInfo] = useState(null);
    useEffect(()=>{
        fetchMenu();

    },[]);
    const fetchMenu =async ()=>{
      const data = await fetch(MENU_URL+resId);
      const json = await data.json();
      console.log(json);
      setResInfo(json.data);
    }
    console.log(resInfo);
    return resInfo;
}
export default useRestaurantInfo;