import { useState } from "react";
import ShimmerComponent from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantInfo = ()=>{    
    const { resId } = useParams();
    const resInfo = useRestaurantInfo(resId);
    const [showIndex,setShowIndex] = useState(null); // now we are controlling the child component from this parent state variables
    console.log(resInfo);
    if (resInfo === null) {
        return <ShimmerComponent />;
      }
   
    const {name,cuisines,costForTwo,costForTwoMessage,avgRating}=resInfo.cards[0].card.card.info;
    const { itemCards } =
    resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    //console.log("itemcards", itemCards);

    // building accordian getting categories from api 
   const categories = resInfo.cards[2].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>
      c?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
   );
   //console.log(categories);
    // if(resInfo===null) <ShimmerComponent/>
    return (
     <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      {/* <h4>{costForTwo}</h4>
      <h4>{costForTwoMessage}</h4>
      <h4>{avgRating}</h4>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} -{item.card.info.price / 100}
          
          </li>
        ))}
      </ul> */}
     {categories.map((category,index)=>(
      // now this is a controlled component because its parent is controlling this 
        <RestaurantCategory data={category.card.card} showItems={index === showIndex ? true : false}
         setShowIndex= {()=>setShowIndex(index)}/>
      ))
     }
     </div>   

   );
  
};
export default RestaurantInfo;