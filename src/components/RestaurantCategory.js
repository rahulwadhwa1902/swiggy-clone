import ItemList from "./ItemList";

const RestaurantCategory = ({data,showItems,setShowIndex})=>{
   // console.log(data);
   //const [showItems,setShowItems]=useState(false);
   const handleClick = ()=>{
  //  setShowItems(!showItems);  //toggle feature 
      setShowIndex();
   }
    return(
        <div>
          <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg cursor-pointer p-4" onClick={handleClick}>
            <div className="flex justify-between">
            <span className="font-bold text-lg">
             {data.title} ({data.itemCards.length})
            </span>
            <span>⬇</span>
            </div>
            {/* if showItems is true then only show itemlist */}
            { showItems &&  <ItemList items = {data.itemCards}/>} 
           
          </div>
        </div>
    )
}
export default RestaurantCategory;