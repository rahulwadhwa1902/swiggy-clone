import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props)=>{
    const { resdata } = props;
    console.log(resdata);
    const{ cloudinaryImageId ,name ,cuisines, avgRating ,sla}=resdata
    return (
      <div className="m-2 p-4 w-[350px] rounded-lg border bg-slate-100 hover:shadow-2xl" >
        {/* <img className= "res-logo" src="https://b.zmtcdn.com/data/pictures/7/2400327/9ba139e1507f8d5c4c868e2ddd667a79_o2_featured_v2.jpg?output-format=webp">
        </img> */}
        {/* <img className="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + resData.data.cloudinaryImageId }
        /> */}
        <div className="w-40">
        <img src={CDN_URL + cloudinaryImageId 
         } />
         </div>
        <h3 className="font-bold py-2 text-xl">{name}</h3>
        <h4 className="py-1">{cuisines.join(" , ")}</h4>
        <div className="flex items-center justify-between">
          <span
            className="rating"
            style={{
              backgroundColor: "green",
              color: "white",
              textAlign: "right",
            }}
          >
            {avgRating}
          </span>
          <span className="time"> {sla.deleveryTime}</span>
        </div>
      </div>
    );
};
 export const PromotedRestaurantCard = (RestaurantCard)=>{
  return (props)=>{     // return a component/function
    return (
      <div>
      <h1>Promoted</h1>
      <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;