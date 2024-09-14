import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import ItemList from './ItemList';
import { Link } from "react-router-dom";

const Cart = () => {
 
    const cartItems = useSelector((store) => store.cart.items);
    // console.log(cartItems);

    const dispatch = useDispatch();

    const clearMyCart = () => {
        dispatch(clearCart());
    }

    let totalPrice = 0;
    cartItems.forEach((item)=> {
     //  totalPrice +=  {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice /100};
       // item.card.info.price ?totalPrice += item.card.info.price/100 :totalPrice += item.card.info.defaultPrice/100
     //   totalPrice += item.card.info.price/100;
    })

    return cartItems.length == 0 ? (
        <div className="flex justify-around items-center">
            <div className="w-6/12 flex flex-col justify-center items-center">
                <h1 className="my-6 text-3xl font-thin ">Your cart is Empty 🥺</h1>
                <h1 className="text-5xl font-bold" data-testid="order-now">Order your Food, Order it now!</h1>
                <img className="mt-6 h-60 rounded-md" src="https://ychef.files.bbci.co.uk/976x549/p0dz94rl.jpg" alt="image"></img>
                <Link to="/">
                    <p className="bg-orange-400 font-medium text-white px-4 py-2 mt-5 rounded-md">See Restaurants</p>
                </Link>
            </div>
        </div>
    ) : (

        <div className=" mt-4 flex flex-col justify-center items-center">
            <div className="w-7/12 m-auto border border-gray-300 rounded p-6">
                <div className="flex justify-between">
                    <h1 className="text-2xl font-bold tracking-wide">YOUR CART</h1>
                    <button className="px-2 py-1 rounded bg-orange-400 text-white " onClick={()=> clearMyCart()}>
                        Clear cart
                    </button>
                </div>
                <div className="mt-4">
                    <ItemList items={cartItems}/>
                    <div className="pr-8 mt-4">
                        <h1 className="font-bold">Bill Details</h1>
                        <div className="mt-2 text-sm">
                            <div className="flex w-2/5 py-2 justify-between">
                                <span>Item Total : </span>
                                <span>₹ {totalPrice.toFixed(2)}</span>
                            </div>
                            <div className="flex w-2/5 py-2 justify-between">
                                <span>Delivery Fee : </span>
                                <span>00.00</span>
                            </div>
                            <hr className="w-2/5  border-black border-1"/>
                            <div className="flex w-2/5 py-2 justify-between">
                                <span className="font-semibold tracking-wide">TO PAY : </span>
                                <span className="font-semibold">₹ {totalPrice.toFixed(2)}</span>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>            
        </div>
    )
}

export default Cart;