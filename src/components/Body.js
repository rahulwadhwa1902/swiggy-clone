import RestaurantCard, {PromotedRestaurantCard} from "./Restaurant";
import { useState , useEffect, useContext } from "react";
import ShimmerComponent from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import useOnlineStatus from "../utils/useOnlineStatus";

const BodyComponent = ()=>{
    let [listOfRes,setListOfRes] = useState([]);
    let [searchInput,setSearchInput] = useState(""); // for search functionality default is empty
    let [filteredRestaurant,setFilteredRestaurant] = useState([]);

    const onlineStatus  = useOnlineStatus();
    const promotedRestaurant = PromotedRestaurantCard(RestaurantCard);
    useEffect(()=>{
        fetchData();
    },[])
    
    const fetchData = async ()=>{
       const data = await fetch(  // it returns a promise to resolve that we will use async await 
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&page_type=DESKTOP_WEB_LISTING"
       );
       const json = await data.json();
       console.log(json)
       setListOfRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //optional chaining
       setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //optional chaining
    };
    // if(listOfRes.length===0){  //conditional rendering 
    //     return <ShimmerComponent/>
    // }
    if(onlineStatus === false) return <h1>Try again Later</h1>
  //  console.log(onlineStatus);

    // example of context
    const {loggedInUser , setUserName} = useContext(UserContext);
    return(
        <div className="body bg-slate-50">
            <div className="flex justify-start items-center">
            <div className="search m-3 px-2">
            <input
            type="text"
            placeholder="Search here" className="search-box mx-4 p-[5px] border border-stone-950 rounded-md" value={searchInput}
            onChange={(data)=> setSearchInput(data.target.value)
            }
            // to do this we need to bind the value of this input box to a local state variable (when it change then our variable will update)
            />
            <button className="p-2 bg-slate-300 rounded-md hover:shadow-md" onClick={()=>{            
                //filter the restaurant and update the UI
                const filteredRes = listOfRes.filter((res)=>{
                  //  console.log(res.data.name);
                  return res.info.name.toLowerCase().includes(searchInput.toLowerCase())
                });
                console.log(filteredRes)
                setFilteredRestaurant(filteredRes);

            }}>
                
                Search
            </button>
            </div>
            <div className="filter-btn mr-4 p-2 bg-slate-300 rounded-md hover:shadow-md">
                <button className="btn" onClick={()=>{
                    const filterdList = listOfRes.filter((res)=> res.info.avgRating > 4 );
                  console.log(filterdList);
                  setFilteredRestaurant(filterdList);
                }}>
                    Top Rated restaurants
                </button> 
            </div>
            <div className="filter-btn mr-4 p-2 bg-slate-300 rounded-md hover:shadow-md">
               <label>User Name : </label>
                 
               <input value={loggedInUser} onChange={(e)=>{setUserName(e.target.value)}}/>
            </div>
            </div>
            <div className="flex flex-wrap ">
            { filteredRestaurant.map((restaurant)=> (
               <Link to={"/restaurants/" +restaurant.info.id}
               key={restaurant.info.id}> 
               {(restaurant.info.Promoted) ? <PromotedRestaurantCard resdata={restaurant}/> : <RestaurantCard resdata={restaurant?.info}/>}
               
               </Link>
             ))}
            </div>
        </div>
    );
};

export default BodyComponent;